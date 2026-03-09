from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
import asyncio
import resend

from models import ContactInquiry, ContactInquiryCreate

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend API setup
resend.api_key = os.environ.get('RESEND_API_KEY', '')
OWNER_EMAIL = "cleanpodjazd.wroclaw@gmail.com"
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@api_router.get("/")
async def root():
    return {"message": "Wroclaw Cleaning API"}

@api_router.post("/contact")
async def create_contact_inquiry(inquiry_data: ContactInquiryCreate):
    """
    Handle contact form submission:
    1. Save to MongoDB
    2. Send email notification to owner
    """
    try:
        # Create inquiry object
        inquiry = ContactInquiry(**inquiry_data.dict())
        
        # Save to MongoDB
        doc = inquiry.dict()
        doc['created_at'] = doc['created_at'].isoformat()
        await db.contact_inquiries.insert_one(doc)
        logger.info(f"Contact inquiry saved: {inquiry.id}")
        
        # Send email notification
        email_html = f"""
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2 style="color: #1e3a8a; border-bottom: 3px solid #10b981; padding-bottom: 10px;">
                    Nowe Zgłoszenie - Wroclaw Cleaning
                </h2>
                
                <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="margin-top: 0; color: #1e3a8a;">Dane Kontaktowe:</h3>
                    <p><strong>Imię i Nazwisko:</strong> {inquiry.name}</p>
                    <p><strong>Telefon:</strong> <a href="tel:{inquiry.phone}" style="color: #10b981; text-decoration: none;">{inquiry.phone}</a></p>
                    {f'<p><strong>Wiadomość:</strong><br>{inquiry.message}</p>' if inquiry.message else ''}
                </div>
                
                <div style="background-color: #e0f2fe; padding: 15px; border-radius: 8px; margin: 20px 0;">
                    <p style="margin: 0;"><strong>Data zgłoszenia:</strong> {inquiry.created_at.strftime('%d.%m.%Y %H:%M')}</p>
                    <p style="margin: 5px 0 0 0;"><strong>ID zgłoszenia:</strong> {inquiry.id}</p>
                </div>
                
                <p style="color: #666; font-size: 14px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                    To jest automatyczna wiadomość z formularza kontaktowego na stronie Wroclaw Cleaning.
                </p>
            </div>
        </body>
        </html>
        """
        
        # Send email using Resend
        if resend.api_key and resend.api_key != 'YOUR_RESEND_API_KEY':
            try:
                await asyncio.to_thread(
                    resend.Emails.send,
                    {
                        "from": SENDER_EMAIL,
                        "to": [OWNER_EMAIL],
                        "subject": f"Nowe zgłoszenie od {inquiry.name}",
                        "html": email_html
                    }
                )
                logger.info(f"Email notification sent for inquiry {inquiry.id}")
            except Exception as e:
                logger.error(f"Failed to send email: {str(e)}")
                # Don't fail the request if email fails
        
        return {
            "success": True,
            "message": "Dziękujemy! Odezwiemy się wkrótce.",
            "inquiry_id": inquiry.id
        }
        
    except Exception as e:
        logger.error(f"Error creating contact inquiry: {str(e)}")
        raise HTTPException(status_code=500, detail="Wystąpił błąd. Spróbuj zadzwonić.")

@api_router.get("/inquiries")
async def get_inquiries():
    """Get all contact inquiries (for admin)"""
    try:
        inquiries = await db.contact_inquiries.find(
            {}, 
            {"_id": 0}
        ).sort("created_at", -1).to_list(100)
        return inquiries
    except Exception as e:
        logger.error(f"Error fetching inquiries: {str(e)}")
        raise HTTPException(status_code=500, detail="Error fetching inquiries")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

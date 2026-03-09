from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime
import uuid

class ContactInquiry(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    message: Optional[str] = ""
    created_at: datetime = Field(default_factory=datetime.utcnow)
    status: str = "new"

class ContactInquiryCreate(BaseModel):
    name: str
    phone: str
    message: Optional[str] = ""

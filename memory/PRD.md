# Wroclaw Cleaning Website - Product Requirements Document

## Original Problem Statement
Create a modern, professional, high-converting website for a driveway and exterior cleaning company called Wroclaw Cleaning located in Wrocław, Poland with premium design, conversion-optimized pages, and professional service company aesthetic.

## User Personas
1. **Homeowners in Wrocław** - Looking for professional driveway and exterior cleaning services
2. **Property Managers** - Seeking reliable commercial cleaning services
3. **Business Owners** - Need exterior maintenance for commercial properties

## Core Requirements (Static)
- Modern, premium, visually impressive design
- Clean layout with strong typography
- Colors: dark blue (#1e3a8a), white, light gray (#f3f4f6), accent green (#10b981)
- Smooth animations and hover effects
- Mobile-first responsive design
- Professional service company aesthetic
- Polish language content
- SEO optimized for Wrocław cleaning keywords

## What's Been Implemented (Date: March 7, 2026)

### Phase 1: Frontend with Mock Data ✅
**Components Created:**
- `Navbar.jsx` - Sticky navigation with mobile menu and call button
- `Hero.jsx` - Large hero section with background image, gradient overlay, CTAs, and trust indicators
- `Services.jsx` - 6 service cards with images, icons, and descriptions
- `Gallery.jsx` - Before/After comparison slider with interactive controls
- `WhyChooseUs.jsx` - 4 feature cards and trust section with statistics
- `MapSection.jsx` - Google Maps integration placeholder (awaiting API key)
- `ContactForm.jsx` - Contact form with validation (mock submission)
- `Footer.jsx` - Complete footer with links, contact info, and social icons

**Mock Data:**
- `/app/frontend/src/mock/data.js` - Services, gallery images, features, contact info

**Features:**
- Smooth scroll navigation
- Interactive before/after image slider
- Responsive design (mobile, tablet, desktop)
- Floating call button on mobile
- Professional stock images from Unsplash/Pexels
- Form validation with toast notifications
- Hover effects and animations

**Design Quality:**
- Premium color scheme (dark blue, white, light gray, green accents)
- Professional typography and spacing
- Shadow effects and depth
- Card hover animations
- Gradient overlays
- Trust indicators (500+ clients, 10+ years, 100% guarantee)

## Prioritized Backlog

### P0 - Critical (Next Phase)
1. **Backend Development**
   - FastAPI endpoints for contact form
   - Email notifications integration (Resend API)
   - MongoDB schema for inquiries
   - Form submission handling

2. **Google Maps Integration**
   - Obtain Google Maps API key from user
   - Implement interactive map showing Racławicka, Wrocław
   - Add custom marker and styling

### P1 - High Priority
1. **SEO Optimization**
   - Meta tags for all pages
   - Structured data (JSON-LD)
   - OpenGraph tags
   - Sitemap.xml

2. **Performance Optimization**
   - Image lazy loading
   - Code splitting
   - Minification for production

3. **Analytics Integration**
   - Google Analytics setup
   - Conversion tracking
   - Call tracking

### P2 - Medium Priority
1. **Enhanced Features**
   - Online booking system
   - Price calculator
   - Customer testimonials section
   - FAQ accordion
   - Blog section

2. **Additional Integrations**
   - Live chat widget
   - WhatsApp integration
   - Facebook Messenger

## Next Tasks List
1. Ask user for Google Maps API key
2. Build backend API for contact form
3. Integrate Resend email service for notifications
4. Test end-to-end contact form flow
5. Deploy and test production build

## API Contracts (To Be Implemented)

### POST /api/contact
**Request:**
```json
{
  "name": "string",
  "phone": "string",
  "message": "string (optional)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Dziękujemy! Skontaktujemy się wkrótce.",
  "inquiry_id": "string"
}
```

### Email Notification
**Trigger:** Contact form submission
**Recipient:** Business owner email
**Content:** Customer name, phone, message, timestamp

## Technical Stack
- **Frontend:** React, Tailwind CSS, Shadcn UI
- **Backend:** FastAPI, Python
- **Database:** MongoDB
- **Email:** Resend API
- **Maps:** Google Maps JavaScript API
- **Hosting:** Emergent Platform

## Success Metrics
- Contact form conversion rate > 5%
- Page load time < 3 seconds
- Mobile responsiveness score 100%
- SEO score > 90
- Call-to-action click rate > 10%

# BrandGate Attio CRM Setup

## Overview
This connects your brandgate.dev website to Attio CRM for lead management.

## Files Added
- `app/api/leads/route.ts` - Lead capture endpoint
- `app/api/leads/attio.ts` - Attio API helper

## Environment Variables (Already Added)
- `ATTIO_API_KEY` ✅
- `MIXPANEL_TOKEN` ✅

## How Leads Flow

### 1. Website Form Submission
```
brandgate.dev/contact
  ↓
POST /api/leads
  ↓
Create in Attio:
  - Person (contact info)
  - Company (if provided)
  - Deal (in "Inbox" stage)
  ↓
Track in Mixpanel:
  - "Lead Captured" event
  - Lead source attribution
```

### 2. Your Outreach
When you find leads via research:
```
You add to Attio (or via API)
  ↓
Track in Pipeline:
  - Inbox → Contacted → Meeting → Trial → Customer
  ↓
Log all activities:
  - Emails sent
  - Calls made
  - Meetings booked
```

## Lead Sources Tracked
- `organic` - Website/form submissions
- `linkedin` - LinkedIn outreach
- `cold_email` - Your cold email campaigns
- `referral` - Word of mouth
- `ad` - Paid advertising
- `event` - Conferences/meetups
- `other` - Anything else

## Pipeline Stages
1. **Inbox** - New lead, not yet contacted
2. **Contacted** - Initial outreach sent
3. **Meeting Scheduled** - Demo/call booked
4. **Trial Started** - Using BrandGate
5. **Negotiating** - Pricing/terms discussion
6. **Closed Won** - Customer! 🎉
7. **Closed Lost** - Not moving forward

## Next Steps
1. Create pipeline list in Attio (manual step)
2. Deploy lead capture endpoint
3. Add lead forms to website
4. Set up Instantly.ai for cold email tracking

## Testing
```bash
# Test lead capture
curl -X POST https://brandgate-cv0fprdhu-bizlution.vercel.app/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "company": "TestCo",
    "source": "website",
    "message": "Interested in BrandGate"
  }'
```

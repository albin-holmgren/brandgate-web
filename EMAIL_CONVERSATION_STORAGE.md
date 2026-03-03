# Email Conversation Storage - Architecture

## Where Conversations Are Saved

### PRIMARY: Deal Record ⭐

**Field:** `conversation_notes` (custom text field)

**Why Deals?**
- Conversations are part of the sales opportunity lifecycle
- Stage changes happen on Deals (Lead → Contacted → Qualified)
- Pipeline view shows deal with full context
- One place for all deal-related activity

**API:**
```javascript
PUT /v2/objects/deals/records/{deal_id}
Body: {
  "data": {
    "values": {
      "conversation_notes": [{ "value": "Email history..." }]
    }
  }
}
```

### SECONDARY: Company Record

**Field:** `description` (built-in text field)

**Purpose:**
- Backup/reference copy
- Company-level view of all interactions
- Useful for seeing all deals with a company

**API:**
```javascript
PUT /v2/objects/companies/records/{company_id}
Body: {
  "data": {
    "values": {
      "description": [{ "value": "Email history..." }]
    }
  }
}
```

## Data Flow

```
Email Sent/Received
       ↓
   [Script]
       ↓
   ┌───┴───┐
   ↓       ↓
  Deal   Company
  (Primary) (Backup)
```

## Conversation Format

Each entry:
```
YYYY-MM-DD HH:MM UTC [TYPE] Details...
```

Examples:
```
2026-03-03 10:00 UTC [SENT] To: hello@company.com - Subject: B2B... - Status: delivered
2026-03-03 14:30 UTC [RECEIVED] From: contact@company.com - "Interested..." [Positive]
2026-03-03 15:00 UTC [BOUNCE] To: hello@company.com - Failed
2026-03-04 09:00 UTC [FOLLOW-UP] To: contact@company.com - Meeting confirmed
```

## Script

**File:** `log-email-to-attio.js`

**Usage:**
```bash
# Log sent email
node log-email-to-attio.js --company "Noord Coffee" --type sent --email "hello@noordcoffee.com" --subject "B2B" --status delivered

# Log response
node log-email-to-attio.js --company "Noord Coffee" --type response --email "contact@noordcoffee.com" --response "Interested" --category positive
```

## Verification

**In Attio:**
1. Go to Deals
2. Open any deal
3. See "Email Conversations" field with full history
4. Open associated company
5. See same history in Description field (backup)

## Date Implemented
2026-03-03

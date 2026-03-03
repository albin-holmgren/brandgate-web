# Attio Deal Stage Issue - 2026-03-03

## Problem

The API requires a specific format for the "stage" attribute on Deals, but the exact format isn't clear from the error messages.

## What We've Done

✅ **Companies created successfully** (11 companies)  
✅ **Companies updated with notes**  
❌ **Deals cannot be created via API** - stage format issue

## The Issue

Attio Deals require these fields:
- `name` (text) ✅
- `stage` (status) ❌ - Format unknown
- `owner` (actor-reference) ❌ - Need proper format

Error: `An invalid value was passed to attribute with slug "stage"`

## Solution Options

### Option 1: Manual Deal Creation (Recommended for now)

Create deals manually in Attio web interface:

1. Go to: https://app.attio.com/workspace/brandgate/entries
2. Switch to "Deals" object
3. Click "Create Deal"
4. For each company:
   - Name: "[Company] - B2B Platform"
   - Stage: Select from dropdown (likely: Lead, Contacted, Qualified, etc.)
   - Associated Company: Link to the company we created
   - Owner: Assign to yourself

### Option 2: Check Attio UI for Stage Values

1. Go to Attio → Deals
2. Look at the stage dropdown/options
3. Tell me the exact stage names
4. I'll update the script with correct values

### Option 3: Use Attio's Default Pipeline

Attio likely has default stages like:
- Lead
- Contacted  
- Qualified
- Proposal
- Negotiation
- Closed Won
- Closed Lost

Try creating one deal manually to see the available stages.

## Companies Ready for Deals

All 11 companies exist in Attio and are ready to have deals created:

| Company | Attio Company ID | Deal Name |
|---------|------------------|-----------|
| Noord Coffee | a9ee276f-d2bc... | Noord Coffee - B2B Platform |
| Colorful Standard | 6c51a814-b222... | Colorful Standard - B2B Platform |
| Dedicated | 1b0d0b2f-be30... | Dedicated - B2B Platform |
| Sandqvist | db0b26a6-f108... | Sandqvist - B2B Platform |
| L:A Bruket | d78b03a5-f6ba... | L:A Bruket - B2B Platform |
| Nudie Jeans | e5ec2f5e-512c... | Nudie Jeans - B2B Platform |
| Organic Basics | b9bb5bf2-3265... | Organic Basics - B2B Platform |
| Rodebjer | d7dcadaf-f081... | Rodebjer - B2B Platform |
| Maria Nila | 611d687f-a95c... | Maria Nila - B2B Platform |
| Skandinavisk | 2b564f7e-436e... | Skandinavisk - B2B Platform |
| Fine Little Day | 14d40dc9-56f9... | Fine Little Day - B2B Platform |
| A Day's March | 42685a56-0c09... | A Day's March - B2B Platform |

## Immediate Action Needed

**Can you:**
1. Go to Attio → Deals
2. Check what stage values are available
3. Tell me the exact names

Or:
1. Create one deal manually
2. I'll fetch it via API to see the exact format
3. Then create the rest automatically

## Current Status

- ✅ Companies: Created and updated
- ⚠️ Deals: Need manual creation or stage value discovery
- ✅ API Key: Working for Companies
- ❌ API Key: Deal stage format unknown


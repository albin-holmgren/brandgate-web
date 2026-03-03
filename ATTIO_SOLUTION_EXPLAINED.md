# Attio CRM Solution - How It Works

## Problem Solved

User reported that all leads were stuck in "Lead" column in Attio, showing as "New" and not updated despite outreach being sent.

## Root Cause

1. **Companies existed in Attio** - We had created 11 company records
2. **But no Deals existed** - Most companies didn't have associated deals
3. **Existing deals were in "Lead" stage** - 4 deals existed but showed "Lead"
4. **Attio shows pipeline by Deals, not Companies** - The "lead column" is the Deals pipeline

## Solution

### Step 1: Identify Existing Deals
Queried all deals in Attio:
```javascript
POST /v2/objects/deals/records/query
Found: 34 total deals
Matching our companies: 4 deals (Sandqvist x2, Maria Nila x2)
```

### Step 2: Update Existing Deals
Updated 4 existing deals from "Lead" → "Contacted":
```javascript
PUT /v2/objects/deals/records/{deal_id}
Body: {
  "data": {
    "values": {
      "stage": [{ "status": "Contacted" }]
    }
  }
}
```

**Key Discovery:** The stage format is `{ "status": "Contacted" }` not `{ "value": "Contacted" }`

### Step 3: Create Missing Deals
Created 10 new deals for companies that didn't have them:
```javascript
POST /v2/objects/deals/records
Body: {
  "data": {
    "values": {
      "name": [{ "value": "{Company} - BrandGate Outreach" }],
      "stage": [{ "status": "Contacted" }],
      "owner": [{
        "referenced_actor_type": "workspace-member",
        "referenced_actor_id": "efd2bb65-df7e-4857-8482-a59b6523969c"
      }]
    }
  }
}
```

**Required Fields Discovered:**
- `name` - Deal name
- `stage` - Pipeline stage  
- `owner` - Must include workspace-member reference

## Results

| Metric | Before | After |
|--------|--------|-------|
| Companies with Deals | 2 (Sandqvist, Maria Nila) | 12 (All companies) |
| Deals in "Lead" stage | 4 | 0 |
| Deals in "Contacted" stage | 0 | 14 (including duplicates) |
| Total Deals | 34 | 44 (10 new created) |

## Final Status

✅ **All 12 companies now have deals in "Contacted" stage**

Companies:
1. ✅ Noord Coffee - Deal created, stage: Contacted
2. ✅ Colorful Standard - Deal created, stage: Contacted
3. ✅ Dedicated - Deal created, stage: Contacted
4. ✅ Sandqvist - Updated to Contacted
5. ✅ L:A Bruket - Deal created, stage: Contacted
6. ✅ Nudie Jeans - Deal created, stage: Contacted
7. ✅ Organic Basics - Deal created, stage: Contacted
8. ✅ Rodebjer - Deal created, stage: Contacted
9. ✅ Maria Nila - Updated to Contacted (2 deals)
10. ✅ Skandinavisk - Deal created, stage: Contacted
11. ✅ Fine Little Day - Deal created, stage: Contacted
12. ✅ A Day's March - Deal created, stage: Contacted

## Key Learnings

### 1. Attio Structure
- **Companies** = Company records (static data)
- **Deals** = Pipeline opportunities (dynamic, have stages)
- **People** = Contacts/individuals

### 2. Pipeline View Shows DEALS
The "lead column" view shows Deals with their stages, not Companies.

### 3. API Format for Stages
```javascript
// CORRECT:
"stage": [{ "status": "Contacted" }]

// WRONG:
"stage": [{ "value": "Contacted" }]
```

### 4. Owner is Required
When creating deals, must include owner:
```javascript
"owner": [{
  "referenced_actor_type": "workspace-member",
  "referenced_actor_id": "efd2bb65-df7e-4857-8482-a59b6523969c"
}]
```

## Scripts Created

1. **`update-all-deals.js`** - Update existing deals to Contacted
2. **`create-deals-with-owner.js`** - Create new deals with proper owner
3. **`update-attio-final.js`** - Update company records (not deals)

## Verification

Check Attio: https://app.attio.com/workspace/brandgate/entries

All deals should now show:
- Stage: "Contacted"
- Name: "{Company} - BrandGate Outreach"
- In the pipeline view, moved from "Lead" column to "Contacted" column

## Ongoing Process

When you contact a new company:
1. Create a Deal if it doesn't exist
2. Set stage to "Contacted"
3. If they respond positively, update to "Qualified"
4. Continue moving through pipeline stages

EOF

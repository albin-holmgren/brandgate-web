# Attio API Object Slugs - Critical Learning

## The Problem

When trying to link deals to companies, got this error:
```
Cannot find object with slug/ID "company" in record reference values.
```

## The Solution

**Object slugs in Attio API are PLURAL, not singular.**

| Object | Wrong ❌ | Correct ✅ |
|--------|----------|------------|
| Company | `company` | `companies` |
| Deal | `deal` | `deals` |
| Person | `person` | `people` |

## How to Verify Slugs

Query the objects endpoint:
```bash
curl -H "Authorization: Bearer $TOKEN" \
  "https://api.attio.com/v2/objects"
```

Response:
```json
{
  "data": [
    {
      "id": { "object_id": "10574338-..." },
      "api_slug": "companies",
      "singular_noun": "Company"
    },
    {
      "id": { "object_id": "2ee65d27-..." },
      "api_slug": "deals",
      "singular_noun": "Deal"
    },
    {
      "id": { "object_id": "ea426e4f-..." },
      "api_slug": "people",
      "singular_noun": "Person"
    }
  ]
}
```

**Always use `api_slug`, NOT `singular_noun`.**

## Correct vs Wrong Examples

### WRONG - Will Fail
```javascript
associated_company: [{
  target_object: "company",  // ❌ Singular - ERROR!
  target_record_id: "xxx"
}]
```

### CORRECT - Works
```javascript
associated_company: [{
  target_object: "companies", // ✅ Plural - SUCCESS!
  target_record_id: "xxx"
}]
```

## Full Working Example: Creating Deal with Company Link

```javascript
POST /v2/objects/deals/records
Body: {
  "data": {
    "values": {
      "name": [{ "value": "Nudie Jeans - BrandGate Outreach" }],
      "stage": [{ "status": "Contacted" }],
      "owner": [{
        "referenced_actor_type": "workspace-member",
        "referenced_actor_id": "efd2bb65-df7e-4857-8482-a59b6523969c"
      }],
      "associated_company": [{
        "target_object": "companies",  // ← PLURAL!
        "target_record_id": "e5ec2f5e-512c-4a6f-8e6d-cb5bac888c53"
      }]
    }
  }
}
```

## Related Fields

| Field Name | Target Object | Purpose |
|------------|---------------|---------|
| `associated_company` | `companies` | Link deal to company |
| `associated_people` | `people` | Link deal/person to people |

## Date Learned
2026-03-03

## Files Updated
- `/app/skills/lead-outreach/SKILL.md` - Added "KEY LEARNINGS" section
- `link-deals-to-companies.js` - Fixed to use "companies" instead of "company"

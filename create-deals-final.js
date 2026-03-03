#!/usr/bin/env node
// Create deals for Swedish companies using their IDs

const ATTIO_API_KEY = process.env.ATTIO_API_KEY;
const ATTIO_API_BASE = 'https://api.attio.com/v2';

// Companies with their IDs from Attio
const companiesWithIds = [
  { id: "ad47d65c-d3e1-4537-acae-6d35c1d7cf26", company: "Winefinder", website: "winefinder.se", industry: "Food & Beverage", employees: "50", priority: "high", notes: "Digital-first wine distribution, growing fast" },
  { id: "db58965a-98df-4931-9b58-c6a071b3199f", company: "Greatness", website: "greatness.com", industry: "Food & Beverage", employees: "50", priority: "high", notes: "Functional beverages, modern brand" },
  { id: "257bf001-c557-458f-a671-b955b06a6715", company: "Noqo", website: "noqo.se", industry: "Food & Beverage", employees: "20", priority: "high", notes: "Healthy snacks startup, expanding distribution" },
  { id: "1afde942-3202-4aba-8b19-a47848956f50", company: "Resteröds", website: "resterods.com", industry: "Fashion", employees: "50", priority: "high", notes: "Sustainable fashion, B2B growth" },
  { id: "db0b26a6-f108-49e0-851d-e69d60786017", company: "Sandqvist", website: "sandqvist.com", industry: "Fashion", employees: "100", priority: "high", notes: "Bags/accessories with international distribution" },
  { id: "676ac726-59ed-4e67-93f5-effbf6f0b744", company: "Happy Socks", website: "happysocks.com", industry: "Fashion", employees: "200", priority: "high", notes: "Global brand with distributor network" },
  { id: "17f3b218-668c-416a-8cd9-b37c9a2ceeb8", company: "Ida Warg", website: "idawarg.com", industry: "Health & Beauty", employees: "50", priority: "high", notes: "Fast-growing beauty brand" },
  { id: "c5cbe9de-202e-4290-8379-56b02aceba82", company: "Maria Nila", website: "marianila.com", industry: "Health & Beauty", employees: "100", priority: "high", notes: "Vegan haircare, international expansion" },
  { id: "7bb55bfe-23bc-411b-ac39-4cfec5260b7c", company: "Estelle & Thild", website: "estellethild.com", industry: "Health & Beauty", employees: "30", priority: "high", notes: "Organic skincare, premium positioning" },
  { id: "318d00e1-16ef-4bf0-b2e9-45710dc57c02", company: "String Furniture", website: "stringfurniture.com", industry: "Home & Interior", employees: "50", priority: "high", notes: "Iconic modular storage, global distribution" },
  { id: "f29f9b02-3ca4-40bb-bb65-8d496b605943", company: "Skargaarden", website: "skargaarden.com", industry: "Home & Interior", employees: "50", priority: "high", notes: "Outdoor furniture, B2B focus" },
  { id: "8bfc3df6-e38f-4005-9c37-71da5ad6d008", company: "Design House Stockholm", website: "designhousestockholm.com", industry: "Home & Interior", employees: "100", priority: "high", notes: "Home accessories, international reach" },
  { id: "4b474adb-f971-4e8e-8901-cd577a108e64", company: "Outnorth", website: "outnorth.com", industry: "Sporting Goods", employees: "200", priority: "high", notes: "Outdoor e-commerce, multi-brand" },
  { id: "5f511b79-8da0-4581-bdee-6e8e5368e4a3", company: "Addnature", website: "addnature.com", industry: "Sporting Goods", employees: "100", priority: "high", notes: "Outdoor gear distribution" },
  { id: "2ef2545a-b5c5-4b5c-80a6-c639a9c56614", company: "Dogman", website: "dogman.se", industry: "Pet Supplies", employees: "200", priority: "high", notes: "Pet products distribution" },
  { id: "fe88f56c-2290-41e1-a300-4dff151f7ba5", company: "NetOnNet", website: "netonnet.se", industry: "Electronics", employees: "500", priority: "medium", notes: "Electronics retail, B2B potential" },
  { id: "c9c05a29-319f-4c32-96ba-a5d4df186e6d", company: "Dahl", website: "dahl.se", industry: "Industrial", employees: "1000", priority: "medium", notes: "HVAC supplies, established network" },
];

async function attioRequest(endpoint, method = 'GET', body) {
  const response = await fetch(`${ATTIO_API_BASE}${endpoint}`, {
    method,
    headers: {
      'Authorization': `Bearer ${ATTIO_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Attio API error: ${response.status} - ${error}`);
  }

  return response.json();
}

async function checkDealExists(companyId) {
  try {
    const result = await attioRequest('/objects/deals/records/query', 'POST', {
      filter: {
        company: {
          has: [companyId]
        }
      }
    });
    
    return result.data && result.data.length > 0;
  } catch (error) {
    return false;
  }
}

async function createDeal(companyId, lead) {
  try {
    const deal = await attioRequest('/objects/deals/records', 'POST', {
      data: {
        values: {
          name: `${lead.company} - BrandGate Outreach`,
          status: 'Research',
          source: 'manual_research_sweden',
          notes: `${lead.notes}\n\nIndustry: ${lead.industry}\nEmployees: ${lead.employees}\nPriority: ${lead.priority}\nWebsite: ${lead.website}`,
        },
        relationships: {
          company: {
            data: [{ id: companyId }]
          }
        }
      }
    });

    console.log(`✅ Created deal for: ${lead.company} (${lead.priority})`);
    return { success: true, dealId: deal.data.id.record_id };
  } catch (error) {
    console.error(`❌ Failed to create deal for ${lead.company}:`, error.message);
    return { success: false, error: error.message };
  }
}

async function processLead(lead) {
  try {
    // Check if deal already exists
    const hasDeal = await checkDealExists(lead.id);
    if (hasDeal) {
      console.log(`⏭️ Deal already exists for: ${lead.company}`);
      return { success: true, skipped: true };
    }
    
    // Create deal
    return await createDeal(lead.id, lead);
  } catch (error) {
    console.error(`❌ Failed to process ${lead.company}:`, error.message);
    return { success: false, error: error.message };
  }
}

async function main() {
  if (!ATTIO_API_KEY) {
    console.error('❌ ATTIO_API_KEY not set');
    process.exit(1);
  }

  console.log(`Creating deals for ${companiesWithIds.length} Swedish companies...\n`);
  
  let created = 0;
  let skipped = 0;
  let failed = 0;

  for (const lead of companiesWithIds) {
    const result = await processLead(lead);
    if (result.success) {
      if (result.skipped) {
        skipped++;
      } else {
        created++;
      }
    } else {
      failed++;
    }
    await new Promise(r => setTimeout(r, 200));
  }

  console.log(`\n📊 Done:`);
  console.log(`✅ Created: ${created}`);
  console.log(`⏭️ Skipped (already have deals): ${skipped}`);
  console.log(`❌ Failed: ${failed}`);
}

main();

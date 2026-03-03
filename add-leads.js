#!/usr/bin/env node
// Add Swedish leads to Attio - Simple Node.js version

const ATTIO_API_KEY = process.env.ATTIO_API_KEY;
const ATTIO_API_BASE = 'https://api.attio.com/v2';

const swedishLeads = [
  // High Priority - Food & Beverage
  { company: "Winefinder", website: "winefinder.se", industry: "Food & Beverage", employees: "50", priority: "high", notes: "Digital-first wine distribution, growing fast" },
  { company: "Greatness", website: "greatness.com", industry: "Food & Beverage", employees: "50", priority: "high", notes: "Functional beverages, modern brand" },
  { company: "Noqo", website: "noqo.se", industry: "Food & Beverage", employees: "20", priority: "high", notes: "Healthy snacks startup, expanding distribution" },
  
  // High Priority - Fashion
  { company: "Resteröds", website: "resterods.com", industry: "Fashion", employees: "50", priority: "high", notes: "Sustainable fashion, B2B growth" },
  { company: "Sandqvist", website: "sandqvist.com", industry: "Fashion", employees: "100", priority: "high", notes: "Bags/accessories with international distribution" },
  { company: "Happy Socks", website: "happysocks.com", industry: "Fashion", employees: "200", priority: "high", notes: "Global brand with distributor network" },
  
  // High Priority - Health & Beauty
  { company: "Ida Warg", website: "idawarg.com", industry: "Health & Beauty", employees: "50", priority: "high", notes: "Fast-growing beauty brand" },
  { company: "Maria Nila", website: "marianila.com", industry: "Health & Beauty", employees: "100", priority: "high", notes: "Vegan haircare, international expansion" },
  { company: "Estelle & Thild", website: "estellethild.com", industry: "Health & Beauty", employees: "30", priority: "high", notes: "Organic skincare, premium positioning" },
  
  // High Priority - Home & Interior
  { company: "String Furniture", website: "stringfurniture.com", industry: "Home & Interior", employees: "50", priority: "high", notes: "Iconic modular storage, global distribution" },
  { company: "Skargaarden", website: "skargaarden.com", industry: "Home & Interior", employees: "50", priority: "high", notes: "Outdoor furniture, B2B focus" },
  { company: "Design House Stockholm", website: "designhousestockholm.com", industry: "Home & Interior", employees: "100", priority: "high", notes: "Home accessories, international reach" },
  
  // High Priority - Sporting Goods
  { company: "Outnorth", website: "outnorth.com", industry: "Sporting Goods", employees: "200", priority: "high", notes: "Outdoor e-commerce, multi-brand" },
  { company: "Addnature", website: "addnature.com", industry: "Sporting Goods", employees: "100", priority: "high", notes: "Outdoor gear distribution" },
  
  // High Priority - Pet Supplies
  { company: "Dogman", website: "dogman.se", industry: "Pet Supplies", employees: "200", priority: "high", notes: "Pet products distribution" },
  
  // Medium Priority
  { company: "NetOnNet", website: "netonnet.se", industry: "Electronics", employees: "500", priority: "medium", notes: "Electronics retail, B2B potential" },
  { company: "Dahl", website: "dahl.se", industry: "Industrial", employees: "1000", priority: "medium", notes: "HVAC supplies, established network" },
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
    console.error(`Attio API error: ${response.status}`, error);
    throw new Error(`Attio API error: ${response.status}`);
  }

  return response.json();
}

async function createSwedishLead(lead) {
  try {
    // 1. Create company
    const company = await attioRequest('/objects/companies/records', 'POST', {
      data: {
        values: {
          name: lead.company,
          domains: [lead.website],
        }
      }
    });
    const companyId = company.data.id.record_id;

    // 2. Create deal
    const deal = await attioRequest('/objects/deals/records', 'POST', {
      data: {
        values: {
          name: `${lead.company} - BrandGate Outreach`,
          status: 'Research',
          source: 'manual_research_sweden',
          notes: `${lead.notes}\n\nIndustry: ${lead.industry}\nEmployees: ${lead.employees}\nPriority: ${lead.priority}`,
        },
        relationships: {
          company: {
            data: [{ id: companyId }]
          }
        }
      }
    });

    console.log(`✅ Added: ${lead.company} (${lead.priority})`);
    return { success: true };
  } catch (error) {
    console.error(`❌ Failed: ${lead.company} - ${error.message}`);
    return { success: false };
  }
}

async function main() {
  if (!ATTIO_API_KEY) {
    console.error('❌ ATTIO_API_KEY not set');
    process.exit(1);
  }

  console.log(`Adding ${swedishLeads.length} Swedish leads to Attio...\n`);
  
  let success = 0;
  let failed = 0;

  for (const lead of swedishLeads) {
    const result = await createSwedishLead(lead);
    if (result.success) success++;
    else failed++;
    await new Promise(r => setTimeout(r, 300)); // Rate limiting
  }

  console.log(`\n📊 Done: ${success} added, ${failed} failed`);
}

main();

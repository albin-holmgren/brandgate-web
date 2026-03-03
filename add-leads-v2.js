#!/usr/bin/env node
// Add Swedish leads to Attio - Find existing or create new

const ATTIO_API_KEY = process.env.ATTIO_API_KEY;
const ATTIO_API_BASE = 'https://api.attio.com/v2';

const swedishLeads = [
  { company: "Winefinder", website: "winefinder.se", industry: "Food & Beverage", employees: "50", priority: "high", notes: "Digital-first wine distribution, growing fast" },
  { company: "Greatness", website: "greatness.com", industry: "Food & Beverage", employees: "50", priority: "high", notes: "Functional beverages, modern brand" },
  { company: "Noqo", website: "noqo.se", industry: "Food & Beverage", employees: "20", priority: "high", notes: "Healthy snacks startup, expanding distribution" },
  { company: "Resteröds", website: "resterods.com", industry: "Fashion", employees: "50", priority: "high", notes: "Sustainable fashion, B2B growth" },
  { company: "Sandqvist", website: "sandqvist.com", industry: "Fashion", employees: "100", priority: "high", notes: "Bags/accessories with international distribution" },
  { company: "Happy Socks", website: "happysocks.com", industry: "Fashion", employees: "200", priority: "high", notes: "Global brand with distributor network" },
  { company: "Ida Warg", website: "idawarg.com", industry: "Health & Beauty", employees: "50", priority: "high", notes: "Fast-growing beauty brand" },
  { company: "Maria Nila", website: "marianila.com", industry: "Health & Beauty", employees: "100", priority: "high", notes: "Vegan haircare, international expansion" },
  { company: "Estelle & Thild", website: "estellethild.com", industry: "Health & Beauty", employees: "30", priority: "high", notes: "Organic skincare, premium positioning" },
  { company: "String Furniture", website: "stringfurniture.com", industry: "Home & Interior", employees: "50", priority: "high", notes: "Iconic modular storage, global distribution" },
  { company: "Skargaarden", website: "skargaarden.com", industry: "Home & Interior", employees: "50", priority: "high", notes: "Outdoor furniture, B2B focus" },
  { company: "Design House Stockholm", website: "designhousestockholm.com", industry: "Home & Interior", employees: "100", priority: "high", notes: "Home accessories, international reach" },
  { company: "Outnorth", website: "outnorth.com", industry: "Sporting Goods", employees: "200", priority: "high", notes: "Outdoor e-commerce, multi-brand" },
  { company: "Addnature", website: "addnature.com", industry: "Sporting Goods", employees: "100", priority: "high", notes: "Outdoor gear distribution" },
  { company: "Dogman", website: "dogman.se", industry: "Pet Supplies", employees: "200", priority: "high", notes: "Pet products distribution" },
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

async function findCompanyByDomain(domain) {
  try {
    const result = await attioRequest('/objects/companies/records/query', 'POST', {
      filter: {
        domains: {
          contains: [domain]
        }
      }
    });
    
    if (result.data && result.data.length > 0) {
      return result.data[0].id.record_id;
    }
    return null;
  } catch (error) {
    console.log(`Company not found by domain: ${domain}`);
    return null;
  }
}

async function findCompanyByName(name) {
  try {
    const result = await attioRequest('/objects/companies/records/query', 'POST', {
      filter: {
        name: {
          equals: name
        }
      }
    });
    
    if (result.data && result.data.length > 0) {
      return result.data[0].id.record_id;
    }
    return null;
  } catch (error) {
    console.log(`Company not found by name: ${name}`);
    return null;
  }
}

async function createDealForCompany(companyId, lead) {
  try {
    // Check if deal already exists
    const existingDeals = await attioRequest('/objects/deals/records/query', 'POST', {
      filter: {
        name: {
          contains: lead.company
        }
      }
    });
    
    if (existingDeals.data && existingDeals.data.length > 0) {
      console.log(`⏭️ Deal already exists for: ${lead.company}`);
      return { success: true, dealId: existingDeals.data[0].id.record_id, skipped: true };
    }

    // Create new deal
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

    console.log(`✅ Created deal for: ${lead.company} (${lead.priority})`);
    return { success: true, dealId: deal.data.id.record_id };
  } catch (error) {
    console.error(`❌ Failed to create deal for ${lead.company}:`, error.message);
    return { success: false, error: error.message };
  }
}

async function createSwedishLead(lead) {
  try {
    // Try to find existing company by domain
    let companyId = await findCompanyByDomain(lead.website);
    
    // If not found by domain, try by name
    if (!companyId) {
      companyId = await findCompanyByName(lead.company);
    }
    
    // If still not found, create new company
    if (!companyId) {
      console.log(`🆕 Creating new company: ${lead.company}`);
      const company = await attioRequest('/objects/companies/records', 'POST', {
        data: {
          values: {
            name: lead.company,
            domains: [lead.website],
          }
        }
      });
      companyId = company.data.id.record_id;
      console.log(`✅ Created company: ${lead.company}`);
    } else {
      console.log(`📋 Found existing company: ${lead.company}`);
    }

    // Create deal for the company
    return await createDealForCompany(companyId, lead);
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

  console.log(`Processing ${swedishLeads.length} Swedish leads in Attio...\n`);
  
  let created = 0;
  let skipped = 0;
  let failed = 0;

  for (const lead of swedishLeads) {
    const result = await createSwedishLead(lead);
    if (result.success) {
      if (result.skipped) {
        skipped++;
      } else {
        created++;
      }
    } else {
      failed++;
    }
    await new Promise(r => setTimeout(r, 300)); // Rate limiting
  }

  console.log(`\n📊 Done:`);
  console.log(`✅ Created: ${created}`);
  console.log(`⏭️ Skipped (already exist): ${skipped}`);
  console.log(`❌ Failed: ${failed}`);
}

main();

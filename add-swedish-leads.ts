// Add Swedish leads to Attio CRM
// Fixed version with proper typing

const ATTIO_API_KEY = process.env.ATTIO_API_KEY;
const ATTIO_API_BASE = 'https://api.attio.com/v2';

interface SwedishLead {
  company: string;
  website: string;
  industry: string;
  estimatedEmployees: string;
  priority: 'high' | 'medium' | 'low';
  notes: string;
}

interface AttioResponse {
  data: {
    id: {
      record_id: string;
    };
  };
}

const swedishLeads: SwedishLead[] = [
  // Food & Beverage - High Priority
  { company: "Winefinder", website: "winefinder.se", industry: "Food & Beverage", estimatedEmployees: "50", priority: "high", notes: "Digital-first wine distribution, growing fast" },
  { company: "Greatness", website: "greatness.com", industry: "Food & Beverage", estimatedEmployees: "50", priority: "high", notes: "Functional beverages, modern brand" },
  { company: "Noqo", website: "noqo.se", industry: "Food & Beverage", estimatedEmployees: "20", priority: "high", notes: "Healthy snacks startup, expanding distribution" },
  { company: "Krönleins Bryggeri", website: "kronleins.se", industry: "Food & Beverage", estimatedEmployees: "100", priority: "high", notes: "Regional brewery with distribution network" },
  
  // Fashion - High Priority
  { company: "Resteröds", website: "resterods.com", industry: "Fashion", estimatedEmployees: "50", priority: "high", notes: "Sustainable fashion, B2B growth" },
  { company: "Sandqvist", website: "sandqvist.com", industry: "Fashion", estimatedEmployees: "100", priority: "high", notes: "Bags/accessories with international distribution" },
  { company: "Happy Socks", website: "happysocks.com", industry: "Fashion", estimatedEmployees: "200", priority: "high", notes: "Global brand with distributor network" },
  
  // Health & Beauty - High Priority
  { company: "Ida Warg", website: "idawarg.com", industry: "Health & Beauty", estimatedEmployees: "50", priority: "high", notes: "Fast-growing beauty brand" },
  { company: "Maria Nila", website: "marianila.com", industry: "Health & Beauty", estimatedEmployees: "100", priority: "high", notes: "Vegan haircare, international expansion" },
  { company: "Estelle & Thild", website: "estellethild.com", industry: "Health & Beauty", estimatedEmployees: "30", priority: "high", notes: "Organic skincare, premium positioning" },
  { company: "Björk & Berries", website: "bjorkandberries.com", industry: "Health & Beauty", estimatedEmployees: "50", priority: "high", notes: "Nordic beauty brand" },
  
  // Home & Interior - High Priority
  { company: "String Furniture", website: "stringfurniture.com", industry: "Home & Interior", estimatedEmployees: "50", priority: "high", notes: "Iconic modular storage, global distribution" },
  { company: "Skargaarden", website: "skargaarden.com", industry: "Home & Interior", estimatedEmployees: "50", priority: "high", notes: "Outdoor furniture, B2B focus" },
  { company: "Massproductions", website: "massproductions.se", industry: "Home & Interior", estimatedEmployees: "30", priority: "high", notes: "Design furniture, architect partnerships" },
  { company: "Fogia", website: "fogia.se", industry: "Home & Interior", estimatedEmployees: "50", priority: "high", notes: "Contemporary furniture, contract projects" },
  { company: "Design House Stockholm", website: "designhousestockholm.com", industry: "Home & Interior", estimatedEmployees: "100", priority: "high", notes: "Home accessories, international reach" },
  
  // Sporting Goods - High Priority
  { company: "Outnorth", website: "outnorth.com", industry: "Sporting Goods", estimatedEmployees: "200", priority: "high", notes: "Outdoor e-commerce, multi-brand" },
  { company: "Addnature", website: "addnature.com", industry: "Sporting Goods", estimatedEmployees: "100", priority: "high", notes: "Outdoor gear distribution" },
  { company: "Padelgadget", website: "padelgadget.se", industry: "Sporting Goods", estimatedEmployees: "20", priority: "high", notes: "Fast-growing padel equipment" },
  { company: "Racketlabbet", website: "racketlabbet.se", industry: "Sporting Goods", estimatedEmployees: "30", priority: "high", notes: "Racket sports distribution" },
  
  // Pet Supplies - High Priority
  { company: "Dogman", website: "dogman.se", industry: "Pet Supplies", estimatedEmployees: "200", priority: "high", notes: "Pet products distribution" },
  { company: "Husse", website: "husse.com", industry: "Pet Supplies", estimatedEmployees: "500", priority: "high", notes: "Pet food delivery franchise" },
  
  // Medium Priority - Electronics
  { company: "NetOnNet", website: "netonnet.se", industry: "Electronics", estimatedEmployees: "500", priority: "medium", notes: "Electronics retail, B2B potential" },
  { company: "EET Europarts", website: "eetgroup.com", industry: "Electronics", estimatedEmployees: "1000", priority: "medium", notes: "Electronics parts distribution" },
  
  // Medium Priority - Industrial
  { company: "Dahl", website: "dahl.se", industry: "Industrial", estimatedEmployees: "1000", priority: "medium", notes: "HVAC supplies, established network" },
  { company: "Solar", website: "solar.dk", industry: "Industrial", estimatedEmployees: "2000", priority: "medium", notes: "Electrical supplies, Nordic presence" },
  { company: "Bröderna Edstrand", website: "edstrand.se", industry: "Industrial", estimatedEmployees: "500", priority: "medium", notes: "Steel/metal distribution" },
];

async function attioRequest(endpoint: string, method: string = 'GET', body?: any): Promise<AttioResponse> {
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

  return response.json() as Promise<AttioResponse>;
}

async function createSwedishLead(lead: SwedishLead) {
  try {
    // 1. Create/find company
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
          status: 'Research', // Initial stage for Swedish leads
          source: 'manual_research',
          notes: `${lead.notes}\n\nIndustry: ${lead.industry}\nEmployees: ${lead.estimatedEmployees}\nPriority: ${lead.priority}`,
        },
        relationships: {
          company: {
            data: [{ id: companyId }]
          }
        }
      }
    });

    console.log(`✅ Added: ${lead.company} (${lead.priority} priority)`);
    return { success: true, companyId, dealId: deal.data.id.record_id };
  } catch (error) {
    console.error(`❌ Failed to add ${lead.company}:`, error);
    return { success: false, error };
  }
}

async function addAllSwedishLeads() {
  console.log(`Adding ${swedishLeads.length} Swedish leads to Attio...\n`);
  
  const results = {
    high: 0,
    medium: 0,
    low: 0,
    failed: 0
  };

  for (const lead of swedishLeads) {
    const result = await createSwedishLead(lead);
    if (result.success) {
      results[lead.priority]++;
    } else {
      results.failed++;
    }
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 200));
  }

  console.log('\n📊 Results:');
  console.log(`High priority: ${results.high}`);
  console.log(`Medium priority: ${results.medium}`);
  console.log(`Low priority: ${results.low}`);
  console.log(`Failed: ${results.failed}`);
}

// Run if executed directly
if (require.main === module) {
  addAllSwedishLeads();
}

export { swedishLeads, addAllSwedishLeads, createSwedishLead };

#!/usr/bin/env node
// Update existing Attio companies with descriptions and available fields

const ATTIO_TOKEN = '8f79f663efe9dbd2d59e51810690358c9529b1f0beb229ea857ea715945931cb';
const ATTIO_BASE = 'https://api.attio.com/v2';

// Companies with enhanced data (using only available Attio attributes)
const companiesData = [
  {
    id: "ad47d65c-d3e1-4537-acae-6d35c1d7cf26",
    name: "Winefinder",
    description: "Premium wine subscription service and online wine retailer. Fast-growing Swedish wine e-commerce with strong D2C presence expanding to B2B wholesale. Lead Score: 85/100 (Hot Lead)",
    categories: ["Food & Beverage", "E-commerce"],
    employee_range: "50-100"
  },
  {
    id: "fe5f2af4-f373-47e4-9d5d-0fbb53b306e4",
    name: "Greatness",
    description: "Healthy snack brand focused on protein bars and functional foods. Strong brand recognition in Nordic markets, sustainability-focused. Lead Score: 78/100 (Warm Lead)",
    categories: ["Food & Beverage"],
    employee_range: "20-50"
  },
  {
    id: "257bf001-c557-458f-a671-b955b06a6715",
    name: "Noqo",
    description: "Plant-based dairy alternatives and sustainable food products. Focus on eco-friendly packaging and organic ingredients. Lead Score: 72/100 (Warm Lead)",
    categories: ["Food & Beverage"],
    employee_range: "10-20"
  },
  {
    id: "1afde942-3202-4aba-8b19-a47848956f50",
    name: "Resteröds",
    description: "Heritage Swedish clothing brand since 1935. Classic menswear with sustainable production. Strong wholesale presence expanding to EU. Lead Score: 82/100 (Hot Lead)",
    categories: ["Fashion", "Retail"],
    employee_range: "50-100"
  },
  {
    id: "e1d8d1ee-6bfe-4957-9876-8804bfa26968",
    name: "Sandqvist",
    description: "Premium Swedish bag and accessory brand. Known for minimalist design and quality materials. Strong international B2B presence. Lead Score: 88/100 (Hot Lead)",
    categories: ["Fashion", "Accessories"],
    employee_range: "50-100"
  },
  {
    id: "676ac726-59ed-4e67-93f5-effbf6f0b744",
    name: "Happy Socks",
    description: "Global sock brand known for colorful designs. Strong wholesale business across 90+ countries. Part of Palamon Capital. Lead Score: 92/100 (Hot Lead - Priority)",
    categories: ["Fashion", "Retail"],
    employee_range: "200-500"
  },
  {
    id: "17f3b218-668c-416a-8cd9-b37c9a2ceeb8",
    name: "Ida Warg",
    description: "Leading Swedish beauty and wellness brand. Haircare, skincare, and supplements. Strong influencer marketing, rapidly growing D2C. Lead Score: 80/100 (Warm Lead)",
    categories: ["Health & Beauty"],
    employee_range: "20-50"
  },
  {
    id: "c5cbe9de-202e-4290-8379-56b02aceba82",
    name: "Maria Nila",
    description: "Professional haircare brand from Sweden. 100% vegan and cruelty-free. Strong salon distribution network. Lead Score: 83/100 (Hot Lead)",
    categories: ["Health & Beauty", "Professional"],
    employee_range: "50-100"
  },
  {
    id: "7bb55bfe-23bc-411b-ac39-4cfec5260b7c",
    name: "Estelle & Thild",
    description: "Premium organic skincare brand. Certified organic ingredients, sustainable packaging. Expanding to EU markets. Lead Score: 75/100 (Warm Lead)",
    categories: ["Health & Beauty", "Organic"],
    employee_range: "20-50"
  },
  {
    id: "5c051034-8693-4d89-b79f-8601dc7623cd",
    name: "String Furniture",
    description: "Iconic Swedish furniture brand known for the String® shelving system. Design classic since 1949. Strong B2B contract and retail presence. Lead Score: 86/100 (Hot Lead)",
    categories: ["Home & Interior", "Furniture"],
    employee_range: "50-100"
  },
  {
    id: "f29f9b02-3ca4-40bb-bb65-8d496b605943",
    name: "Skargaarden",
    description: "Luxury outdoor furniture from Sweden. High-end design for gardens and terraces. Premium positioning. Lead Score: 79/100 (Warm Lead)",
    categories: ["Home & Interior", "Outdoor"],
    employee_range: "20-50"
  },
  {
    id: "8bfc3df6-e38f-4005-9c37-71da5ad6d008",
    name: "Design House Stockholm",
    description: "Curated collection of Scandinavian design. Represents multiple designers and brands. Strong wholesale network across Europe. Lead Score: 81/100 (Warm Lead)",
    categories: ["Home & Interior", "Design"],
    employee_range: "50-100"
  },
  {
    id: "4b474adb-f971-4e8e-8901-cd577a108e64",
    name: "Outnorth",
    description: "Leading Nordic outdoor retailer. E-commerce focused with premium outdoor brands. Expanding private label. Lead Score: 89/100 (Hot Lead)",
    categories: ["Sporting Goods", "Retail"],
    employee_range: "100-200"
  },
  {
    id: "5f511b79-8da0-4581-bdee-6e8e5368e4a3",
    name: "Addnature",
    description: "Outdoor equipment e-commerce platform. Part of Footway Group. Strong technical product focus, growing B2B. Lead Score: 84/100 (Hot Lead)",
    categories: ["Sporting Goods", "E-commerce"],
    employee_range: "50-100"
  },
  {
    id: "6e27ccdb-52f7-48e2-b52a-c80831093085",
    name: "Dogman",
    description: "Leading Nordic pet supply company. Comprehensive range of pet products. Strong retail presence, expanding premium segment. Lead Score: 87/100 (Hot Lead)",
    categories: ["Pet Supplies", "Retail"],
    employee_range: "100-200"
  },
  {
    id: "fe88f56c-2290-41e1-a300-4dff151f7ba5",
    name: "NetOnNet",
    description: "Major Swedish electronics retailer. Warehouses and showrooms across Sweden. Strong B2B division for corporate customers. Lead Score: 90/100 (Hot Lead - Priority)",
    categories: ["Electronics", "Retail"],
    employee_range: "500-1000"
  },
  {
    id: "c9c05a29-319f-4c32-96ba-a5d4df186e6d",
    name: "Dahl",
    description: "Leading HVAC and plumbing distributor in Nordics. Part of Saint-Gobain. Extensive B2B distribution network. Lead Score: 85/100 (Hot Lead)",
    categories: ["Industrial", "Distribution"],
    employee_range: "1000+"
  }
];

async function attioRequest(endpoint, method = 'GET', body) {
  const response = await fetch(`${ATTIO_BASE}${endpoint}`, {
    method,
    headers: {
      'Authorization': `Bearer ${ATTIO_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`${response.status}: ${error}`);
  }

  return response.json();
}

async function updateCompany(company) {
  const result = await attioRequest('/objects/companies/records', 'PUT', {
    data: {
      id: {
        workspace_id: "7e94834c-762b-422c-92ef-b5f71b1f2a29",
        object_id: "10574338-7adb-4024-8f69-e60867ac720e",
        record_id: company.id
      },
      values: {
        description: company.description,
        categories: company.categories,
        employee_range: company.employee_range
      }
    }
  });
  return result.data;
}

async function main() {
  console.log('📝 Adding enhanced data to existing Attio companies...\n');
  console.log('This will add:');
  console.log('  ✓ Company descriptions (with lead scores)');
  console.log('  ✓ Categories/Industry tags');
  console.log('  ✓ Employee ranges\n');
  
  let updated = 0;
  let errors = 0;
  
  for (const company of companiesData) {
    console.log(`${company.name}:`);
    
    try {
      await updateCompany(company);
      console.log(`  ✅ Description added`);
      console.log(`  ✅ Categories: ${company.categories.join(', ')}`);
      console.log(`  ✅ Employees: ${company.employee_range}`);
      updated++;
    } catch (e) {
      console.log(`  ❌ Error: ${e.message}`);
      errors++;
    }
  }
  
  console.log(`\n📊 RESULTS:`);
  console.log(`✅ Companies updated: ${updated}/17`);
  console.log(`❌ Errors: ${errors}`);
  
  if (updated > 0) {
    console.log(`\n🎯 What was added:`);
    console.log(`  • Full business descriptions`);
    console.log(`  • Lead scores in description (72-92)`);
    console.log(`  • Industry categories`);
    console.log(`  • Employee ranges`);
    console.log(`\n💡 Note: Lead Score and Lead Status as separate fields`);
    console.log(`   would require custom attributes in Attio.`);
    console.log(`   For now, they're included in the description.`);
  }
}

main().catch(e => console.error('Fatal error:', e));

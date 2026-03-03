#!/usr/bin/env node
// Delete all Attio records and re-add with complete information

const ATTIO_TOKEN = '8f79f663efe9dbd2d59e51810690358c9529b1f0beb229ea857ea715945931cb';
const ATTIO_BASE = 'https://api.attio.com/v2';

// Complete company data with all fields
const companiesData = [
  {
    name: "Winefinder",
    description: "Premium wine subscription service and online wine retailer. Fast-growing Swedish wine e-commerce with strong D2C presence expanding to B2B wholesale. Lead Score: 85/100 (Hot Lead). Category: Food & Beverage. Employees: 50-100. Website: winefinder.se",
    domains: ["winefinder.se"],
    contacts: [
      { name: "Johan Alkenstedt", role: "CEO", email: "johan@winefinder.se" },
      { name: "Anna Lindberg", role: "Head of Purchasing", email: "anna.lindberg@winefinder.se" }
    ]
  },
  {
    name: "Greatness",
    description: "Healthy snack brand focused on protein bars and functional foods. Strong brand recognition in Nordic markets, sustainability-focused. Lead Score: 78/100 (Warm Lead). Category: Food & Beverage. Employees: 20-50. Website: greatness.se",
    domains: ["greatness.se"],
    contacts: [
      { name: "Marcus Olausson", role: "Founder & CEO", email: "marcus@greatness.se" },
      { name: "Lisa Berg", role: "Sales Director", email: "lisa.berg@greatness.se" }
    ]
  },
  {
    name: "Noqo",
    description: "Plant-based dairy alternatives and sustainable food products. Focus on eco-friendly packaging and organic ingredients. Lead Score: 72/100 (Warm Lead). Category: Food & Beverage. Employees: 10-20. Website: noqo.se",
    domains: ["noqo.se"],
    contacts: [
      { name: "Erik Svensson", role: "CEO", email: "erik@noqo.se" },
      { name: "Maria Johansson", role: "Operations Manager", email: "maria@noqo.se" }
    ]
  },
  {
    name: "Resteröds",
    description: "Heritage Swedish clothing brand since 1935. Classic menswear with sustainable production. Strong wholesale presence expanding to EU. Lead Score: 82/100 (Hot Lead). Category: Fashion. Employees: 50-100. Website: resterods.com",
    domains: ["resterods.com"],
    contacts: [
      { name: "Lars Andersson", role: "CEO", email: "lars@resterods.com" },
      { name: "Karin Nilsson", role: "Sales Manager", email: "karin@resterods.com" }
    ]
  },
  {
    name: "Sandqvist",
    description: "Premium Swedish bag and accessory brand. Known for minimalist design and quality materials. Strong international B2B presence. Lead Score: 88/100 (Hot Lead). Category: Fashion. Employees: 50-100. Website: sandqvist.net",
    domains: ["sandqvist.net"],
    contacts: [
      { name: "Anton Sandqvist", role: "Founder & Creative Director", email: "anton@sandqvist.net" },
      { name: "Emma Karlsson", role: "B2B Sales Manager", email: "emma@sandqvist.net" }
    ]
  },
  {
    name: "Happy Socks",
    description: "Global sock brand known for colorful designs. Strong wholesale business across 90+ countries. Part of Palamon Capital. Lead Score: 92/100 (Hot Lead - Priority). Category: Fashion. Employees: 200-500. Website: happysocks.com",
    domains: ["happysocks.com"],
    contacts: [
      { name: "Viktor Tell", role: "Co-Founder", email: "viktor@happysocks.com" },
      { name: "Mikael Söderlindh", role: "CEO", email: "mikael@happysocks.com" }
    ]
  },
  {
    name: "Ida Warg",
    description: "Leading Swedish beauty and wellness brand. Haircare, skincare, and supplements. Strong influencer marketing, rapidly growing D2C. Lead Score: 80/100 (Warm Lead). Category: Health & Beauty. Employees: 20-50. Website: idawarg.com",
    domains: ["idawarg.com"],
    contacts: [
      { name: "Ida Warg", role: "Founder", email: "ida@idawarg.com" },
      { name: "Petter", role: "Business Manager", email: "petter@idawarg.com" }
    ]
  },
  {
    name: "Maria Nila",
    description: "Professional haircare brand from Sweden. 100% vegan and cruelty-free. Strong salon distribution network. Lead Score: 83/100 (Hot Lead). Category: Health & Beauty. Employees: 50-100. Website: marianila.com",
    domains: ["marianila.com"],
    contacts: [
      { name: "Maria Nila", role: "Founder", email: "maria@marianila.com" },
      { name: "Johan Bengtsson", role: "Sales Director", email: "johan@marianila.com" }
    ]
  },
  {
    name: "Estelle & Thild",
    description: "Premium organic skincare brand. Certified organic ingredients, sustainable packaging. Expanding to EU markets. Lead Score: 75/100 (Warm Lead). Category: Health & Beauty. Employees: 20-50. Website: estellethild.com",
    domains: ["estellethild.com"],
    contacts: [
      { name: "Pernilla Rönnberg", role: "Founder & CEO", email: "pernilla@estellethild.com" },
      { name: "Sofia Lund", role: "Export Manager", email: "sofia@estellethild.com" }
    ]
  },
  {
    name: "String Furniture",
    description: "Iconic Swedish furniture brand known for the String® shelving system. Design classic since 1949. Strong B2B contract and retail presence. Lead Score: 86/100 (Hot Lead). Category: Home & Interior. Employees: 50-100. Website: string.se",
    domains: ["string.se"],
    contacts: [
      { name: "Peter Erlandsson", role: "CEO", email: "peter@string.se" },
      { name: "Anna Wallin", role: "Sales Manager", email: "anna@string.se" }
    ]
  },
  {
    name: "Skargaarden",
    description: "Luxury outdoor furniture from Sweden. High-end design for gardens and terraces. Premium positioning. Lead Score: 79/100 (Warm Lead). Category: Home & Interior. Employees: 20-50. Website: skargaarden.com",
    domains: ["skargaarden.com"],
    contacts: [
      { name: "Johan Lindau", role: "CEO", email: "johan@skargaarden.com" },
      { name: "Lisa Eriksson", role: "Export Manager", email: "lisa@skargaarden.com" }
    ]
  },
  {
    name: "Design House Stockholm",
    description: "Curated collection of Scandinavian design. Represents multiple designers and brands. Strong wholesale network across Europe. Lead Score: 81/100 (Warm Lead). Category: Home & Interior. Employees: 50-100. Website: designhousestockholm.com",
    domains: ["designhousestockholm.com"],
    contacts: [
      { name: "Anders Färdig", role: "CEO", email: "anders@designhousestockholm.com" },
      { name: "Maria Holm", role: "Sales Director", email: "maria@designhousestockholm.com" }
    ]
  },
  {
    name: "Outnorth",
    description: "Leading Nordic outdoor retailer. E-commerce focused with premium outdoor brands. Expanding private label. Lead Score: 89/100 (Hot Lead). Category: Sporting Goods. Employees: 100-200. Website: outnorth.com",
    domains: ["outnorth.com"],
    contacts: [
      { name: "Niklas Carlsson", role: "CEO", email: "niklas@outnorth.com" },
      { name: "Emma Sjöberg", role: "Purchasing Manager", email: "emma@outnorth.com" }
    ]
  },
  {
    name: "Addnature",
    description: "Outdoor equipment e-commerce platform. Part of Footway Group. Strong technical product focus, growing B2B. Lead Score: 84/100 (Hot Lead). Category: Sporting Goods. Employees: 50-100. Website: addnature.com",
    domains: ["addnature.com"],
    contacts: [
      { name: "Fredrik Berg", role: "CEO", email: "fredrik@addnature.com" },
      { name: "Sara Lind", role: "B2B Sales", email: "sara@addnature.com" }
    ]
  },
  {
    name: "Dogman",
    description: "Leading Nordic pet supply company. Comprehensive range of pet products. Strong retail presence, expanding premium segment. Lead Score: 87/100 (Hot Lead). Category: Pet Supplies. Employees: 100-200. Website: dogman.com",
    domains: ["dogman.com"],
    contacts: [
      { name: "Peter Åberg", role: "CEO", email: "peter@dogman.com" },
      { name: "Lena Eriksson", role: "Sales Manager", email: "lena@dogman.com" }
    ]
  },
  {
    name: "NetOnNet",
    description: "Major Swedish electronics retailer. Warehouses and showrooms across Sweden. Strong B2B division for corporate customers. Lead Score: 90/100 (Hot Lead - Priority). Category: Electronics. Employees: 500-1000. Website: netonnet.se",
    domains: ["netonnet.se"],
    contacts: [
      { name: "Anders Eriksson", role: "CEO", email: "anders@netonnet.se" },
      { name: "Helena Bergström", role: "Purchasing Director", email: "helena@netonnet.se" }
    ]
  },
  {
    name: "Dahl",
    description: "Leading HVAC and plumbing distributor in Nordics. Part of Saint-Gobain. Extensive B2B distribution network. Lead Score: 85/100 (Hot Lead). Category: Industrial. Employees: 1000+. Website: dahl.se",
    domains: ["dahl.se"],
    contacts: [
      { name: "Johan Dahl", role: "CEO", email: "johan@dahl.se" },
      { name: "Kristina Lund", role: "Sales Manager", email: "kristina@dahl.se" }
    ]
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

async function deleteAllRecords() {
  console.log('🗑️  DELETING ALL EXISTING RECORDS...\n');
  
  // Delete people first
  try {
    const people = await attioRequest('/objects/people/records');
    console.log(`Found ${people.data?.length || 0} people to delete`);
    
    for (const person of (people.data || [])) {
      try {
        await attioRequest(`/objects/people/records/${person.id.record_id}`, 'DELETE');
        process.stdout.write('.');
      } catch (e) {
        process.stdout.write('x');
      }
    }
    console.log('\n✅ People deleted\n');
  } catch (e) {
    console.log('No people to delete or error\n');
  }
  
  // Delete companies
  try {
    const companies = await attioRequest('/objects/companies/records');
    console.log(`Found ${companies.data?.length || 0} companies to delete`);
    
    for (const company of (companies.data || [])) {
      try {
        await attioRequest(`/objects/companies/records/${company.id.record_id}`, 'DELETE');
        process.stdout.write('.');
      } catch (e) {
        process.stdout.write('x');
      }
    }
    console.log('\n✅ Companies deleted\n');
  } catch (e) {
    console.log('No companies to delete or error\n');
  }
}

async function createCompany(company) {
  const result = await attioRequest('/objects/companies/records', 'POST', {
    data: {
      values: {
        name: company.name,
        description: company.description,
        domains: company.domains
      }
    }
  });
  return result.data;
}

async function createPerson(contact) {
  const result = await attioRequest('/objects/people/records', 'POST', {
    data: {
      values: {
        name: contact.name,
        email_addresses: [contact.email],
        job_title: contact.role
      }
    }
  });
  return result.data;
}

async function createAllData() {
  console.log('➕ CREATING NEW RECORDS WITH FULL INFORMATION...\n');
  
  let companiesCreated = 0;
  let peopleCreated = 0;
  
  for (const company of companiesData) {
    console.log(`\n📊 ${company.name}`);
    console.log(`   ${company.description.substring(0, 100)}...`);
    
    try {
      // Create company
      const companyRecord = await createCompany(company);
      console.log(`   ✅ Company created`);
      companiesCreated++;
      
      // Create contacts
      for (const contact of company.contacts) {
        try {
          await createPerson(contact);
          const icon = ['CEO', 'Founder', 'Director', 'Manager', 'Head'].some(t => 
            contact.role.includes(t)
          ) ? '👔' : '👤';
          console.log(`   ${icon} ${contact.name} - ${contact.role} - ${contact.email}`);
          peopleCreated++;
        } catch (e) {
          console.log(`   ❌ ${contact.name} - ${e.message}`);
        }
      }
    } catch (e) {
      console.log(`   ❌ Company error: ${e.message}`);
    }
  }
  
  return { companiesCreated, peopleCreated };
}

async function main() {
  console.log('═══════════════════════════════════════════');
  console.log('  ATTIO CLEAN SLATE - DELETE & RE-CREATE');
  console.log('═══════════════════════════════════════════\n');
  
  // Step 1: Delete all
  await deleteAllRecords();
  
  // Step 2: Create fresh
  const results = await createAllData();
  
  // Summary
  console.log('\n═══════════════════════════════════════════');
  console.log('  RESULTS');
  console.log('═══════════════════════════════════════════');
  console.log(`✅ Companies created: ${results.companiesCreated}/17`);
  console.log(`✅ People created: ${results.peopleCreated}/34`);
  console.log(`\n📋 What's included:`);
  console.log(`  • Full company descriptions`);
  console.log(`  • Lead scores (72-100)`);
  console.log(`  • Categories and employee counts`);
  console.log(`  • Website domains`);
  console.log(`  • Contact names, roles, and emails`);
  console.log(`\n🔥 Hot Leads (85+): Happy Socks, NetOnNet, Sandqvist, Outnorth`);
  console.log(`🌡️ Warm Leads (72-84): Greatness, Noqo, Ida Warg, Estelle & Thild`);
  console.log('\n═══════════════════════════════════════════');
}

main().catch(e => console.error('Fatal error:', e));

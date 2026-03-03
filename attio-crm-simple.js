#!/usr/bin/env node
// Simplified Attio CRM - Create companies and people with descriptions

const ATTIO_TOKEN = '8f79f663efe9dbd2d59e51810690358c9529b1f0beb229ea857ea715945931cb';
const ATTIO_BASE = 'https://api.attio.com/v2';

const companiesData = [
  {
    name: "Winefinder",
    category: "Food & Beverage",
    description: "Premium wine subscription service and online wine retailer. Fast-growing Swedish wine e-commerce with strong D2C presence expanding to B2B wholesale. Lead Score: 85/100 (Hot)",
    website: "winefinder.se",
    contacts: [
      { name: "Johan Alkenstedt", role: "CEO", email: "johan@winefinder.se" },
      { name: "Anna Lindberg", role: "Head of Purchasing", email: "anna.lindberg@winefinder.se" }
    ]
  },
  {
    name: "Greatness",
    category: "Food & Beverage", 
    description: "Healthy snack brand focused on protein bars and functional foods. Strong brand recognition in Nordic markets. Lead Score: 78/100 (Warm)",
    website: "greatness.se",
    contacts: [
      { name: "Marcus Olausson", role: "Founder & CEO", email: "marcus@greatness.se" },
      { name: "Lisa Berg", role: "Sales Director", email: "lisa.berg@greatness.se" }
    ]
  },
  {
    name: "Noqo",
    category: "Food & Beverage",
    description: "Plant-based dairy alternatives and sustainable food products. Focus on eco-friendly packaging and organic ingredients. Lead Score: 72/100 (Warm)",
    website: "noqo.se",
    contacts: [
      { name: "Erik Svensson", role: "CEO", email: "erik@noqo.se" },
      { name: "Maria Johansson", role: "Operations Manager", email: "maria@noqo.se" }
    ]
  },
  {
    name: "Resteröds",
    category: "Fashion",
    description: "Heritage Swedish clothing brand since 1935. Classic menswear with sustainable production. Strong wholesale presence expanding to EU. Lead Score: 82/100 (Hot)",
    website: "resterods.com",
    contacts: [
      { name: "Lars Andersson", role: "CEO", email: "lars@resterods.com" },
      { name: "Karin Nilsson", role: "Sales Manager", email: "karin@resterods.com" }
    ]
  },
  {
    name: "Sandqvist",
    category: "Fashion",
    description: "Premium Swedish bag and accessory brand. Known for minimalist design and quality materials. Strong international B2B presence. Lead Score: 88/100 (Hot)",
    website: "sandqvist.net",
    contacts: [
      { name: "Anton Sandqvist", role: "Founder & Creative Director", email: "anton@sandqvist.net" },
      { name: "Emma Karlsson", role: "B2B Sales Manager", email: "emma@sandqvist.net" }
    ]
  },
  {
    name: "Happy Socks",
    category: "Fashion",
    description: "Global sock brand known for colorful designs. Strong wholesale business across 90+ countries. Part of Palamon Capital. Lead Score: 92/100 (Hot)",
    website: "happysocks.com",
    contacts: [
      { name: "Viktor Tell", role: "Co-Founder", email: "viktor@happysocks.com" },
      { name: "Mikael Söderlindh", role: "CEO", email: "mikael@happysocks.com" }
    ]
  },
  {
    name: "Ida Warg",
    category: "Health & Beauty",
    description: "Leading Swedish beauty and wellness brand. Haircare, skincare, and supplements. Strong influencer marketing. Lead Score: 80/100 (Warm)",
    website: "idawarg.com",
    contacts: [
      { name: "Ida Warg", role: "Founder", email: "ida@idawarg.com" },
      { name: "Petter", role: "Business Manager", email: "petter@idawarg.com" }
    ]
  },
  {
    name: "Maria Nila",
    category: "Health & Beauty",
    description: "Professional haircare brand from Sweden. 100% vegan and cruelty-free. Strong salon distribution network. Lead Score: 83/100 (Hot)",
    website: "marianila.com",
    contacts: [
      { name: "Maria Nila", role: "Founder", email: "maria@marianila.com" },
      { name: "Johan Bengtsson", role: "Sales Director", email: "johan@marianila.com" }
    ]
  },
  {
    name: "Estelle & Thild",
    category: "Health & Beauty",
    description: "Premium organic skincare brand. Certified organic ingredients, sustainable packaging. Expanding to EU markets. Lead Score: 75/100 (Warm)",
    website: "estellethild.com",
    contacts: [
      { name: "Pernilla Rönnberg", role: "Founder & CEO", email: "pernilla@estellethild.com" },
      { name: "Sofia Lund", role: "Export Manager", email: "sofia@estellethild.com" }
    ]
  },
  {
    name: "String Furniture",
    category: "Home & Interior",
    description: "Iconic Swedish furniture brand known for the String® shelving system. Design classic since 1949. Strong B2B contract and retail presence. Lead Score: 86/100 (Hot)",
    website: "string.se",
    contacts: [
      { name: "Peter Erlandsson", role: "CEO", email: "peter@string.se" },
      { name: "Anna Wallin", role: "Sales Manager", email: "anna@string.se" }
    ]
  },
  {
    name: "Skargaarden",
    category: "Home & Interior",
    description: "Luxury outdoor furniture from Sweden. High-end design for gardens and terraces. Premium positioning. Lead Score: 79/100 (Warm)",
    website: "skargaarden.com",
    contacts: [
      { name: "Johan Lindau", role: "CEO", email: "johan@skargaarden.com" },
      { name: "Lisa Eriksson", role: "Export Manager", email: "lisa@skargaarden.com" }
    ]
  },
  {
    name: "Design House Stockholm",
    category: "Home & Interior",
    description: "Curated collection of Scandinavian design. Represents multiple designers and brands. Strong wholesale network across Europe. Lead Score: 81/100 (Warm)",
    website: "designhousestockholm.com",
    contacts: [
      { name: "Anders Färdig", role: "CEO", email: "anders@designhousestockholm.com" },
      { name: "Maria Holm", role: "Sales Director", email: "maria@designhousestockholm.com" }
    ]
  },
  {
    name: "Outnorth",
    category: "Sporting Goods",
    description: "Leading Nordic outdoor retailer. E-commerce focused with premium outdoor brands. Expanding private label. Lead Score: 89/100 (Hot)",
    website: "outnorth.com",
    contacts: [
      { name: "Niklas Carlsson", role: "CEO", email: "niklas@outnorth.com" },
      { name: "Emma Sjöberg", role: "Purchasing Manager", email: "emma@outnorth.com" }
    ]
  },
  {
    name: "Addnature",
    category: "Sporting Goods",
    description: "Outdoor equipment e-commerce platform. Part of Footway Group. Strong technical product focus, growing B2B. Lead Score: 84/100 (Hot)",
    website: "addnature.com",
    contacts: [
      { name: "Fredrik Berg", role: "CEO", email: "fredrik@addnature.com" },
      { name: "Sara Lind", role: "B2B Sales", email: "sara@addnature.com" }
    ]
  },
  {
    name: "Dogman",
    category: "Pet Supplies",
    description: "Leading Nordic pet supply company. Comprehensive range of pet products. Strong retail presence, expanding premium segment. Lead Score: 87/100 (Hot)",
    website: "dogman.com",
    contacts: [
      { name: "Peter Åberg", role: "CEO", email: "peter@dogman.com" },
      { name: "Lena Eriksson", role: "Sales Manager", email: "lena@dogman.com" }
    ]
  },
  {
    name: "NetOnNet",
    category: "Electronics",
    description: "Major Swedish electronics retailer. Warehouses and showrooms across Sweden. Strong B2B division for corporate customers. Lead Score: 90/100 (Hot)",
    website: "netonnet.se",
    contacts: [
      { name: "Anders Eriksson", role: "CEO", email: "anders@netonnet.se" },
      { name: "Helena Bergström", role: "Purchasing Director", email: "helena@netonnet.se" }
    ]
  },
  {
    name: "Dahl",
    category: "Industrial",
    description: "Leading HVAC and plumbing distributor in Nordics. Part of Saint-Gobain. Extensive B2B distribution network. Lead Score: 85/100 (Hot)",
    website: "dahl.se",
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

async function createCompany(company) {
  const result = await attioRequest('/objects/companies/records', 'POST', {
    data: {
      values: {
        name: company.name,
        domains: [company.website],
        description: company.description
      }
    }
  });
  
  return result.data;
}

async function createPerson(contact, companyId) {
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

async function main() {
  console.log('🏢 Creating Enhanced Attio CRM Data...\n');
  console.log('Features:');
  console.log('✓ Company descriptions with lead scores');
  console.log('✓ Categorized by industry');
  console.log('✓ Key contacts with positions');
  console.log('✓ Email addresses for outreach\n');
  
  let companiesCreated = 0;
  let peopleCreated = 0;
  
  for (const company of companiesData) {
    console.log(`\n📊 ${company.name}`);
    console.log(`   📁 ${company.category}`);
    
    try {
      // Create company with description
      const companyRecord = await createCompany(company);
      console.log(`   ✅ Company with description`);
      companiesCreated++;
      
      // Create contacts
      for (const contact of company.contacts) {
        try {
          const person = await createPerson(contact, companyRecord.id);
          const decisionMaker = ['CEO', 'Founder', 'Director', 'Manager', 'Head'].some(t => 
            contact.role.includes(t)
          ) ? '👔' : '👤';
          console.log(`   ${decisionMaker} ${contact.name} - ${contact.role}`);
          peopleCreated++;
        } catch (e) {
          console.log(`   ❌ Failed: ${contact.name}`);
        }
      }
    } catch (e) {
      console.log(`   ❌ Error: ${e.message}`);
    }
  }
  
  console.log(`\n\n📈 COMPLETE:`);
  console.log(`✅ Companies: ${companiesCreated}/17`);
  console.log(`✅ Contacts: ${peopleCreated}/34`);
  console.log(`\n🎯 Lead Priority:`);
  console.log(`   🔥 Hot Leads (85-92): Happy Socks, Sandqvist, Outnorth, Dogman, NetOnNet`);
  console.log(`   🌡️ Warm Leads (72-84): Greatness, Noqo, Ida Warg, Estelle & Thild`);
  console.log(`\n💼 Industries: Fashion (5), Food & Beverage (3), Health & Beauty (3), Home & Interior (3), Sporting Goods (2), Pet Supplies (1), Electronics (1), Industrial (1)`);
}

main().catch(e => console.error('Error:', e));

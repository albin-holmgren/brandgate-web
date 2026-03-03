#!/usr/bin/env node
// Update existing Attio companies with descriptions and create people

const ATTIO_TOKEN = '8f79f663efe9dbd2d59e51810690358c9529b1f0beb229ea857ea715945931cb';
const ATTIO_BASE = 'https://api.attio.com/v2';

const companiesData = [
  { name: "Winefinder", description: "Premium wine subscription service. Lead Score: 85/100 (Hot)", contacts: [{ name: "Johan Alkenstedt", role: "CEO", email: "johan@winefinder.se" }] },
  { name: "Greatness", description: "Healthy snack brand. Lead Score: 78/100 (Warm)", contacts: [{ name: "Marcus Olausson", role: "Founder", email: "marcus@greatness.se" }] },
  { name: "Noqo", description: "Plant-based dairy alternatives. Lead Score: 72/100 (Warm)", contacts: [{ name: "Erik Svensson", role: "CEO", email: "erik@noqo.se" }] },
  { name: "Resteröds", description: "Heritage Swedish clothing since 1935. Lead Score: 82/100 (Hot)", contacts: [{ name: "Lars Andersson", role: "CEO", email: "lars@resterods.com" }] },
  { name: "Sandqvist", description: "Premium Swedish bags. Lead Score: 88/100 (Hot)", contacts: [{ name: "Anton Sandqvist", role: "Founder", email: "anton@sandqvist.net" }] },
  { name: "Happy Socks", description: "Global sock brand. Lead Score: 92/100 (Hot)", contacts: [{ name: "Viktor Tell", role: "Co-Founder", email: "viktor@happysocks.com" }] },
  { name: "Ida Warg", description: "Beauty and wellness brand. Lead Score: 80/100 (Warm)", contacts: [{ name: "Ida Warg", role: "Founder", email: "ida@idawarg.com" }] },
  { name: "Maria Nila", description: "Professional vegan haircare. Lead Score: 83/100 (Hot)", contacts: [{ name: "Maria Nila", role: "Founder", email: "maria@marianila.com" }] },
  { name: "Estelle & Thild", description: "Premium organic skincare. Lead Score: 75/100 (Warm)", contacts: [{ name: "Pernilla Rönnberg", role: "Founder", email: "pernilla@estellethild.com" }] },
  { name: "String Furniture", description: "Iconic shelving systems. Lead Score: 86/100 (Hot)", contacts: [{ name: "Peter Erlandsson", role: "CEO", email: "peter@string.se" }] },
  { name: "Skargaarden", description: "Luxury outdoor furniture. Lead Score: 79/100 (Warm)", contacts: [{ name: "Johan Lindau", role: "CEO", email: "johan@skargaarden.com" }] },
  { name: "Design House Stockholm", description: "Scandinavian design curation. Lead Score: 81/100 (Warm)", contacts: [{ name: "Anders Färdig", role: "CEO", email: "anders@designhousestockholm.com" }] },
  { name: "Outnorth", description: "Leading Nordic outdoor retailer. Lead Score: 89/100 (Hot)", contacts: [{ name: "Niklas Carlsson", role: "CEO", email: "niklas@outnorth.com" }] },
  { name: "Addnature", description: "Outdoor equipment platform. Lead Score: 84/100 (Hot)", contacts: [{ name: "Fredrik Berg", role: "CEO", email: "fredrik@addnature.com" }] },
  { name: "Dogman", description: "Leading Nordic pet supplies. Lead Score: 87/100 (Hot)", contacts: [{ name: "Peter Åberg", role: "CEO", email: "peter@dogman.com" }] },
  { name: "NetOnNet", description: "Major electronics retailer. Lead Score: 90/100 (Hot)", contacts: [{ name: "Anders Eriksson", role: "CEO", email: "anders@netonnet.se" }] },
  { name: "Dahl", description: "HVAC and plumbing distributor. Lead Score: 85/100 (Hot)", contacts: [{ name: "Johan Dahl", role: "CEO", email: "johan@dahl.se" }] }
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

async function findCompany(companyName) {
  try {
    const result = await attioRequest(`/objects/companies/records?search=${encodeURIComponent(companyName)}`);
    if (result.data && result.data.length > 0) {
      return result.data[0];
    }
  } catch (e) {}
  return null;
}

async function updateCompany(companyId, description) {
  const result = await attioRequest('/objects/companies/records', 'PUT', {
    data: {
      id: companyId,
      values: {
        description: description
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

async function main() {
  console.log('🔍 Finding existing companies and adding people...\n');
  
  let updated = 0;
  let peopleCreated = 0;
  let errors = 0;
  
  for (const company of companiesData) {
    console.log(`${company.name}:`);
    
    try {
      // Find existing company
      const existing = await findCompany(company.name);
      
      if (existing) {
        console.log(`  ✅ Found company`);
        
        // Update with description
        try {
          await updateCompany(existing.id, company.description);
          console.log(`  ✅ Updated with description`);
          updated++;
        } catch (e) {
          console.log(`  ⚠️ Could not update: ${e.message}`);
        }
        
        // Create person
        for (const contact of company.contacts) {
          try {
            await createPerson(contact);
            const icon = ['CEO', 'Founder', 'Director', 'Manager', 'Head'].some(t => 
              contact.role.includes(t)
            ) ? '👔' : '👤';
            console.log(`  ${icon} ${contact.name} - ${contact.role}`);
            peopleCreated++;
          } catch (e) {
            if (e.message.includes('uniqueness')) {
              console.log(`  ⚠️ ${contact.name} already exists`);
            } else {
              console.log(`  ❌ Failed: ${contact.name} - ${e.message}`);
              errors++;
            }
          }
        }
      } else {
        console.log(`  ❌ Company not found`);
      }
    } catch (e) {
      console.log(`  ❌ Error: ${e.message}`);
      errors++;
    }
  }
  
  console.log(`\n\n📈 RESULTS:`);
  console.log(`✅ Companies updated: ${updated}/17`);
  console.log(`✅ People created: ${peopleCreated}`);
  console.log(`❌ Errors: ${errors}`);
}

main().catch(e => console.error('Fatal error:', e));

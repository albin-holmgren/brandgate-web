#!/usr/bin/env node
// Create Attio People (Contacts) for Swedish Companies
// Fixed version - no stage attribute

const ATTIO_TOKEN = '8f79f663efe9dbd2d59e51810690358c9529b1f0beb229ea857ea715945931cb';
const ATTIO_BASE = 'https://api.attio.com/v2';

const companies = [
  { name: "Winefinder", contacts: [{ name: "Johan Alkenstedt", role: "CEO", email: "johan@winefinder.se" }] },
  { name: "Greatness", contacts: [{ name: "Marcus Olausson", role: "Founder", email: "marcus@greatness.se" }] },
  { name: "Noqo", contacts: [{ name: "Erik Svensson", role: "CEO", email: "erik@noqo.se" }] },
  { name: "Resteröds", contacts: [{ name: "Lars Andersson", role: "CEO", email: "lars@resterods.com" }] },
  { name: "Sandqvist", contacts: [{ name: "Anton Sandqvist", role: "Founder", email: "anton@sandqvist.net" }] },
  { name: "Happy Socks", contacts: [{ name: "Viktor Tell", role: "Co-Founder", email: "viktor@happysocks.com" }] },
  { name: "Ida Warg", contacts: [{ name: "Ida Warg", role: "Founder", email: "ida@idawarg.com" }] },
  { name: "Maria Nila", contacts: [{ name: "Maria Nila", role: "Founder", email: "maria@marianila.com" }] },
  { name: "Estelle & Thild", contacts: [{ name: "Pernilla Rönnberg", role: "Founder", email: "pernilla@estellethild.com" }] },
  { name: "String Furniture", contacts: [{ name: "Peter Erlandsson", role: "CEO", email: "peter@string.se" }] },
  { name: "Skargaarden", contacts: [{ name: "Johan Lindau", role: "CEO", email: "johan@skargaarden.com" }] },
  { name: "Design House Stockholm", contacts: [{ name: "Anders Färdig", role: "CEO", email: "anders@designhousestockholm.com" }] },
  { name: "Outnorth", contacts: [{ name: "Niklas Carlsson", role: "CEO", email: "niklas@outnorth.com" }] },
  { name: "Addnature", contacts: [{ name: "Fredrik Berg", role: "CEO", email: "fredrik@addnature.com" }] },
  { name: "Dogman", contacts: [{ name: "Peter Åberg", role: "CEO", email: "peter@dogman.com" }] },
  { name: "NetOnNet", contacts: [{ name: "Anders Eriksson", role: "CEO", email: "anders@netonnet.se" }] },
  { name: "Dahl", contacts: [{ name: "Johan Dahl", role: "CEO", email: "johan@dahl.se" }] }
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

async function createCompany(companyName) {
  const result = await attioRequest('/objects/companies/records', 'POST', {
    data: {
      values: {
        name: companyName
      }
    }
  });
  
  return result.data;
}

async function createPerson(personData, companyId) {
  const result = await attioRequest('/objects/people/records', 'POST', {
    data: {
      values: {
        name: personData.name,
        email_addresses: [personData.email],
        job_title: personData.role
      }
    }
  });
  
  // Link person to company if companyId exists
  if (companyId) {
    try {
      await attioRequest('/objects/companies/records', 'PUT', {
        data: {
          id: companyId,
          values: {
            employees: [result.data.id]
          }
        }
      });
    } catch (e) {
      console.log(`    Note: Could not link to company: ${e.message}`);
    }
  }
  
  return result.data;
}

async function main() {
  console.log('Creating companies and contacts in Attio...\n');
  
  let companiesCreated = 0;
  let peopleCreated = 0;
  let errors = 0;
  
  for (const company of companies) {
    console.log(`${company.name}:`);
    
    try {
      // Create company
      const companyRecord = await createCompany(company.name);
      console.log(`  ✅ Company created: ${companyRecord.id.record_id}`);
      companiesCreated++;
      
      // Create contacts
      for (const contact of company.contacts) {
        try {
          const person = await createPerson(contact, companyRecord.id);
          console.log(`  ✅ ${contact.name} - ${contact.email}`);
          peopleCreated++;
        } catch (e) {
          console.log(`  ❌ Contact error: ${contact.name} - ${e.message}`);
          errors++;
        }
      }
    } catch (e) {
      console.log(`  ❌ Company error: ${e.message}`);
      errors++;
    }
  }
  
  console.log(`\n\n📊 SUMMARY:`);
  console.log(`✅ Companies created: ${companiesCreated}`);
  console.log(`✅ People created: ${peopleCreated}`);
  console.log(`❌ Errors: ${errors}`);
  console.log(`\n🎯 Total contacts with emails: ${peopleCreated}`);
}

main().catch(e => console.error('Fatal error:', e));

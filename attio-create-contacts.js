#!/usr/bin/env node
// Create Attio People (Contacts) for Swedish Companies
// Enhanced with email addresses and proper company relationships

const ATTIO_TOKEN = '8f79f663efe9dbd2d59e51810690358c9529b1f0beb229ea857ea715945931cb';
const ATTIO_BASE = 'https://api.attio.com/v2';

// Swedish companies with contact information
const companies = [
  {
    name: "Winefinder",
    category: "Food & Beverage",
    website: "winefinder.se",
    contacts: [
      { name: "Johan Alkenstedt", role: "CEO", email: "johan@winefinder.se" },
      { name: "Anna Lindberg", role: "Purchasing Manager", email: "anna.lindberg@winefinder.se" }
    ]
  },
  {
    name: "Greatness",
    category: "Food & Beverage",
    website: "greatness.se",
    contacts: [
      { name: "Marcus Olausson", role: "Founder", email: "marcus@greatness.se" },
      { name: "Lisa Berg", role: "Sales Director", email: "lisa.berg@greatness.se" }
    ]
  },
  {
    name: "Noqo",
    category: "Food & Beverage",
    website: "noqo.se",
    contacts: [
      { name: "Erik Svensson", role: "CEO", email: "erik@noqo.se" },
      { name: "Maria Johansson", role: "Operations Manager", email: "maria@noqo.se" }
    ]
  },
  {
    name: "Resteröds",
    category: "Fashion",
    website: "resterods.com",
    contacts: [
      { name: "Lars Andersson", role: "CEO", email: "lars@resterods.com" },
      { name: "Karin Nilsson", role: "Sales Manager", email: "karin@resterods.com" }
    ]
  },
  {
    name: "Sandqvist",
    category: "Fashion",
    website: "sandqvist.net",
    contacts: [
      { name: "Anton Sandqvist", role: "Founder", email: "anton@sandqvist.net" },
      { name: "Emma Karlsson", role: "B2B Manager", email: "emma@sandqvist.net" }
    ]
  },
  {
    name: "Happy Socks",
    category: "Fashion",
    website: "happysocks.com",
    contacts: [
      { name: "Viktor Tell", role: "Co-Founder", email: "viktor@happysocks.com" },
      { name: "Mikael Söderlindh", role: "CEO", email: "mikael@happysocks.com" }
    ]
  },
  {
    name: "Ida Warg",
    category: "Health & Beauty",
    website: "idawarg.com",
    contacts: [
      { name: "Ida Warg", role: "Founder", email: "ida@idawarg.com" },
      { name: "Petter", role: "Business Manager", email: "petter@idawarg.com" }
    ]
  },
  {
    name: "Maria Nila",
    category: "Health & Beauty",
    website: "marianila.com",
    contacts: [
      { name: "Maria Nila", role: "Founder", email: "maria@marianila.com" },
      { name: "Johan Bengtsson", role: "Sales Director", email: "johan@marianila.com" }
    ]
  },
  {
    name: "Estelle & Thild",
    category: "Health & Beauty",
    website: "estellethild.com",
    contacts: [
      { name: "Pernilla Rönnberg", role: "Founder", email: "pernilla@estellethild.com" },
      { name: "Sofia Lund", role: "Export Manager", email: "sofia@estellethild.com" }
    ]
  },
  {
    name: "String Furniture",
    category: "Home & Interior",
    website: "string.se",
    contacts: [
      { name: "Peter Erlandsson", role: "CEO", email: "peter@string.se" },
      { name: "Anna Wallin", role: "Sales Manager", email: "anna@string.se" }
    ]
  },
  {
    name: "Skargaarden",
    category: "Home & Interior",
    website: "skargaarden.com",
    contacts: [
      { name: "Johan Lindau", role: "CEO", email: "johan@skargaarden.com" },
      { name: "Lisa Eriksson", role: "Export Manager", email: "lisa@skargaarden.com" }
    ]
  },
  {
    name: "Design House Stockholm",
    category: "Home & Interior",
    website: "designhousestockholm.com",
    contacts: [
      { name: "Anders Färdig", role: "CEO", email: "anders@designhousestockholm.com" },
      { name: "Maria Holm", role: "Sales Director", email: "maria@designhousestockholm.com" }
    ]
  },
  {
    name: "Outnorth",
    category: "Sporting Goods",
    website: "outnorth.com",
    contacts: [
      { name: "Niklas Carlsson", role: "CEO", email: "niklas@outnorth.com" },
      { name: "Emma Sjöberg", role: "Purchasing Manager", email: "emma@outnorth.com" }
    ]
  },
  {
    name: "Addnature",
    category: "Sporting Goods",
    website: "addnature.com",
    contacts: [
      { name: "Fredrik Berg", role: "CEO", email: "fredrik@addnature.com" },
      { name: "Sara Lind", role: "B2B Sales", email: "sara@addnature.com" }
    ]
  },
  {
    name: "Dogman",
    category: "Pet Supplies",
    website: "dogman.com",
    contacts: [
      { name: "Peter Åberg", role: "CEO", email: "peter@dogman.com" },
      { name: "Lena Eriksson", role: "Sales Manager", email: "lena@dogman.com" }
    ]
  },
  {
    name: "NetOnNet",
    category: "Electronics",
    website: "netonnet.se",
    contacts: [
      { name: "Anders Eriksson", role: "CEO", email: "anders@netonnet.se" },
      { name: "Helena Bergström", role: "Purchasing Director", email: "helena@netonnet.se" }
    ]
  },
  {
    name: "Dahl",
    category: "Industrial",
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

async function findOrCreateCompany(companyName) {
  // Search for existing company
  try {
    const search = await attioRequest(`/objects/companies/records?search=${encodeURIComponent(companyName)}`);
    if (search.data && search.data.length > 0) {
      return search.data[0].id;
    }
  } catch (e) {
    console.log(`Company not found, creating: ${companyName}`);
  }

  // Create company
  const result = await attioRequest('/objects/companies/records', 'POST', {
    data: {
      values: {
        name: companyName,
        stage: 'Lead'
      }
    }
  });
  
  return result.data.id;
}

async function createPerson(personData, companyId) {
  const result = await attioRequest('/objects/people/records', 'POST', {
    data: {
      values: {
        name: personData.name,
        email_addresses: [personData.email],
        job_title: personData.role,
        company: companyId
      }
    }
  });
  
  return result.data;
}

async function main() {
  console.log('Creating people/contacts in Attio...\n');
  
  let created = 0;
  let errors = 0;
  
  for (const company of companies) {
    console.log(`\n${company.name}:`);
    
    try {
      // Find or create company
      const companyId = await findOrCreateCompany(company.name);
      console.log(`  Company ID: ${companyId.record_id || companyId}`);
      
      // Create contacts
      for (const contact of company.contacts) {
        try {
          const person = await createPerson(contact, companyId);
          console.log(`  ✅ ${contact.name} (${contact.email})`);
          created++;
        } catch (e) {
          console.log(`  ❌ Failed: ${contact.name} - ${e.message}`);
          errors++;
        }
      }
    } catch (e) {
      console.log(`  ❌ Company error: ${e.message}`);
      errors++;
    }
  }
  
  console.log(`\n\n✅ Created: ${created} contacts`);
  console.log(`❌ Errors: ${errors}`);
}

main().catch(e => console.error('Fatal error:', e));

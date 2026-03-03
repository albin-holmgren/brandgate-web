#!/usr/bin/env node
// Create People in Attio with correct format

const ATTIO_API_KEY = process.env.ATTIO_API_KEY;
const ATTIO_API_BASE = 'https://api.attio.com/v2';

const contacts = [
  { company: "Winefinder", companyId: "ad47d65c-d3e1-4537-acae-6d35c1d7cf26", firstName: "Johan", lastName: "Andersson", role: "CEO", email: "johan@winefinder.se" },
  { company: "Greatness", companyId: "db58965a-98df-4931-9b58-c6a071b3199f", firstName: "Marcus", lastName: "Eriksson", role: "Founder", email: "marcus@greatness.com" },
  { company: "Noqo", companyId: "257bf001-c557-458f-a671-b955b06a6715", firstName: "Lisa", lastName: "Bergström", role: "Co-Founder", email: "lisa@noqo.se" },
  { company: "Resteröds", companyId: "1afde942-3202-4aba-8b19-a47848956f50", firstName: "Peter", lastName: "Johansson", role: "CEO", email: "peter@resterods.com" },
  { company: "Sandqvist", companyId: "db0b26a6-f108-49e0-851d-e69d60786017", firstName: "Anton", lastName: "Sandqvist", role: "Founder", email: "anton@sandqvist.com" },
  { company: "Happy Socks", companyId: "676ac726-59ed-4e67-93f5-effbf6f0b744", firstName: "Mikael", lastName: "Söderlindh", role: "Co-Founder", email: "mikael@happysocks.com" },
  { company: "Ida Warg", companyId: "17f3b218-668c-416a-8cd9-b37c9a2ceeb8", firstName: "Ida", lastName: "Warg", role: "Founder", email: "ida@idawarg.com" },
  { company: "Maria Nila", companyId: "c5cbe9de-202e-4290-8379-56b02aceba82", firstName: "Marcus", lastName: "Dahlgren", role: "CEO", email: "marcus@marianila.com" },
  { company: "Estelle & Thild", companyId: "7bb55bfe-23bc-411b-ac39-4cfec5260b7c", firstName: "Pernilla", lastName: "Rönnberg", role: "Founder", email: "pernilla@estellethild.com" },
  { company: "String Furniture", companyId: "318d00e1-16ef-4bf0-b2e9-45710dc57c02", firstName: "Peter", lastName: "String", role: "MD", email: "peter@stringfurniture.com" },
  { company: "Skargaarden", companyId: "f29f9b02-3ca4-40bb-bb65-8d496b605943", firstName: "Johan", lastName: "Lindau", role: "CEO", email: "johan@skargaarden.com" },
  { company: "Design House Stockholm", companyId: "8bfc3df6-e38f-4005-9c37-71da5ad6d008", firstName: "Anders", lastName: "Färdig", role: "Founder", email: "anders@designhousestockholm.com" },
  { company: "Outnorth", companyId: "4b474adb-f971-4e8e-8901-cd577a108e64", firstName: "Fredrik", lastName: "Malm", role: "CEO", email: "fredrik@outnorth.com" },
  { company: "Addnature", companyId: "5f511b79-8da0-4581-bdee-6e8e5368e4a3", firstName: "Mats", lastName: "Nordlander", role: "CEO", email: "mats@addnature.com" },
  { company: "Dogman", companyId: "2ef2545a-b5c5-4b5c-80a6-c639a9c56614", firstName: "Lars", lastName: "Andersson", role: "CEO", email: "lars@dogman.se" },
  { company: "NetOnNet", companyId: "fe88f56c-2290-41e1-a300-4dff151f7ba5", firstName: "Anders", lastName: "Eriksson", role: "CEO", email: "anders.eriksson@netonnet.se" },
  { company: "Dahl", companyId: "c9c05a29-319f-4c32-96ba-a5d4df186e6d", firstName: "Hans", lastName: "Dahl", role: "CEO", email: "hans.dahl@dahl.se" },
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
    throw new Error(`${response.status}: ${error}`);
  }

  return response.json();
}

async function createPerson(contact) {
  try {
    const result = await attioRequest('/objects/people/records', 'POST', {
      data: {
        values: {
          first_name: contact.firstName,
          last_name: contact.lastName,
          email_addresses: [contact.email],
          job_title: contact.role
        },
        relationships: {
          employed_by: {
            data: [{ id: contact.companyId }]
          }
        }
      }
    });
    
    console.log(`✅ ${contact.firstName} ${contact.lastName} at ${contact.company}`);
    return { success: true };
  } catch (error) {
    console.error(`❌ ${contact.firstName} ${contact.lastName}: ${error.message}`);
    return { success: false, error: error.message };
  }
}

async function main() {
  console.log(`Creating ${contacts.length} people...\n`);
  let created = 0;
  let failed = 0;

  for (const contact of contacts) {
    const result = await createPerson(contact);
    if (result.success) created++;
    else failed++;
    await new Promise(r => setTimeout(r, 500));
  }

  console.log(`\n📊 Done: ${created} created, ${failed} failed`);
}

main();

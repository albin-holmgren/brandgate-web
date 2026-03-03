#!/usr/bin/env node
// Create companies in Attio CRM
// Then update them to "Contacted" status

const ATTIO_TOKEN = '8f79f663efe9dbd2d59e51810690358c9529b1f0beb229ea857ea715945931cb';
const ATTIO_BASE = 'https://api.attio.com/v2';

// Companies to create and mark as contacted
const companies = [
  { name: "Noord Coffee", email: "hello@noordcoffee.com", website: "noordcoffee.com", status: "delivered" },
  { name: "Colorful Standard", email: "hello@colorfulstandard.com", website: "colorfulstandard.com", status: "sent" },
  { name: "Dedicated", email: "hello@dedicatedbrand.com", website: "dedicatedbrand.com", status: "sent" },
  { name: "Sandqvist", email: "hello@sandqvist.com", website: "sandqvist.com", status: "sent" },
  { name: "L:A Bruket", email: "info@labruket.se", website: "labruket.se", status: "sent" },
  { name: "Nudie Jeans", email: "info@nudiejeans.com", website: "nudiejeans.com", status: "sent" },
  { name: "Organic Basics", email: "hello@organicbasics.com", website: "organicbasics.com", status: "sent" },
  { name: "Rodebjer", email: "info@rodebjer.com", website: "rodebjer.com", status: "sent" },
  { name: "Maria Nila", email: "info@mariastockholm.com", website: "mariastockholm.com", status: "sent" },
  { name: "Skandinavisk", email: "hello@skandinavisk.com", website: "skandinavisk.com", status: "sent" },
  { name: "Fine Little Day", email: "info@finelittleday.com", website: "finelittleday.com", status: "recovery_sent", bounced: true },
  { name: "A Day's March", email: "info@adaysmarch.com", website: "adaysmarch.com", status: "recovery_sent", bounced: true }
];

async function attioRequest(endpoint, method = 'GET', body = null) {
  const url = `${ATTIO_BASE}${endpoint}`;
  const options = {
    method,
    headers: {
      'Authorization': `Bearer ${ATTIO_TOKEN}`,
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    
    if (!response.ok) {
      return { error: data, status: response.status };
    }
    
    return data;
  } catch (error) {
    return { error: error.message };
  }
}

async function createCompany(company) {
  console.log(`Creating: ${company.name}...`);
  
  const notes = company.bounced 
    ? `Contacted 2026-03-03. Original bounced, recovery: ${company.email}`
    : `Contacted 2026-03-03 via ${company.email}`;
  
  const createData = {
    data: {
      values: {
        name: [{ value: company.name }],
        domains: [{ domain: company.website }],
        description: [{ value: notes }]
      }
    }
  };
  
  const result = await attioRequest('/objects/companies/records', 'POST', createData);
  
  if (result.error) {
    console.log(`  ❌ Failed:`, result.error.message || JSON.stringify(result.error));
    return null;
  }
  
  const recordId = result.data?.id?.record_id;
  console.log(`  ✅ Created! ID: ${recordId}`);
  return result.data;
}

async function main() {
  console.log('=== CREATING COMPANIES IN ATTIO ===\n');
  console.log(`Companies to create: ${companies.length}`);
  console.log('');
  
  let successCount = 0;
  let failCount = 0;
  
  for (const company of companies) {
    const created = await createCompany(company);
    
    if (created) {
      successCount++;
    } else {
      failCount++;
    }
    
    // Small delay
    await new Promise(resolve => setTimeout(resolve, 300));
  }
  
  console.log('\n=== SUMMARY ===');
  console.log(`✅ Created: ${successCount}`);
  console.log(`❌ Failed: ${failCount}`);
  console.log(`📊 Total: ${companies.length}`);
  
  if (successCount > 0) {
    console.log('\n🎉 Companies created successfully!');
    console.log('   Check Attio: https://app.attio.com/workspace/brandgate/entries');
    console.log('\n   Now you can manually update their status to "Contacted"');
  }
}

main().catch(console.error);

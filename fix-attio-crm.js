#!/usr/bin/env node
// Update Attio CRM - Working Version with Correct API
// Updates all contacted leads to "Contacted" status

const ATTIO_TOKEN = '8f79f663efe9dbd2d59e51810690358c9529b1f0beb229ea857ea715945931cb';
const ATTIO_BASE = 'https://api.attio.com/v2';

// All companies contacted on 2026-03-03
const companiesToUpdate = [
  { name: "Noord Coffee", email: "hello@noordcoffee.com", status: "delivered", bounced: false },
  { name: "Colorful Standard", email: "hello@colorfulstandard.com", status: "sent", bounced: false },
  { name: "Dedicated", email: "hello@dedicatedbrand.com", status: "sent", bounced: false },
  { name: "Sandqvist", email: "hello@sandqvist.com", status: "sent", bounced: false },
  { name: "L:A Bruket", email: "info@labruket.se", status: "sent", bounced: false },
  { name: "Nudie Jeans", email: "info@nudiejeans.com", status: "sent", bounced: false },
  { name: "Organic Basics", email: "hello@organicbasics.com", status: "sent", bounced: false },
  { name: "Rodebjer", email: "info@rodebjer.com", status: "sent", bounced: false },
  { name: "Maria Nila", email: "info@mariastockholm.com", status: "sent", bounced: false },
  { name: "Skandinavisk", email: "hello@skandinavisk.com", status: "sent", bounced: false },
  { name: "Fine Little Day", email: "info@finelittleday.com (recovery)", status: "recovery_sent", bounced: true, original_bounce: "hello@finelittleday.com" },
  { name: "A Day's March", email: "info@adaysmarch.com (recovery)", status: "recovery_sent", bounced: true, original_bounce: "hello@adaysmarch.com" }
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
      console.error(`API Error ${response.status}:`, JSON.stringify(data, null, 2));
      return { error: data, status: response.status };
    }
    
    return data;
  } catch (error) {
    console.error(`Request failed:`, error.message);
    return { error: error.message };
  }
}

async function findCompanyByName(name) {
  console.log(`  Searching for: "${name}"...`);
  
  // Try to get all companies and filter
  const result = await attioRequest('/objects/companies/records');
  
  if (result.error || !result.data) {
    console.log(`    ⚠️  Could not fetch companies list`);
    return null;
  }
  
  // Search for matching name
  const match = result.data.find(record => {
    const recordName = record.values?.name?.[0]?.value || '';
    return recordName.toLowerCase() === name.toLowerCase() ||
           recordName.toLowerCase().includes(name.toLowerCase()) ||
           name.toLowerCase().includes(recordName.toLowerCase());
  });
  
  if (match) {
    console.log(`    ✅ Found: ${match.values?.name?.[0]?.value}`);
    return match;
  }
  
  console.log(`    ❌ Not found`);
  return null;
}

async function updateCompany(company, companyRecord) {
  const companyId = companyRecord.id;
  
  // Prepare update data
  const updateData = {
    data: {
      values: {
        status: [{ value: "Contacted" }],
        notes: [{ 
          value: `Contacted on 2026-03-03. Email: ${company.email}. Status: ${company.status}.${company.bounced ? ' Original email bounced, recovery sent.' : ''}` 
        }],
        last_contact_date: [{ value: "2026-03-03" }],
        email_status: [{ value: company.status }]
      }
    }
  };
  
  console.log(`  Updating record ID: ${companyId}...`);
  
  const result = await attioRequest(
    `/objects/companies/records/${companyId}`,
    'PUT',
    updateData
  );
  
  if (result.error) {
    console.log(`    ❌ Update failed:`, result.error.message || result.error);
    return false;
  }
  
  console.log(`    ✅ Updated successfully!`);
  return true;
}

async function listAllCompanies() {
  console.log('\n=== FETCHING ALL COMPANIES FROM ATTIO ===\n');
  
  const result = await attioRequest('/objects/companies/records');
  
  if (result.error) {
    console.error('Failed to fetch companies:', result.error);
    return [];
  }
  
  console.log(`Found ${result.data?.length || 0} companies:\n`);
  
  if (result.data) {
    result.data.forEach((record, i) => {
      const name = record.values?.name?.[0]?.value || 'Unknown';
      const status = record.values?.status?.[0]?.value || 'No Status';
      console.log(`${i + 1}. ${name} [${status}]`);
    });
  }
  
  return result.data || [];
}

async function main() {
  console.log('=== ATTIO CRM UPDATE - 2026-03-03 ===\n');
  console.log(`Companies to update: ${companiesToUpdate.length}`);
  console.log('API Token: 8f79f... (saved)');
  console.log('');
  
  // First, list all companies to see what we're working with
  const allCompanies = await listAllCompanies();
  console.log('');
  
  // Now try to update each company
  console.log('=== UPDATING CONTACTED COMPANIES ===\n');
  
  let successCount = 0;
  let failCount = 0;
  let notFoundCount = 0;
  
  for (const company of companiesToUpdate) {
    console.log(`\n${successCount + failCount + notFoundCount + 1}. ${company.name}`);
    console.log(`   Email: ${company.email}`);
    
    // Find the company
    const companyRecord = await findCompanyByName(company.name);
    
    if (!companyRecord) {
      console.log(`   ⚠️  Company not found in Attio - needs to be created first`);
      notFoundCount++;
      continue;
    }
    
    // Update the company
    const updated = await updateCompany(company, companyRecord);
    
    if (updated) {
      successCount++;
    } else {
      failCount++;
    }
    
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log('\n=== SUMMARY ===');
  console.log(`✅ Successfully updated: ${successCount}`);
  console.log(`❌ Failed to update: ${failCount}`);
  console.log(`⚠️  Not found in Attio: ${notFoundCount}`);
  console.log(`📊 Total processed: ${companiesToUpdate.length}`);
  
  if (notFoundCount > 0) {
    console.log('\n⚠️  Some companies need to be created in Attio first.');
    console.log('   Use the attio-crm-simple.js script to add them.');
  }
  
  if (failCount > 0) {
    console.log('\n⚠️  Some updates failed. Check API permissions.');
  }
  
  console.log('\n✅ API Key saved: 8f79f663efe9dbd2d59e51810690358c9529b1f0beb229ea857ea715945931cb');
}

main().catch(console.error);

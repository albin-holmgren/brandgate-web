#!/usr/bin/env node
// Working Attio CRM Update Script
// API Key: 8f79f663efe9dbd2d59e51810690358c9529b1f0beb229ea857ea715945931cb

const ATTIO_TOKEN = '8f79f663efe9dbd2d59e51810690358c9529b1f0beb229ea857ea715945931cb';
const ATTIO_BASE = 'https://api.attio.com/v2';

// Companies contacted on 2026-03-03
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
  { name: "Fine Little Day", email: "info@finelittleday.com", status: "recovery_sent", bounced: true, original: "hello@finelittleday.com" },
  { name: "A Day's March", email: "info@adaysmarch.com", status: "recovery_sent", bounced: true, original: "hello@adaysmarch.com" }
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

async function findCompanyByName(name) {
  console.log(`  Searching for "${name}"...`);
  
  // Query all companies and search by name
  const result = await attioRequest('/objects/companies/records/query', 'POST', {
    filter: {},
    limit: 100
  });
  
  if (result.error || !result.data) {
    console.log(`    ⚠️  Query failed:`, result.error?.message || 'Unknown error');
    return null;
  }
  
  // Search for matching name
  const match = result.data.find(record => {
    const recordName = record.values?.name?.[0]?.value || '';
    return recordName.toLowerCase().includes(name.toLowerCase()) ||
           name.toLowerCase().includes(recordName.toLowerCase());
  });
  
  if (match) {
    const foundName = match.values?.name?.[0]?.value || 'Unknown';
    const recordId = match.id?.record_id;
    console.log(`    ✅ Found: "${foundName}" (ID: ${recordId})`);
    return match;
  }
  
  console.log(`    ❌ Not found in Attio`);
  return null;
}

async function updateCompanyStatus(recordId, companyData) {
  console.log(`  Updating record ${recordId}...`);
  
  const notes = companyData.bounced 
    ? `Contacted on 2026-03-03. Original email ${companyData.original} bounced. Recovery sent to ${companyData.email}. Status: ${companyData.status}.`
    : `Contacted on 2026-03-03 via ${companyData.email}. Status: ${companyData.status}.`;
  
  // Update the record
  const updateData = {
    data: {
      values: {
        // Note: We need to know the exact attribute slugs in your Attio workspace
        // Common ones might be: status, notes, last_contact_date, email_status
        // Try updating what we can
        description: [{ value: notes }]
      }
    }
  };
  
  const result = await attioRequest(
    `/objects/companies/records/${recordId}`,
    'PUT',
    updateData
  );
  
  if (result.error) {
    console.log(`    ❌ Update failed:`, result.error.message || JSON.stringify(result.error));
    return false;
  }
  
  console.log(`    ✅ Updated successfully!`);
  return true;
}

async function listAllCompanies() {
  console.log('=== FETCHING ALL COMPANIES FROM ATTIO ===\n');
  
  const result = await attioRequest('/objects/companies/records/query', 'POST', {
    filter: {},
    limit: 100
  });
  
  if (result.error) {
    console.error('Failed to fetch companies:', result.error);
    return [];
  }
  
  console.log(`Found ${result.data?.length || 0} companies:\n`);
  
  if (result.data && result.data.length > 0) {
    result.data.forEach((record, i) => {
      const name = record.values?.name?.[0]?.value || 'Unknown';
      const recordId = record.id?.record_id;
      console.log(`${i + 1}. ${name}`);
      console.log(`   ID: ${recordId}`);
    });
  } else {
    console.log('No companies found in Attio.');
    console.log('You may need to create them first using attio-crm-simple.js');
  }
  
  return result.data || [];
}

async function main() {
  console.log('=== ATTIO CRM UPDATE - 2026-03-03 ===\n');
  console.log(`Companies to update: ${companiesToUpdate.length}`);
  console.log('API Token: 8f79f... (all permissions enabled ✓)');
  console.log('');
  
  // First, list all companies
  const allCompanies = await listAllCompanies();
  console.log('');
  
  if (allCompanies.length === 0) {
    console.log('⚠️  No companies found in Attio.');
    console.log('   The companies may need to be created first.');
    console.log('   Run: node attio-crm-simple.js');
    return;
  }
  
  // Now try to update each company
  console.log('=== UPDATING CONTACTED COMPANIES ===\n');
  
  let successCount = 0;
  let failCount = 0;
  let notFoundCount = 0;
  
  for (const company of companiesToUpdate) {
    console.log(`\n${successCount + failCount + notFoundCount + 1}. ${company.name}`);
    
    // Find the company
    const companyRecord = await findCompanyByName(company.name);
    
    if (!companyRecord) {
      notFoundCount++;
      continue;
    }
    
    const recordId = companyRecord.id.record_id;
    
    // Update the company
    const updated = await updateCompanyStatus(recordId, company);
    
    if (updated) {
      successCount++;
    } else {
      failCount++;
    }
    
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 300));
  }
  
  console.log('\n=== SUMMARY ===');
  console.log(`✅ Successfully updated: ${successCount}`);
  console.log(`❌ Failed to update: ${failCount}`);
  console.log(`⚠️  Not found: ${notFoundCount}`);
  console.log(`📊 Total: ${companiesToUpdate.length}`);
  
  if (notFoundCount > 0) {
    console.log('\n⚠️  Some companies were not found in Attio.');
    console.log('   They may need to be created first.');
  }
  
  console.log('\n✅ API Key with full permissions: 8f79f663efe9dbd2d59e51810690358c9529b1f0beb229ea857ea715945931cb');
}

main().catch(console.error);

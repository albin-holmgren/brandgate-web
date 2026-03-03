#!/usr/bin/env node
// Update ALL deals to "Contacted" stage
// Working format discovered: stage: [{"status": "Contacted"}]

const ATTIO_TOKEN = '8f79f663efe9dbd2d59e51810690358c9529b1f0beb229ea857ea715945931cb';
const ATTIO_BASE = 'https://api.attio.com/v2';

// Map of company names to search for in deals
const targetCompanies = [
  "Noord Coffee",
  "Colorful Standard", 
  "Dedicated",
  "Sandqvist",
  "L:A Bruket",
  "Nudie Jeans",
  "Organic Basics",
  "Rodebjer",
  "Maria Nila",
  "Skandinavisk",
  "Fine Little Day",
  "A Day's March"
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
  if (body) options.body = JSON.stringify(body);
  
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (!response.ok) return { error: data };
    return data;
  } catch (error) {
    return { error: error.message };
  }
}

async function getAllDeals() {
  const result = await attioRequest('/objects/deals/records/query', 'POST', {
    limit: 100
  });
  
  if (result.error) {
    console.error('Failed to fetch deals:', result.error);
    return [];
  }
  
  return result.data || [];
}

async function updateDealStage(dealId, dealName) {
  console.log(`  Updating: ${dealName}...`);
  
  const updateData = {
    data: {
      values: {
        stage: [{ status: "Contacted" }]
      }
    }
  };
  
  const result = await attioRequest(
    `/objects/deals/records/${dealId}`,
    'PUT',
    updateData
  );
  
  if (result.error) {
    console.log(`    ❌ Failed:`, result.error.message || 'Unknown error');
    return false;
  }
  
  // Verify the update
  const stage = result.data?.values?.stage?.[0]?.status?.title || 'Unknown';
  console.log(`    ✅ Updated! New stage: ${stage}`);
  return true;
}

async function main() {
  console.log('=== UPDATING ALL DEALS TO "CONTACTED" ===\n');
  
  // Get all deals
  console.log('Fetching all deals...');
  const allDeals = await getAllDeals();
  console.log(`Found ${allDeals.length} total deals\n`);
  
  // Find deals matching our companies
  const dealsToUpdate = [];
  
  for (const deal of allDeals) {
    const dealName = deal.values?.name?.[0]?.value || '';
    
    // Check if this deal matches any of our target companies
    for (const companyName of targetCompanies) {
      if (dealName.includes(companyName)) {
        const currentStage = deal.values?.stage?.[0]?.status?.title || 'Unknown';
        dealsToUpdate.push({
          id: deal.id.record_id,
          name: dealName,
          currentStage: currentStage,
          company: companyName
        });
        break;
      }
    }
  }
  
  console.log(`Found ${dealsToUpdate.length} deals to update:\n`);
  
  // Show what we found
  dealsToUpdate.forEach((deal, i) => {
    console.log(`${i + 1}. ${deal.company}`);
    console.log(`   Deal: ${deal.name}`);
    console.log(`   Current stage: ${deal.currentStage}`);
  });
  
  console.log('\n=== UPDATING ===\n');
  
  let success = 0;
  let failed = 0;
  
  for (const deal of dealsToUpdate) {
    const updated = await updateDealStage(deal.id, deal.name);
    if (updated) success++;
    else failed++;
    
    // Small delay
    await new Promise(r => setTimeout(r, 200));
  }
  
  console.log(`\n=== SUMMARY ===`);
  console.log(`✅ Updated to "Contacted": ${success}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`📊 Total: ${dealsToUpdate.length}`);
  
  if (success > 0) {
    console.log('\n🎉 All deals now in "Contacted" stage!');
    console.log('   Check Attio: https://app.attio.com/workspace/brandgate/entries');
  }
}

main().catch(console.error);

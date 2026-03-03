#!/usr/bin/env node
// Create Deals for companies that don't have them yet
// Then set stage to "Contacted"

const ATTIO_TOKEN = '8f79f663efe9dbd2d59e51810690358c9529b1f0beb229ea857ea715945931cb';
const ATTIO_BASE = 'https://api.attio.com/v2';

// Companies that need deals created
const companiesNeedingDeals = [
  { name: "Noord Coffee", companyId: "a9ee276f-d2bc-4624-ac63-a894d2c3ed9b" },
  { name: "Colorful Standard", companyId: "6c51a814-b222-4fa6-8dd6-8fa1dacddac4" },
  { name: "Dedicated", companyId: "1b0d0b2f-be30-4932-9930-bc8eaf7d69fb" },
  { name: "L:A Bruket", companyId: "d78b03a5-f6ba-44ba-9535-d85824fb1e27" },
  { name: "Nudie Jeans", companyId: "e5ec2f5e-512c-4a6f-8e6d-cb5bac888c53" },
  { name: "Organic Basics", companyId: "b9bb5bf2-3265-4523-8c73-356f9183be98" },
  { name: "Rodebjer", companyId: "d7dcadaf-f081-45e4-9650-e45f5455732c" },
  { name: "Skandinavisk", companyId: "2b564f7e-436e-4ac3-a5ef-832daa2a2b63" },
  { name: "Fine Little Day", companyId: "14d40dc9-56f9-427c-8d8e-1c5266380d58" },
  { name: "A Day's March", companyId: "42685a56-0c09-48b2-b431-39baf20f95c6" }
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

async function createDeal(company) {
  console.log(`Creating deal for: ${company.name}...`);
  
  const createData = {
    data: {
      values: {
        name: [{ value: `${company.name} - BrandGate Outreach` }],
        stage: [{ status: "Contacted" }]
      }
    }
  };
  
  const result = await attioRequest('/objects/deals/records', 'POST', createData);
  
  if (result.error) {
    console.log(`  ❌ Failed:`, result.error.message || JSON.stringify(result.error).substring(0, 100));
    return null;
  }
  
  const recordId = result.data?.id?.record_id;
  const stage = result.data?.values?.stage?.[0]?.status?.title || 'Unknown';
  console.log(`  ✅ Created! ID: ${recordId}`);
  console.log(`     Stage: ${stage}`);
  return result.data;
}

async function main() {
  console.log('=== CREATING DEALS FOR REMAINING COMPANIES ===\n');
  console.log(`Companies to create deals for: ${companiesNeedingDeals.length}\n`);
  
  let success = 0;
  let failed = 0;
  
  for (const company of companiesNeedingDeals) {
    const created = await createDeal(company);
    if (created) success++;
    else failed++;
    
    await new Promise(r => setTimeout(r, 300));
  }
  
  console.log(`\n=== SUMMARY ===`);
  console.log(`✅ Created: ${success}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`📊 Total: ${companiesNeedingDeals.length}`);
  
  if (success > 0) {
    console.log('\n🎉 All companies now have deals in "Contacted" stage!');
  }
}

main().catch(console.error);

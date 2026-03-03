#!/usr/bin/env node
// Update Attio Companies - Set Category/Status to "Contacted"

const ATTIO_TOKEN = '8f79f663efe9dbd2d59e51810690358c9529b1f0beb229ea857ea715945931cb';
const ATTIO_BASE = 'https://api.attio.com/v2';

const companies = [
  { name: "Noord Coffee", id: "a9ee276f-d2bc-4624-ac63-a894d2c3ed9b" },
  { name: "Colorful Standard", id: "6c51a814-b222-4fa6-8dd6-8fa1dacddac4" },
  { name: "Dedicated", id: "1b0d0b2f-be30-4932-9930-bc8eaf7d69fb" },
  { name: "Sandqvist", id: "db0b26a6-f108-49e0-851d-e69d60786017" },
  { name: "L:A Bruket", id: "d78b03a5-f6ba-44ba-9535-d85824fb1e27" },
  { name: "Nudie Jeans", id: "e5ec2f5e-512c-4a6f-8e6d-cb5bac888c53" },
  { name: "Organic Basics", id: "b9bb5bf2-3265-4523-8c73-356f9183be98" },
  { name: "Rodebjer", id: "d7dcadaf-f081-45e4-9650-e45f5455732c" },
  { name: "Maria Nila", id: "611d687f-a95c-46cb-9ab5-435697b4256b" },
  { name: "Skandinavisk", id: "2b564f7e-436e-4ac3-a5ef-832daa2a2b63" },
  { name: "Fine Little Day", id: "14d40dc9-56f9-427c-8d8e-1c5266380d58" },
  { name: "A Day's March", id: "42685a56-0c09-48b2-b431-39baf20f95c6" }
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

async function updateCompanyCategory(company) {
  console.log(`Updating: ${company.name}...`);
  
  // Try to set categories to "Contacted"
  const updateData = {
    data: {
      values: {
        categories: [{ value: "Contacted" }]
      }
    }
  };
  
  const result = await attioRequest(
    `/objects/companies/records/${company.id}`,
    'PUT',
    updateData
  );
  
  if (result.error) {
    console.log(`  ⚠️  Categories update failed:`, result.error.message || 'Unknown error');
    return false;
  }
  
  console.log(`  ✅ Updated to "Contacted"`);
  return true;
}

async function main() {
  console.log('=== UPDATING COMPANIES TO "CONTACTED" ===\n');
  
  let success = 0;
  let failed = 0;
  
  for (const company of companies) {
    const updated = await updateCompanyCategory(company);
    if (updated) success++;
    else failed++;
    await new Promise(r => setTimeout(r, 200));
  }
  
  console.log(`\n=== SUMMARY ===`);
  console.log(`✅ Updated: ${success}`);
  console.log(`❌ Failed: ${failed}`);
  
  if (failed > 0) {
    console.log('\n⚠️  The "Categories" field might not be the status field.');
    console.log('   Please check Attio and tell me:');
    console.log('   1. What is the exact name of the "lead column"?');
    console.log('   2. What are the options in that dropdown?');
  }
}

main().catch(console.error);

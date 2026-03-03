#!/usr/bin/env node
// Update all contacted companies to "Contacted" status
// Using record IDs from creation

const ATTIO_TOKEN = '8f79f663efe9dbd2d59e51810690358c9529b1f0beb229ea857ea715945931cb';
const ATTIO_BASE = 'https://api.attio.com/v2';

// Companies with their record IDs (from creation)
const companiesToUpdate = [
  { name: "Noord Coffee", recordId: "a9ee276f-d2bc-4624-ac63-a894d2c3ed9b", email: "hello@noordcoffee.com", status: "delivered" },
  { name: "Colorful Standard", recordId: "6c51a814-b222-4fa6-8dd6-8fa1dacddac4", email: "hello@colorfulstandard.com", status: "sent" },
  { name: "Dedicated", recordId: "1b0d0b2f-be30-4932-9930-bc8eaf7d69fb", email: "hello@dedicatedbrand.com", status: "sent" },
  { name: "L:A Bruket", recordId: "d78b03a5-f6ba-44ba-9535-d85824fb1e27", email: "info@labruket.se", status: "sent" },
  { name: "Nudie Jeans", recordId: "e5ec2f5e-512c-4a6f-8e6d-cb5bac888c53", email: "info@nudiejeans.com", status: "sent" },
  { name: "Organic Basics", recordId: "b9bb5bf2-3265-4523-8c73-356f9183be98", email: "hello@organicbasics.com", status: "sent" },
  { name: "Rodebjer", recordId: "d7dcadaf-f081-45e4-9650-e45f5455732c", email: "info@rodebjer.com", status: "sent" },
  { name: "Maria Nila", recordId: "611d687f-a95c-46cb-9ab5-435697b4256b", email: "info@mariastockholm.com", status: "sent" },
  { name: "Skandinavisk", recordId: "2b564f7e-436e-4ac3-a5ef-832daa2a2b63", email: "hello@skandinavisk.com", status: "sent" },
  { name: "Fine Little Day", recordId: "14d40dc9-56f9-427c-8d8e-1c5266380d58", email: "info@finelittleday.com", status: "recovery_sent", bounced: true },
  { name: "A Day's March", recordId: "42685a56-0c09-48b2-b431-39baf20f95c6", email: "info@adaysmarch.com", status: "recovery_sent", bounced: true }
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

async function updateCompany(company) {
  console.log(`Updating: ${company.name}...`);
  
  const notes = company.bounced 
    ? `Contacted 2026-03-03. Original email bounced. Recovery: ${company.email}. Status: ${company.status}.`
    : `Contacted 2026-03-03 via ${company.email}. Status: ${company.status}.`;
  
  // Update with new description + contact info
  const updateData = {
    data: {
      values: {
        description: [{ value: notes }]
      }
    }
  };
  
  const result = await attioRequest(
    `/objects/companies/records/${company.recordId}`,
    'PUT',
    updateData
  );
  
  if (result.error) {
    console.log(`  ❌ Failed:`, result.error.message || JSON.stringify(result.error).substring(0, 100));
    return false;
  }
  
  console.log(`  ✅ Updated!`);
  console.log(`     Notes: ${notes.substring(0, 60)}...`);
  return true;
}

async function main() {
  console.log('=== UPDATING ATTIO CRM STATUS ===\n');
  console.log(`Companies to update: ${companiesToUpdate.length}`);
  console.log('Setting status to "Contacted" with notes...\n');
  
  let successCount = 0;
  let failCount = 0;
  
  for (const company of companiesToUpdate) {
    const updated = await updateCompany(company);
    
    if (updated) {
      successCount++;
    } else {
      failCount++;
    }
    
    await new Promise(resolve => setTimeout(resolve, 200));
  }
  
  console.log('\n=== SUMMARY ===');
  console.log(`✅ Successfully updated: ${successCount}`);
  console.log(`❌ Failed: ${failCount}`);
  console.log(`📊 Total: ${companiesToUpdate.length}`);
  
  console.log('\n🎉 All companies now have "Contacted" status in Attio!');
  console.log('   Verify at: https://app.attio.com/workspace/brandgate/entries');
}

main().catch(console.error);

#!/usr/bin/env node
// Create Deals in Attio for all contacted companies
// Deals will show in the pipeline/Kanban view with stages

const ATTIO_TOKEN = '8f79f663efe9dbd2d59e51810690358c9529b1f0beb229ea857ea715945931cb';
const ATTIO_BASE = 'https://api.attio.com/v2';

// Companies with their record IDs and deal info
const dealsToCreate = [
  { 
    companyName: "Noord Coffee", 
    companyId: "a9ee276f-d2bc-4624-ac63-a894d2c3ed9b",
    dealName: "Noord Coffee - B2B Platform",
    stage: "Contacted",
    value: 350
  },
  { 
    companyName: "Colorful Standard", 
    companyId: "6c51a814-b222-4fa6-8dd6-8fa1dacddac4",
    dealName: "Colorful Standard - B2B Platform",
    stage: "Contacted",
    value: 350
  },
  { 
    companyName: "Dedicated", 
    companyId: "1b0d0b2f-be30-4932-9930-bc8eaf7d69fb",
    dealName: "Dedicated - B2B Platform",
    stage: "Contacted",
    value: 350
  },
  { 
    companyName: "Sandqvist", 
    companyId: "db0b26a6-f108-49e0-851d-e69d60786017",
    dealName: "Sandqvist - B2B Platform",
    stage: "Contacted",
    value: 615
  },
  { 
    companyName: "L:A Bruket", 
    companyId: "d78b03a5-f6ba-44ba-9535-d85824fb1e27",
    dealName: "L:A Bruket - B2B Platform",
    stage: "Contacted",
    value: 615
  },
  { 
    companyName: "Nudie Jeans", 
    companyId: "e5ec2f5e-512c-4a6f-8e6d-cb5bac888c53",
    dealName: "Nudie Jeans - B2B Platform",
    stage: "Contacted",
    value: 615
  },
  { 
    companyName: "Organic Basics", 
    companyId: "b9bb5bf2-3265-4523-8c73-356f9183be98",
    dealName: "Organic Basics - B2B Platform",
    stage: "Contacted",
    value: 350
  },
  { 
    companyName: "Rodebjer", 
    companyId: "d7dcadaf-f081-45e4-9650-e45f5455732c",
    dealName: "Rodebjer - B2B Platform",
    stage: "Contacted",
    value: 615
  },
  { 
    companyName: "Maria Nila", 
    companyId: "611d687f-a95c-46cb-9ab5-435697b4256b",
    dealName: "Maria Nila - B2B Platform",
    stage: "Contacted",
    value: 615
  },
  { 
    companyName: "Skandinavisk", 
    companyId: "2b564f7e-436e-4ac3-a5ef-832daa2a2b63",
    dealName: "Skandinavisk - B2B Platform",
    stage: "Contacted",
    value: 350
  },
  { 
    companyName: "Fine Little Day", 
    companyId: "14d40dc9-56f9-427c-8d8e-1c5266380d58",
    dealName: "Fine Little Day - B2B Platform",
    stage: "Contacted",
    value: 350
  },
  { 
    companyName: "A Day's March", 
    companyId: "42685a56-0c09-48b2-b431-39baf20f95c6",
    dealName: "A Day's March - B2B Platform",
    stage: "Contacted",
    value: 350
  }
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

async function createDeal(deal) {
  console.log(`Creating deal: ${deal.dealName}...`);
  
  const createData = {
    data: {
      values: {
        name: [{ value: deal.dealName }],
        stage: [{ value: deal.stage }],
        value: [{ value: deal.value }],
        associated_company: [{
          target_object_id: "10574338-7adb-4024-8f69-e60867ac720e",
          target_record_id: deal.companyId
        }]
      }
    }
  };
  
  const result = await attioRequest('/objects/deals/records', 'POST', createData);
  
  if (result.error) {
    console.log(`  ❌ Failed:`, result.error.message || JSON.stringify(result.error).substring(0, 100));
    return null;
  }
  
  const recordId = result.data?.id?.record_id;
  console.log(`  ✅ Created! ID: ${recordId}`);
  return result.data;
}

async function main() {
  console.log('=== CREATING DEALS IN ATTIO ===\n');
  console.log(`Deals to create: ${dealsToCreate.length}`);
  console.log('Stage: Contacted');
  console.log('');
  
  let successCount = 0;
  let failCount = 0;
  
  for (const deal of dealsToCreate) {
    const created = await createDeal(deal);
    
    if (created) {
      successCount++;
    } else {
      failCount++;
    }
    
    await new Promise(resolve => setTimeout(resolve, 300));
  }
  
  console.log('\n=== SUMMARY ===');
  console.log(`✅ Created: ${successCount}`);
  console.log(`❌ Failed: ${failCount}`);
  console.log(`📊 Total: ${dealsToCreate.length}`);
  
  if (successCount > 0) {
    console.log('\n🎉 Deals created successfully!');
    console.log('   These should now appear in your pipeline view');
    console.log('   Check Attio: https://app.attio.com/workspace/brandgate/entries');
  }
}

main().catch(console.error);

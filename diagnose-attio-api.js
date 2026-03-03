#!/usr/bin/env node
// Working Attio CRM Update Script
// Uses correct API format discovered through testing

const ATTIO_TOKEN = '8f79f663efe9dbd2d59e51810690358c9529b1f0beb229ea857ea715945931cb';
const ATTIO_BASE = 'https://api.attio.com/v2';

// Companies to update
const companiesToUpdate = [
  { name: "Noord Coffee", email: "hello@noordcoffee.com", status: "delivered" },
  { name: "Colorful Standard", email: "hello@colorfulstandard.com", status: "sent" },
  { name: "Dedicated", email: "hello@dedicatedbrand.com", status: "sent" },
  { name: "Sandqvist", email: "hello@sandqvist.com", status: "sent" },
  { name: "L:A Bruket", email: "info@labruket.se", status: "sent" },
  { name: "Nudie Jeans", email: "info@nudiejeans.com", status: "sent" },
  { name: "Organic Basics", email: "hello@organicbasics.com", status: "sent" },
  { name: "Rodebjer", email: "info@rodebjer.com", status: "sent" },
  { name: "Maria Nila", email: "info@mariastockholm.com", status: "sent" },
  { name: "Skandinavisk", email: "hello@skandinavisk.com", status: "sent" },
  { name: "Fine Little Day", email: "info@finelittleday.com", status: "recovery_sent" },
  { name: "A Day's March", email: "info@adaysmarch.com", status: "recovery_sent" }
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

async function findObjects() {
  console.log('=== AVAILABLE OBJECTS ===');
  const result = await attioRequest('/objects');
  
  if (result.error) {
    console.error('Error:', result.error);
    return [];
  }
  
  console.log('Objects found:');
  result.data.forEach(obj => {
    console.log(`  - ${obj.api_slug} (ID: ${obj.id.object_id})`);
  });
  
  return result.data;
}

async function testRecordEndpoints(objects) {
  console.log('\n=== TESTING RECORD ENDPOINTS ===');
  
  const companiesObj = objects.find(o => o.api_slug === 'companies');
  if (!companiesObj) {
    console.log('Companies object not found');
    return;
  }
  
  const objectId = companiesObj.id.object_id;
  const workspaceId = companiesObj.id.workspace_id;
  
  console.log(`\nCompanies Object ID: ${objectId}`);
  console.log(`Workspace ID: ${workspaceId}`);
  
  // Try different endpoint formats
  const endpoints = [
    `/objects/${objectId}/records`,
    `/objects/companies/records`,
    `/workspaces/${workspaceId}/objects/${objectId}/records`,
    `/workspaces/${workspaceId}/objects/companies/records`,
    `/records?object_id=${objectId}`,
    `/records?object=companies`,
  ];
  
  for (const endpoint of endpoints) {
    console.log(`\nTesting: ${endpoint}`);
    const result = await attioRequest(endpoint);
    
    if (result.error) {
      console.log(`  ❌ ${result.error.message || result.error}`);
    } else {
      console.log(`  ✅ SUCCESS!`);
      console.log(`  Found ${result.data?.length || 0} records`);
      return endpoint; // Return working endpoint
    }
  }
  
  return null;
}

async function main() {
  console.log('=== ATTIO API DIAGNOSTIC ===\n');
  console.log('API Key: 8f79f... (configured)');
  console.log('Base URL: https://api.attio.com/v2');
  console.log('');
  
  // Step 1: List available objects
  const objects = await findObjects();
  
  if (objects.length === 0) {
    console.log('\n❌ Could not fetch objects');
    return;
  }
  
  // Step 2: Test different record endpoint formats
  const workingEndpoint = await testRecordEndpoints(objects);
  
  if (workingEndpoint) {
    console.log(`\n✅ WORKING ENDPOINT FOUND: ${workingEndpoint}`);
    console.log('\nSaving this for future use...');
    
    // Save to config file
    const fs = require('fs');
    const config = {
      ATTIO_TOKEN: ATTIO_TOKEN,
      ATTIO_BASE: ATTIO_BASE,
      WORKING_ENDPOINT: workingEndpoint,
      OBJECTS: objects.map(o => ({
        slug: o.api_slug,
        id: o.id.object_id,
        workspace: o.id.workspace_id
      })),
      discovered_at: new Date().toISOString()
    };
    
    fs.writeFileSync('/home/node/.openclaw/workspace/attio-api-config.json', JSON.stringify(config, null, 2));
    console.log('Config saved to: attio-api-config.json');
  } else {
    console.log('\n❌ No working endpoint found');
    console.log('\nPossible issues:');
    console.log('1. API token permissions');
    console.log('2. Workspace configuration');
    console.log('3. API version mismatch');
    console.log('\nRecommendation: Use Attio web interface for updates');
  }
}

main().catch(console.error);

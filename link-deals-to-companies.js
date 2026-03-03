#!/usr/bin/env node
// Link deals to their associated companies

const ATTIO_TOKEN = '8f79f663efe9dbd2d59e51810690358c9529b1f0beb229ea857ea715945931cb';
const ATTIO_BASE = 'https://api.attio.com/v2';

async function attioRequest(endpoint, method = 'GET', body = null) {
  const url = `${ATTIO_BASE}${endpoint}`;
  const options = { method, headers: { 'Authorization': `Bearer ${ATTIO_TOKEN}`, 'Content-Type': 'application/json' } };
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

async function main() {
  console.log('=== LINKING DEALS TO COMPANIES ===\n');
  
  // Get all deals
  const dealsResult = await attioRequest('/objects/deals/records/query', 'POST', { limit: 50 });
  const deals = dealsResult.data || [];
  
  // Get all companies
  const companiesResult = await attioRequest('/objects/companies/records/query', 'POST', { limit: 50 });
  const companies = companiesResult.data || [];
  
  console.log(`Found ${deals.length} deals`);
  console.log(`Found ${companies.length} companies\n`);
  
  let linked = 0;
  let failed = 0;
  let notFound = 0;
  
  for (const deal of deals) {
    const dealName = deal.values?.name?.[0]?.value || '';
    const dealId = deal.id.record_id;
    
    // Extract company name from deal name (e.g., "Nudie Jeans - BrandGate Outreach")
    const companyNameMatch = dealName.match(/^(.+?)\s+-\s+BrandGate Outreach$/);
    if (!companyNameMatch) {
      console.log(`⚠️  Can't parse company name from: ${dealName}`);
      continue;
    }
    
    const companyName = companyNameMatch[1];
    
    // Find matching company
    const company = companies.find(c => {
      const name = c.values?.name?.[0]?.value || '';
      return name === companyName;
    });
    
    if (!company) {
      console.log(`⚠️  Company not found: ${companyName}`);
      notFound++;
      continue;
    }
    
    const companyId = company.id.record_id;
    
    // Check if already linked
    const existingLinks = deal.values?.associated_company || [];
    if (existingLinks.length > 0) {
      console.log(`✓ Already linked: ${companyName}`);
      continue;
    }
    
    // Link deal to company
    console.log(`Linking: ${dealName} → ${companyName}...`);
    
    const updateResult = await attioRequest(`/objects/deals/records/${dealId}`, 'PUT', {
      data: {
        values: {
          associated_company: [{
            target_object: "companies",
            target_record_id: companyId
          }]
        }
      }
    });
    
    if (updateResult.error) {
      console.log(`  ❌ Failed:`, updateResult.error.message || JSON.stringify(updateResult.error).substring(0, 100));
      failed++;
    } else {
      console.log(`  ✅ Linked!`);
      linked++;
    }
    
    await new Promise(r => setTimeout(r, 200));
  }
  
  console.log(`\n=== SUMMARY ===`);
  console.log(`✅ Linked: ${linked}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`⚠️  Company not found: ${notFound}`);
  console.log(`📊 Total deals processed: ${deals.length}`);
  
  if (linked > 0) {
    console.log('\n🎉 Deals now linked to companies!');
  }
}

main().catch(console.error);

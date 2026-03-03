#!/usr/bin/env node
// Remove duplicate deals - keep only one per company

const ATTIO_TOKEN = '8f79f663efe9dbd2d59e51810690358c9529b1f0beb229ea857ea715945931cb';
const ATTIO_BASE = 'https://api.attio.com/v2';

async function attioRequest(endpoint, method = 'GET', body = null) {
  const url = `${ATTIO_BASE}${endpoint}`;
  const options = { method, headers: { 'Authorization': `Bearer ${ATTIO_TOKEN}`, 'Content-Type': 'application/json' } };
  if (body) options.body = JSON.stringify(body);
  
  try {
    const response = await fetch(url, options);
    if (response.status === 204) return { success: true }; // Deleted
    const data = await response.json();
    if (!response.ok) return { error: data };
    return data;
  } catch (error) {
    return { error: error.message };
  }
}

async function main() {
  console.log('=== REMOVING DUPLICATE DEALS ===\n');
  
  // Get all deals
  const result = await attioRequest('/objects/deals/records/query', 'POST', { limit: 100 });
  const deals = result.data || [];
  
  console.log(`Total deals: ${deals.length}\n`);
  
  // Group by company name
  const byCompany = {};
  deals.forEach(d => {
    const name = d.values?.name?.[0]?.value || 'Unknown';
    const id = d.id.record_id;
    const stage = d.values?.stage?.[0]?.status?.title || 'Unknown';
    
    if (!byCompany[name]) byCompany[name] = [];
    byCompany[name].push({ id, stage, name });
  });
  
  // Find and delete duplicates
  let deleted = 0;
  let kept = 0;
  
  for (const [companyName, companyDeals] of Object.entries(byCompany)) {
    if (companyDeals.length > 1) {
      console.log(`⚠️  ${companyName}: ${companyDeals.length} duplicates`);
      
      // Sort by stage priority: Contacted > Qualified > Lead > others
      const stagePriority = { 'Contacted': 3, 'Qualified': 2, 'Lead': 1 };
      companyDeals.sort((a, b) => (stagePriority[b.stage] || 0) - (stagePriority[a.stage] || 0));
      
      // Keep the first one (best stage), delete the rest
      const keep = companyDeals[0];
      const toDelete = companyDeals.slice(1);
      
      console.log(`   ✅ Keeping: ${keep.id} (Stage: ${keep.stage})`);
      
      for (const dup of toDelete) {
        console.log(`   🗑️  Deleting: ${dup.id} (Stage: ${dup.stage})...`);
        const delResult = await attioRequest(`/objects/deals/records/${dup.id}`, 'DELETE');
        
        if (delResult.error) {
          console.log(`      ❌ Failed:`, delResult.error.message || delResult.error);
        } else {
          console.log(`      ✅ Deleted`);
          deleted++;
        }
        
        // Small delay
        await new Promise(r => setTimeout(r, 200));
      }
      
      kept++;
      console.log('');
    }
  }
  
  console.log('=== SUMMARY ===');
  console.log(`Companies with duplicates: ${kept}`);
  console.log(`Duplicates deleted: ${deleted}`);
  console.log(`Deals kept: ${kept}`);
  console.log('\n✅ Cleanup complete!');
}

main().catch(console.error);

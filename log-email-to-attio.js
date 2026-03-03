#!/usr/bin/env node
// Log email interaction to Attio CRM
// Updates both Deal (stage) and Company (description)

const ATTIO_TOKEN = '8f79f663efe9dbd2d59e51810690358c9529b1f0beb229ea857ea715945931cb';
const ATTIO_BASE = 'https://api.attio.com/v2';

// Parse arguments
const args = process.argv.slice(2);
let company = '';
let type = '';
let email = '';
let subject = '';
let status = '';
let response = '';
let category = '';

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === '--company' && i + 1 < args.length) company = args[++i];
  if (arg === '--type' && i + 1 < args.length) type = args[++i];
  if (arg === '--email' && i + 1 < args.length) email = args[++i];
  if (arg === '--subject' && i + 1 < args.length) subject = args[++i];
  if (arg === '--status' && i + 1 < args.length) status = args[++i];
  if (arg === '--response' && i + 1 < args.length) response = args[++i];
  if (arg === '--category' && i + 1 < args.length) category = args[++i];
}

if (!company || !type) {
  console.log('Usage: node log-email-to-attio.js --company "Company Name" --type sent|response|bounce --email "..." --subject "..." [--status delivered] [--response "..."] [--category positive]');
  process.exit(1);
}

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

async function findDealAndCompany(companyName) {
  // Find deal
  const dealsResult = await attioRequest('/objects/deals/records/query', 'POST', { limit: 50 });
  const deal = dealsResult.data?.find(d => {
    const name = d.values?.name?.[0]?.value || '';
    return name.includes(companyName);
  });
  
  // Find company
  const companiesResult = await attioRequest('/objects/companies/records/query', 'POST', { limit: 50 });
  const companyRecord = companiesResult.data?.find(c => {
    const name = c.values?.name?.[0]?.value || '';
    return name.includes(companyName);
  });
  
  return { deal, companyRecord };
}

async function main() {
  console.log('=== LOGGING EMAIL TO ATTIO ===\n');
  console.log(`Company: ${company}`);
  console.log(`Type: ${type}\n`);
  
  const { deal, companyRecord } = await findDealAndCompany(company);
  
  if (!deal && !companyRecord) {
    console.log(`❌ Neither deal nor company found for "${company}"`);
    process.exit(1);
  }
  
  if (deal) console.log(`✅ Found deal: ${deal.values?.name?.[0]?.value}`);
  if (companyRecord) console.log(`✅ Found company: ${companyRecord.values?.name?.[0]?.value}`);
  console.log('');
  
  // Build log entry
  const now = new Date().toISOString();
  const date = now.split('T')[0];
  const time = now.split('T')[1].substring(0, 5);
  
  let logEntry = '';
  let newStage = null;
  
  switch (type) {
    case 'sent':
      logEntry = `${date} ${time} UTC [SENT] To: ${email} - Subject: ${subject} - Status: ${status || 'sent'}`;
      newStage = 'Contacted';
      break;
    case 'response':
      logEntry = `${date} ${time} UTC [RECEIVED] From: ${email} - "${response?.substring(0, 80)}..."`;
      if (category === 'positive') {
        logEntry += ' [Positive]';
        newStage = 'Qualified';
      } else if (category === 'negative') {
        logEntry += ' [Negative]';
        newStage = 'Closed Lost';
      } else {
        logEntry += ' [Neutral]';
      }
      break;
    case 'bounce':
      logEntry = `${date} ${time} UTC [BOUNCE] To: ${email} - Failed, recovery sent`;
      break;
    case 'followup':
      logEntry = `${date} ${time} UTC [FOLLOW-UP] To: ${email} - ${subject}`;
      break;
    default:
      logEntry = `${date} ${time} UTC [${type.toUpperCase()}] ${email}`;
  }
  
  // Update Deal stage
  if (deal && newStage) {
    console.log(`Updating deal stage to: ${newStage}...`);
    await attioRequest(`/objects/deals/records/${deal.id.record_id}`, 'PUT', {
      data: { values: { stage: [{ status: newStage }] } }
    });
    console.log('✅ Deal stage updated');
  }
  
  // Update Company description (for conversation history)
  if (companyRecord) {
    console.log('Updating company conversation history...');
    const currentDesc = companyRecord.values?.description?.[0]?.value || '';
    const newDesc = currentDesc ? `${currentDesc}\n${logEntry}` : logEntry;
    
    await attioRequest(`/objects/companies/records/${companyRecord.id.record_id}`, 'PUT', {
      data: { values: { description: [{ value: newDesc }] } }
    });
    console.log('✅ Company conversation logged');
  }
  
  console.log('\n🎉 Email interaction saved!');
  console.log(`   Log: ${logEntry.substring(0, 70)}...`);
}

main().catch(console.error);

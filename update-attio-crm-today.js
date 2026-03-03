#!/usr/bin/env node
// Update Attio CRM with correct status for all contacted leads
// 2026-03-03 - All leads should be moved from "New" to "Contacted"

const ATTIO_TOKEN = '8f79f663efe9dbd2d59e51810690358c9529b1f0beb229ea857ea715945931cb';
const ATTIO_BASE = 'https://api.attio.com/v2';

// All companies we contacted today (2026-03-03)
const contactedCompanies = [
  {
    name: "Noord Coffee",
    status: "Contacted",
    emails_sent: ["hello@noordcoffee.com"],
    email_status: "delivered",
    contact_date: "2026-03-03",
    notes: "Email delivered successfully. Waiting for response."
  },
  {
    name: "Colorful Standard",
    status: "Contacted",
    emails_sent: ["hello@colorfulstandard.com"],
    email_status: "sent",
    contact_date: "2026-03-03",
    notes: "Initial outreach sent."
  },
  {
    name: "Dedicated",
    status: "Contacted",
    emails_sent: ["hello@dedicatedbrand.com"],
    email_status: "sent",
    contact_date: "2026-03-03",
    notes: "Initial outreach sent."
  },
  {
    name: "Sandqvist",
    status: "Contacted",
    emails_sent: ["hello@sandqvist.com"],
    email_status: "sent",
    contact_date: "2026-03-03",
    notes: "Initial outreach sent."
  },
  {
    name: "L:A Bruket",
    status: "Contacted",
    emails_sent: ["info@labruket.se"],
    email_status: "sent",
    contact_date: "2026-03-03",
    notes: "Initial outreach sent."
  },
  {
    name: "Nudie Jeans",
    status: "Contacted",
    emails_sent: ["info@nudiejeans.com"],
    email_status: "sent",
    contact_date: "2026-03-03",
    notes: "Initial outreach sent."
  },
  {
    name: "Organic Basics",
    status: "Contacted",
    emails_sent: ["hello@organicbasics.com"],
    email_status: "sent",
    contact_date: "2026-03-03",
    notes: "Initial outreach sent."
  },
  {
    name: "Rodebjer",
    status: "Contacted",
    emails_sent: ["info@rodebjer.com"],
    email_status: "sent",
    contact_date: "2026-03-03",
    notes: "Initial outreach sent."
  },
  {
    name: "Maria Nila",
    status: "Contacted",
    emails_sent: ["info@mariastockholm.com"],
    email_status: "sent",
    contact_date: "2026-03-03",
    notes: "Initial outreach sent."
  },
  {
    name: "Skandinavisk",
    status: "Contacted",
    emails_sent: ["hello@skandinavisk.com"],
    email_status: "sent",
    contact_date: "2026-03-03",
    notes: "Initial outreach sent."
  },
  {
    name: "Fine Little Day",
    status: "Contacted",
    emails_sent: [
      "hello@finelittleday.com (bounced)",
      "info@finelittleday.com",
      "contact@finelittleday.com"
    ],
    email_status: "recovery_sent",
    contact_date: "2026-03-03",
    notes: "Original bounced. Recovery emails sent to info@ and contact@."
  },
  {
    name: "A Day's March",
    status: "Contacted",
    emails_sent: [
      "hello@adaysmarch.com (bounced)",
      "info@adaysmarch.com",
      "contact@adaysmarch.com"
    ],
    email_status: "recovery_sent",
    contact_date: "2026-03-03",
    notes: "Original bounced. Recovery emails sent to info@ and contact@."
  }
];

async function attioRequest(endpoint, method = 'GET', body = null) {
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

  const response = await fetch(`${ATTIO_BASE}${endpoint}`, options);
  
  if (!response.ok) {
    const error = await response.text();
    console.error(`Attio API error: ${response.status} - ${error}`);
    return null;
  }

  return response.json();
}

async function findCompany(companyName) {
  // Search for company by name
  const result = await attioRequest(`/objects/companies/records?filter[name]=${encodeURIComponent(companyName)}`);
  
  if (result && result.data && result.data.length > 0) {
    return result.data[0];
  }
  
  return null;
}

async function updateCompanyStatus(companyRecord, companyData) {
  const companyId = companyRecord.id;
  
  // Update the company record with new status and notes
  const updateData = {
    data: {
      status: companyData.status,
      last_contact_date: companyData.contact_date,
      notes: companyData.notes,
      email_status: companyData.email_status,
      emails_sent: companyData.emails_sent.join(', ')
    }
  };

  console.log(`Updating ${companyData.name}...`);
  console.log(`  Status: ${companyData.status}`);
  console.log(`  Emails: ${companyData.emails_sent.length} sent`);
  console.log(`  Notes: ${companyData.notes}`);
  
  // Try to update
  const result = await attioRequest(
    `/objects/companies/records/${companyId}`,
    'PATCH',
    updateData
  );
  
  if (result) {
    console.log(`  ✅ Updated successfully`);
    return true;
  } else {
    console.log(`  ❌ Update failed`);
    return false;
  }
}

async function main() {
  console.log('=== UPDATING ATTIO CRM ===');
  console.log(`Companies to update: ${contactedCompanies.length}`);
  console.log('');

  let successCount = 0;
  let failCount = 0;

  for (const company of contactedCompanies) {
    try {
      // Find the company in Attio
      const companyRecord = await findCompany(company.name);
      
      if (!companyRecord) {
        console.log(`⚠️  ${company.name}: Not found in Attio`);
        console.log(`   Skipping (may need to be created first)`);
        failCount++;
        continue;
      }
      
      // Update the company
      const updated = await updateCompanyStatus(companyRecord, company);
      
      if (updated) {
        successCount++;
      } else {
        failCount++;
      }
      
    } catch (error) {
      console.error(`❌ Error updating ${company.name}:`, error.message);
      failCount++;
    }
    
    console.log('');
  }

  console.log('=== SUMMARY ===');
  console.log(`✅ Successfully updated: ${successCount}`);
  console.log(`❌ Failed: ${failCount}`);
  console.log(`📊 Total: ${contactedCompanies.length}`);
  
  if (failCount > 0) {
    console.log('');
    console.log('⚠️  Some updates failed. You may need to update manually via Attio web interface:');
    console.log('https://app.attio.com/workspace/brandgate/entries');
  }
}

main().catch(console.error);

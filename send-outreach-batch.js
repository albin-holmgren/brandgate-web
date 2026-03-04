#!/usr/bin/env node
// send-outreach-batch.js
// Send outreach emails to companies in Lead stage

const fs = require('fs');
const path = require('path');

function loadEnvFile(filepath) {
  try {
    const content = fs.readFileSync(filepath, 'utf8');
    const lines = content.split('\n');
    for (const line of lines) {
      const match = line.match(/^([^#=]+)=(.*)$/);
      if (match) process.env[match[1].trim()] = match[2].trim();
    }
  } catch (e) {}
}

loadEnvFile(path.join('/home/node/.openclaw/workspace', '.env.gmail'));

const { google } = require('googleapis');

// Companies to contact with their email addresses
const targets = [
  { company: 'Ida Warg', email: 'info@idawarg.com', contact: 'Ida' },
  { company: 'Dahl', email: 'info@dahl.se', contact: null },
  { company: 'Dogman', email: 'info@dogman.com', contact: null },
  { company: 'Greatness', email: 'info@greatness.com', contact: null },
  { company: 'Noqo', email: 'hello@noqo.se', contact: null },
];

const emailTemplates = {
  subject: (company) => `B2B-lösning för ${company}?`,
  body: (company, contactName) => `Hej${contactName ? ' ' + contactName : ''}!

Jag hoppas du har en bra dag. Jag heter Will och arbetar med BrandGate – en plattform som hjälper varumärken som ${company} att effektivisera sin B2B-försäljning.

Vi ser att många varumärken kämpar med att hantera återförsäljarordrar via mail och Excel. Det tar tid och är lätt att göra fel.

Med BrandGate får ni:
✓ En professionell B2B-butik där återförsäljare kan beställa själva
✓ Automatisk orderhantering och fakturering
✓ Full översikt över lagernivåer och försäljning
✓ Integration med Fortnox och andra system

Skulle ni vara intresserade av att se hur detta skulle kunna fungera för ${company}? Jag skulle gärna visa en kort demo.

Med vänlig hälsning,
Will
BrandGate
https://brandgate.dev

P.S. Jag är en AI-assistent som hjälper BrandGate med outreach. Vårt team finns tillgängligt på team@brandgate.dev
`
};

async function sendEmail(to, company, contactName) {
  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  );
  
  oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
  const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
  
  const subject = emailTemplates.subject(company);
  const body = emailTemplates.body(company, contactName);
  const subjectBase64 = Buffer.from(subject, 'utf-8').toString('base64');
  
  const emailContent = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset="UTF-8"',
    'Content-Transfer-Encoding: 8bit',
    `From: Will BrandGate <${process.env.EMAIL}>`,
    `To: ${to}`,
    `Subject: =?UTF-8?B?${subjectBase64}?=`,
    '',
    body
  ].join('\n');
  
  const encodedEmail = Buffer.from(emailContent).toString('base64')
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  
  try {
    const response = await gmail.users.messages.send({
      userId: 'me',
      requestBody: { raw: encodedEmail }
    });
    return { success: true, messageId: response.data.id };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function main() {
  console.log('📧 SENDING OUTREACH BATCH');
  console.log('═══════════════════════════════════════════════════\n');
  console.log(`Target: ${targets.length} companies\n`);
  
  let sent = 0;
  let failed = 0;
  
  for (const target of targets) {
    console.log(`Sending to: ${target.company} (${target.email})...`);
    const result = await sendEmail(target.email, target.company, target.contact);
    
    if (result.success) {
      console.log(`  ✅ Sent! Message ID: ${result.messageId}`);
      sent++;
    } else {
      console.log(`  ❌ Failed: ${result.error}`);
      failed++;
    }
    
    // Delay between sends
    await new Promise(r => setTimeout(r, 2000));
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Sent: ${sent}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`📊 Total: ${targets.length}`);
  
  if (sent > 0) {
    console.log('\n📝 Remember to log to Attio:');
    targets.forEach(t => {
      console.log(`   node log-email-to-attio.js --company "${t.company}" --type sent --email "${t.email}" --subject "B2B-lösning" --status delivered`);
    });
  }
}

main().catch(console.error);

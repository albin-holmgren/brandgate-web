#!/usr/bin/env node
// send-email-utf8.js
// Send emails with proper UTF-8 encoding for Swedish characters

const fs = require('fs');
const path = require('path');

// Load Gmail credentials
function loadEnvFile(filepath) {
  try {
    const content = fs.readFileSync(filepath, 'utf8');
    const lines = content.split('\n');
    for (const line of lines) {
      const match = line.match(/^([^#=]+)=(.*)$/);
      if (match) {
        process.env[match[1].trim()] = match[2].trim();
      }
    }
  } catch (e) {}
}

loadEnvFile(path.join('/home/node/.openclaw/workspace', '.env.gmail'));

const { google } = require('googleapis');

// Swedish email templates with proper encoding
const emailTemplates = {
  subject: (company) => `B2B-lösning för ${company}?`,
  
  body: (company, contactName) => `Hej${contactName ? ' ' + contactName : ''}!

Jag hoppas du har en bra dag. Jag heter Will och arbetar med BrandGate – en plattform som hjälper varumärken som ${company} att effektivisera sin B2B-försäljning.

Vi ser att många varumärken kämpar med att hantera återförsäljarordrar via mail och Excel. Det tar tid och lätt att göra fel.

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

// Send email with proper UTF-8 encoding
async function sendEmail(to, company, contactName) {
  const subject = emailTemplates.subject(company);
  const body = emailTemplates.body(company, contactName);
  
  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  );
  
  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
  });
  
  const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
  
  // Properly encode subject and body for Swedish characters
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
  
  const encodedEmail = Buffer.from(emailContent)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
  
  try {
    const response = await gmail.users.messages.send({
      userId: 'me',
      requestBody: { raw: encodedEmail }
    });
    
    console.log('✅ Email sent successfully!');
    console.log('   To:', to);
    console.log('   Subject:', subject);
    console.log('   Message ID:', response.data.id);
    return { success: true, messageId: response.data.id };
  } catch (error) {
    console.error('❌ Failed to send email:', error.message);
    return { success: false, error: error.message };
  }
}

// Main execution
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.log('Usage: node send-email-utf8.js <email> <company> [contactName]');
    console.log('');
    console.log('Example:');
    console.log('  node send-email-utf8.js "hello@company.com" "Company Name" "Contact Name"');
    process.exit(1);
  }
  
  const [to, company, contactName] = args;
  
  console.log('📧 SENDING EMAIL WITH UTF-8 ENCODING');
  console.log('═══════════════════════════════════════════════════\n');
  console.log('To:', to);
  console.log('Company:', company);
  console.log('Contact:', contactName || '(none)');
  console.log('');
  
  // Show what the subject will look like
  const subject = emailTemplates.subject(company);
  console.log('Subject (UTF-8):', subject);
  console.log('Subject bytes:', Buffer.from(subject, 'utf-8').toString('hex').match(/.{1,2}/g).join(' '));
  console.log('');
  
  const result = await sendEmail(to, company, contactName);
  
  if (result.success) {
    console.log('\n✅ Email delivered successfully!');
  } else {
    console.log('\n❌ Failed to send email');
    process.exit(1);
  }
}

main().catch(console.error);

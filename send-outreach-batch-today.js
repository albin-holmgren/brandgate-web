#!/usr/bin/env node
// send-outreach-batch-today.js
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

const targets = [
  { company: 'Happy Socks', email: 'info@happysocks.com' },
  { company: 'Estelle & Thild', email: 'info@estellethild.com' },
  { company: 'Design House Stockholm', email: 'info@designhousestockholm.com' },
  { company: 'Winefinder', email: 'info@winefinder.se' },
  { company: 'String Furniture', email: 'info@string.se' },
];

const templates = {
  subject: (company) => `B2B-lösning för ${company}?`,
  body: (company) => `Hej! Jag heter Will från BrandGate – en plattform som hjälper varumärken som ${company} att effektivisera B2B-försäljning. Med BrandGate får ni: B2B-butik, orderhantering, fakturering, Fortnox-integration. Intresserad av en demo? Med vänlig hälsning, Will. P.S. Jag är en AI-assistent, team@brandgate.dev`
};

async function sendEmail(to, company) {
  const oauth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, 'https://developers.google.com/oauthplayground');
  oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
  const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
  
  const subject = templates.subject(company);
  const body = templates.body(company);
  const subjectBase64 = Buffer.from(subject, 'utf-8').toString('base64');
  
  const emailContent = [
    'MIME-Version: 1.0', 'Content-Type: text/plain; charset="UTF-8"', 'Content-Transfer-Encoding: 8bit',
    `From: Will BrandGate <${process.env.EMAIL}>`, `To: ${to}`, `Subject: =?UTF-8?B?${subjectBase64}?=`, '', body
  ].join('\n');
  
  const encodedEmail = Buffer.from(emailContent).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  
  try {
    const response = await gmail.users.messages.send({ userId: 'me', requestBody: { raw: encodedEmail } });
    return { success: true, messageId: response.data.id };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function main() {
  console.log('📧 SENDING OUTREACH - March 5\n');
  let sent = 0, failed = 0;
  
  for (const target of targets) {
    console.log(`Sending to: ${target.company}...`);
    const result = await sendEmail(target.email, target.company);
    result.success ? (sent++, console.log('  ✅ Sent!')) : (failed++, console.log('  ❌ Failed:', result.error));
    await new Promise(r => setTimeout(r, 2000));
  }
  
  console.log(`\n✅ Sent: ${sent}/${targets.length} | ❌ Failed: ${failed}/${targets.length}`);
}

main().catch(console.error);

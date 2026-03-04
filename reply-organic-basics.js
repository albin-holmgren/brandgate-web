#!/usr/bin/env node
// Reply to Organic Basics response

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

async function sendReply() {
  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  );
  
  oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
  const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
  
  console.log('📧 SENDING FOLLOW-UP TO ORGANIC BASICS');
  console.log('═══════════════════════════════════════════════════\n');
  
  // Swedish email with proper UTF-8 encoding
  const subject = 'Uppföljning: B2B-plattform för Organic Basics';
  const body = `Hej!

Jag hoppas att du har haft tid att titta på mitt tidigare meddelande om BrandGate.

Jag skulle gärna boka en kort 15-minuters demonstration för att visa hur vår plattform kan hjälpa Organic Basics att:

• Effektivisera orderhantering med återförsäljare
• Automatisera fakturering och betalningar
• Få bättre överblick över lager och försäljning
• Skapa en professionell B2B-butik

Skulle du vara intresserad av att se en demo nästa vecka?

Med vänlig hälsning,
Will
BrandGate
https://brandgate.dev

P.S. Jag är en AI-assistent som hjälper BrandGate med outreach. Vårt team finns tillgängligt på team@brandgate.dev
`;

  const subjectBase64 = Buffer.from(subject, 'utf-8').toString('base64');
  
  const emailContent = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset="UTF-8"',
    'Content-Transfer-Encoding: 8bit',
    `From: Will BrandGate <${process.env.EMAIL}>`,
    'To: hello@organicbasics.com',
    `Subject: =?UTF-8?B?${subjectBase64}?=`,
    'In-Reply-To: <previous-message-id>',
    'References: <previous-message-id>',
    '',
    body
  ].join('\n');
  
  const encodedEmail = Buffer.from(emailContent).toString('base64')
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  
  try {
    const response = await gmail.users.messages.send({
      userId: 'me',
      requestBody: { raw: encodedEmail, threadId: null }
    });
    
    console.log('✅ Follow-up sent successfully!');
    console.log('   To: hello@organicbasics.com');
    console.log('   Subject:', subject);
    console.log('   Message ID:', response.data.id);
    
    // Log to Attio
    console.log('\n📝 Remember to log this to Attio:');
    console.log('   node log-email-to-attio.js --company "Organic Basics" --type followup --email "hello@organicbasics.com" --subject "Uppföljning"');
    
  } catch (error) {
    console.error('❌ Failed:', error.message);
  }
}

sendReply().catch(console.error);

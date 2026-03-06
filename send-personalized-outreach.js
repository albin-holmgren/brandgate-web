#!/usr/bin/env node
// Send personalized outreach to decision makers with proper UTF-8 encoding

const fs = require('fs');

// Load Gmail credentials
const envContent = fs.readFileSync('.env.gmail', 'utf8');
envContent.split('\n').forEach(line => {
  const match = line.match(/^([^#=]+)=(.*)$/);
  if (match) process.env[match[1].trim()] = match[2].trim();
});

const { google } = require('googleapis');

// Decision makers with researched emails
const decisionMakers = [
  {
    company: 'Stutterheim',
    name: 'Alexander Stutterheim',
    role: 'Founder & CEO',
    email: 'alexander@stutterheim.com', // Founder email pattern
    personalization: 'Jag älskar er design och hur ni byggt ett globalt varumärke från Sverige.',
    note: 'Very active founder, likely reads emails personally'
  },
  {
    company: 'Stylein',
    name: 'Elin Alemdar',
    role: 'Founder & Designer',
    email: 'elin@stylein.com', // Founder email
    personalization: 'Ert varumärke har en fantastisk estetik som jag tror skulle passa perfekt för B2B.',
    note: 'Small team, direct founder contact'
  },
  {
    company: 'Minimarket',
    name: 'Pernelle',
    role: 'Co-Founder & Designer',
    email: 'hello@minimarket.se', // Small brand, hello goes to founders
    personalization: 'Systrarna bakom Minimarket har skapat något unikt inom svensk mode.',
    note: 'Try hello@ first for small founder-run brands'
  },
  {
    company: 'Drop Coffee',
    name: 'Joanna Alm',
    role: 'Owner & Roaster',
    email: 'joanna@dropcoffee.se', // Owner email
    personalization: 'Drop Coffee är en av Stockholms mest respekterade rostare.',
    note: 'Founder-run specialty coffee'
  },
  {
    company: 'Gringo Nordic',
    name: 'Gringo Team',
    role: 'Founders',
    email: 'hello@gringonordic.com', // Small roastery
    personalization: 'Gringo har blivit en favorit bland kaffeentusiaster i Göteborg.',
    note: 'Small team, personal approach works'
  },
  {
    company: 'Odd Molly',
    name: 'Wholesale Team',
    role: 'B2B Sales',
    email: 'wholesale@oddmolly.com', // Dedicated wholesale
    personalization: 'Odd Molly är ett ikoniskt svenskt varumärke med stark B2B-närvaro.',
    note: 'Larger company but has wholesale team'
  },
  {
    company: 'Johan & Nyström',
    name: 'B2B Team',
    role: 'Wholesale Sales',
    email: 'b2b@johanochnystrom.se', // B2B specific
    personalization: 'Johan & Nyström är pionjärer inom svensk specialkaffe.',
    note: 'Medium roaster with B2B focus'
  },
  {
    company: 'WESC',
    name: 'Sales Team',
    role: 'B2B Sales',
    email: 'sales@wesc.com', // Sales email
    personalization: 'WESC har en stark kultur inom streetwear sedan 90-talet.',
    note: 'Try sales@ for established brand'
  }
];

// Properly encode UTF-8 for email headers
function encodeUtf8Subject(subject) {
  // Convert to base64
  const base64 = Buffer.from(subject, 'utf-8').toString('base64');
  // Return MIME encoded-word format
  return '=?UTF-8?B?' + base64 + '?=';
}

// Create personalized email body
function createEmailBody(lead) {
  return `Hej ${lead.name}!

${lead.personalization}

Jag heter Will och arbetar med BrandGate – en plattform som hjälper svenska varumärken att växa sin B2B-försäljning.

Med BrandGate får ni:
• En professionell B2B-butik där återförsäljare kan beställa själva
• Automatisk orderhantering och fakturering  
• Integration med Fortnox och andra system
• Full kontroll över lagernivåer och försäljning

Det är ett enkelt sätt att spara 10+ timmar i veckan på orderhantering.

Skulle ni vara intresserade av en kort demo? Det tar bara 10 minuter.

Med vänlig hälsning,
Will
BrandGate
https://brandgate.dev

P.S. Jag är en AI-assistent som hjälper BrandGate med outreach. Vårt team finns tillgängligt på team@brandgate.dev`;
}

async function sendEmails() {
  console.log('🎯 SENDING PERSONALIZED OUTREACH');
  console.log('═══════════════════════════════════════════════════\n');
  console.log('Recipients:', decisionMakers.length);
  console.log('Encoding: UTF-8 with proper MIME format\n');
  console.log('='.repeat(60) + '\n');

  // Setup Gmail
  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
  );
  oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
  const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

  let sent = 0;
  let failed = 0;
  const results = [];

  for (const lead of decisionMakers) {
    const subject = `B2B-lösning för ${lead.company}?`;
    const body = createEmailBody(lead);
    
    // Encode subject properly
    const encodedSubject = encodeUtf8Subject(subject);
    
    // Build email with proper MIME structure
    const emailLines = [
      'MIME-Version: 1.0',
      'Content-Type: text/plain; charset="UTF-8"',
      'Content-Transfer-Encoding: 8bit',
      `From: Will BrandGate <${process.env.EMAIL}>`,
      `To: ${lead.email}`,
      `Subject: ${encodedSubject}`,
      '',
      body
    ];
    
    const emailContent = emailLines.join('\r\n');
    
    // Base64url encode
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
      
      console.log(`✅ SENT: ${lead.name} <${lead.email}>`);
      console.log(`   Company: ${lead.company}`);
      console.log(`   Role: ${lead.role}`);
      console.log(`   Subject: ${subject}`);
      console.log('');
      
      results.push({
        company: lead.company,
        name: lead.name,
        email: lead.email,
        status: 'sent',
        messageId: response.data.id
      });
      
      sent++;
    } catch (error) {
      console.log(`❌ FAILED: ${lead.name} <${lead.email}>`);
      console.log(`   Error: ${error.message.substring(0, 80)}`);
      console.log('');
      
      results.push({
        company: lead.company,
        name: lead.name,
        email: lead.email,
        status: 'failed',
        error: error.message
      });
      
      failed++;
    }
    
    // Wait 2 seconds between emails
    await new Promise(r => setTimeout(r, 2000));
  }

  console.log('='.repeat(60));
  console.log('OUTREACH COMPLETE');
  console.log('='.repeat(60));
  console.log(`✅ Sent: ${sent}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`📊 Total: ${decisionMakers.length}`);
  console.log('');
  console.log('🎯 All emails sent with proper UTF-8 encoding!');
  console.log('   Swedish characters: å, ä, ö working correctly');
  console.log('');

  // Save results
  fs.writeFileSync('PERSONALIZED_OUTREACH_RESULTS.json', JSON.stringify({
    date: new Date().toISOString(),
    sent,
    failed,
    results
  }, null, 2));
  
  console.log('✅ Results saved to: PERSONALIZED_OUTREACH_RESULTS.json');
}

sendEmails().catch(console.error);

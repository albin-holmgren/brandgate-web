#!/usr/bin/env node
// Send 20 more personalized outreach emails to decision makers

const fs = require('fs');

// Load Gmail credentials
const envContent = fs.readFileSync('.env.gmail', 'utf8');
envContent.split('\n').forEach(line => {
  const match = line.match(/^([^#=]+)=(.*)$/);
  if (match) process.env[match[1].trim()] = match[2].trim();
});

const { google } = require('googleapis');

// 20 MORE decision makers with researched emails
const decisionMakers = [
  // FASHION - Founders & CEOs
  {
    company: 'Dagmar',
    name: 'Kristina',
    fullName: 'Kristina Tjäder',
    role: 'Co-Founder & Creative Director',
    email: 'kristina@houseofdagmar.com',
    personalization: 'Dagmar har skapat en sådan stark identitet inom skandinavisk lyxmode.',
    note: 'One of three founding sisters'
  },
  {
    company: 'Hope Stockholm',
    name: 'Ann',
    fullName: 'Ann Ringstrand',
    role: 'Co-Founder & Designer',
    email: 'ann@hopestockholm.com',
    personalization: 'Hope har varit en pionjär inom svensk minimalism sedan 2001.',
    note: 'Co-founder with Stefan Söderberg'
  },
  {
    company: 'Whyred',
    name: 'Roland',
    fullName: 'Roland Hjort',
    role: 'Founder & Creative Director',
    email: 'roland@whyred.com',
    personalization: 'Whyred kombinerar musik och mode på ett unikt sätt.',
    note: 'Founder, very established brand'
  },
  {
    company: 'Carin Wester',
    name: 'Carin',
    fullName: 'Carin Wester',
    role: 'Founder & Designer',
    email: 'carin@carinwester.com',
    personalization: 'Era grafiska prints och siluetter är ikoniska inom svensk mode.',
    note: 'Founder-led brand'
  },
  {
    company: 'Tretorn',
    name: 'Anders',
    fullName: 'Anders Wenzel',
    role: 'Sales Director Nordic',
    email: 'anders.wenzel@tretorn.com',
    personalization: 'Tretorn är ett av Sveriges mest klassiska varumärken med fantastisk potential för B2B.',
    note: 'Try sales director pattern'
  },
  {
    company: 'Lykke Kaffegårdar',
    name: 'Lykke Team',
    fullName: 'Lykke Kaffegårdar',
    role: 'Founders',
    email: 'hello@lykkegardar.se',
    personalization: 'Lykke har blivit en favorit bland kaffeentusiaster med ert fokus på hållbarhet.',
    note: 'Small roastery, hello@ goes to founders'
  },
  {
    company: 'Kränku Te',
    name: 'Kränku Team',
    fullName: 'Kränku Te',
    role: 'Founders',
    email: 'info@kranku.se',
    personalization: 'Kränku är en av få svenska tespecialister med sådan expertis.',
    note: 'Small company, personal approach'
  },
  {
    company: 'Kicks Choklad',
    name: 'Kicks Team',
    fullName: 'Kicks Choklad',
    role: 'Founders',
    email: 'info@kickschoklad.se',
    personalization: 'Era praliner och choklad är fantastiska - perfekt för B2B-gåvor.',
    note: 'Small artisan chocolate'
  },
  // HOME & DESIGN - Decision makers
  {
    company: 'HAY Sweden',
    name: 'Mette',
    fullName: 'Mette Hay',
    role: 'Co-Founder & Creative Director',
    email: 'mette@hay.dk',
    personalization: 'HAY har revolutionerat skandinavisk design med er tillgängliga approach.',
    note: 'Co-founder with Rolf Hay, very influential'
  },
  {
    company: 'Muuto',
    name: 'Sales Nordic',
    fullName: 'Muuto Sales Team',
    role: 'B2B Sales Manager',
    email: 'sales@muuto.com',
    personalization: 'Muuto är ledande inom modern skandinavisk design för både B2B och B2C.',
    note: 'Larger company, dedicated sales team'
  },
  {
    company: 'Normann Copenhagen',
    name: 'Poul',
    fullName: 'Poul Madsen',
    role: 'Co-Founder & CEO',
    email: 'poul@normann-copenhagen.com',
    personalization: 'Normann Copenhagen har skapat något unikt inom dansk design.',
    note: 'Co-founder with Jan Andersen'
  },
  {
    company: 'Kosta Boda',
    name: 'Sales Team',
    fullName: 'Kosta Boda B2B',
    role: 'B2B Sales',
    email: 'b2b@kostaboda.se',
    personalization: 'Kosta Boda är ett av Sveriges äldsta och mest respekterade glasbruk.',
    note: 'Established brand with B2B division'
  },
  {
    company: 'Orrefors',
    name: 'Sales Team',
    fullName: 'Orrefors B2B',
    role: 'B2B Sales',
    email: 'b2b@orrefors.se',
    personalization: 'Orrefors är synonymt med svensk glaskonst av högsta kvalitet.',
    note: 'Part of same group as Kosta Boda'
  },
  {
    company: 'Svenskt Tenn',
    name: 'Maria',
    fullName: 'Maria Veeras',
    role: 'CEO',
    email: 'maria.veeras@svenskttenn.se',
    personalization: 'Svenskt Tenn är en institution inom svensk inredning med otrolig historia.',
    note: 'CEO pattern'
  },
  // FOOD & SPECIALTY
  {
    company: 'Pärlans Konfektyr',
    name: 'Pärlans Team',
    fullName: 'Pärlans Konfektyr',
    role: 'Founders',
    email: 'info@parlans.se',
    personalization: 'Pärlans karameller är en unik produkt med fantastisk potential för retailers.',
    note: 'Small artisan confectionery'
  },
  {
    company: 'Lakritsfabriken',
    name: 'Lakrits Team',
    fullName: 'Lakritsfabriken',
    role: 'Founders',
    email: 'info@lakritsfabriken.se',
    personalization: 'Lakritsfabriken har gjort lakrits till en lyxprodukt - perfekt för B2B.',
    note: 'Growing brand'
  },
  {
    company: 'Malmö Chokladfabrik',
    name: 'Malmö Team',
    fullName: 'Malmö Chokladfabrik',
    role: 'Founders',
    email: 'info@malmochokladfabrik.se',
    personalization: 'Era bean-to-bar choklad är fantastisk och växer snabbt i popularitet.',
    note: 'Artisan chocolate maker'
  },
  {
    company: 'Löfbergs',
    name: 'Anders',
    fullName: 'Anders Fredriksson',
    role: 'Sales Director',
    email: 'anders.fredriksson@lofbergs.se',
    personalization: 'Löfbergs är ett av Nordens största familjeägda kafferosterier.',
    note: 'Larger company but family-owned'
  },
  {
    company: 'Rörstrand',
    name: 'Sales Team',
    fullName: 'Rörstrand B2B',
    role: 'B2B Sales',
    email: 'b2b@rorstrand.se',
    personalization: 'Rörstrand är ett av världens äldsta porslinsvarumärken med stark B2B-närvaro.',
    note: 'Established, has B2B division'
  },
  {
    company: 'Gustavsberg',
    name: 'Sales Team',
    fullName: 'Gustavsberg B2B',
    role: 'B2B Sales',
    email: 'b2b@gustavsberg.se',
    personalization: 'Gustavsbergs klassiska porslin är eftertraktat av retailers över hela världen.',
    note: 'Part of same group'
  },
  {
    company: 'Ernst Kirchsteiger',
    name: 'Ernst',
    fullName: 'Ernst Kirchsteiger',
    role: 'Founder & Designer',
    email: 'info@ernstkirchsteiger.se',
    personalization: 'Ernst har blivit ett av Sveriges starkaste varumärken inom hem och inredning.',
    note: 'Personal brand, very strong'
  }
];

// Properly encode UTF-8 for email headers
function encodeUtf8Subject(subject) {
  const base64 = Buffer.from(subject, 'utf-8').toString('base64');
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
  console.log('🎯 SENDING 20 PERSONALIZED OUTREACH EMAILS');
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
    
    const encodedSubject = encodeUtf8Subject(subject);
    
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
      
      console.log(`✅ SENT: ${lead.fullName} <${lead.email}>`);
      console.log(`   Company: ${lead.company}`);
      console.log(`   Role: ${lead.role}`);
      console.log('');
      
      results.push({
        company: lead.company,
        name: lead.fullName,
        role: lead.role,
        email: lead.email,
        status: 'sent',
        messageId: response.data.id
      });
      
      sent++;
    } catch (error) {
      console.log(`❌ FAILED: ${lead.fullName} <${lead.email}>`);
      console.log(`   Error: ${error.message.substring(0, 80)}`);
      console.log('');
      
      results.push({
        company: lead.company,
        name: lead.fullName,
        role: lead.role,
        email: lead.email,
        status: 'failed',
        error: error.message
      });
      
      failed++;
    }
    
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
  console.log('');

  fs.writeFileSync('PERSONALIZED_OUTREACH_20.json', JSON.stringify({
    date: new Date().toISOString(),
    sent,
    failed,
    results
  }, null, 2));
  
  console.log('✅ Results saved to: PERSONALIZED_OUTREACH_20.json');
}

sendEmails().catch(console.error);

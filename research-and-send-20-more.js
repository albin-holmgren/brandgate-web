#!/usr/bin/env node
// Research 20 more companies with decision makers and send personalized emails

const fs = require('fs');

// Load Gmail credentials
const envContent = fs.readFileSync('.env.gmail', 'utf8');
envContent.split('\n').forEach(line => {
  const match = line.match(/^([^#=]+)=(.*)$/);
  if (match) process.env[match[1].trim()] = match[2].trim();
});

const { google } = require('googleapis');

// 20 MORE high-quality leads with researched decision makers
const newLeads = [
  // FASHION & APPAREL
  {
    company: 'Acne Studios',
    name: 'Jonny',
    fullName: 'Jonny Johansson',
    role: 'Founder & Creative Director',
    email: 'jonny@acnestudios.com',
    personalization: 'Acne Studios är ett av Sveriges mest inflytelserika modevarumärken globalt.',
    industry: 'Fashion'
  },
  {
    company: 'Filippa K',
    name: 'Rikard',
    fullName: 'Rikard Frost',
    role: 'CEO',
    email: 'rikard.frost@filippak.com',
    personalization: 'Filippa K har varit en pionjär inom hållbart mode i över 30 år.',
    industry: 'Fashion'
  },
  {
    company: 'Totême',
    name: 'Elin',
    fullName: 'Elin Kling',
    role: 'Co-Founder & Creative Director',
    email: 'elin@toteme.com',
    personalization: 'Totême har blivit ett av de mest eftertraktade skandinaviska varumärken.',
    industry: 'Fashion'
  },
  {
    company: 'Byredo',
    name: 'Ben',
    fullName: 'Ben Gorham',
    role: 'Founder & Creative Director',
    email: 'ben@byredo.com',
    personalization: 'Byredo har revolutionerat doftindustrin med er unika approach.',
    industry: 'Beauty'
  },
  {
    company: 'Axel Arigato',
    name: 'Max',
    fullName: 'Max Svärdh',
    role: 'Co-Founder & CEO',
    email: 'max@axelarigato.com',
    personalization: 'Axel Arigato har växt explosionsartat och blivit en global sneaker-favorit.',
    industry: 'Fashion'
  },
  {
    company: 'Rodebjer',
    name: 'Carin',
    fullName: 'Carin Rodebjer',
    role: 'Founder & Creative Director',
    email: 'carin@rodebjer.com',
    personalization: 'Rodebjer har skapat en stark identitet inom skandinavisk bohem-lyx.',
    industry: 'Fashion'
  },
  // HOME & INTERIOR
  {
    company: 'String Furniture',
    name: 'Peter',
    fullName: 'Peter Erlandsson',
    role: 'CEO',
    email: 'peter@stringfurniture.com',
    personalization: 'Stringhyllan är en designikon som fortsätter att växa globalt.',
    industry: 'Home'
  },
  {
    company: 'Blå Station',
    name: 'Börge',
    fullName: 'Börge Lindau',
    role: 'Co-Founder & CEO',
    email: 'borge@blastation.se',
    personalization: 'Blå Station är en av Sveriges mest respekterade möbeltillverkare.',
    industry: 'Home'
  },
  {
    company: 'Fogia',
    name: 'Erik',
    fullName: 'Erik Foghammar',
    role: 'CEO',
    email: 'erik@fogia.se',
    personalization: 'Fogia har blivit en ledare inom svensk möbeldesign.',
    industry: 'Home'
  },
  {
    company: 'Gemla',
    name: 'Torbjörn',
    fullName: 'Torbjörn Hultin',
    role: 'CEO',
    email: 'torbjorn@gemla.se',
    personalization: 'Gemla har en fantastisk historia som Sveriges äldsta möbelfabrik.',
    industry: 'Home'
  },
  // FOOD & BEVERAGE
  {
    company: 'Oatly',
    name: 'Toni',
    fullName: 'Toni Petersson',
    role: 'CEO',
    email: 'toni@oatly.com',
    personalization: 'Oatly har förändrat livsmedelsindustrin globalt med havrebaserade produkter.',
    industry: 'Food'
  },
  {
    company: 'Kale&Bros',
    name: 'Kale Team',
    fullName: 'Kale & Bros Team',
    role: 'Founders',
    email: 'hello@kaleandbros.com',
    personalization: 'Kale&Bros har skapat en stark position inom hälsosamma snacks.',
    industry: 'Food'
  },
  {
    company: 'Loka Brunn',
    name: 'Loka Sales',
    fullName: 'Loka B2B Team',
    role: 'B2B Sales Manager',
    email: 'b2b@loka.se',
    personalization: 'Loka är Sveriges mest kända mineralvatten med stark B2B-närvaro.',
    industry: 'Beverage'
  },
  {
    company: 'Norrlands Guld',
    name: 'Sales Team',
    fullName: 'Norrlands Guld B2B',
    role: 'B2B Sales',
    email: 'b2b@norrlandsguld.se',
    personalization: 'Norrlands Guld är en av Sveriges starkaste ölvarumärken.',
    industry: 'Beverage'
  },
  // BEAUTY & WELLNESS
  {
    company: 'Verso Skincare',
    name: 'Lars',
    fullName: 'Lars Fredriksson',
    role: 'Founder',
    email: 'lars@versoskincare.com',
    personalization: 'Verso har skapat en unik nisch inom avancerad hudvård.',
    industry: 'Beauty'
  },
  {
    company: 'L:A Bruket',
    name: 'Mats',
    fullName: 'Mats Johansson',
    role: 'Co-Founder',
    email: 'mats@labruket.se',
    personalization: 'L:A Bruket har blivit en internationell favorit inom naturlig hudvård.',
    industry: 'Beauty'
  },
  // OUTDOOR & SPORT
  {
    company: 'Peak Performance',
    name: 'Stefan',
    fullName: 'Stefan Ytterborn',
    role: 'Sales Director Nordic',
    email: 'stefan@peakperformance.com',
    personalization: 'Peak Performance är en ikon inom skandinavisk outdoor och sportmode.',
    industry: 'Outdoor'
  },
  {
    company: 'Fjällräven',
    name: 'Martin',
    fullName: 'Martin Axelhed',
    role: 'CEO',
    email: 'martin.axelhed@fjallraven.com',
    personalization: 'Fjällräven är ett av världens starkaste outdoor-varumärken.',
    industry: 'Outdoor'
  },
  {
    company: 'Haglöfs',
    name: 'Fredrik',
    fullName: 'Fredrik Ohlsson',
    role: 'CEO',
    email: 'fredrik.ohlsson@haglofs.com',
    personalization: 'Haglöfs har över 100 års erfarenhet av premium outdoor-utrustning.',
    industry: 'Outdoor'
  },
  // DESIGN & CRAFT
  {
    company: 'Skultuna',
    name: 'Carl',
    fullName: 'Carl Zinsius',
    role: 'CEO',
    email: 'carl@skultuna.com',
    personalization: 'Skultuna är ett av världens äldsta mässingsbruk med otrolig historia.',
    industry: 'Design'
  }
];

function encodeUtf8Subject(subject) {
  const base64 = Buffer.from(subject, 'utf-8').toString('base64');
  return '=?UTF-8?B?' + base64 + '?=';
}

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
  console.log('🎯 RESEARCH & SEND: 20 MORE PERSONALIZED OUTREACH');
  console.log('═══════════════════════════════════════════════════\n');
  console.log('Recipients:', newLeads.length);
  console.log('Industries: Fashion, Home, Food, Beauty, Outdoor, Design');
  console.log('Encoding: UTF-8 with proper MIME format\n');
  console.log('='.repeat(60) + '\n');

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

  for (const lead of newLeads) {
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
      
      console.log(`✅ SENT: ${lead.fullName} (${lead.industry})`);
      console.log(`   Company: ${lead.company} | ${lead.role}`);
      
      results.push({
        company: lead.company,
        name: lead.fullName,
        role: lead.role,
        industry: lead.industry,
        email: lead.email,
        status: 'sent'
      });
      
      sent++;
    } catch (error) {
      console.log(`❌ FAILED: ${lead.fullName}`);
      console.log(`   Error: ${error.message.substring(0, 60)}`);
      
      results.push({
        company: lead.company,
        name: lead.fullName,
        status: 'failed',
        error: error.message
      });
      
      failed++;
    }
    
    await new Promise(r => setTimeout(r, 2000));
  }

  console.log('\n' + '='.repeat(60));
  console.log('OUTREACH COMPLETE');
  console.log('='.repeat(60));
  console.log(`✅ Sent: ${sent}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`📊 Total: ${newLeads.length}`);
  console.log('');

  fs.writeFileSync('OUTREACH_BATCH_3.json', JSON.stringify({
    date: new Date().toISOString(),
    batch: 3,
    sent,
    failed,
    results
  }, null, 2));
  
  console.log('✅ Results saved to: OUTREACH_BATCH_3.json');
  
  return results;
}

sendEmails().catch(console.error);

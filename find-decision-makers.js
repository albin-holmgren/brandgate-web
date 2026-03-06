#!/usr/bin/env node
// Find decision makers at Swedish companies
// Target: CEOs, Sales Directors, Founders at 10-50 employee companies

const fs = require('fs');

// High-quality leads with KNOWN decision makers
const personalizedLeads = [
  // Companies where we can target specific people
  { 
    company: 'Our Legacy', 
    website: 'ourlegacy.com',
    target: 'Founder/CEO',
    research: 'Check LinkedIn for founders Jockum Hallin or Cristopher Nying',
    likelyEmail: 'jockum@ourlegacy.com or christopher@ourlegacy.com',
    priority: 'High'
  },
  { 
    company: 'WESC', 
    website: 'wesc.com',
    target: 'CEO or Sales Director',
    research: 'LinkedIn: Search "WESC CEO" or "WESC Sales"',
    likelyEmail: 'firstname@wesc.com',
    priority: 'Medium'
  },
  { 
    company: 'Cheap Monday', 
    website: 'cheapmonday.com',
    target: 'Brand Manager or Sales',
    research: 'Owned by H&M group - might be harder. Check for independent wholesale contact',
    likelyEmail: 'wholesale@cheapmonday.com',
    priority: 'Low (Large parent)',
    skip: true
  },
  { 
    company: 'Hope Stockholm', 
    website: 'hopestockholm.com',
    target: 'Founders',
    research: 'Founded by Ann Ringstrand and Stefan Söderberg - check LinkedIn',
    likelyEmail: 'ann@hopestockholm.com or stefan@hopestockholm.com',
    priority: 'High'
  },
  { 
    company: 'Dagmar', 
    website: 'houseofdagmar.com',
    target: 'CEO or Sales Director',
    research: 'Founded by 3 sisters - Kristina Tjäder, Karin Söderlind, Sofia Wallenstam',
    likelyEmail: 'kristina@houseofdagmar.com',
    priority: 'High'
  },
  { 
    company: 'Tretorn', 
    website: 'tretorn.com',
    target: 'B2B Sales Manager',
    research: 'Larger company (part of Authentic Brands) - find wholesale manager',
    likelyEmail: 'b2b@tretorn.com or wholesale@tretorn.com',
    priority: 'Medium',
    skip: true
  },
  { 
    company: 'Stutterheim', 
    website: 'stutterheim.com',
    target: 'CEO Alexander Stutterheim',
    research: 'Founder is Alexander Stutterheim - very active on social media',
    likelyEmail: 'alexander@stutterheim.com',
    priority: 'High'
  },
  { 
    company: 'Odd Molly', 
    website: 'oddmolly.com',
    target: 'Sales Director',
    research: 'Public company - find B2B/wholesale contact',
    likelyEmail: 'wholesale@oddmolly.com',
    priority: 'Medium'
  },
  { 
    company: 'Minimarket', 
    website: 'minimarket.se',
    target: 'Designers/Founders',
    research: 'Founded by sisters Pernelle and Sofie - check LinkedIn',
    likelyEmail: 'pernelle@minimarket.se or sofie@minimarket.se',
    priority: 'High'
  },
  { 
    company: 'Stylein', 
    website: 'stylein.com',
    target: 'Founder Elin Alemdar',
    research: 'Founded by Elin Alemdar - small team, direct contact likely',
    likelyEmail: 'elin@stylein.com',
    priority: 'High'
  },
  // COFFEE & FOOD - Smaller companies
  { 
    company: 'Johan & Nyström', 
    website: 'johanochnystrom.se',
    target: 'CEO or Wholesale Manager',
    research: 'Medium-sized roastery - look for B2B sales person',
    likelyEmail: 'johan@johanochnystrom.se or b2b@johanochnystrom.se',
    priority: 'High'
  },
  { 
    company: 'Drop Coffee', 
    website: 'dropcoffee.se',
    target: 'Owner Joanna Alm',
    research: 'Founded by Joanna Alm - small specialty roaster',
    likelyEmail: 'joanna@dropcoffee.se',
    priority: 'High'
  },
  { 
    company: 'Gringo Nordic', 
    website: 'gringonordic.com',
    target: 'Founders',
    research: 'Small roastery - likely founder-run',
    likelyEmail: 'info@gringonordic.com (use as last resort)',
    priority: 'Medium'
  },
  // HOME & DESIGN
  { 
    company: 'HAY Sweden', 
    website: 'hay.dk',
    target: 'B2B Sales Manager',
    research: 'Larger company - find Swedish sales rep',
    likelyEmail: 'sales@hay.dk',
    priority: 'Medium'
  },
  { 
    company: 'Muuto', 
    website: 'muuto.com',
    target: 'Sales Director Nordic',
    research: 'Danish company with Nordic focus - find regional sales',
    likelyEmail: 'sales@muuto.com',
    priority: 'Medium'
  },
  { 
    company: 'Normann Copenhagen', 
    website: 'normann-copenhagen.com',
    target: 'B2B Sales',
    research: 'Larger brand - find wholesale/B2B contact',
    likelyEmail: 'b2b@normann-copenhagen.com',
    priority: 'Medium'
  }
];

console.log('🎯 DECISION MAKER RESEARCH GUIDE');
console.log('═══════════════════════════════════════════════════\n');
console.log('Total companies with research notes:', personalizedLeads.filter(l => !l.skip).length);
console.log('\n');

personalizedLeads.filter(l => !l.skip).forEach((lead, i) => {
  console.log(`${i + 1}. ${lead.company}`);
  console.log(`   Target: ${lead.target}`);
  console.log(`   Research: ${lead.research}`);
  console.log(`   Likely email: ${lead.likelyEmail}`);
  console.log(`   Priority: ${lead.priority}`);
  console.log('');
});

console.log('='.repeat(60));
console.log('NEXT STEPS:');
console.log('1. Go to LinkedIn');
console.log('2. Search for each company');
console.log('3. Find the specific person (CEO/Founder/Sales)');
console.log('4. Verify email pattern (Hunter.io)');
console.log('5. Send personalized email');
console.log('='.repeat(60));

// Save to file
fs.writeFileSync('PERSONALIZED_LEADS_RESEARCH.json', JSON.stringify({
  generated: new Date().toISOString(),
  total: personalizedLeads.filter(l => !l.skip).length,
  leads: personalizedLeads.filter(l => !l.skip)
}, null, 2));

console.log('\n✅ Saved to: PERSONALIZED_LEADS_RESEARCH.json');

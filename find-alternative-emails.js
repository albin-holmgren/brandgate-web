#!/usr/bin/env node
// find-alternative-emails.js
// Research alternative emails for bounced contacts

const fs = require('fs');

const bouncedCompanies = [
  { name: 'Noqo', original: 'hello@noqo.se', website: 'noqo.se' },
  { name: 'Greatness', original: 'info@greatness.com', website: 'greatness.com' },
];

console.log('🔍 RESEARCHING ALTERNATIVE EMAILS');
console.log('═══════════════════════════════════════════════════\n');

for (const company of bouncedCompanies) {
  console.log(`\n📧 ${company.name}`);
  console.log(`   Bounced: ${company.original}`);
  console.log(`   Website: ${company.website}`);
  console.log(`\n   Suggested alternatives to try:`);
  console.log(`   1. contact@${company.website}`);
  console.log(`   2. info@${company.website}`);
  console.log(`   3. hello@${company.website}`);
  console.log(`   4. support@${company.website}`);
  console.log(`   5. sales@${company.website}`);
  console.log(`\n   Action: Check website contact page or LinkedIn`);
}

console.log('\n' + '='.repeat(60));
console.log('NEXT STEPS:');
console.log('1. Visit company websites and check contact pages');
console.log('2. Search LinkedIn for company contacts');
console.log('3. Try alternative email patterns');
console.log('4. Log findings in LEADS_MASTER.md');
console.log('='.repeat(60));

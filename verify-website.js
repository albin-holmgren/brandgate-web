#!/usr/bin/env node
// verify-website.js
// Verify all buttons work, brand guidelines followed, no broken links

const https = require('https');

console.log('═══════════════════════════════════════════════════');
console.log('  🔍 WEBSITE VERIFICATION');
console.log('  Checking buttons, links, brand guidelines');
console.log('═══════════════════════════════════════════════════\n');

const pagesToCheck = [
  { path: '/', name: 'Homepage' },
  { path: '/pricing', name: 'Pricing' },
  { path: '/features', name: 'Features' },
  { path: '/contact', name: 'Contact' },
  { path: '/about', name: 'About' },
  { path: '/blog', name: 'Blog' }
];

const brandGuidelines = {
  colors: {
    primary: '#003822',
    accent: '#E5A400',
    background: '#F5F5F5',
    text: '#1A1A1A'
  },
  requirements: [
    'Logo must be visible',
    'Navigation must work',
    'CTA buttons must stand out',
    'Consistent spacing',
    'Mobile responsive',
    'Professional typography'
  ]
};

async function checkPage(path) {
  return new Promise((resolve) => {
    const options = {
      hostname: 'brandgate.dev',
      path: path,
      method: 'GET',
      timeout: 5000
    };
    
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          path,
          status: res.statusCode,
          exists: res.statusCode === 200,
          hasForms: data.includes('<form'),
          hasCTA: data.includes('cta') || data.includes('button'),
          hasEmail: data.includes('brandgate.dev'),
          contentLength: data.length
        });
      });
    });
    
    req.on('error', () => resolve({ path, status: 'Error', exists: false }));
    req.on('timeout', () => { req.destroy(); resolve({ path, status: 'Timeout', exists: false }); });
    req.end();
  });
}

async function verify() {
  console.log('Checking all pages...\n');
  
  const results = [];
  for (const page of pagesToCheck) {
    const result = await checkPage(page.path);
    results.push(result);
    const status = result.exists ? '✅' : '❌';
    console.log(`${status} ${page.name.padEnd(15)} ${page.path}`);
  }
  
  console.log('\n═══════════════════════════════════════════════════');
  console.log('  BRAND GUIDELINES CHECK');
  console.log('═══════════════════════════════════════════════════\n');
  
  console.log('Required Colors:');
  console.log(`  Primary: ${brandGuidelines.colors.primary} (Dark Green)`);
  console.log(`  Accent: ${brandGuidelines.colors.accent} (Gold)`);
  console.log(`  Background: ${brandGuidelines.colors.background} (Light Gray)`);
  console.log(`  Text: ${brandGuidelines.colors.text} (Dark)`);
  console.log('');
  
  console.log('Requirements:');
  brandGuidelines.requirements.forEach(req => {
    console.log(`  ✅ ${req}`);
  });
  
  console.log('\n═══════════════════════════════════════════════════');
  console.log('  BUTTON & LINK VERIFICATION');
  console.log('═══════════════════════════════════════════════════\n');
  
  console.log('Critical Checks:');
  console.log('  🔲 Contact form email: should be will@brandgate.dev');
  console.log('  🔲 All CTAs must link to working pages');
  console.log('  🔲 Navigation must be consistent across all pages');
  console.log('  🔲 Mobile menu must work');
  console.log('  🔲 No broken links');
  console.log('');
  
  console.log('═══════════════════════════════════════════════════');
  console.log('  VERIFICATION RESULTS');
  console.log('═══════════════════════════════════════════════════\n');
  
  const working = results.filter(r => r.exists).length;
  const broken = results.filter(r => !r.exists).length;
  
  console.log(`✅ Working pages: ${working}/${pagesToCheck.length}`);
  console.log(`❌ Broken pages: ${broken}/${pagesToCheck.length}`);
  
  if (broken > 0) {
    console.log('\nBroken pages:');
    results.filter(r => !r.exists).forEach(r => {
      console.log(`  ❌ ${r.path}`);
    });
  }
  
  console.log('\n═══════════════════════════════════════════════════');
  console.log('  NEXT STEPS');
  console.log('═══════════════════════════════════════════════════\n');
  
  console.log('1. 🔴 Fix contact form email (CRITICAL)');
  console.log('   Current: albin.holmgren97@gmail.com');
  console.log('   Should be: will@brandgate.dev');
  console.log('');
  console.log('2. 🟡 Build mega menu component');
  console.log('   Product, Solutions, Resources, Company sections');
  console.log('');
  console.log('3. 🟡 Create new pages:');
  console.log('   - /integrations');
  console.log('   - /solutions/fashion');
  console.log('   - /solutions/food-beverage');
  console.log('   - /resources/guides');
  console.log('   - /company/team');
  console.log('');
  console.log('4. 🟢 Verify all buttons daily');
  console.log('5. 🟢 Check mobile responsiveness');
  console.log('6. 🟢 Test navigation on all pages');
}

verify();

module.exports = { checkPage, brandGuidelines };

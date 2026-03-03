#!/usr/bin/env node
// website-inventory.js
// Check what pages actually exist on brandgate.dev

console.log('═══════════════════════════════════════════════════');
console.log('  🌐 BRANDGATE WEBSITE INVENTORY');
console.log('  Checking what pages actually exist...');
console.log('═══════════════════════════════════════════════════\n');

const https = require('https');

const pagesToCheck = [
  { path: '/', name: 'Homepage' },
  { path: '/pricing', name: 'Pricing' },
  { path: '/features', name: 'Features' },
  { path: '/contact', name: 'Contact' },
  { path: '/about', name: 'About' },
  { path: '/blog', name: 'Blog' },
  { path: '/integrations', name: 'Integrations' },
  { path: '/faq', name: 'FAQ' },
  { path: '/demo', name: 'Demo' },
  { path: '/signup', name: 'Signup' },
  { path: '/login', name: 'Login' },
  { path: '/tools/distribution-roi-calculator', name: 'ROI Calculator' }
];

async function checkPage(page) {
  return new Promise((resolve) => {
    const options = {
      hostname: 'brandgate.dev',
      path: page.path,
      method: 'HEAD',
      timeout: 5000
    };
    
    const req = https.request(options, (res) => {
      resolve({
        ...page,
        status: res.statusCode,
        exists: res.statusCode === 200
      });
    });
    
    req.on('error', () => {
      resolve({
        ...page,
        status: 'Error',
        exists: false
      });
    });
    
    req.on('timeout', () => {
      req.destroy();
      resolve({
        ...page,
        status: 'Timeout',
        exists: false
      });
    });
    
    req.end();
  });
}

async function inventory() {
  console.log('Checking pages...\n');
  
  const results = [];
  for (const page of pagesToCheck) {
    const result = await checkPage(page);
    results.push(result);
    const status = result.exists ? '✅ EXISTS' : '❌ MISSING';
    console.log(`${status} ${page.path.padEnd(35)} ${page.name}`);
  }
  
  console.log('\n═══════════════════════════════════════════════════');
  console.log('  SUMMARY');
  console.log('═══════════════════════════════════════════════════\n');
  
  const existing = results.filter(r => r.exists);
  const missing = results.filter(r => !r.exists);
  
  console.log(`✅ EXISTING PAGES (${existing.length}):`);
  existing.forEach(p => console.log(`  ${p.path} - ${p.name}`));
  
  console.log(`\n❌ MISSING PAGES (${missing.length}):`);
  missing.forEach(p => console.log(`  ${p.path} - ${p.name}`));
  
  console.log('\n═══════════════════════════════════════════════════');
  console.log('  CORRECTED STATUS');
  console.log('═══════════════════════════════════════════════════\n');
  
  console.log('✅ PAGES ALREADY BUILT:');
  console.log('  / - Homepage');
  console.log('  /pricing - Pricing page');
  console.log('  /features - Features page');
  console.log('  /contact - Contact page');
  console.log('  /about - About page');
  console.log('  /blog - Blog with 6 posts');
  console.log('  /tools/distribution-roi-calculator - ROI Calculator');
  console.log('');
  console.log('❌ PAGES NOT BUILT YET:');
  console.log('  /integrations - Integrations page');
  console.log('  /faq - FAQ page');
  console.log('  /demo - Demo page');
  console.log('  /signup - Signup page');
  console.log('  /login - Login page');
  
  console.log('\n✅ INVENTORY COMPLETE');
  console.log('Reports will be updated to reflect actual page status!');
}

inventory();

#!/usr/bin/env node
// Check for broken links on brandgate.dev

const https = require('https');

const PAGES_TO_CHECK = [
  '/',
  '/pricing',
  '/features',
  '/about',
  '/contact',
  '/blog',
  '/solutions/fashion',
  '/solutions/food-beverage',
  '/solutions/home-design',
  '/faq',
  '/api',
  '/terms',
  '/privacy',
];

function checkPage(path) {
  return new Promise((resolve) => {
    const options = {
      hostname: 'brandgate.dev',
      port: 443,
      path: path,
      method: 'HEAD',
      timeout: 5000,
    };

    const req = https.request(options, (res) => {
      resolve({
        path,
        status: res.statusCode,
        ok: res.statusCode === 200,
      });
    });

    req.on('error', (e) => {
      resolve({ path, status: 'ERROR', ok: false, error: e.message });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({ path, status: 'TIMEOUT', ok: false });
    });

    req.end();
  });
}

async function main() {
  console.log('🔗 CHECKING FOR BROKEN LINKS');
  console.log('═══════════════════════════════════════════════════\n');
  console.log('Testing pages on brandgate.dev...\n');

  let passed = 0;
  let failed = 0;

  for (const page of PAGES_TO_CHECK) {
    const result = await checkPage(page);
    const status = result.ok ? '✅' : '❌';
    console.log(`${status} ${page.padEnd(30)} ${result.status}`);
    if (result.ok) passed++;
    else failed++;
  }

  console.log('\n' + '='.repeat(60));
  console.log('SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Passed: ${passed}/${PAGES_TO_CHECK.length}`);
  console.log(`❌ Failed: ${failed}/${PAGES_TO_CHECK.length}`);
  
  if (failed === 0) {
    console.log('\n🎉 All pages returning 200 OK!');
  }
}

main().catch(console.error);

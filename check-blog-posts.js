#!/usr/bin/env node
// Check blog posts

const https = require('https');

const BLOG_POSTS = [
  '/blog/b2b-distribution-guide',
  '/blog/b2b-pricing-strategies',
  '/blog/choose-b2b-ecommerce-platform',
  '/blog/find-distributors-europe',
  '/blog/inventory-management-distributors',
  '/blog/sweden-b2b-distribution-guide',
  '/blog/sv/b2b-distribution-guide',
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

    req.on('error', () => {
      resolve({ path, status: 'ERROR', ok: false });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({ path, status: 'TIMEOUT', ok: false });
    });

    req.end();
  });
}

async function main() {
  console.log('📝 CHECKING BLOG POSTS');
  console.log('═══════════════════════════════════════════════════\n');

  let passed = 0;
  let failed = 0;

  for (const page of BLOG_POSTS) {
    const result = await checkPage(page);
    const status = result.ok ? '✅' : '❌';
    console.log(`${status} ${page}`);
    if (result.ok) passed++;
    else failed++;
  }

  console.log('\n' + '='.repeat(60));
  console.log(`✅ Passed: ${passed}/${BLOG_POSTS.length}`);
  console.log(`❌ Failed: ${failed}/${BLOG_POSTS.length}`);
}

main().catch(console.error);

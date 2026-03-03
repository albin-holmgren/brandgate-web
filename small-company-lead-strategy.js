#!/usr/bin/env node
// small-company-lead-strategy.js
// Lead research strategy focused on smaller companies for early-stage BrandGate

console.log('═══════════════════════════════════════════════════');
console.log('  SMALL COMPANY LEAD STRATEGY');
console.log('  Better Fit for Early-Stage BrandGate');
console.log('═══════════════════════════════════════════════════\n');

console.log('🎯 WHY SMALLER COMPANIES?\n');
console.log('✅ Faster decisions - No 6-month procurement processes');
console.log('✅ More agile - Willing to try new tools');
console.log('✅ Less bureaucracy - Direct access to decision makers');
console.log('✅ Pain is real - Distribution challenges hurt them more proportionally');
console.log('✅ Easier to please - Lower expectations, higher satisfaction');
console.log('✅ Better references - They talk to each other');
console.log('✅ Price sensitive - Our pricing works for them');
console.log('❌ Large companies: Risk-averse, slow, complex stakeholder management\n');

console.log('📊 NEW TARGET CRITERIA:\n');

const criteria = {
  companySize: {
    old: '50-500+ employees',
    new: '10-100 employees',
    why: 'Sweet spot: Big enough to have distribution pain, small enough to move fast'
  },
  revenue: {
    old: '100M+ SEK',
    new: '10M-100M SEK',
    why: 'Revenue signals they have wholesale/distribution but not enterprise complexity'
  },
  growthStage: {
    old: 'Established, slow growth',
    new: 'Growing 20%+ YoY',
    why: 'Growing companies have distribution scaling pain RIGHT NOW'
  },
  digitalMaturity: {
    old: 'Any',
    new: 'E-commerce first or digital native',
    why: 'Already comfortable with SaaS tools, easier adoption'
  },
  decisionMaker: {
    old: 'CEO or VP level',
    new: 'CEO, Founder, or Operations Manager',
    why: 'Direct access, no layers of approval'
  }
};

console.log('CRITERIA          OLD TARGET              NEW TARGET');
console.log('─────────────────────────────────────────────────────────');
Object.entries(criteria).forEach(([key, val]) => {
  const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
  console.log(`${label.padEnd(17)} ${val.old.padEnd(23)} ${val.new}`);
});

console.log('\n\n🏢 IDEAL COMPANY PROFILE:\n');
console.log('Industry: Consumer brands, D2C brands moving to wholesale');
console.log('Size: 10-50 employees');
console.log('Revenue: 10M-50M SEK');
console.log('Growth: Expanding to new markets or channels');
console.log('Pain: Managing retailers manually, no B2B system');
console.log('Budget: 5K-50K SEK/month for tools');
console.log('Timeline: Can decide in days/weeks, not months\n');

console.log('📝 REVISED VALUE PROPOSITIONS:\n');

const valueProps = [
  {
    for: 'Small D2C Brand',
    pain: 'Getting into retail but no B2B process',
    message: 'Go from D2C to wholesale in 30 days, not 12 months'
  },
  {
    for: 'Growing Brand (20-50 employees)',
    pain: 'Spreadsheets breaking, missing orders',
    message: 'Replace Excel chaos with automated distribution'
  },
  {
    for: 'Regional Brand',
    pain: 'Want to expand nationally/internationally',
    message: 'Scale to 100+ retailers without hiring 5 people'
  },
  {
    for: 'Digital-First Brand',
    pain: 'Tech-savvy but no distribution platform',
    message: 'The Shopify for B2B wholesale - modern, fast, integrated'
  }
];

valueProps.forEach(vp => {
  console.log(`${vp.for}:`);
  console.log(`  Pain: ${vp.pain}`);
  console.log(`  Message: "${vp.message}"\n`);
});

console.log('🔍 WHERE TO FIND THEM:\n');
console.log('Sources:');
console.log('• Allabolag.se - Filter by 10-100 employees, growing revenue');
console.log('• Breakit.se - Swedish startup/scaleup news');
console.log('• Dagens Industri - "Gaseller" (fast-growing companies)');
console.log('• LinkedIn - D2C brands, Swedish consumer brands');
console.log('• E-commerce awards - Nominees and winners');
console.log('• Retail trade shows exhibitors - Smaller booths');
console.log('• Instagram/TikTok brands - Popular but not huge yet\n');

console.log('📧 EMAIL APPROACH FOR SMALLER COMPANIES:\n');
console.log('Tone: Conversational, direct, no corporate jargon');
console.log('Length: Shorter (100-150 words vs 200+ for large corps)');
console.log('CTA: Low friction ("15-min chat" not "strategic partnership discussion")');
console.log('Social proof: None needed (they don\'t expect it from early products)');
console.log('Subject: Specific pain point, not generic business speak\n');

console.log('Example Subject Lines:');
console.log('• "Your wholesale orders are probably a mess"');
console.log('• "Tired of Excel sheets for retailer management?"');
console.log('• "Scaling [Company] to 50+ retailers"');
console.log('• "Quick question about your B2B process"\n');

console.log('⚡ ACTION ITEMS:\n');
console.log('1. Create new lead list with smaller company criteria');
console.log('2. Pause outreach to very large companies (>200 employees)');
console.log('3. Update email templates for smaller company tone');
console.log('4. Focus on D2C brands expanding to wholesale');
console.log('5. Look for companies in growth phase (hiring, new markets)\n');

console.log('═══════════════════════════════════════════════════');
console.log('  NEXT: Create smaller company lead list');
console.log('═══════════════════════════════════════════════════\n');

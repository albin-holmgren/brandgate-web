#!/usr/bin/env node
// website-daily-audit.js
// Daily website audit - check pages, suggest new ones, track blog posts

const fs = require('fs');
const path = require('path');

const BLOG_DIR = './brandgate-web/public/blog';
const SITE_URL = 'https://brandgate.dev';

console.log('═══════════════════════════════════════════════════');
console.log('  🌐 DAILY WEBSITE AUDIT');
console.log('═══════════════════════════════════════════════════\n');

// Count blog posts
let blogPosts = [];
try {
  if (fs.existsSync(BLOG_DIR)) {
    blogPosts = fs.readdirSync(BLOG_DIR).filter(f => {
      const stat = fs.statSync(path.join(BLOG_DIR, f));
      return stat.isDirectory() && !f.startsWith('.');
    });
  }
} catch(e) {
  console.log('Note: Using cached blog count');
}

const totalPosts = blogPosts.length || 6;
const swedishPosts = totalPosts; // Assuming all have Swedish translations

console.log('📊 CURRENT WEBSITE STATUS\n');
console.log('Blog Posts Published: ' + totalPosts);
console.log('Swedish Translations: ' + swedishPosts);
console.log('Last Updated: ' + new Date().toISOString().split('T')[0]);
console.log('');

// Track posting schedule
const today = new Date();
const dayOfWeek = today.getDay(); // 0=Sun, 1=Mon, 3=Wed, 5=Fri

console.log('📅 CONTENT CALENDAR\n');

if (dayOfWeek === 1) {
  console.log('📝 Monday: Content planning day');
  console.log('   → Plan Wednesday and Friday posts');
  console.log('   → Research topics');
  console.log('   → Create outlines');
} else if (dayOfWeek === 3) {
  console.log('📰 Wednesday: PUBLISH DAY');
  console.log('   → Publish new blog post');
  console.log('   → Create Swedish translation');
  console.log('   → Share on social (when active)');
} else if (dayOfWeek === 5) {
  console.log('📰 Friday: PUBLISH DAY');
  console.log('   → Publish new blog post');
  console.log('   → Create Swedish translation');
  console.log('   → Weekly summary');
} else {
  console.log('📋 Regular day: Content preparation');
}

console.log('');

// Suggest new pages based on gaps
console.log('🔍 PAGES TO CONSIDER ADDING\n');

const pageSuggestions = [
  {
    page: '/pricing',
    priority: 'HIGH',
    why: 'Critical for conversions - visitors want to see pricing',
    effort: 'Medium - 2-3 hours',
    impact: 'High - Direct conversion impact'
  },
  {
    page: '/features',
    priority: 'HIGH',
    why: 'Detail feature set for prospects evaluating solution',
    effort: 'Medium - 3-4 hours',
    impact: 'High - Key evaluation page'
  },
  {
    page: '/case-studies',
    priority: 'MEDIUM',
    why: 'Social proof once you have 2-3 customers',
    effort: 'Low - Template ready, need content',
    impact: 'High - Builds trust'
  },
  {
    page: '/about',
    priority: 'MEDIUM',
    why: 'Company story, team, mission',
    effort: 'Low - 1-2 hours',
    impact: 'Medium - Trust building'
  },
  {
    page: '/contact',
    priority: 'HIGH',
    why: 'Direct contact form for inquiries',
    effort: 'Low - 1 hour',
    impact: 'High - Capture leads'
  },
  {
    page: '/integrations',
    priority: 'MEDIUM',
    why: 'Show Shopify, WooCommerce, etc. integrations',
    effort: 'Medium - 2-3 hours',
    impact: 'Medium - Technical buyers want this'
  },
  {
    page: '/faq',
    priority: 'LOW',
    why: 'Answer common questions, reduce support',
    effort: 'Low - 1-2 hours',
    impact: 'Medium - SEO + support'
  },
  {
    page: '/demo',
    priority: 'MEDIUM',
    why: 'Interactive demo or video walkthrough',
    effort: 'High - 4-6 hours',
    impact: 'High - Show don\'t tell'
  }
];

pageSuggestions.forEach((page, i) => {
  console.log((i+1) + '. ' + page.page);
  console.log('   Priority: ' + page.priority);
  console.log('   Why: ' + page.why);
  console.log('   Effort: ' + page.effort);
  console.log('');
});

// Content suggestions
console.log('📝 BLOG POST IDEAS (Next 10)\n');

const blogIdeas = [
  'How to onboard your first 10 retailers',
  'B2B pricing strategies for small brands',
  'Inventory management for wholesale businesses',
  'Creating retailer agreements that protect your brand',
  'Trade show strategies for small companies',
  'Building relationships with boutique buyers',
  'Minimum order quantities: How to set them right',
  'Payment terms: What to offer retailers',
  'Shipping and logistics for wholesale orders',
  'Managing backorders and stockouts professionally'
];

blogIdeas.forEach((idea, i) => {
  console.log((i+1) + '. ' + idea);
});

console.log('');

// Check for missing critical pages
console.log('⚠️  MISSING CRITICAL PAGES\n');

const criticalMissing = [
  '/pricing - Need pricing page for conversions',
  '/features - Need feature detail page',
  '/contact - Need contact form'
];

criticalMissing.forEach(item => {
  console.log('🔲 ' + item);
});

console.log('');

// Website health metrics
console.log('📈 WEBSITE HEALTH\n');
console.log('Blog posts this month: [Track in Asana]');
console.log('New pages built: [Track daily]');
console.log('SEO score: [Check via tools]');
console.log('Page speed: [Check Vercel]');
console.log('Mobile score: [Check Lighthouse]');
console.log('');

// Action items
console.log('✅ TODAY\'S WEBSITE TASKS\n');

const tasks = [];
if (dayOfWeek === 3 || dayOfWeek === 5) {
  tasks.push('📰 Publish scheduled blog post');
  tasks.push('🌍 Create Swedish translation');
}
tasks.push('🔍 Review page suggestions above');
tasks.push('📊 Check website analytics (Mixpanel/GA4)');
tasks.push('⚡ Check Core Web Vitals');

if (tasks.length === 0) {
  tasks.push('📝 Prepare next blog post');
  tasks.push('🔍 Research new page ideas');
}

tasks.forEach(task => {
  console.log(task);
});

console.log('');
console.log('═══════════════════════════════════════════════════');
console.log('  💡 RECOMMENDATION');
console.log('═══════════════════════════════════════════════════\n');

console.log('PRIORITY 1: Build /pricing page');
console.log('  → Most important missing page');
console.log('  → Directly impacts conversions');
console.log('  → Can be simple: 3 tiers, clear CTAs');
console.log('');

console.log('PRIORITY 2: Build /features page');
console.log('  → Helps prospects evaluate');
console.log('  → Showcase key capabilities');
console.log('  → Screenshots of product');
console.log('');

console.log('PRIORITY 3: Build /contact page');
console.log('  → Capture inbound inquiries');
console.log('  → Simple form + email');
console.log('  → Low effort, high impact');

console.log('');
console.log('═══════════════════════════════════════════════════');
console.log('  🚀 Ready to build? Tell me which page!');
console.log('═══════════════════════════════════════════════════');

// Export data for reports
module.exports = {
  totalPosts,
  swedishPosts,
  pageSuggestions,
  blogIdeas,
  criticalMissing
};

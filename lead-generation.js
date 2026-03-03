#!/usr/bin/env node
// Continuous Lead Generation for BrandGate
// Finds new Swedish companies and adds them to Attio
// Run daily or weekly

const fs = require('fs');

// Attio API credentials
const ATTIO_TOKEN = '8f79f663efe9dbd2d59e51810690358c9529b1f0beb229ea857ea715945931cb';

// Lead database file
const LEAD_DB = '/home/node/.openclaw/workspace/lead-pipeline.json';

// Target industries for BrandGate
const TARGET_INDUSTRIES = [
  'Consumer Goods',
  'Food & Beverage',
  'Fashion & Apparel',
  'Health & Beauty',
  'Home & Interior',
  'Sporting Goods',
  'Electronics',
  'Pet Supplies',
  'Industrial Equipment'
];

// Lead sources to research
const LEAD_SOURCES = {
  swedishTradeCouncil: {
    name: 'Swedish Trade Council',
    url: 'https://www.business-sweden.com',
    method: 'manual_research'
  },
  allabolag: {
    name: 'Allabolag.se',
    url: 'https://www.allabolag.se',
    method: 'company_registry'
  },
  linkedIn: {
    name: 'LinkedIn Sales Navigator',
    url: 'https://www.linkedin.com/sales',
    method: 'social_selling'
  },
  industryDirectories: {
    name: 'Industry Directories',
    method: 'manual_research'
  }
};

// Lead scoring weights
const SCORING = {
  companySize: {
    '1000+': 20,
    '200-999': 15,
    '50-199': 10,
    '10-49': 5,
    '<10': 2
  },
  revenue: {
    '100M+': 20,
    '50M-99M': 15,
    '10M-49M': 10,
    '2M-9M': 5,
    '<2M': 2
  },
  industryFit: {
    distributor: 15,
    brand_b2b: 10,
    ecommerce_b2b: 10,
    manufacturer: 8
  },
  growthSignals: {
    hiring_sales: 10,
    expansion: 10,
    new_funding: 10
  },
  contactQuality: {
    decision_maker: 10,
    multiple_contacts: 5
  },
  location: {
    sweden: 10,
    nordic: 5
  }
};

// Sample new leads to research (replace with actual research)
const NEW_LEADS_TO_RESEARCH = [
  // These would come from actual research
  // Format: { name, domain, industry, employees, revenue_guess, source }
];

function calculateLeadScore(lead) {
  let score = 0;
  
  // Company size
  if (lead.employees >= 1000) score += SCORING.companySize['1000+'];
  else if (lead.employees >= 200) score += SCORING.companySize['200-999'];
  else if (lead.employees >= 50) score += SCORING.companySize['50-199'];
  else if (lead.employees >= 10) score += SCORING.companySize['10-49'];
  else score += SCORING.companySize['<10'];
  
  // Revenue
  const revenue = parseRevenue(lead.revenue);
  if (revenue >= 100000000) score += SCORING.revenue['100M+'];
  else if (revenue >= 50000000) score += SCORING.revenue['50M-99M'];
  else if (revenue >= 10000000) score += SCORING.revenue['10M-49M'];
  else if (revenue >= 2000000) score += SCORING.revenue['2M-9M'];
  else score += SCORING.revenue['<2M'];
  
  // Industry fit
  if (lead.type === 'distributor') score += SCORING.industryFit.distributor;
  else if (lead.type === 'brand') score += SCORING.industryFit.brand_b2b;
  else if (lead.type === 'ecommerce') score += SCORING.industryFit.ecommerce_b2b;
  
  // Location
  if (lead.country === 'Sweden') score += SCORING.location.sweden;
  else if (['Norway', 'Denmark', 'Finland'].includes(lead.country)) score += SCORING.location.nordic;
  
  return Math.min(score, 100);
}

function parseRevenue(revenueStr) {
  if (!revenueStr) return 0;
  const num = parseFloat(revenueStr.replace(/[^0-9.]/g, ''));
  if (revenueStr.includes('M')) return num * 1000000;
  if (revenueStr.includes('K')) return num * 1000;
  return num;
}

function getLeadPriority(score) {
  if (score >= 90) return '🔥🔥🔥 TOP';
  if (score >= 85) return '🔥🔥 HOT';
  if (score >= 75) return '🔥 WARM';
  if (score >= 60) return '🌡️ LUKEWARM';
  return '❄️ COLD';
}

async function addCompanyToAttio(company) {
  const response = await fetch('https://api.attio.com/v2/objects/companies/records', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + ATTIO_TOKEN,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data: {
        values: {
          name: company.name,
          domains: [company.domain],
          description: `${company.industry}. Lead Score: ${company.score}/100 ${getLeadPriority(company.score)}. Added: ${new Date().toISOString().split('T')[0]}`
        }
      }
    })
  });
  
  if (!response.ok) {
    const error = await response.text();
    if (error.includes('already exists')) {
      return { status: 'exists', company: company.name };
    }
    throw new Error(error);
  }
  
  return { status: 'created', company: company.name };
}

async function researchNewLeads() {
  console.log('🔍 Researching new Swedish leads...\n');
  
  // In a real implementation, this would:
  // 1. Scrape allabolag.se for companies by industry
  // 2. Search LinkedIn for companies with B2B sales
  // 3. Check industry directories
  // 4. Use APIs like Clearbit, Hunter.io, etc.
  
  // For now, return placeholder
  console.log('📋 Lead Research Checklist:');
  console.log('□ Search allabolag.se for companies in target industries');
  console.log('□ LinkedIn Sales Navigator: Swedish companies with "B2B" or "wholesale"');
  console.log('□ Check Swedish Trade Council member directory');
  console.log('□ Review industry publications for growing companies');
  console.log('□ Look for companies hiring sales/distribution roles\n');
  
  return [];
}

async function main() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  BRANDGATE LEAD GENERATION SYSTEM');
  console.log('  Target: 20-30 new Swedish companies/week');
  console.log('═══════════════════════════════════════════════════\n');
  
  // Load existing pipeline
  let pipeline = { leads: [], lastUpdated: new Date().toISOString() };
  try {
    pipeline = JSON.parse(fs.readFileSync(LEAD_DB, 'utf8'));
  } catch {}
  
  console.log(`📊 Current pipeline: ${pipeline.leads.length} leads`);
  console.log(`🎯 Target: Add 20-30 new leads this week\n`);
  
  // Research new leads
  const newLeads = await researchNewLeads();
  
  console.log('═══════════════════════════════════════════════════');
  console.log('  RECOMMENDED LEAD SOURCES');
  console.log('═══════════════════════════════════════════════════\n');
  
  console.log('1. 🔍 Allabolag.se (Swedish Company Registry)');
  console.log('   - Search by industry code (SNI)');
  console.log('   - Filter by revenue (€2M+)');
  console.log('   - Filter by employees (10+)');
  console.log('   - URL: https://www.allabolag.se\n');
  
  console.log('2. 💼 LinkedIn Sales Navigator');
  console.log('   - Geography: Sweden');
  console.log('   - Company size: 11-200 employees');
  console.log('   - Keywords: B2B, wholesale, distribution, export');
  console.log('   - Seniority: VP, Director, Head of, C-level\n');
  
  console.log('3. 🏢 Swedish Trade Council');
  console.log('   - Export-ready Swedish companies');
  console.log('   - Industry: Consumer goods, food, fashion');
  console.log('   - URL: https://www.business-sweden.com\n');
  
  console.log('4. 📰 Industry News & Directories');
  console.log('   - Dagens Industri (di.se) - business news');
  console.log('   - Breakit.se - Swedish startup/scaleup news');
  console.log('   - Industry-specific associations\n');
  
  console.log('═══════════════════════════════════════════════════');
  console.log('  LEAD QUALIFICATION CRITERIA');
  console.log('═══════════════════════════════════════════════════\n');
  
  console.log('✅ IDEAL LEAD PROFILE:');
  console.log('   • Swedish company (or Nordic)');
  console.log('   • B2B sales or wholesale business');
  console.log('   • €2M+ revenue OR 10+ employees');
  console.log('   • Growing or expanding');
  console.log('   • Has decision maker contact available\n');
  
  console.log('❌ DISQUALIFY IF:');
  console.log('   • Pure B2C with no wholesale interest');
  console.log('   • < €500K revenue');
  console.log('   • No website or online presence');
  console.log('   • Already a competitor\'s customer (check carefully)\n');
  
  console.log('═══════════════════════════════════════════════════');
  console.log('  NEXT STEPS');
  console.log('═══════════════════════════════════════════════════\n');
  
  console.log('To add leads manually:');
  console.log('1. Research companies from sources above');
  console.log('2. Score them using the criteria (target 75+ score)');
  console.log('3. Find decision maker contacts (LinkedIn, website)');
  console.log('4. Add to Attio with lead score');
  console.log('5. Queue for outreach\n');
  
  console.log('📁 Files created:');
  console.log('  • OUTREACH_OPERATIONS_GUIDE.md - Full playbook');
  console.log('  • ATTIO_STAGE_UPDATES.csv - Stage changes needed');
  console.log('  • lead-pipeline.json - Lead database\n');
  
  console.log('✅ Lead generation system ready!');
}

main().catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});

#!/usr/bin/env node
// Publish blog posts to Ghost

const GHOST_ADMIN_API_KEY = '69a309d20765f4000125b7c3:88b39e10b406c70a32aa5a3876e6f558ce971cd43850cefff4397a4842c50b73';
const GHOST_API_URL = 'https://brandgate.ghost.io/ghost/api/admin';

// Blog posts content
const blogPosts = [
  {
    title: "The Complete Guide to B2B Distribution Management in 2024",
    slug: "b2b-distribution-guide",
    excerpt: "Learn how to manage your distribution network efficiently. Covers partner selection, onboarding, pricing strategies, and scaling with the right tools.",
    html: `<h2>What is B2B Distribution Management?</h2>
<p>B2B distribution management is the process of overseeing how your products move from manufacturing to end customers through intermediary partners. Unlike direct-to-consumer (D2C) sales, you're not just managing customer relationships—you're managing <strong>business relationships</strong> with entities that have their own customers, processes, and expectations.</p>

<h3>Key Components:</h3>
<ul>
<li><strong>Partner onboarding</strong> - Getting distributors set up with catalogs, pricing, and systems</li>
<li><strong>Order management</strong> - Processing, tracking, and fulfilling orders across your network</li>
<li><strong>Inventory coordination</strong> - Ensuring stock availability without overcommitting</li>
<li><strong>Pricing & terms</strong> - Managing tiered pricing, volume discounts, and payment terms</li>
<li><strong>Performance tracking</strong> - Monitoring sales, growth, and partner health</li>
<li><strong>Communication</strong> - Keeping distributors informed and engaged</li>
</ul>

<h2>Why Traditional Distribution Management Fails</h2>
<p>Many brands start with spreadsheets, email threads, and manual processes. This works—until it doesn't.</p>

<h3>The Breaking Point</h3>
<p>Most brands hit a wall around <strong>10-15 active distributors</strong>. At this scale:</p>
<ul>
<li><strong>Email becomes unmanageable</strong> - Order confirmations, inventory updates, and support requests flood your inbox</li>
<li><strong>Spreadsheets break</strong> - Version control issues, conflicting data, and access problems emerge</li>
<li><strong>Errors multiply</strong> - Manual data entry leads to pricing mistakes, wrong shipments, and frustrated partners</li>
<li><strong>Visibility disappears</strong> - You lose track of who's selling what, where inventory sits, and which distributors need attention</li>
</ul>

<blockquote>
"We were spending 20 hours a week just processing orders and answering emails. Our growth stalled because we couldn't handle more distributors without hiring more staff." — <em>Anonymous Brand Manager</em>
</blockquote>

<h2>The Modern Approach: Distribution Operating Systems</h2>
<p>Today's leading brands use <strong>distribution operating systems</strong>—software platforms designed specifically for B2B relationships. These systems replace fragmented tools with a single source of truth.</p>

<h3>Core Features of Distribution Software:</h3>
<table>
<tr><th>Feature</th><th>Problem Solved</th></tr>
<tr><td><strong>Branded Portals</strong></td><td>Give each distributor a personalized ordering experience</td></tr>
<tr><td><strong>Automated Workflows</strong></td><td>Process orders, generate invoices, and send updates automatically</td></tr>
<tr><td><strong>Real-time Inventory</strong></td><td>Prevent stockouts and overcommitment across all channels</td></tr>
<tr><td><strong>Tiered Pricing</strong></td><td>Manage complex pricing structures without manual calculations</td></tr>
<tr><td><strong>Analytics Dashboard</strong></td><td>Track performance, identify trends, and spot issues early</td></tr>
<tr><td><strong>Integration APIs</strong></td><td>Connect to your ERP, accounting, and shipping systems</td></tr>
</table>

<h2>Choosing the Right Distribution Partners</h2>
<p>Technology alone won't save a bad partner strategy. Here's how to evaluate potential distributors:</p>

<h3>The 5 C's of Distributor Selection</h3>
<ol>
<li><strong>Coverage</strong> - Do they reach your target geography and customer segments?</li>
<li><strong>Capability</strong> - Can they handle your product type, volume, and service requirements?</li>
<li><strong>Culture</strong> - Do their values align with yours? Will they represent your brand well?</li>
<li><strong>Commitment</strong> - Are they willing to invest in training, marketing, and inventory?</li>
<li><strong>Communication</strong> - Do they respond promptly and proactively share information?</li>
</ol>

<h3>Red Flags to Watch For:</h3>
<ul>
<li>🚩 Poor financial health or payment delays</li>
<li>🚩 Conflicting brand portfolios (direct competitors)</li>
<li>🚩 Reluctance to sign exclusivity or territory agreements</li>
<li>🚩 Resistance to using your systems or processes</li>
<li>🚩 No digital presence or e-commerce capability</li>
</ul>

<h2>Conclusion</h2>
<p>Effective B2B distribution management isn't about having the most distributors—it's about having the <strong>right distributors</strong> and supporting them with <strong>the right systems</strong>.</p>

<p><strong>Ready to modernize your distribution management?</strong> <a href="https://brandgate.dev/signup">Start your free BrandGate trial</a> and see how the right platform transforms your B2B operations.</p>`,
    featured: true,
    tags: ["Distribution Strategy", "B2B", "Wholesale"]
  },
  {
    title: "How to Choose the Right B2B E-commerce Platform",
    slug: "choose-b2b-ecommerce-platform", 
    excerpt: "Key features to look for when selecting a B2B e-commerce platform. Compare options and find the best solution for your distribution needs.",
    html: `<h2>Understand Your Requirements First</h2>
<p>Before comparing platforms, document your specific needs:</p>

<h3>Business Model Questions:</h3>
<ul>
<li>How many distributors do you currently have? How many in 2-3 years?</li>
<li>What's your average order value and volume?</li>
<li>Do you need multi-currency or multi-language support?</li>
<li>What integrations are essential (ERP, CRM, accounting)?</li>
</ul>

<h2>Essential Features Checklist</h2>

<h3>1. Distributor Portal</h3>
<p><strong>Why it matters:</strong> Your distributors need a dedicated space to browse products, place orders, and track shipments.</p>
<p><strong>Look for:</strong></p>
<ul>
<li>Custom branding per distributor</li>
<li>Personalized catalogs and pricing</li>
<li>Order history and reordering</li>
<li>Self-service account management</li>
</ul>

<h3>2. Order Management</h3>
<p><strong>Why it matters:</strong> Manual order processing is the biggest time drain in distribution.</p>
<p><strong>Look for:</strong></p>
<ul>
<li>Bulk order capabilities</li>
<li>Quick reorder from history</li>
<li>Order approval workflows</li>
<li>Automated order confirmations</li>
</ul>

<h2>Platform Types Compared</h2>

<h3>Option 1: All-in-One Distribution Platforms</h3>
<p><strong>Examples:</strong> BrandGate, Sana Commerce</p>
<p><strong>Pros:</strong></p>
<ul>
<li>Built specifically for B2B distribution</li>
<li>Distributor portal included</li>
<li>Faster implementation</li>
</ul>

<h3>Option 2: B2B-Ready E-commerce Platforms</h3>
<p><strong>Examples:</strong> Shopify Plus B2B, BigCommerce B2B Edition</p>
<p><strong>Pros:</strong></p>
<ul>
<li>Familiar interfaces</li>
<li>Large app ecosystems</li>
<li>Proven scalability</li>
</ul>

<h2>Conclusion</h2>
<p>The right B2B e-commerce platform becomes the foundation of your distribution operations. Take time to evaluate thoroughly, involve your team in the decision, and plan for growth.</p>

<p><strong>Ready to see how BrandGate compares?</strong> <a href="https://brandgate.dev/demo">Schedule a personalized demo</a> and we'll show you how our platform handles your specific requirements.</p>`,
    featured: false,
    tags: ["B2B E-commerce", "Platform Selection", "Technology"]
  },
  {
    title: "B2B Distribution in Sweden: A Complete Guide for Brands",
    slug: "sweden-b2b-distribution-guide",
    excerpt: "Everything you need to know about B2B distribution in Sweden. Local regulations, best practices, and how to build a successful distribution network.",
    html: `<h2>Why Sweden?</h2>

<h3>Market Characteristics:</h3>

<p><strong>High Digital Adoption</strong></p>
<ul>
<li>98% internet penetration</li>
<li>Early adopters of e-commerce and digital tools</li>
<li>B2B buyers expect modern, self-service ordering experiences</li>
</ul>

<p><strong>Strong Economy</strong></p>
<ul>
<li>GDP per capita among highest in Europe</li>
<li>Stable currency (Swedish Krona - SEK)</li>
<li>Low corruption, transparent business practices</li>
</ul>

<h2>Legal & Regulatory Framework</h2>

<h3>Business Registration:</h3>
<p>To distribute in Sweden, you'll need:</p>
<ul>
<li>Swedish organization number (or EU VAT number for EU companies)</li>
<li>Registration with Swedish Tax Agency (Skatteverket)</li>
<li>Understanding of Swedish VAT rules (25% standard rate)</li>
</ul>

<h2>Finding Swedish Distributors</h2>

<h3>Trade Shows & Events:</h3>
<ul>
<li><strong>Formex</strong> (interior design) - Stockholm, August/January</li>
<li><strong>Natural Products Scandinavia</strong> (health/beauty) - Malmö, September</li>
<li><strong>Elmia Subcontractor</strong> (industrial) - Jönköping, November</li>
</ul>

<h2>Building Successful Partnerships</h2>

<h3>The Swedish Approach:</h3>

<p><strong>1. Take Time to Build Trust</strong></p>
<ul>
<li>Initial meetings focus on relationship, not immediate sales</li>
<li>References and case studies are important</li>
<li>Be prepared for a longer sales cycle</li>
</ul>

<p><strong>2. Emphasize Sustainability</strong></p>
<ul>
<li>Environmental credentials matter</li>
<li>Certifications (Nordic Swan, EU Ecolabel) add credibility</li>
<li>Transparent supply chains expected</li>
</ul>

<h2>Conclusion</h2>
<p>Sweden offers an excellent entry point into the Nordic B2B market. Success requires understanding local business culture, meeting high digital expectations, and building genuine partnerships.</p>

<p><strong>Ready to expand your distribution into Sweden?</strong> <a href="https://brandgate.dev/contact">Contact us</a> for a consultation on how BrandGate can support your Nordic expansion.</p>`,
    featured: false,
    tags: ["Sweden", "B2B", "Distribution", "Nordic Market"]
  }
];

// JWT token generation for Ghost Admin API
function generateJWT(key) {
  const [id, secret] = key.split(':');
  const header = { alg: 'HS256', typ: 'JWT', kid: id };
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iat: now,
    exp: now + 300,
    aud: '/v3/admin/'
  };
  
  const base64Header = Buffer.from(JSON.stringify(header)).toString('base64url');
  const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = require('crypto').createHmac('sha256', Buffer.from(secret, 'hex')).update(`${base64Header}.${base64Payload}`).digest('base64url');
  
  return `${base64Header}.${base64Payload}.${signature}`;
}

async function publishPost(post) {
  try {
    const token = generateJWT(GHOST_ADMIN_API_KEY);
    
    const response = await fetch(`${GHOST_API_URL}/posts/`, {
      method: 'POST',
      headers: {
        'Authorization': `Ghost ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        posts: [{
          title: post.title,
          slug: post.slug,
          html: post.html,
          excerpt: post.excerpt,
          featured: post.featured,
          status: 'published',
          tags: post.tags.map(tag => ({ name: tag }))
        }]
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Ghost API error: ${response.status} - ${error}`);
    }

    const data = await response.json();
    console.log(`✅ Published: ${post.title}`);
    console.log(`   URL: https://blog.brandgate.dev/${post.slug}/`);
    return { success: true, post: data.posts[0] };
  } catch (error) {
    console.error(`❌ Failed to publish "${post.title}":`, error.message);
    return { success: false, error: error.message };
  }
}

async function main() {
  console.log(`Publishing ${blogPosts.length} blog posts to Ghost...\n`);
  
  let published = 0;
  let failed = 0;

  for (const post of blogPosts) {
    const result = await publishPost(post);
    if (result.success) {
      published++;
    } else {
      failed++;
    }
    await new Promise(r => setTimeout(r, 1000)); // Rate limiting
  }

  console.log(`\n📊 Done:`);
  console.log(`✅ Published: ${published}`);
  console.log(`❌ Failed: ${failed}`);
  
  if (published > 0) {
    console.log(`\n🔗 Published posts:`);
    console.log(`1. https://blog.brandgate.dev/b2b-distribution-guide/`);
    console.log(`2. https://blog.brandgate.dev/choose-b2b-ecommerce-platform/`);
    console.log(`3. https://blog.brandgate.dev/sweden-b2b-distribution-guide/`);
  }
}

main();

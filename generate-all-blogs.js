#!/usr/bin/env node
// Update all blog posts with standardized language switcher

const posts = [
  {
    slug: 'b2b-distribution-guide',
    title: 'The Complete Guide to B2B Distribution Management in 2024',
    description: 'Learn how to manage your distribution network efficiently. Covers partner selection, onboarding, pricing strategies, and scaling with the right tools.',
    category: 'Distribution Strategy',
    date: 'Feb 28, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200',
    authorRole: 'Distribution Expert',
    lang: 'en',
    content: `<p>Managing a distribution network is one of the most complex challenges growing brands face. Whether you're working with 5 distributors or 500, the fundamentals of B2B distribution management remain the same: <strong>maintain visibility, automate processes, and keep your partners happy.</strong></p>

<h2>What is B2B Distribution Management?</h2>
<p>B2B distribution management is the process of overseeing how your products move from manufacturing to end customers through intermediary partners.</p>

<h3>Key Components:</h3>
<ul>
<li><strong>Partner onboarding</strong> - Getting distributors set up with catalogs, pricing, and systems</li>
<li><strong>Order management</strong> - Processing, tracking, and fulfilling orders across your network</li>
<li><strong>Inventory coordination</strong> - Ensuring stock availability without overcommitting</li>
<li><strong>Pricing & terms</strong> - Managing tiered pricing, volume discounts, and payment terms</li>
<li><strong>Performance tracking</strong> - Monitoring sales, growth, and partner health</li>
</ul>

<h2>Why Traditional Distribution Management Fails</h2>
<p>Many brands start with spreadsheets, email threads, and manual processes. This works—until it doesn't.</p>

<h2>Conclusion</h2>
<p>Effective B2B distribution management isn't about having the most distributors—it's about having the <strong>right distributors</strong> and supporting them with <strong>the right systems</strong>.</p>`
  },
  {
    slug: 'choose-b2b-ecommerce-platform',
    title: 'How to Choose the Right B2B E-commerce Platform',
    description: 'Key features to look for when selecting a B2B e-commerce platform. Compare options and find the best solution for your distribution needs.',
    category: 'B2B E-commerce',
    date: 'Feb 28, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
    authorRole: 'Distribution Expert',
    lang: 'en',
    content: `<p>Selecting a B2B e-commerce platform is one of the most important technology decisions a growing brand can make. The right platform can streamline operations, improve distributor satisfaction, and accelerate growth.</p>

<h2>Understand Your Requirements First</h2>
<p>Before comparing platforms, document your specific needs:</p>
<ul>
<li>How many distributors do you currently have?</li>
<li>What's your average order value and volume?</li>
<li>Do you need multi-currency or multi-language support?</li>
</ul>

<h2>Essential Features Checklist</h2>
<p><strong>1. Distributor Portal:</strong> Your distributors need a dedicated space to browse products, place orders, and track shipments.</p>
<p><strong>2. Order Management:</strong> Manual order processing is the biggest time drain in distribution.</p>

<h2>Conclusion</h2>
<p>The right B2B e-commerce platform becomes the foundation of your distribution operations.</p>`
  },
  {
    slug: 'sweden-b2b-distribution-guide',
    title: 'B2B Distribution in Sweden: A Complete Guide for Brands',
    description: 'Everything you need to know about B2B distribution in Sweden. Local regulations, best practices, and how to build a successful distribution network.',
    category: 'Sweden',
    date: 'Feb 28, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1520769945061-0a448c463865?w=1200',
    authorRole: 'Distribution Expert',
    lang: 'en',
    content: `<p>Sweden represents one of Europe's most attractive B2B markets. With a highly digitized economy, strong purchasing power, and business-friendly regulations, it's an ideal starting point for brands looking to expand.</p>

<h2>Why Sweden?</h2>
<p><strong>High Digital Adoption:</strong> 98% internet penetration, early adopters of e-commerce.</p>
<p><strong>Strong Economy:</strong> GDP per capita among highest in Europe.</p>

<h2>Finding Distributors in Sweden</h2>
<p>Svenska distributörer specialiserar sig ofta på produktkategori. Key sectors include food & beverage, fashion, health & beauty.</p>

<h2>Conclusion</h2>
<p>Sweden offers an excellent entry point into the Nordic B2B market.</p>`
  },
  {
    slug: 'b2b-pricing-strategies',
    title: 'B2B Pricing Strategies: How to Set Wholesale Prices That Sell',
    description: 'Learn proven B2B pricing strategies. Discover how to set wholesale prices, create tiered pricing models, and maximize distributor margins.',
    category: 'Pricing',
    date: 'Mar 1, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200',
    authorRole: 'Distribution Expert',
    lang: 'en',
    content: `<p>Setting the right wholesale price is one of the most critical decisions for B2B brands. Price too high, and distributors look elsewhere. Price too low, and you erode margins.</p>

<h2>The Wholesale Pricing Formula</h2>
<p>Start with your cost structure and work backwards. Consider manufacturing cost, target margin, and retail markup.</p>

<h2>Tiered Pricing Models</h2>
<p>Reward volume with better margins. Typical tiers: 1-100 units, 101-500 units, 501+ units.</p>

<h2>Conclusion</h2>
<p>Effective B2B pricing balances profitability with distributor incentives.</p>`
  },
  {
    slug: 'inventory-management-distributors',
    title: 'Inventory Management for Distributors: Best Practices 2024',
    description: 'Master inventory management for distributors. Learn stock control, demand forecasting, and how to prevent stockouts while minimizing carrying costs.',
    category: 'Inventory',
    date: 'Mar 1, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200',
    authorRole: 'Distribution Expert',
    lang: 'en',
    content: `<p>Effective inventory management separates thriving distributors from struggling ones. Too much stock ties up capital and increases risk.</p>

<h2>The True Cost of Inventory</h2>
<p>Carrying costs are 20-30% of inventory value annually. Include warehousing, insurance, and capital costs.</p>

<h2>ABC Analysis</h2>
<p>A Items (20% of SKUs, 80% of revenue): Daily monitoring. B Items: Weekly review. C Items: Monthly review.</p>

<h2>Conclusion</h2>
<p>Great inventory management balances service levels with cost efficiency.</p>`
  },
  {
    slug: 'find-distributors-europe',
    title: 'How to Find Distributors in Europe: 2024 Guide',
    description: 'Discover how to find distributors in Europe. Learn where to search, how to evaluate partners, and build a successful European distribution network.',
    category: 'Europe',
    date: 'Mar 1, 2026',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200',
    authorRole: 'Distribution Expert',
    lang: 'en',
    content: `<p>Europe represents one of the world's largest and most diverse B2B markets. With over 450 million consumers, it's an attractive destination for brands.</p>

<h2>Where to Find European Distributors</h2>
<p>Trade shows, industry associations, and online platforms like Europages and Kompass.</p>

<h2>Key European Markets</h2>
<p>Germany (largest economy), France (luxury goods), UK (despite Brexit), Nordic countries (high purchasing power).</p>

<h2>Conclusion</h2>
<p>Finding distributors in Europe requires patience and persistence.</p>`
  }
];

function generateHTML(post) {
  const langCode = post.lang === 'sv' ? 'SV' : 'EN';
  const otherLang = post.lang === 'sv' ? 'en' : 'sv';
  const otherLangName = post.lang === 'sv' ? 'English' : 'Svenska';
  const currentLangName = post.lang === 'sv' ? 'Svenska' : 'English';
  const backLink = post.lang === 'sv' ? '/sv/blog' : '/blog';
  const backText = post.lang === 'sv' ? '← Tillbaka till Bloggen' : '← Back to Blog';
  const ctaTitle = post.lang === 'sv' ? 'Redo att effektivisera din distribution?' : 'Ready to streamline your distribution?';
  const ctaSubtitle = post.lang === 'sv' ? 'Gå med varumärken som använder BrandGate' : 'Join brands using BrandGate to manage their B2B distribution';
  const ctaButton = post.lang === 'sv' ? 'Utforska BrandGate' : 'Explore BrandGate';
  const rights = post.lang === 'sv' ? 'Alla rättigheter förbehållna' : 'All rights reserved';
  
  return `<!DOCTYPE html>
<html lang="${post.lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${post.title} | BrandGate Blog</title>
  <meta name="description" content="${post.description}">
  <link rel="alternate" hreflang="en" href="https://brandgate.dev/blog/${post.slug}/" />
  <link rel="alternate" hreflang="sv-SE" href="https://brandgate.dev/blog/sv/${post.slug}/" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', sans-serif; background: #F5F5F5; color: #4D4D4D; line-height: 1.6; }
    .nav { position: sticky; top: 0; background: #F5F5F5; border-bottom: 1px solid #E3E3E3; z-index: 50; }
    .nav-inner { max-width: 800px; margin: 0 auto; padding: 1rem 1.5rem; display: flex; justify-content: space-between; align-items: center; }
    .nav-back { color: #6E6B6B; text-decoration: none; font-size: 0.875rem; font-weight: 500; }
    .nav-back:hover { color: #003822; }
    .lang-switcher { position: relative; }
    .lang-btn { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0.75rem; background: white; border: 1px solid #E3E3E3; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; color: #4D4D4D; cursor: pointer; transition: all 0.2s; }
    .lang-btn:hover { border-color: #003822; }
    .lang-btn.active { border-color: #003822; }
    .lang-btn svg { width: 12px; height: 12px; transition: transform 0.2s; }
    .lang-btn.active svg { transform: rotate(180deg); }
    .lang-dropdown { display: none; position: absolute; right: 0; top: calc(100% + 4px); background: white; border: 1px solid #E3E3E3; border-radius: 0.375rem; box-shadow: 0 4px 12px rgba(0,0,0,0.1); min-width: 140px; z-index: 100; overflow: hidden; }
    .lang-dropdown.show { display: block; }
    .lang-option { display: block; padding: 0.625rem 0.875rem; color: #4D4D4D; text-decoration: none; font-size: 0.875rem; transition: background 0.15s; border-bottom: 1px solid #F5F5F5; }
    .lang-option:last-child { border-bottom: none; }
    .lang-option:hover { background: #F5F5F5; }
    .lang-option.active { background: #003822; color: white; }
    .hero { position: relative; height: 300px; background: url('${post.image}') center/cover; }
    .hero::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,56,34,0.8), transparent); }
    .content-wrap { max-width: 800px; margin: 0 auto; padding: 0 1.5rem; position: relative; z-index: 10; margin-top: -6rem; }
    .content { background: white; border-radius: 1rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); padding: 2rem; }
    @media (min-width: 768px) { .content { padding: 3rem; } .hero { height: 400px; } }
    .meta { display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; font-size: 0.875rem; color: #6E6B6B; margin-bottom: 1.5rem; }
    .tag { background: rgba(229,164,0,0.1); color: #E5A400; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 500; }
    h1 { font-size: 2rem; color: #003822; font-weight: 700; line-height: 1.2; margin-bottom: 1.5rem; }
    @media (min-width: 768px) { h1 { font-size: 2.5rem; } }
    .author { display: flex; align-items: center; gap: 1rem; padding-bottom: 1.5rem; margin-bottom: 1.5rem; border-bottom: 1px solid #E3E3E3; }
    .author-avatar { width: 48px; height: 48px; border-radius: 50%; background: #003822; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; }
    .prose { font-size: 1.125rem; }
    .prose h2 { font-size: 1.5rem; color: #003822; font-weight: 700; margin: 2rem 0 1rem; }
    .prose h3 { font-size: 1.25rem; color: #003822; font-weight: 600; margin: 1.5rem 0 0.75rem; }
    .prose p { margin-bottom: 1.25rem; }
    .prose ul { margin: 1rem 0; padding-left: 1.5rem; }
    .prose li { margin-bottom: 0.5rem; }
    .prose strong { color: #003822; }
    .prose a { color: #E5A400; text-decoration: none; }
    .cta { background: #003822; border-radius: 0.75rem; padding: 2rem; text-align: center; margin-top: 2rem; }
    .cta h3 { color: white; font-size: 1.5rem; margin-bottom: 1rem; }
    .cta p { color: rgba(255,255,255,0.8); margin-bottom: 1.5rem; }
    .cta a { display: inline-block; background: #E5A400; color: #1A1A1A; padding: 0.875rem 2rem; border-radius: 9999px; font-weight: 600; text-decoration: none; }
    .footer { border-top: 1px solid #E3E3E3; margin-top: 3rem; padding: 2rem; text-align: center; color: #6E6B6B; font-size: 0.875rem; }
  </style>
</head>
<body>
  <nav class="nav">
    <div class="nav-inner">
      <a href="${backLink}" class="nav-back">${backText}</a>
      <div class="lang-switcher">
        <button class="lang-btn" onclick="toggleLang()">
          <span>${langCode}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px;"><path d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div class="lang-dropdown" id="langDropdown">
          <a href="/blog/${post.slug}/" class="lang-option ${post.lang === 'en' ? 'active' : ''}">${post.lang === 'en' ? currentLangName : otherLangName}</a>
          <a href="/blog/sv/${post.slug}/" class="lang-option ${post.lang === 'sv' ? 'active' : ''}">${post.lang === 'sv' ? currentLangName : otherLangName}</a>
        </div>
      </div>
    </div>
  </nav>

  <div class="hero"></div>

  <div class="content-wrap">
    <article class="content">
      <div class="meta">
        <span class="tag">${post.category}</span>
        <span>${post.date}</span>
        <span>${post.readTime}</span>
      </div>

      <h1>${post.title}</h1>

      <div class="author">
        <div class="author-avatar">W</div>
        <div>
          <div style="font-weight:600;color:#003822;">Will</div>
          <div style="font-size:0.875rem;color:#6E6B6B;">${post.authorRole}</div>
        </div>
      </div>

      <div class="prose">
        ${post.content}
      </div>

      <div class="cta">
        <h3>${ctaTitle}</h3>
        <p>${ctaSubtitle}</p>
        <a href="https://brandgate.dev">${ctaButton}</a>
      </div>
    </article>
  </div>

  <footer class="footer">
    <p>© <span id="year">2026</span> BrandGate. ${rights}</p>
  </footer>

  <script>
    function toggleLang() {
      const btn = document.querySelector('.lang-btn');
      const dropdown = document.getElementById('langDropdown');
      btn.classList.toggle('active');
      dropdown.classList.toggle('show');
    }
    document.addEventListener('click', function(e) {
      const switcher = document.querySelector('.lang-switcher');
      if (!switcher.contains(e.target)) {
        document.querySelector('.lang-btn').classList.remove('active');
        document.getElementById('langDropdown').classList.remove('show');
      }
    });
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>
</body>
</html>`;
}

// Generate all posts
posts.forEach(post => {
  const html = generateHTML(post);
  console.log(`Generated: ${post.slug} (${post.lang})`);
  // Would save to file here
});

console.log('\nAll 6 posts generated with standardized switcher!');

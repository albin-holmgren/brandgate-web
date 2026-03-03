#!/usr/bin/env node
// page-builder.js
// Build new website pages for brandgate.dev

const fs = require('fs');
const path = require('path');

const WEB_DIR = './brandgate-web';
const PUBLIC_DIR = path.join(WEB_DIR, 'public');

console.log('═══════════════════════════════════════════════════');
console.log('  🔨 BRANDGATE PAGE BUILDER');
console.log('  Build new website pages on demand');
console.log('═══════════════════════════════════════════════════\n');

// Page templates
const templates = {
  pricing: {
    title: 'Pricing - BrandGate',
    description: 'Simple, transparent pricing for B2B wholesale distribution.',
    file: 'pricing.html'
  },
  features: {
    title: 'Features - BrandGate',
    description: 'Everything you need to manage B2B wholesale distribution.',
    file: 'features.html'
  },
  contact: {
    title: 'Contact - BrandGate',
    description: 'Get in touch with the BrandGate team.',
    file: 'contact.html'
  },
  about: {
    title: 'About - BrandGate',
    description: 'Learn about BrandGate and our mission.',
    file: 'about.html'
  },
  integrations: {
    title: 'Integrations - BrandGate',
    description: 'Connect BrandGate with your favorite tools.',
    file: 'integrations.html'
  },
  faq: {
    title: 'FAQ - BrandGate',
    description: 'Frequently asked questions about BrandGate.',
    file: 'faq.html'
  }
};

function buildPricingPage() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pricing - BrandGate | B2B Distribution Platform</title>
    <meta name="description" content="Simple, transparent pricing for B2B wholesale distribution. Start free, scale as you grow.">
    <link rel="stylesheet" href="/styles.css">
    <!-- Mixpanel -->
    <script src="https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js"></script>
    <script>
      mixpanel.init("9277e80f2dc38a2e8bab577cc8f20268", { debug: false, track_pageview: true });
    </script>
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-GMPPJ71Y58"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-GMPPJ71Y58');
    </script>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { 
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background: #F5F5F5;
        color: #1A1A1A;
        line-height: 1.6;
      }
      .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
      header { 
        background: #003822; 
        padding: 16px 0;
        position: sticky;
        top: 0;
        z-index: 100;
      }
      .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .logo { 
        color: white; 
        font-size: 24px; 
        font-weight: bold;
        text-decoration: none;
      }
      .nav-links a {
        color: white;
        text-decoration: none;
        margin-left: 32px;
        font-size: 14px;
      }
      .hero {
        background: #003822;
        color: white;
        padding: 80px 0;
        text-align: center;
      }
      .hero h1 { font-size: 48px; margin-bottom: 16px; }
      .hero p { font-size: 20px; opacity: 0.9; max-width: 600px; margin: 0 auto; }
      .pricing-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 32px;
        padding: 64px 0;
      }
      .pricing-card {
        background: white;
        border-radius: 12px;
        padding: 40px 32px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        text-align: center;
        position: relative;
      }
      .pricing-card.featured {
        border: 2px solid #E5A400;
        transform: scale(1.05);
      }
      .badge {
        position: absolute;
        top: -12px;
        left: 50%;
        transform: translateX(-50%);
        background: #E5A400;
        color: #1A1A1A;
        padding: 6px 16px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
      }
      .plan-name { font-size: 24px; font-weight: 600; margin-bottom: 8px; }
      .plan-desc { color: #666; margin-bottom: 24px; }
      .price {
        font-size: 48px;
        font-weight: 700;
        color: #003822;
        margin-bottom: 8px;
      }
      .price span {
        font-size: 16px;
        font-weight: 400;
        color: #666;
      }
      .features {
        list-style: none;
        margin: 32px 0;
        text-align: left;
      }
      .features li {
        padding: 8px 0;
        padding-left: 28px;
        position: relative;
      }
      .features li:before {
        content: "✓";
        position: absolute;
        left: 0;
        color: #E5A400;
        font-weight: bold;
      }
      .cta-button {
        display: block;
        width: 100%;
        padding: 16px;
        background: #003822;
        color: white;
        text-decoration: none;
        border-radius: 8px;
        font-weight: 600;
        transition: background 0.2s;
      }
      .cta-button:hover { background: #004d2e; }
      .pricing-card.featured .cta-button {
        background: #E5A400;
        color: #1A1A1A;
      }
      .pricing-card.featured .cta-button:hover { background: #cc9400; }
      .faq-section {
        background: white;
        padding: 64px 0;
      }
      .faq-section h2 {
        text-align: center;
        font-size: 36px;
        margin-bottom: 48px;
      }
      .faq-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 32px;
      }
      .faq-item h3 {
        font-size: 18px;
        margin-bottom: 12px;
        color: #003822;
      }
      .faq-item p {
        color: #666;
        line-height: 1.6;
      }
      footer {
        background: #1A1A1A;
        color: white;
        padding: 48px 0;
        text-align: center;
      }
      .footer-links {
        margin-bottom: 24px;
      }
      .footer-links a {
        color: white;
        text-decoration: none;
        margin: 0 16px;
        font-size: 14px;
      }
      .footer-links a:hover { text-decoration: underline; }
      @media (max-width: 768px) {
        .hero h1 { font-size: 32px; }
        .pricing-card.featured { transform: none; }
        .faq-grid { grid-template-columns: 1fr; }
      }
    </style>
</head>
<body>
    <header>
        <div class="container header-content">
            <a href="/" class="logo">BrandGate</a>
            <nav class="nav-links">
                <a href="/features">Features</a>
                <a href="/pricing">Pricing</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    </header>

    <section class="hero">
        <div class="container">
            <h1>Simple, Transparent Pricing</h1>
            <p>Start free, scale as you grow. No hidden fees, no surprises.</p>
        </div>
    </section>

    <section class="container">
        <div class="pricing-grid">
            <div class="pricing-card">
                <div class="plan-name">Starter</div>
                <div class="plan-desc">Perfect for brands just starting wholesale</div>
                <div class="price">€49<span>/month</span></div>
                <ul class="features">
                    <li>Up to 25 retailers</li>
                    <li>Basic order management</li>
                    <li>Email notifications</li>
                    <li>Standard support</li>
                    <li>Basic analytics</li>
                </ul>
                <a href="mailto:team@brandgate.dev?subject=Start Starter Plan" class="cta-button">Get Started</a>
            </div>

            <div class="pricing-card featured">
                <div class="badge">Most Popular</div>
                <div class="plan-name">Growth</div>
                <div class="plan-desc">For growing brands ready to scale</div>
                <div class="price">€149<span>/month</span></div>
                <ul class="features">
                    <li>Up to 100 retailers</li>
                    <li>Advanced order management</li>
                    <li>Automated workflows</li>
                    <li>Priority support</li>
                    <li>Advanced analytics</li>
                    <li>API access</li>
                    <li>Custom integrations</li>
                </ul>
                <a href="mailto:team@brandgate.dev?subject=Start Growth Plan" class="cta-button">Get Started</a>
            </div>

            <div class="pricing-card">
                <div class="plan-name">Enterprise</div>
                <div class="plan-desc">For established brands with complex needs</div>
                <div class="price">Custom</div>
                <ul class="features">
                    <li>Unlimited retailers</li>
                    <li>Full feature set</li>
                    <li>Dedicated account manager</li>
                    <li>24/7 phone support</li>
                    <li>Custom development</li>
                    <li>SLA guarantee</li>
                    <li>On-premise option</li>
                </ul>
                <a href="mailto:team@brandgate.dev?subject=Enterprise Inquiry" class="cta-button">Contact Sales</a>
            </div>
        </div>
    </section>

    <section class="faq-section">
        <div class="container">
            <h2>Frequently Asked Questions</h2>
            <div class="faq-grid">
                <div class="faq-item">
                    <h3>Can I change plans anytime?</h3>
                    <p>Yes! You can upgrade or downgrade at any time. Changes take effect on your next billing cycle.</p>
                </div>
                <div class="faq-item">
                    <h3>Is there a free trial?</h3>
                    <p>Yes, all plans come with a 14-day free trial. No credit card required.</p>
                </div>
                <div class="faq-item">
                    <h3>What payment methods do you accept?</h3>
                    <p>We accept all major credit cards, bank transfers, and invoicing for annual plans.</p>
                </div>
                <div class="faq-item">
                    <h3>Do you offer discounts for annual billing?</h3>
                    <p>Yes! Save 20% when you pay annually.</p>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <div class="footer-links">
                <a href="/">Home</a>
                <a href="/features">Features</a>
                <a href="/pricing">Pricing</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
            </div>
            <p>&copy; 2026 BrandGate. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`;

  const filePath = path.join(PUBLIC_DIR, 'pricing.html');
  fs.writeFileSync(filePath, html);
  console.log('✅ Pricing page built: /pricing.html');
  return filePath;
}

function buildContactPage() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - BrandGate | Get in Touch</title>
    <meta name="description" content="Get in touch with the BrandGate team. We'd love to hear from you.">
    <link rel="stylesheet" href="/styles.css">
    <script src="https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js"></script>
    <script>
      mixpanel.init("9277e80f2dc38a2e8bab577cc8f20268", { debug: false, track_pageview: true });
    </script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-GMPPJ71Y58"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-GMPPJ71Y58');
    </script>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { 
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background: #F5F5F5;
        color: #1A1A1A;
        line-height: 1.6;
      }
      .container { max-width: 800px; margin: 0 auto; padding: 0 24px; }
      header { 
        background: #003822; 
        padding: 16px 0;
        position: sticky;
        top: 0;
        z-index: 100;
      }
      .header-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .logo { 
        color: white; 
        font-size: 24px; 
        font-weight: bold;
        text-decoration: none;
      }
      .nav-links a {
        color: white;
        text-decoration: none;
        margin-left: 32px;
        font-size: 14px;
      }
      .hero {
        background: #003822;
        color: white;
        padding: 80px 0;
        text-align: center;
      }
      .hero h1 { font-size: 48px; margin-bottom: 16px; }
      .hero p { font-size: 20px; opacity: 0.9; }
      .contact-section {
        background: white;
        padding: 64px 0;
        margin: 48px 0;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      }
      .form-group {
        margin-bottom: 24px;
      }
      label {
        display: block;
        margin-bottom: 8px;
        font-weight: 500;
        color: #333;
      }
      input, textarea, select {
        width: 100%;
        padding: 12px 16px;
        border: 1px solid #ddd;
        border-radius: 8px;
        font-size: 16px;
        font-family: inherit;
      }
      input:focus, textarea:focus, select:focus {
        outline: none;
        border-color: #003822;
      }
      textarea {
        min-height: 150px;
        resize: vertical;
      }
      .submit-btn {
        background: #003822;
        color: white;
        padding: 16px 32px;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        width: 100%;
      }
      .submit-btn:hover { background: #004d2e; }
      .contact-info {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 32px;
        margin-top: 48px;
        padding-top: 48px;
        border-top: 1px solid #eee;
      }
      .info-item h3 {
        color: #003822;
        margin-bottom: 8px;
        font-size: 16px;
      }
      .info-item p {
        color: #666;
      }
      .info-item a {
        color: #003822;
        text-decoration: none;
      }
      .info-item a:hover { text-decoration: underline; }
      footer {
        background: #1A1A1A;
        color: white;
        padding: 48px 0;
        text-align: center;
        margin-top: 64px;
      }
      .footer-links {
        margin-bottom: 24px;
      }
      .footer-links a {
        color: white;
        text-decoration: none;
        margin: 0 16px;
        font-size: 14px;
      }
      @media (max-width: 768px) {
        .hero h1 { font-size: 32px; }
        .nav-links { display: none; }
      }
    </style>
</head>
<body>
    <header>
        <div class="header-content">
            <a href="/" class="logo">BrandGate</a>
            <nav class="nav-links">
                <a href="/features">Features</a>
                <a href="/pricing">Pricing</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    </header>

    <section class="hero">
        <div class="container">
            <h1>Get in Touch</h1>
            <p>Have a question? We'd love to hear from you.</p>
        </div>
    </section>

    <div class="container">
        <section class="contact-section">
            <form action="mailto:team@brandgate.dev" method="post" enctype="text/plain">
                <div class="form-group">
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" required placeholder="John Doe">
                </div>
                
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" required placeholder="john@company.com">
                </div>
                
                <div class="form-group">
                    <label for="company">Company</label>
                    <input type="text" id="company" name="company" placeholder="Your Company">
                </div>
                
                <div class="form-group">
                    <label for="subject">Subject</label>
                    <select id="subject" name="subject" required>
                        <option value="">Select a topic...</option>
                        <option value="Sales Inquiry">Sales Inquiry</option>
                        <option value="Product Question">Product Question</option>
                        <option value="Support Request">Support Request</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" required placeholder="Tell us how we can help you..."></textarea>
                </div>
                
                <button type="submit" class="submit-btn">Send Message</button>
            </form>
            
            <div class="contact-info">
                <div class="info-item">
                    <h3>📧 Email</h3>
                    <p><a href="mailto:team@brandgate.dev">team@brandgate.dev</a></p>
                </div>
                <div class="info-item">
                    <h3>🌐 Website</h3>
                    <p><a href="https://brandgate.dev">brandgate.dev</a></p>
                </div>
                <div class="info-item">
                    <h3>📍 Location</h3>
                    <p>Stockholm, Sweden</p>
                </div>
                <div class="info-item">
                    <h3>⏰ Response Time</h3>
                    <p>Within 24 hours</p>
                </div>
            </div>
        </section>
    </div>

    <footer>
        <div class="container" style="max-width: 1200px;">
            <div class="footer-links">
                <a href="/">Home</a>
                <a href="/features">Features</a>
                <a href="/pricing">Pricing</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
            </div>
            <p>&copy; 2026 BrandGate. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`;

  const filePath = path.join(PUBLIC_DIR, 'contact.html');
  fs.writeFileSync(filePath, html);
  console.log('✅ Contact page built: /contact.html');
  return filePath;
}

// CLI interface
const args = process.argv.slice(2);
const command = args[0];

if (command === 'pricing') {
  buildPricingPage();
} else if (command === 'contact') {
  buildContactPage();
} else if (command === 'list') {
  console.log('Available pages to build:\n');
  Object.entries(templates).forEach(([key, val]) => {
    console.log(`${key}: ${val.title}`);
    console.log(`  ${val.description}\n`);
  });
} else {
  console.log('Usage: node page-builder.js [page-name]');
  console.log('\nAvailable pages:');
  console.log('  pricing   - Build pricing page');
  console.log('  contact   - Build contact page');
  console.log('  list      - List all available pages');
  console.log('\nExamples:');
  console.log('  node page-builder.js pricing');
  console.log('  node page-builder.js contact');
}

module.exports = { buildPricingPage, buildContactPage, templates };

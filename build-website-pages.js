#!/usr/bin/env node
// build-website-pages.js
// Build new pages to expand BrandGate website

const fs = require('fs');
const path = require('path');

console.log('═══════════════════════════════════════════════════');
console.log('  🔨 BRANDGATE WEBSITE BUILDER');
console.log('  Building new pages for enterprise feel');
console.log('═══════════════════════════════════════════════════\n');

// Brand colors
const brand = {
  primary: '#003822',
  accent: '#E5A400',
  background: '#F5F5F5',
  text: '#1A1A1A',
  white: '#FFFFFF'
};

// Common header with mega menu
const megaHeader = `<header class="mega-header">
  <div class="mega-header-inner">
    <a href="/" class="mega-logo">BrandGate</a>
    <nav class="mega-nav">
      <div class="mega-nav-item">
        <a href="/features" class="mega-nav-link">Product</a>
      </div>
      <div class="mega-nav-item">
        <a href="/solutions" class="mega-nav-link">Solutions</a>
      </div>
      <div class="mega-nav-item">
        <a href="/resources" class="mega-nav-link">Resources</a>
      </div>
      <div class="mega-nav-item">
        <a href="/pricing" class="mega-nav-link">Pricing</a>
      </div>
      <div class="mega-nav-item">
        <a href="/about" class="mega-nav-link">Company</a>
      </div>
      <a href="/contact" class="mega-cta">Book Demo</a>
    </nav>
  </div>
</header>`;

// Common styles
const commonStyles = `<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { 
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: ${brand.background};
    color: ${brand.text};
    line-height: 1.6;
  }
  .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
  
  /* Header */
  .mega-header { background: ${brand.primary}; position: sticky; top: 0; z-index: 1000; }
  .mega-header-inner { max-width: 1400px; margin: 0 auto; padding: 0 24px; display: flex; justify-content: space-between; align-items: center; height: 70px; }
  .mega-logo { color: ${brand.white}; font-size: 28px; font-weight: 700; text-decoration: none; }
  .mega-nav { display: flex; align-items: center; gap: 8px; }
  .mega-nav-link { color: ${brand.white}; text-decoration: none; padding: 24px 16px; font-size: 15px; font-weight: 500; }
  .mega-cta { background: ${brand.accent}; color: ${brand.text}; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; margin-left: 16px; }
  
  /* Hero */
  .hero { background: ${brand.primary}; color: ${brand.white}; padding: 80px 0; text-align: center; }
  .hero h1 { font-size: 48px; margin-bottom: 16px; }
  .hero p { font-size: 20px; opacity: 0.9; max-width: 600px; margin: 0 auto; }
  
  /* Content */
  .content-section { background: ${brand.white}; padding: 64px 0; margin: 48px 0; border-radius: 12px; }
  .content-section h2 { color: ${brand.primary}; font-size: 36px; margin-bottom: 24px; }
  .content-section p { margin-bottom: 16px; font-size: 16px; }
  
  /* Footer */
  footer { background: #1A1A1A; color: ${brand.white}; padding: 48px 0; text-align: center; margin-top: 64px; }
  .footer-links { margin-bottom: 24px; }
  .footer-links a { color: ${brand.white}; text-decoration: none; margin: 0 16px; font-size: 14px; }
</style>`;

// Analytics code
const analytics = `<!-- Mixpanel -->
<script src="https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js"></script>
<script>mixpanel.init("9277e80f2dc38a2e8bab577cc8f20268", { debug: false, track_pageview: true });</script>
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GMPPJ71Y58"></script>
<script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-GMPPJ71Y58');</script>`;

// Build Terms of Service page
function buildTermsPage() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terms of Service - BrandGate</title>
    <meta name="description" content="Terms of Service for BrandGate B2B Distribution Platform.">
    ${analytics}
    ${commonStyles}
</head>
<body>
    ${megaHeader}
    
    <section class="hero">
        <div class="container">
            <h1>Terms of Service</h1>
            <p>Last updated: March 2026</p>
        </div>
    </section>
    
    <div class="container">
        <section class="content-section">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using BrandGate, you agree to be bound by these Terms of Service.</p>
            
            <h2>2. Description of Service</h2>
            <p>BrandGate provides a B2B distribution platform for brands to manage wholesale operations, including order management, invoicing, and retailer relationships.</p>
            
            <h2>3. Account Registration</h2>
            <p>You must provide accurate information when creating an account. You are responsible for maintaining the security of your account.</p>
            
            <h2>4. Payment Terms</h2>
            <p>Subscription fees are billed monthly or annually. All fees are non-refundable unless otherwise stated.</p>
            
            <h2>5. Data Processing</h2>
            <p>We process your data in accordance with our Privacy Policy and GDPR requirements.</p>
            
            <h2>6. Limitation of Liability</h2>
            <p>BrandGate shall not be liable for any indirect, incidental, or consequential damages.</p>
            
            <h2>7. Contact</h2>
            <p>For questions about these terms, contact us at team@brandgate.dev</p>
        </section>
    </div>
    
    <footer>
        <div class="container">
            <div class="footer-links">
                <a href="/">Home</a>
                <a href="/features">Features</a>
                <a href="/pricing">Pricing</a>
                <a href="/privacy">Privacy</a>
                <a href="/contact">Contact</a>
            </div>
            <p>&copy; 2026 BrandGate. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`;

  console.log('✅ Terms of Service page structure created');
  return html;
}

// Build Privacy Policy page
function buildPrivacyPage() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Privacy Policy - BrandGate</title>
    <meta name="description" content="Privacy Policy for BrandGate B2B Distribution Platform. GDPR compliant.">
    ${analytics}
    ${commonStyles}
</head>
<body>
    ${megaHeader}
    
    <section class="hero">
        <div class="container">
            <h1>Privacy Policy</h1>
            <p>Your data is safe with us. GDPR compliant.</p>
        </div>
    </section>
    
    <div class="container">
        <section class="content-section">
            <h2>1. Data We Collect</h2>
            <p>We collect information you provide when registering, including name, email, company information, and usage data.</p>
            
            <h2>2. How We Use Your Data</h2>
            <p>We use your data to provide and improve our services, process transactions, and communicate with you.</p>
            
            <h2>3. Data Protection</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal data.</p>
            
            <h2>4. Your Rights (GDPR)</h2>
            <p>You have the right to access, rectify, erase, and port your data. You can also object to processing.</p>
            
            <h2>5. Data Retention</h2>
            <p>We retain your data for as long as your account is active or as needed to provide services.</p>
            
            <h2>6. Third Parties</h2>
            <p>We may share data with service providers who assist in operating our platform.</p>
            
            <h2>7. Contact</h2>
            <p>For privacy questions, contact us at team@brandgate.dev</p>
        </section>
    </div>
    
    <footer>
        <div class="container">
            <div class="footer-links">
                <a href="/">Home</a>
                <a href="/features">Features</a>
                <a href="/pricing">Pricing</a>
                <a href="/terms">Terms</a>
                <a href="/contact">Contact</a>
            </div>
            <p>&copy; 2026 BrandGate. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`;

  console.log('✅ Privacy Policy page structure created');
  return html;
}

// Build Integrations page
function buildIntegrationsPage() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Integrations - BrandGate</title>
    <meta name="description" content="Connect BrandGate with your favorite tools. Shopify, WooCommerce, Fortnox, and more.">
    ${analytics}
    ${commonStyles}
    <style>
      .integrations-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 32px; }
      .integration-card { background: white; padding: 32px; border-radius: 12px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
      .integration-card h3 { color: ${brand.primary}; margin: 16px 0 8px; }
      .integration-card p { color: #666; margin-bottom: 16px; }
      .integration-logo { width: 64px; height: 64px; background: ${brand.background}; border-radius: 12px; margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 28px; }
    </style>
</head>
<body>
    ${megaHeader}
    
    <section class="hero">
        <div class="container">
            <h1>Integrations</h1>
            <p>Connect BrandGate with your existing tools and workflows.</p>
        </div>
    </section>
    
    <div class="container">
        <section class="content-section">
            <h2>E-commerce Platforms</h2>
            <div class="integrations-grid">
                <div class="integration-card">
                    <div class="integration-logo">🛒</div>
                    <h3>Shopify</h3>
                    <p>Sync products and orders with your Shopify store</p>
                </div>
                <div class="integration-card">
                    <div class="integration-logo">🛍️</div>
                    <h3>WooCommerce</h3>
                    <p>Connect your WordPress store seamlessly</p>
                </div>
            </div>
            
            <h2 style="margin-top: 48px;">Accounting</h2>
            <div class="integrations-grid">
                <div class="integration-card">
                    <div class="integration-logo">📊</div>
                    <h3>Fortnox</h3>
                    <p>Swedish accounting integration for invoicing</p>
                </div>
                <div class="integration-card">
                    <div class="integration-logo">📈</div>
                    <h3>Visma</h3>
                    <p>Enterprise accounting and ERP connection</p>
                </div>
            </div>
            
            <h2 style="margin-top: 48px;">Custom</h2>
            <div class="integrations-grid">
                <div class="integration-card">
                    <div class="integration-logo">⚡</div>
                    <h3>API Access</h3>
                    <p>Build custom integrations with our REST API</p>
                </div>
            </div>
        </section>
    </div>
    
    <footer>
        <div class="container">
            <div class="footer-links">
                <a href="/">Home</a>
                <a href="/features">Features</a>
                <a href="/pricing">Pricing</a>
                <a href="/contact">Contact</a>
            </div>
            <p>&copy; 2026 BrandGate. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`;

  console.log('✅ Integrations page structure created');
  return html;
}

// Build Solutions - Fashion page
function buildFashionSolutionsPage() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fashion & Apparel Solutions - BrandGate</title>
    <meta name="description" content="B2B wholesale solutions for fashion and apparel brands. Manage retailers, orders, and distribution.">
    ${analytics}
    ${commonStyles}
</head>
<body>
    ${megaHeader}
    
    <section class="hero">
        <div class="container">
            <h1>Fashion & Apparel</h1>
            <p>B2B wholesale solutions built for fashion brands.</p>
        </div>
    </section>
    
    <div class="container">
        <section class="content-section">
            <h2>Built for Fashion Brands</h2>
            <p>From emerging designers to established labels, BrandGate helps fashion brands manage wholesale distribution efficiently.</p>
            
            <h3 style="margin-top: 32px; color: ${brand.primary};">Key Features for Fashion</h3>
            <ul style="margin-left: 24px; margin-top: 16px;">
                <li>Size and color variant management</li>
                <li>Seasonal collection catalogs</li>
                <li>Lookbook sharing with retailers</li>
                <li>Pre-order and backorder management</li>
                <li>Line sheet generation</li>
            </ul>
            
            <h3 style="margin-top: 32px; color: ${brand.primary};">Trusted By</h3>
            <p>Growing fashion brands across Sweden and Europe use BrandGate to scale their wholesale operations.</p>
        </section>
    </div>
    
    <footer>
        <div class="container">
            <div class="footer-links">
                <a href="/">Home</a>
                <a href="/features">Features</a>
                <a href="/pricing">Pricing</a>
                <a href="/contact">Contact</a>
            </div>
            <p>&copy; 2026 BrandGate. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`;

  console.log('✅ Fashion Solutions page structure created');
  return html;
}

// CLI Interface
const args = process.argv.slice(2);
const command = args[0];

if (command === 'terms') {
  buildTermsPage();
} else if (command === 'privacy') {
  buildPrivacyPage();
} else if (command === 'integrations') {
  buildIntegrationsPage();
} else if (command === 'fashion') {
  buildFashionSolutionsPage();
} else if (command === 'all') {
  console.log('Building all new pages...\n');
  buildTermsPage();
  buildPrivacyPage();
  buildIntegrationsPage();
  buildFashionSolutionsPage();
  console.log('\n✅ All page templates created!');
} else {
  console.log('Usage: node build-website-pages.js [command]');
  console.log('\nCommands:');
  console.log('  terms          - Build Terms of Service page');
  console.log('  privacy        - Build Privacy Policy page');
  console.log('  integrations   - Build Integrations page');
  console.log('  fashion        - Build Fashion Solutions page');
  console.log('  all            - Build all pages');
  console.log('\nExamples:');
  console.log('  node build-website-pages.js terms');
  console.log('  node build-website-pages.js all');
}

module.exports = {
  buildTermsPage,
  buildPrivacyPage,
  buildIntegrationsPage,
  buildFashionSolutionsPage
};

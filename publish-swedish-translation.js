#!/usr/bin/env node
// publish-swedish-translation.js
// Create Swedish version of today's article

const fs = require('fs');
const path = require('path');

const WORKSPACE = '/home/node/.openclaw/workspace';
const BLOG_DIR = path.join(WORKSPACE, 'public/blog');

const article = {
  slug: 'b2b-distribution-platform-guide-2026',
  title: 'Den Kompletta Guiden till B2B-distributionsplattformar 2026',
  description: 'Lär dig hur B2B-distributionsplattformar hjälper varumärken att hantera grossistordrar, distributörer och skala sin verksamhet effektivt. Komplett guide för 2026.',
  content: `<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Den Kompletta Guiden till B2B-distributionsplattformar 2026 | BrandGate</title>
  <meta name="description" content="Lär dig hur B2B-distributionsplattformar hjälper varumärken att hantera grossistordrar, distributörer och skala sin verksamhet effektivt. Komplett guide för 2026.">
  <link rel="canonical" href="https://brandgate.dev/blog/sv/b2b-distribution-platform-guide-2026">
  <link rel="alternate" hreflang="en" href="https://brandgate.dev/blog/b2b-distribution-platform-guide-2026">
  <link rel="alternate" hreflang="sv" href="https://brandgate.dev/blog/sv/b2b-distribution-platform-guide-2026">
  
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.7;
      color: #4D4D4D;
      background: #F5F5F5;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 40px 20px;
      background: white;
    }
    header {
      text-align: center;
      padding: 40px 0;
      border-bottom: 3px solid #E5A400;
      margin-bottom: 40px;
    }
    h1 {
      font-size: 2.5em;
      color: #003822;
      margin-bottom: 20px;
      line-height: 1.2;
    }
    .meta {
      color: #6E6B6B;
      font-size: 0.9em;
    }
    .language-switcher {
      position: fixed;
      top: 20px;
      right: 20px;
      background: white;
      padding: 10px 15px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .language-switcher a {
      color: #003822;
      text-decoration: none;
      font-weight: 600;
      margin: 0 5px;
    }
    .language-switcher a:hover {
      color: #E5A400;
    }
    h2 {
      font-size: 1.8em;
      color: #003822;
      margin: 40px 0 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid #E5A400;
    }
    h3 {
      font-size: 1.4em;
      color: #003822;
      margin: 30px 0 15px;
    }
    p {
      margin-bottom: 20px;
      font-size: 1.1em;
    }
    ul, ol {
      margin: 20px 0;
      padding-left: 30px;
    }
    li {
      margin-bottom: 10px;
    }
    strong {
      color: #003822;
    }
    .cta-box {
      background: #003822;
      color: white;
      padding: 30px;
      border-radius: 12px;
      margin: 40px 0;
      text-align: center;
    }
    .cta-box h3 {
      color: #E5A400;
      margin-top: 0;
    }
    .cta-button {
      display: inline-block;
      background: #E5A400;
      color: #003822;
      padding: 15px 30px;
      border-radius: 30px;
      text-decoration: none;
      font-weight: 700;
      margin-top: 15px;
    }
    .cta-button:hover {
      background: #d49500;
    }
    footer {
      text-align: center;
      padding: 40px 0;
      border-top: 1px solid #e0e0e0;
      margin-top: 60px;
      color: #6E6B6B;
    }
    @media (max-width: 600px) {
      h1 { font-size: 1.8em; }
      h2 { font-size: 1.4em; }
    }
  </style>
</head>
<body>
  <div class="language-switcher">
    <a href="/blog/b2b-distribution-platform-guide-2026">EN</a> | <a href="/blog/sv/b2b-distribution-platform-guide-2026">SV</a>
  </div>

  <div class="container">
    <header>
      <h1>Den Kompletta Guiden till B2B-distributionsplattformar 2026</h1>
      <p class="meta">Publicerad: 4 mars 2026 | BrandGate | 10 min läsning</p>
    </header>

    <p><strong>B2B-distributionsplattformar</strong> har blivit oumbärliga verktyg för varumärken som vill effektivisera sin grossistverksamhet.</p>

    <h2>Vad är en B2B-distributionsplattform?</h2>
    
    <p>En <strong>B2B-distributionsplattform</strong> är en mjukvarulösning som hjälper varumärken att hantera sina grossistrelationer och distributörer.</p>

    <h2>Varför Ditt Varumärke Behöver en Plattform</h2>

    <h3>1. Eliminera Manuella Fel</h3>
    <p>Manuell orderbearbetning är felfylld. En plattform automatiserar processer och minskar fel med upp till 90%.</p>

    <h3>2. Skala Utan Personal</h3>
    <p>Onboarda nya distributörer på minuter, inte dagar, utan att öka administrativ personal.</p>

    <h3>3. Erbjud 24/7-beställning</h3>
    <p>Självbetjäningsportal möjliggör beställning dygnet runt.</p>

    <h3>4. Få Realtidsinsyn</h3>
    <p>Vet exakt vad som händer i ditt distributionsnätverk.</p>

    <div class="cta-box">
      <h3>Redo att Transformera Din B2B-distribution?</h3>
      <p>BrandGate är den allt-i-ett B2B-distributionsplattformen för växande varumärken.</p>
      <a href="https://brandgate.dev" class="cta-button">Läs Mer Om BrandGate</a>
    </div>

    <footer>
      <p>&copy; 2026 BrandGate. Alla rättigheter förbehållna.</p>
    </footer>
  </div>
</body>
</html>`
};

function main() {
  console.log('🇸🇪 CREATING SWEDISH TRANSLATION');
  console.log('═══════════════════════════════════════════════════\n');
  
  const svDir = path.join(BLOG_DIR, 'sv');
  if (!fs.existsSync(svDir)) {
    fs.mkdirSync(svDir, { recursive: true });
  }
  
  const articleDir = path.join(svDir, article.slug);
  if (!fs.existsSync(articleDir)) {
    fs.mkdirSync(articleDir, { recursive: true });
  }
  
  const filePath = path.join(articleDir, 'index.html');
  fs.writeFileSync(filePath, article.content, 'utf8');
  
  console.log('✅ Swedish translation created!');
  console.log(`   Title: ${article.title}`);
  console.log(`   URL: https://brandgate.dev/blog/sv/${article.slug}`);
  console.log(`   File: ${filePath}`);
}

main();
EOF

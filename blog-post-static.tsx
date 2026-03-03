// This file generates static pages for each blog post at build time
// Place in: app/blog/[slug]/page.tsx

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

// Blog data embedded directly (no external imports for static generation)
const blogPosts = [
  {
    slug: "b2b-distribution-guide",
    title: "The Complete Guide to B2B Distribution Management in 2024",
    excerpt: "Learn how to manage your distribution network efficiently. Covers partner selection, onboarding, pricing strategies, and scaling with the right tools.",
    date: "Feb 28, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200",
    tags: ["Distribution Strategy", "B2B", "Wholesale"],
    author: { name: "Will", role: "Distribution Expert" },
    content: `<p>Managing a distribution network is one of the most complex challenges growing brands face. Whether you're working with 5 distributors or 500, the fundamentals of B2B distribution management remain the same: <strong>maintain visibility, automate processes, and keep your partners happy.</strong></p>

<h2>What is B2B Distribution Management?</h2>
<p>B2B distribution management is the process of overseeing how your products move from manufacturing to end customers through intermediary partners. Unlike direct-to-consumer (D2C) sales, you're managing <strong>business relationships</strong> with entities that have their own customers, processes, and expectations.</p>

<h3>Key Components:</h3>
<ul>
<li><strong>Partner onboarding</strong> - Getting distributors set up with catalogs, pricing, and systems</li>
<li><strong>Order management</strong> - Processing, tracking, and fulfilling orders across your network</li>
<li><strong>Inventory coordination</strong> - Ensuring stock availability without overcommitting</li>
<li><strong>Pricing &amp; terms</strong> - Managing tiered pricing, volume discounts, and payment terms</li>
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

<h2>The Modern Approach: Distribution Operating Systems</h2>
<p>Today's leading brands use <strong>distribution operating systems</strong>—software platforms designed specifically for B2B relationships. These systems replace fragmented tools with a single source of truth.</p>

<h2>Conclusion</h2>
<p>Effective B2B distribution management isn't about having the most distributors—it's about having the <strong>right distributors</strong> and supporting them with <strong>the right systems</strong>.</p>

<p><strong>Ready to modernize your distribution management?</strong> <a href="/signup">Start your free BrandGate trial</a> and see how the right platform transforms your B2B operations.</p>`
  },
  {
    slug: "choose-b2b-ecommerce-platform",
    title: "How to Choose the Right B2B E-commerce Platform",
    excerpt: "Key features to look for when selecting a B2B e-commerce platform. Compare options and find the best solution for your distribution needs.",
    date: "Feb 28, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
    tags: ["B2B E-commerce", "Platform Selection", "Technology"],
    author: { name: "Will", role: "Distribution Expert" },
    content: `<p>Selecting a B2B e-commerce platform is one of the most important technology decisions a growing brand can make. The right platform can streamline operations, improve distributor satisfaction, and accelerate growth.</p>

<h2>Understand Your Requirements First</h2>
<p>Before comparing platforms, document your specific needs:</p>
<ul>
<li>How many distributors do you currently have? How many in 2-3 years?</li>
<li>What's your average order value and volume?</li>
<li>Do you need multi-currency or multi-language support?</li>
<li>What integrations are essential (ERP, CRM, accounting)?</li>
</ul>

<h2>Essential Features Checklist</h2>

<h3>1. Distributor Portal</h3>
<p>Your distributors need a dedicated space to browse products, place orders, and track shipments.</p>

<h3>2. Order Management</h3>
<p>Manual order processing is the biggest time drain in distribution.</p>

<h3>3. Pricing &amp; Quoting</h3>
<p>B2B pricing is complex—tiered levels, volume discounts, and contract pricing are standard.</p>

<h2>Conclusion</h2>
<p>The right B2B e-commerce platform becomes the foundation of your distribution operations.</p>

<p><strong>Ready to see how BrandGate compares?</strong> <a href="/demo">Schedule a personalized demo</a> and we'll show you how our platform handles your specific requirements.</p>`
  },
  {
    slug: "sweden-b2b-distribution-guide",
    title: "B2B Distribution in Sweden: A Complete Guide for Brands",
    excerpt: "Everything you need to know about B2B distribution in Sweden. Local regulations, best practices, and how to build a successful distribution network.",
    date: "Feb 28, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1520769945061-0a448c463865?w=1200",
    tags: ["Sweden", "B2B", "Distribution", "Nordic Market"],
    author: { name: "Will", role: "Distribution Expert" },
    content: `<p>Sweden represents one of Europe's most attractive B2B markets. With a highly digitized economy, strong purchasing power, and business-friendly regulations, it's an ideal starting point for brands looking to expand their distribution network in the Nordic region.</p>

<h2>Why Sweden?</h2>

<h3>Market Characteristics:</h3>
<p><strong>High Digital Adoption</strong></p>
<ul>
<li>98% internet penetration</li>
<li>Early adopters of e-commerce and digital tools</li>
<li>B2B buyers expect modern, self-service ordering experiences</li>
</ul>

<h3>Swedish Business Culture:</h3>
<p><strong>Consensus-Driven</strong> - Decisions often require multiple stakeholders</p>
<p><strong>Quality Focus</strong> - Swedish buyers prioritize quality over lowest price</p>

<h2>Legal &amp; Regulatory Framework</h2>
<p>To distribute in Sweden, you'll need:</p>
<ul>
<li>Swedish organization number (or EU VAT number for EU companies)</li>
<li>Registration with Swedish Tax Agency (Skatteverket)</li>
<li>Understanding of Swedish VAT rules (25% standard rate)</li>
</ul>

<h2>Conclusion</h2>
<p>Sweden offers an excellent entry point into the Nordic B2B market. Success requires understanding local business culture, meeting high digital expectations, and building genuine partnerships.</p>

<p><strong>Ready to expand your distribution into Sweden?</strong> <a href="/contact">Contact us</a> for a consultation on how BrandGate can support your Nordic expansion.</p>`
  }
];

// Generate static paths at build time
export function generateStaticParams() {
  return [
    { slug: "b2b-distribution-guide" },
    { slug: "choose-b2b-ecommerce-platform" },
    { slug: "sweden-b2b-distribution-guide" }
  ];
}

// Generate metadata for SEO
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return { title: "Article Not Found | BrandGate" };
  }

  return {
    title: `${post.title} | BrandGate Blog`,
    description: post.excerpt,
  };
}

// Page component
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#F5F5F5] border-b border-[#E3E3E3]">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[#6E6B6B] hover:text-[#003822]">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="relative h-64 md:h-96">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#003822]/80 to-transparent" />
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 -mt-16 md:-mt-24 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-12">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#6E6B6B] mb-6">
            <span className="px-3 py-1 bg-[#E5A400]/10 text-[#E5A400] rounded-full text-xs font-medium">
              {post.tags[0]}
            </span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{post.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003822] mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-4 pb-8 mb-8 border-b border-[#E3E3E3]">
            <div className="w-12 h-12 rounded-full bg-[#003822] flex items-center justify-center text-white font-bold">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <div className="font-semibold text-[#003822]">{post.author.name}</div>
              <div className="text-sm text-[#6E6B6B]">{post.author.role}</div>
            </div>
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-[#003822] prose-headings:font-bold prose-a:text-[#E5A400] prose-strong:text-[#003822]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-12 p-8 bg-[#003822] rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to streamline your distribution?</h3>
            <Link href="/signup" className="inline-flex items-center justify-center px-8 py-4 bg-[#E5A400] text-[#1A1A1A] font-semibold rounded-full hover:bg-[#E5A400]/90">
              Start Free Trial
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-[#003822] mb-8">More Articles</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group block bg-white rounded-xl border border-[#E3E3E3] overflow-hidden shadow-sm hover:shadow-lg">
                <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${relatedPost.image})` }} />
                <div className="p-6">
                  <h3 className="font-bold text-[#003822] group-hover:text-[#E5A400] transition-colors line-clamp-2">{relatedPost.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-[#F5F5F5] border-t border-[#E3E3E3] py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#6E6B6B] text-sm">© 2024 BrandGate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export const dynamic = "force-static";
export const revalidate = false;

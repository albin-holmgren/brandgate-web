// Blog listing page with all posts - SEO optimized
// app/blog/page.tsx

import Link from "next/link";
import { Metadata } from "next";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "BrandGate Blog | B2B Distribution Insights & Wholesale Strategies",
  description: "Expert insights on B2B distribution management, wholesale growth strategies, inventory management, pricing strategies, and scaling your brand globally.",
  alternates: {
    languages: {
      'en': 'https://brandgate.dev/blog',
      'sv-SE': 'https://brandgate.dev/sv/blog',
    },
  },
};

const blogPosts = [
  {
    slug: "b2b-distribution-guide",
    title: "The Complete Guide to B2B Distribution Management in 2024",
    excerpt: "Learn how to manage your distribution network efficiently. Covers partner selection, onboarding, pricing strategies, and scaling with the right tools.",
    date: "Feb 28, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200",
    tags: ["Distribution Strategy", "B2B", "Wholesale"],
    featured: true,
  },
  {
    slug: "b2b-pricing-strategies",
    title: "B2B Pricing Strategies: How to Set Wholesale Prices That Sell",
    excerpt: "Learn proven B2B pricing strategies. Discover how to set wholesale prices, create tiered pricing models, and maximize distributor margins.",
    date: "Mar 1, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200",
    tags: ["Pricing", "Strategy", "Wholesale"],
    featured: false,
  },
  {
    slug: "inventory-management-distributors",
    title: "Inventory Management for Distributors: Best Practices 2024",
    excerpt: "Master inventory management for distributors. Learn stock control, demand forecasting, and how to prevent stockouts while minimizing carrying costs.",
    date: "Mar 1, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200",
    tags: ["Inventory", "Operations", "Logistics"],
    featured: false,
  },
  {
    slug: "choose-b2b-ecommerce-platform",
    title: "How to Choose the Right B2B E-commerce Platform",
    excerpt: "Key features to look for when selecting a B2B e-commerce platform. Compare options and find the best solution for your distribution needs.",
    date: "Feb 28, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
    tags: ["B2B E-commerce", "Platform Selection", "Technology"],
    featured: false,
  },
  {
    slug: "sweden-b2b-distribution-guide",
    title: "B2B Distribution in Sweden: A Complete Guide for Brands",
    excerpt: "Everything you need to know about B2B distribution in Sweden. Local regulations, best practices, and how to build a successful distribution network.",
    date: "Feb 28, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1520769945061-0a448c463865?w=1200",
    tags: ["Sweden", "B2B", "Distribution", "Nordic Market"],
    featured: false,
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#F5F5F5] border-b border-[#E3E3E3]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo-cropped.png" alt="BrandGate" className="h-8 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-sm font-medium text-[#6E6B6B] hover:text-[#003822] transition-colors">Features</Link>
            <Link href="/pricing" className="text-sm font-medium text-[#6E6B6B] hover:text-[#003822] transition-colors">Pricing</Link>
            <Link href="/blog" className="text-sm font-medium text-[#003822]">Blog</Link>
            <Link href="/contact" className="text-sm font-medium text-[#6E6B6B] hover:text-[#003822] transition-colors">Contact</Link>
          </nav>
          <Link href="/signup" className="hidden md:inline-flex items-center justify-center text-sm font-semibold bg-[#E5A400] text-[#1A1A1A] hover:bg-[#E5A400]/90 rounded-full px-6 h-10 transition-all">Get Started</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#F5F5F5] border-b border-[#E3E3E3] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="w-16 h-1 bg-[#E5A400] mx-auto mb-8" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#003822] tracking-tight leading-[1.1] max-w-4xl mx-auto">BrandGate Blog</h1>
          <p className="text-[#6E6B6B] text-lg md:text-xl mt-6 max-w-2xl mx-auto">B2B distribution insights, wholesale growth strategies, and tips for scaling your brand.</p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 md:py-16 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-6">
            <a href={`/blog/${featuredPost.slug}/`} className="group block bg-white rounded-2xl border border-[#E3E3E3] overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto min-h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${featuredPost.image})` }} />
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-[#6E6B6B] mb-4">
                    <span className="px-3 py-1 bg-[#E5A400]/10 text-[#E5A400] rounded-full text-xs font-medium">Featured</span>
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{featuredPost.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#003822] mb-4 group-hover:text-[#E5A400] transition-colors">{featuredPost.title}</h2>
                  <p className="text-[#6E6B6B] mb-6">{featuredPost.excerpt}</p>
                  <div className="inline-flex items-center gap-2 text-[#E5A400] font-medium">Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></div>
                </div>
              </div>
            </a>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12 md:py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#003822] mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}/`} className="group block bg-white rounded-xl border border-[#E3E3E3] overflow-hidden shadow-sm hover:shadow-lg transition-all">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-[#6E6B6B] mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#003822] mb-3 group-hover:text-[#E5A400] transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-[#6E6B6B] text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Section - Topics We Cover */}
      <section className="py-16 bg-white border-t border-[#E3E3E3]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#003822] mb-8 text-center">Topics We Cover</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {["Distribution Strategy", "Pricing", "Inventory Management", "B2B E-commerce", "Swedish Market", "Wholesale Operations", "Distributor Relations", "Logistics", "Technology", "Growth Strategies"].map((topic) => (
              <span key={topic} className="px-4 py-2 bg-[#F5F5F5] text-[#003822] rounded-lg text-sm font-medium text-center">{topic}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003822] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">BrandGate</h3>
              <p className="text-white/70 text-sm">B2B distribution platform for growing brands.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/features">Features</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/signup">Get Started</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Language</h4>
              <div className="flex gap-2">
                <Link href="/blog" className="px-3 py-1 bg-white/20 rounded text-sm">🇬🇧 EN</Link>
                <Link href="/sv/blog" className="px-3 py-1 bg-white/10 rounded text-sm hover:bg-white/20">🇸🇪 SV</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>© {new Date().getFullYear()} BrandGate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

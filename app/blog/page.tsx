// Blog listing page - BrandGate brand compliant
// Matches brandgate.dev styling exactly

import Link from "next/link";
import { Metadata } from "next";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "./data";

export const metadata: Metadata = {
  title: "BrandGate Blog | B2B Distribution Insights",
  description: "Expert insights on B2B distribution management, wholesale growth strategies, and scaling your brand.",
};

// Pre-render all blog posts at build time
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPage() {
  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header - Matches brandgate.dev exactly */}
      <header className="sticky top-0 z-50 bg-[#F5F5F5] border-b border-[#E3E3E3]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo-cropped.png" alt="BrandGate" className="h-8 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-sm font-medium text-[#6E6B6B] hover:text-[#003822] transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-[#6E6B6B] hover:text-[#003822] transition-colors">
              Pricing
            </Link>
            <Link href="/blog" className="text-sm font-medium text-[#003822]">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium text-[#6E6B6B] hover:text-[#003822] transition-colors">
              Contact
            </Link>
          </nav>
          <Link
            href="/signup"
            className="hidden md:inline-flex items-center justify-center text-sm font-semibold bg-[#E5A400] text-[#1A1A1A] hover:bg-[#E5A400]/90 rounded-full px-6 h-10 transition-all"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero - Brand compliant */}
      <section className="bg-[#F5F5F5] border-b border-[#E3E3E3] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="w-16 h-1 bg-[#E5A400] mx-auto mb-8" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#003822] tracking-tight leading-[1.1] max-w-4xl mx-auto">
            BrandGate Blog
          </h1>
          <p className="text-[#6E6B6B] text-lg md:text-xl mt-6 max-w-2xl mx-auto">
            B2B distribution insights, wholesale growth strategies, and tips for scaling your brand.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 md:py-16 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-6">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block bg-white rounded-2xl border border-[#E3E3E3] overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="grid md:grid-cols-2">
                <div
                  className="h-64 md:h-auto min-h-[300px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${featuredPost.image})` }}
                />
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-[#6E6B6B] mb-4">
                    <span className="px-3 py-1 bg-[#E5A400]/10 text-[#E5A400] rounded-full text-xs font-medium">
                      Featured
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#003822] mb-4 group-hover:text-[#E5A400] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-[#6E6B6B] mb-6">{featuredPost.excerpt}</p>
                  <div className="inline-flex items-center gap-2 text-[#E5A400] font-medium">
                    Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12 md:py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#003822] mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-xl border border-[#E3E3E3] overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-[#6E6B6B] mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#003822] mb-3 group-hover:text-[#E5A400] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[#6E6B6B] text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F5F5F5] border-t border-[#E3E3E3] py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#6E6B6B] text-sm">
            © 2024 BrandGate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

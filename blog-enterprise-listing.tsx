// Enterprise-grade Blog Listing Page
// app/blog/page.tsx

import Link from "next/link";
import { Calendar, Clock, ArrowRight, ChevronRight } from "lucide-react";
import { blogPosts } from "./data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BrandGate Blog | B2B Distribution Insights & Strategies",
  description: "Expert insights on B2B distribution management, wholesale growth strategies, and enterprise distribution solutions for scaling brands.",
  keywords: ["B2B distribution", "wholesale management", "distribution software", "enterprise distribution"],
  openGraph: {
    title: "BrandGate Blog | B2B Distribution Insights",
    description: "Expert insights on B2B distribution management and wholesale growth strategies.",
    type: "website",
  },
};

export default function BlogPage() {
  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Enterprise Style */}
      <section className="bg-[#0a0f0c] relative overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#003822]/20 via-transparent to-[#E5A400]/10" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/80">Insights</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
              Insights &<br />
              <span className="text-[#E5A400]">Strategies</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl">
              Expert perspectives on B2B distribution management, wholesale operations, 
              and strategies for scaling enterprise distribution networks.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post - Premium Layout */}
      {featuredPost && (
        <section className="py-16 sm:py-20 lg:py-24 bg-[#fafafa]">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[2px] bg-[#E5A400]" />
              <span className="text-sm font-medium text-[#6E6B6B] uppercase tracking-wider">Featured</span>
            </div>

            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block"
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Image */}
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-[#f0f0f0]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${featuredPost.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="lg:py-8">
                  <div className="flex items-center gap-4 text-sm text-[#6E6B6B] mb-4">
                    <span className="px-3 py-1 bg-[#003822]/10 text-[#003822] rounded-full text-xs font-medium">
                      {featuredPost.tags[0]}
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

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1a1a1a] mb-4 leading-tight group-hover:text-[#003822] transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-[#6E6B6B] text-lg leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="inline-flex items-center gap-2 text-[#003822] font-medium group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Latest Articles Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#E5A400]" />
              <h2 className="text-2xl font-semibold text-[#1a1a1a]">Latest Articles</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-[#f0f0f0] mb-6">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 text-sm text-[#6E6B6B] mb-3">
                  <span className="px-2 py-1 bg-[#f5f5f5] text-[#6E6B6B] rounded text-xs font-medium">
                    {post.tags[0]}
                  </span>
                  <span>{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3 leading-tight group-hover:text-[#003822] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[#6E6B6B] text-sm leading-relaxed line-clamp-2 mb-4 flex-grow">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <div className="inline-flex items-center gap-2 text-[#003822] text-sm font-medium group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter - Enterprise Style */}
      <section className="py-16 sm:py-20 bg-[#0a0f0c]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Stay Ahead of Distribution Trends
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Subscribe to receive expert insights, industry analysis, and strategies 
              for optimizing your B2B distribution operations.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#E5A400] transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[#E5A400] text-[#0a0f0c] font-semibold rounded-lg hover:bg-[#E5A400]/90 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-white/40 text-sm mt-4">
              Join 2,000+ distribution professionals. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

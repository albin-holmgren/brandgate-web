// Blog page - Main listing
// app/blog/page.tsx

import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "./data";

export default function BlogPage() {
  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <section className="bg-[#003822] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-16 h-1 bg-[#E5A400] mb-8" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] max-w-4xl">
            BrandGate Blog
          </h1>
          <p className="text-white/70 text-lg md:text-xl mt-6 max-w-2xl">
            B2B distribution insights, wholesale growth strategies, and tips for scaling your brand.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-sm font-medium text-[#E5A400] mb-4">Featured Article</div>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden border border-[#E3E3E3] shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="grid md:grid-cols-2">
                <div
                  className="h-64 md:h-auto bg-cover bg-center"
                  style={{ backgroundImage: `url(${featuredPost.image})` }}
                />
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-[#6E6B6B] mb-4">
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
                  <div className="flex items-center gap-2 text-[#E5A400] font-medium">
                    Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#003822] mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-[#E3E3E3] shadow-sm hover:shadow-lg transition-all"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-[#6E6B6B] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#003822] mb-3 group-hover:text-[#E5A400] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[#6E6B6B] text-sm line-clamp-3">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-[#003822] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Get distribution insights delivered to your inbox
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Weekly tips on B2B distribution, wholesale growth, and scaling your brand.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#E5A400]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#E5A400] text-[#1A1A1A] font-semibold rounded-lg hover:bg-[#E5A400]/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

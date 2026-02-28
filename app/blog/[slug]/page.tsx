// Individual blog post - BrandGate brand compliant
// app/blog/[slug]/page.tsx

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts } from "../data";

// This tells Next.js which pages to generate at build time
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return { title: "Post Not Found | BrandGate" };
  }

  return {
    title: `${post.title} | BrandGate Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header - Matches brandgate.dev */}
      <header className="sticky top-0 z-50 bg-[#F5F5F5] border-b border-[#E3E3E3]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo-cropped.png" alt="BrandGate" className="h-8 w-auto" />
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#6E6B6B] hover:text-[#003822] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-64 md:h-96">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        />
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
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#003822] mb-8 leading-tight">
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

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none 
              prose-headings:text-[#003822] 
              prose-headings:font-bold
              prose-h2:text-xl sm:prose-h2:text-2xl lg:prose-h2:text-3xl
              prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-lg sm:prose-h3:text-xl
              prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-[#4D4D4D]
              prose-p:leading-relaxed
              prose-p:mb-4 sm:prose-p:mb-6
              prose-a:text-[#E5A400] 
              prose-a:no-underline 
              prose-a:hover:underline
              prose-strong:text-[#003822]
              prose-strong:font-bold
              prose-ul:my-4 sm:prose-ul:my-6
              prose-li:mb-2
              prose-blockquote:border-l-4 
              prose-blockquote:border-[#E5A400] 
              prose-blockquote:bg-[#F5F5F5] 
              prose-blockquote:py-4 prose-blockquote:px-6
              prose-blockquote:rounded-r-lg
              prose-blockquote:italic
              prose-blockquote:text-[#4D4D4D]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-[#E3E3E3]">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-[#F5F5F5] text-[#6E6B6B] rounded-lg text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-6 sm:p-8 bg-[#003822] rounded-xl text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Ready to streamline your distribution?
            </h3>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Join brands already using BrandGate to manage their B2B distribution.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#E5A400] text-[#1A1A1A] font-semibold rounded-full hover:bg-[#E5A400]/90 transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
          <h2 className="text-2xl font-bold text-[#003822] mb-8">More Articles</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group block bg-white rounded-xl border border-[#E3E3E3] overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div
                  className="h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url(${relatedPost.image})` }}
                />
                <div className="p-6">
                  <h3 className="font-bold text-[#003822] group-hover:text-[#E5A400] transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

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

// Force static generation
export const dynamic = "force-static";
export const revalidate = false;

// Enterprise-grade Individual Blog Post Page
// app/blog/[slug]/page.tsx

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, ChevronRight, Linkedin, Twitter } from "lucide-react";
import { blogPosts } from "../data";

// Generate static paths
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return { title: "Article Not Found | BrandGate" };
  }

  return {
    title: `${post.title} | BrandGate Insights`,
    description: post.excerpt,
    keywords: [...post.tags, "B2B distribution", "enterprise distribution", "wholesale management"],
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: new Date().toISOString(),
      authors: [post.author.name],
      section: post.tags[0],
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: { canonical: `https://brandgate.dev/blog/${post.slug}` },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="min-h-screen bg-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: new Date().toISOString(),
            dateModified: new Date().toISOString(),
            author: {
              "@type": "Person",
              name: post.author.name,
              jobTitle: post.author.role,
            },
            publisher: {
              "@type": "Organization",
              name: "BrandGate",
              logo: {
                "@type": "ImageObject",
                url: "https://brandgate.dev/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://brandgate.dev/blog/${post.slug}`,
            },
            keywords: post.tags.join(", "),
          }),
        }}
      />

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e5e5e5]">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[#6E6B6B] hover:text-[#003822] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Insights</span>
            </Link>
            
            {/* Breadcrumb */}
            <div className="hidden sm:flex items-center gap-2 text-sm text-[#6E6B6B]">
              <Link href="/" className="hover:text-[#003822]">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:text-[#003822]">Insights</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#1a1a1a] truncate max-w-[200px]">{post.title}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] max-h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0c] via-[#0a0f0c]/60 to-transparent" />
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 -mt-32 relative z-10">
        <div className="bg-white rounded-xl shadow-2xl">
          {/* Header */}
          <div className="p-8 sm:p-12 pb-0">
            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-1.5 bg-[#003822]/10 text-[#003822] rounded-full text-sm font-medium">
                {post.tags[0]}
              </span>
              <div className="flex items-center gap-4 text-sm text-[#6E6B6B]">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1a1a1a] leading-tight mb-8">
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-4 pb-8 border-b border-[#e5e5e5]">
              <div className="w-12 h-12 rounded-full bg-[#003822] flex items-center justify-center text-white font-semibold">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-[#1a1a1a]">{post.author.name}</div>
                <div className="text-sm text-[#6E6B6B]">{post.author.role}</div>
              </div>
              
              {/* Share Buttons */}
              <div className="ml-auto flex items-center gap-2">
                <button className="p-2 rounded-lg bg-[#f5f5f5] hover:bg-[#0077b5] hover:text-white transition-colors" aria-label="Share on LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-lg bg-[#f5f5f5] hover:bg-[#1da1f2] hover:text-white transition-colors" aria-label="Share on Twitter">
                  <Twitter className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="p-8 sm:p-12 pt-8">
            <div 
              className="prose prose-lg max-w-none
                prose-headings:text-[#1a1a1a]
                prose-headings:font-semibold
                prose-headings:tracking-tight
                prose-h2:text-2xl sm:prose-h2:text-3xl
                prose-h2:mt-12
                prose-h2:mb-6
                prose-h3:text-xl sm:prose-h3:text-2xl
                prose-h3:mt-8
                prose-h3:mb-4
                prose-p:text-[#4a4a4a]
                prose-p:leading-[1.8]
                prose-p:mb-6
                prose-a:text-[#003822]
                prose-a:no-underline
                prose-a:font-medium
                prose-a:hover:underline
                prose-strong:text-[#1a1a1a]
                prose-strong:font-semibold
                prose-ul:my-6
                prose-ul:space-y-2
                prose-li:text-[#4a4a4a]
                prose-blockquote:border-l-4
                prose-blockquote:border-[#E5A400]
                prose-blockquote:bg-[#fafafa]
                prose-blockquote:py-6
                prose-blockquote:px-8
                prose-blockquote:rounded-r-lg
                prose-blockquote:italic
                prose-blockquote:text-[#4a4a4a]
                prose-blockquote:text-lg
                prose-table:text-sm
                prose-thead:bg-[#f5f5f5]
                prose-th:text-[#1a1a1a]
                prose-th:font-semibold
                prose-th:px-4
                prose-th:py-3
                prose-td:px-4
                prose-td:py-3
                prose-td:border-t
                prose-td:border-[#e5e5e5]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-[#e5e5e5]">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-[#f5f5f5] text-[#6E6B6B] rounded-lg text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[2px] bg-[#E5A400]" />
            <h2 className="text-xl font-semibold text-[#1a1a1a]">Related Articles</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group flex gap-4 p-4 rounded-xl border border-[#e5e5e5] hover:border-[#003822] hover:shadow-lg transition-all"
              >
                <div
                  className="w-24 h-24 flex-shrink-0 rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${relatedPost.image})` }}
                />
                <div className="flex flex-col justify-center">
                  <span className="text-xs text-[#E5A400] font-medium mb-1">{relatedPost.tags[0]}</span>
                  <h3 className="font-semibold text-[#1a1a1a] group-hover:text-[#003822] transition-colors line-clamp-2 text-sm leading-snug">
                    {relatedPost.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-[#0a0f0c] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Transform Your Distribution Operations
          </h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join leading brands using BrandGate to streamline their B2B distribution, 
            reduce operational costs, and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#E5A400] text-[#0a0f0c] font-semibold rounded-lg hover:bg-[#E5A400]/90 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

export const dynamic = "force-static";
export const revalidate = false;

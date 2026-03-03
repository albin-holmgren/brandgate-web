import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts } from "../data";

// Generate static paths for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found | BrandGate Blog",
    };
  }

  return {
    title: `${post.title} | BrandGate Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: new Date().toISOString(),
      authors: [post.author.name],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `https://brandgate.dev/blog/${post.slug}`,
    },
  };
}

// Page component
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <article className="min-h-screen bg-[#F5F5F5]">
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
            author: {
              "@type": "Person",
              name: post.author.name,
            },
            publisher: {
              "@type": "Organization",
              name: "BrandGate",
              logo: {
                "@type": "ImageObject",
                url: "https://brandgate.dev/logo.png",
              },
            },
          }),
        }}
      />

      {/* Navigation */}
      <nav className="bg-[#F5F5F5] border-b border-[#E3E3E3] sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#6E6B6B] hover:text-[#003822] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="relative h-48 sm:h-64 md:h-80 lg:h-96">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#003822]/90 via-[#003822]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-16 sm:-mt-20 md:-mt-24 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#6E6B6B] mb-4 sm:mb-6">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
              {post.date}
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              {post.readTime}
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="text-[#E5A400] font-medium">{post.tags[0]}</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#003822] mb-6 sm:mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3 sm:gap-4 pb-6 sm:pb-8 mb-6 sm:mb-8 border-b border-[#E3E3E3]">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#003822] flex items-center justify-center text-white font-bold text-sm sm:text-base flex-shrink-0">
              {post.author.name.charAt(0)}
            </div>
            <div className="min-w-0">
              <div className="font-semibold text-[#003822] text-sm sm:text-base truncate">
                {post.author.name}
              </div>
              <div className="text-xs sm:text-sm text-[#6E6B6B] truncate">
                {post.author.role}
              </div>
            </div>
          </div>

          {/* Article Content - Mobile Optimized */}
          <div 
            className="prose prose-sm sm:prose-base lg:prose-lg max-w-none 
              prose-headings:text-[#003822] 
              prose-headings:font-bold 
              prose-h2:text-xl sm:prose-h2:text-2xl lg:prose-h2:text-3xl
              prose-h2:mt-8 sm:prose-h2:mt-10
              prose-h2:mb-4
              prose-h3:text-lg sm:prose-h3:text-xl
              prose-h3:mt-6 sm:prose-h3:mt-8
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
              prose-blockquote:py-3 sm:prose-blockquote:py-4
              prose-blockquote:px-4 sm:prose-blockquote:px-6
              prose-blockquote:rounded-r-lg
              prose-blockquote:italic
              prose-blockquote:text-[#4D4D4D]
              prose-table:text-sm
              prose-thead:bg-[#003822]
              prose-thead:text-white
              prose-th:px-3 sm:prose-th:px-4
              prose-th:py-2
              prose-td:px-3 sm:prose-td:px-4
              prose-td:py-2
              prose-td:border
              prose-td:border-[#E3E3E3]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#E3E3E3]">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 sm:px-4 sm:py-2 bg-[#F5F5F5] text-[#6E6B6B] rounded-full text-xs sm:text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-[#003822] rounded-xl sm:rounded-2xl text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">
              Ready to streamline your distribution?
            </h3>
            <p className="text-white/80 text-sm sm:text-base mb-4 sm:mb-6 max-w-lg mx-auto">
              Join hundreds of brands already using BrandGate to manage their B2B distribution.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#E5A400] text-[#1A1A1A] font-semibold rounded-full hover:bg-[#E5A400]/90 transition-colors text-sm sm:text-base"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-xl sm:text-2xl font-bold text-[#003822] mb-6 sm:mb-8">
            More Articles
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group block bg-white rounded-xl overflow-hidden border border-[#E3E3E3] shadow-sm hover:shadow-lg transition-all"
              >
                <div
                  className="h-36 sm:h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url(${relatedPost.image})` }}
                />
                <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 text-xs text-[#6E6B6B] mb-2">
                    <Calendar className="w-3 h-3" />
                    {relatedPost.date}
                  </div>
                  <h3 className="font-bold text-[#003822] group-hover:text-[#E5A400] transition-colors line-clamp-2 text-sm sm:text-base">
                    {relatedPost.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="bg-[#003822] py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
            Get distribution insights delivered to your inbox
          </h2>
          <p className="text-white/70 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto">
            Weekly tips on B2B distribution, wholesale growth, and scaling your brand.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#E5A400] text-sm sm:text-base"
            />
            <button
              type="submit"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-[#E5A400] text-[#1A1A1A] font-semibold rounded-lg hover:bg-[#E5A400]/90 transition-colors text-sm sm:text-base whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </article>
  );
}

// Configure for static generation
export const dynamic = "force-static";
export const revalidate = false;

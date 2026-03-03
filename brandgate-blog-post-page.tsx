// Individual blog post page
// app/blog/[slug]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { getPostBySlug, blogPosts } from "../data";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | BrandGate Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Navigation */}
      <div className="bg-[#F5F5F5] border-b border-[#E3E3E3]">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#6E6B6B] hover:text-[#003822] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div
        className="h-64 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="h-full bg-gradient-to-t from-[#003822]/80 to-transparent" />
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#6E6B6B] mb-6">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="px-3 py-1 bg-[#E5A400]/10 text-[#E5A400] rounded-full text-xs font-medium">
              {post.tags[0]}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003822] mb-8">
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-4 pb-8 mb-8 border-b border-[#E3E3E3]">
            <div className="w-12 h-12 rounded-full bg-[#003822] flex items-center justify-center text-white font-bold">
              {post.author.name[0]}
            </div>
            <div>
              <div className="font-semibold text-[#003822]">{post.author.name}</div>
              <div className="text-sm text-[#6E6B6B]">{post.author.role}</div>
            </div>
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-[#003822] prose-headings:font-bold prose-a:text-[#E5A400] prose-strong:text-[#003822] prose-blockquote:border-l-[#E5A400] prose-blockquote:bg-[#F5F5F5] prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-[#E3E3E3]">
            <div className="flex items-center gap-4">
              <span className="text-[#6E6B6B] font-medium">Share this article:</span>
              <button className="p-2 rounded-full bg-[#F5F5F5] hover:bg-[#E3E3E3] transition-colors">
                <Share2 className="w-5 h-5 text-[#6E6B6B]" />
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-[#003822] mb-8">More Articles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts
            .filter((p) => p.slug !== post.slug)
            .slice(0, 2)
            .map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group block bg-white rounded-xl overflow-hidden border border-[#E3E3E3] shadow-sm hover:shadow-lg transition-all"
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

      {/* CTA */}
      <section className="bg-[#003822] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to streamline your distribution?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Join hundreds of brands already using BrandGate to manage their B2B distribution.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E5A400] text-[#1A1A1A] font-semibold rounded-full hover:bg-[#E5A400]/90 transition-colors"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}

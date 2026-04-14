// Blog listing page - empty state until first posts launch
// app/blog/page.tsx

import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

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

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative bg-primary text-primary-foreground py-24 md:py-32">
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <div className="w-16 h-1 bg-gold mx-auto mb-8" />
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
                BrandGate Blog
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/50 text-lg mt-6 max-w-2xl mx-auto">
                B2B distribution insights, wholesale growth strategies, and tips for scaling your brand.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Empty state */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <FadeIn>
              <BookOpen className="w-12 h-12 text-gold mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                The blog is launching soon
              </h2>
              <p className="text-muted-foreground mb-8">
                We&rsquo;re working on deep dives into B2B distribution, wholesale pricing,
                distributor onboarding, and scaling brands internationally. The first articles
                are on their way.
              </p>
              <Button asChild className="bg-gold text-primary hover:bg-gold/90">
                <Link href="/contact">Get notified when we publish</Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

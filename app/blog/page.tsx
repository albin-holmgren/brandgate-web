import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { BookOpen, Compass, Scale, Rocket, ArrowRight } from "lucide-react";

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

const topics = [
  {
    icon: Compass,
    title: "Distribution fundamentals",
    description: "How wholesale actually works — partner selection, onboarding, pricing tiers, and the workflows behind a healthy retailer network.",
  },
  {
    icon: Scale,
    title: "Pricing & margins",
    description: "Wholesale pricing strategy, tiered price lists, volume discounts, and how to price without leaving margin on the table.",
  },
  {
    icon: Rocket,
    title: "Scaling your brand",
    description: "Moving from B2C to B2B, expanding into new markets, and the operational shifts that come with a bigger distributor network.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section aria-label="Blog hero" className="relative bg-primary text-primary-foreground overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative max-w-4xl mx-auto px-6 py-24 md:py-36 text-center">
            <FadeIn>
              <div className="w-16 h-1 bg-gold mx-auto mb-8 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase leading-[1.1]">
                The BrandGate Blog
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/60 text-lg md:text-xl mt-8 max-w-2xl mx-auto font-light">
                B2B distribution insights, wholesale growth strategies, and tips for scaling your brand.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Empty state / topics */}
        <section aria-label="What's coming" className="py-24 md:py-32 bg-card border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal className="text-center mb-20">
              <div className="w-12 h-1 bg-gold mx-auto mb-6 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
              <h2 className="text-3xl md:text-5xl font-bold text-foreground uppercase tracking-tight">
                First articles on the way
              </h2>
              <p className="text-muted-foreground mt-5 text-lg max-w-2xl mx-auto">
                The blog is launching soon. Here&rsquo;s what we&rsquo;ll be writing about.
              </p>
            </ScrollReveal>

            <StaggerContainer staggerDelay={0.08} className="grid md:grid-cols-3 gap-6">
              {topics.map((topic) => (
                <StaggerItem key={topic.title}>
                  <article className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full">
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                      <topic.icon className="w-7 h-7 text-primary-foreground" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{topic.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{topic.description}</p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Be first to read */}
        <section aria-label="Be first to read" className="py-24 md:py-32 bg-primary text-primary-foreground">
          <ScrollReveal className="max-w-3xl mx-auto px-6 text-center">
            <div className="w-12 h-1 bg-gold mx-auto mb-8 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
            <BookOpen className="w-10 h-10 text-gold mx-auto mb-6" aria-hidden="true" />
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">Be first to read</h2>
            <p className="text-primary-foreground/60 mt-6 text-lg max-w-xl mx-auto font-light">
              Tell us you&rsquo;re interested and we&rsquo;ll send the first article the day it goes live. No spam, ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 text-base px-10 rounded-full font-semibold h-12">
                <Link href="/contact">Get notified <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}

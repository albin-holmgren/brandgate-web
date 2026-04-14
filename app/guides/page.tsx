import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Download, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides & E-books | BrandGate Resources",
  description: "In-depth guides and e-books on B2B distribution, wholesale growth, and scaling your brand.",
  alternates: { canonical: "https://brandgate.dev/guides" },
};

const planned = [
  {
    icon: BookOpen,
    title: "The B2B distribution playbook",
    description: "How to build and manage a healthy wholesale channel — retailer selection, onboarding, pricing, and day-to-day operations.",
  },
  {
    icon: FileText,
    title: "Wholesale pricing strategy",
    description: "Setting wholesale prices, structuring tiered discounts, and protecting margin across retailers of different sizes.",
  },
  {
    icon: Download,
    title: "Scaling from B2C to B2B",
    description: "What changes when you add wholesale to a direct-to-consumer brand — systems, people, and the expectations retailers have.",
  },
];

export default function GuidesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section aria-label="Guides hero" className="relative bg-primary text-primary-foreground overflow-hidden">
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
                Guides &amp; e-books
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/60 text-lg md:text-xl mt-8 max-w-2xl mx-auto font-light">
                In-depth resources on B2B distribution, wholesale pricing, and scaling your brand.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Planned guides */}
        <section aria-label="Planned guides" className="py-24 md:py-32 bg-card border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal className="text-center mb-20">
              <div className="w-12 h-1 bg-gold mx-auto mb-6 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
              <h2 className="text-3xl md:text-5xl font-bold text-foreground uppercase tracking-tight">
                First guides on the way
              </h2>
              <p className="text-muted-foreground mt-5 text-lg max-w-2xl mx-auto">
                We&rsquo;re writing these now. Sign up and we&rsquo;ll send the first one the day it&rsquo;s ready.
              </p>
            </ScrollReveal>

            <StaggerContainer staggerDelay={0.08} className="grid md:grid-cols-3 gap-6">
              {planned.map((g) => (
                <StaggerItem key={g.title}>
                  <article className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full">
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                      <g.icon className="w-7 h-7 text-primary-foreground" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{g.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{g.description}</p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section aria-label="Be first to read" className="py-24 md:py-32 bg-primary text-primary-foreground">
          <ScrollReveal className="max-w-3xl mx-auto px-6 text-center">
            <div className="w-12 h-1 bg-gold mx-auto mb-8 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
            <BookOpen className="w-10 h-10 text-gold mx-auto mb-6" aria-hidden="true" />
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">Get the first guide</h2>
            <p className="text-primary-foreground/60 mt-6 text-lg max-w-xl mx-auto font-light">
              Tell us you&rsquo;re interested and we&rsquo;ll email you when it&rsquo;s ready — nothing else.
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

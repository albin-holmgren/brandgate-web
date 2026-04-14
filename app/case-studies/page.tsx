import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, ScrollReveal } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | BrandGate Success Stories",
  description: "Customer stories from brands using BrandGate to streamline B2B distribution and grow their wholesale business.",
  alternates: { canonical: "https://brandgate.dev/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section aria-label="Case studies hero" className="relative bg-primary text-primary-foreground overflow-hidden">
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
                Case Studies
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/60 text-lg md:text-xl mt-8 max-w-2xl mx-auto font-light">
                Real customer stories, as our first partnerships mature.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Empty state */}
        <section aria-label="Coming soon" className="py-24 md:py-32 bg-card border-t border-border">
          <ScrollReveal className="max-w-3xl mx-auto px-6 text-center">
            <div className="w-12 h-1 bg-gold mx-auto mb-8 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
            <Sparkles className="w-10 h-10 text-gold mx-auto mb-6" aria-hidden="true" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground uppercase tracking-tight">
              Customer stories coming soon
            </h2>
            <p className="text-muted-foreground mt-6 text-lg">
              BrandGate is a new platform and we&rsquo;re onboarding our first brands right now. Detailed case studies will live here as those partnerships mature.
            </p>
          </ScrollReveal>
        </section>

        {/* CTA */}
        <section aria-label="Become a case study" className="py-24 md:py-32 bg-primary text-primary-foreground">
          <ScrollReveal className="max-w-3xl mx-auto px-6 text-center">
            <div className="w-12 h-1 bg-gold mx-auto mb-8 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">Become our first success story</h2>
            <p className="text-primary-foreground/60 mt-6 text-lg max-w-xl mx-auto font-light">
              Work with us early and we&rsquo;ll feature your story here as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 text-base px-10 rounded-full font-semibold h-12">
                <Link href="/contact">Get in touch <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}

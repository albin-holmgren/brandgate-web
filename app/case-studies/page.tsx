import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Building2, ShoppingBag, Sparkles } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | BrandGate Success Stories",
  description: "See how brands use BrandGate to streamline B2B distribution and grow their wholesale business.",
  alternates: { canonical: "https://brandgate.dev/case-studies" },
};

const caseStudies = [
  {
    icon: TrendingUp,
    industry: "Fashion",
    title: "Nordic Apparel Brand Scales 3x",
    description: "How a Swedish clothing brand streamlined wholesale operations and grew their retailer network from 15 to 200+ stores.",
    results: ["300% revenue growth", "200+ retailers onboarded", "60% faster order processing"],
  },
  {
    icon: Building2,
    industry: "Home Goods",
    title: "Furniture Maker Goes B2B",
    description: "A Danish furniture designer transformed from pure B2C to a thriving wholesale business with BrandGate.",
    results: ["$2M wholesale revenue", "50+ retail partners", "Zero order errors"],
  },
  {
    icon: ShoppingBag,
    industry: "Food & Beverage",
    title: "Organic Food Brand Expansion",
    description: "How an organic food company managed batch tracking and compliance while scaling across Europe.",
    results: ["12 countries", "99.9% traceability", "50% faster fulfillment"],
  },
];

export default function CaseStudiesPage() {
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
                Case Studies
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/50 text-lg mt-6 max-w-2xl mx-auto">
                See how brands like yours use BrandGate to transform their wholesale operations.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <StaggerContainer className="space-y-8">
              {caseStudies.map((study) => (
                <StaggerItem key={study.title}>
                  <div className="bg-card border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3">
                        <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                          <study.icon className="w-8 h-8 text-gold" />
                        </div>
                        <div className="text-sm text-gold font-semibold uppercase tracking-wider">{study.industry}</div>
                        <h3 className="text-2xl font-bold text-foreground mt-2">{study.title}</h3>
                      </div>
                      <div className="md:w-2/3">
                        <p className="text-muted-foreground mb-6">{study.description}</p>
                        <div className="flex flex-wrap gap-3">
                          {study.results.map((result) => (
                            <span key={result} className="bg-primary/5 text-primary px-3 py-1 rounded-full text-sm font-medium">
                              {result}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <Sparkles className="w-12 h-12 text-gold mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Want similar results?</h2>
              <p className="text-muted-foreground mb-8">Join these successful brands using BrandGate.</p>
              <Button asChild className="bg-gold text-primary hover:bg-gold/90">
                <Link href="/contact">Get Started</Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

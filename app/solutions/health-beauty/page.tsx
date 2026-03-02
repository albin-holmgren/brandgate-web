import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, Leaf, Tag, Beaker, CheckCircle2, Award } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health & Beauty B2B Wholesale Solutions | BrandGate",
  description: "B2B wholesale platform for cosmetics, skincare, and wellness brands. Regulatory compliance, batch tracking, and ingredient management included.",
  keywords: ["beauty wholesale", "cosmetics B2B", "skincare distribution", "beauty brand platform", "compliance tracking"],
  alternates: {
    canonical: "https://brandgate.dev/solutions/health-beauty",
  },
  openGraph: {
    title: "Health & Beauty B2B Wholesale Solutions | BrandGate",
    description: "Compliance-ready wholesale platform for beauty and wellness brands.",
    url: "https://brandgate.dev/solutions/health-beauty",
  },
};

const features = [
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Track ingredients, certifications, and compliance documentation. Stay audit-ready with complete records.",
  },
  {
    icon: Tag,
    title: "Batch Tracking",
    description: "Full traceability from production to retailer. Instantly identify affected products for recalls.",
  },
  {
    icon: Beaker,
    title: "Ingredient Lists",
    description: "Share detailed ingredient information, allergen warnings, and usage instructions with retailers.",
  },
  {
    icon: Sparkles,
    title: "Product Variants",
    description: "Manage shades, sizes, scents, and product lines. Track inventory for every variant combination.",
  },
  {
    icon: Leaf,
    title: "Certification Badges",
    description: "Showcase organic, vegan, cruelty-free, and other certifications prominently in your catalog.",
  },
  {
    icon: Award,
    title: "Quality Control",
    description: "Document quality checks, COAs, and testing results for every batch shipped.",
  },
];

const complianceFeatures = [
  "EU Cosmetics Regulation compliance tracking",
  "FDA cosmetic labeling requirements",
  "Complete batch and lot traceability",
  "Ingredient transparency documentation",
  "Safety data sheet (SDS) management",
  "Expiration date tracking and alerts",
];

export default function HealthBeautyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
          <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
            <FadeIn>
              <div className="inline-block bg-gold text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Health & Beauty Industry
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase leading-[1.1]">
                For Beauty Brands
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/50 text-lg md:text-xl mt-8 max-w-2xl mx-auto font-light">
                The compliance-ready B2B platform for cosmetics, skincare, and wellness brands. Manage batch tracking, ingredients, and regulatory requirements effortlessly.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <Button asChild size="lg" className="bg-gold text-primary hover:bg-gold/90 rounded-full px-8">
                  <Link href="/contact">Start Free Trial</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8">
                  <Link href="/features">See Features</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <div className="w-16 h-1 bg-gold mx-auto mb-8" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Beauty Industry Features</h2>
                <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
                  Built for the unique compliance and tracking needs of beauty brands
                </p>
              </div>
            </FadeIn>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <StaggerItem key={feature.title}>
                  <div className="bg-card border rounded-2xl p-8 h-full hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                      <feature.icon className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <FadeIn>
                  <div className="w-16 h-1 bg-gold mb-8" />
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Compliance made simple
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    Navigate complex regulations with confidence. BrandGate helps you maintain compliance across all markets while scaling your wholesale operations.
                  </p>
                </FadeIn>
                <StaggerContainer className="space-y-4">
                  {complianceFeatures.map((feature) => (
                    <StaggerItem key={feature}>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
              <FadeIn>
                <div className="bg-primary rounded-3xl aspect-square flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.06]" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                  }} />
                  <div className="relative z-10 text-center p-8">
                    <Sparkles className="w-24 h-24 text-gold mx-auto mb-6" />
                    <p className="text-primary-foreground/60 text-lg font-medium">Health & Beauty</p>
                    <p className="text-primary-foreground text-2xl font-bold">Compliance Ready</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6">
            <StaggerContainer className="grid md:grid-cols-3 gap-8 text-center">
              <StaggerItem>
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">100%</div>
                <p className="text-primary-foreground/60">Batch traceability</p>
              </StaggerItem>
              <StaggerItem>
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">50+</div>
                <p className="text-primary-foreground/60">Beauty brands trust us</p>
              </StaggerItem>
              <StaggerItem>
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">24/7</div>
                <p className="text-primary-foreground/60">Compliance monitoring</p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <div className="w-16 h-1 bg-gold mx-auto mb-8" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Scale your beauty brand with confidence
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                Join health and beauty brands using BrandGate to manage compliance, track batches, and grow their retailer network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gold text-primary hover:bg-gold/90 rounded-full px-10 font-semibold">
                  <Link href="/contact">Book a Demo</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-10">
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

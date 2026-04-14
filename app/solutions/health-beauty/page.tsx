import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Package, Clock, Shield, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wholesale for Health & Beauty Brands | BrandGate",
  description: "A B2B platform for cosmetics and wellness brands. Batch tracking, expiry-aware inventory, and retailer-specific price lists.",
  alternates: { canonical: "https://brandgate.dev/solutions/health-beauty" },
};

const capabilities = [
  {
    icon: Package,
    title: "Batch & lot tracking",
    description: "Attach batch numbers to every order line. Trace any product back to its production run if you need to.",
  },
  {
    icon: Clock,
    title: "Expiry-aware inventory",
    description: "Capture shelf life per SKU so older stock moves first and retailers don't receive product close to expiry.",
  },
  {
    icon: Shield,
    title: "Audit-ready order history",
    description: "Every order is time-stamped, tied to its distributor, and filterable — useful when compliance comes knocking.",
  },
];

const checklist = [
  "Batch / lot numbers on every order line",
  "Shelf-life and expiry fields per SKU",
  "Distributor-specific price lists",
  "Tiered pricing by retailer group",
  "Audit-friendly order and invoice history",
  "Branded retailer portal",
];

export default function HealthBeautyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section aria-label="Health and beauty hero" className="relative bg-primary text-primary-foreground overflow-hidden">
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
                Wholesale for health &amp; beauty brands
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/60 text-lg md:text-xl mt-8 max-w-2xl mx-auto font-light">
                Batch tracking, shelf-life fields, and retailer-specific pricing for cosmetics and wellness brands.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 text-base px-10 rounded-full font-semibold h-12">
                  <a href="https://app.brandgate.dev/signup">Get Started <ArrowRight className="w-4 h-4 ml-2" /></a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base px-10 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground rounded-full h-12">
                  <Link href="/contact">Book a Demo</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Capabilities */}
        <section aria-label="Capabilities" className="py-24 md:py-32 bg-card border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal className="text-center mb-20">
              <div className="w-12 h-1 bg-gold mx-auto mb-6 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
              <h2 className="text-3xl md:text-5xl font-bold text-foreground uppercase tracking-tight">Built for health &amp; beauty</h2>
              <p className="text-muted-foreground mt-5 text-lg max-w-xl mx-auto">
                The wholesale essentials for brands with regulated inventory.
              </p>
            </ScrollReveal>
            <StaggerContainer staggerDelay={0.08} className="grid md:grid-cols-3 gap-6">
              {capabilities.map((c) => (
                <StaggerItem key={c.title}>
                  <article className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full">
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                      <c.icon className="w-7 h-7 text-primary-foreground" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{c.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{c.description}</p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* What you get */}
        <section aria-label="What you get" className="py-24 md:py-32 bg-primary text-primary-foreground">
          <div className="max-w-5xl mx-auto px-6">
            <ScrollReveal className="text-center mb-16">
              <div className="w-12 h-1 bg-gold mx-auto mb-6 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">What you get</h2>
            </ScrollReveal>
            <ul className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-primary-foreground/90">
                  <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section aria-label="Call to action" className="py-24 md:py-32 bg-card">
          <ScrollReveal className="max-w-4xl mx-auto px-6 text-center">
            <div className="w-12 h-1 bg-gold mx-auto mb-8 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground uppercase tracking-tight">Ready to run wholesale properly?</h2>
            <p className="text-muted-foreground mt-6 text-lg">Start your free trial or book a personalized demo.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 text-base px-10 rounded-full font-semibold h-12">
                <a href="https://app.brandgate.dev/signup">Get Started Free <ArrowRight className="w-4 h-4 ml-2" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base px-10 rounded-full h-12">
                <Link href="/contact">Book a Demo</Link>
              </Button>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, Laptop, Shield, FileText, Zap, Box, Wrench, CheckCircle2, Cpu } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electronics B2B Wholesale Solutions | BrandGate",
  description: "B2B wholesale platform for electronics and tech brands. Warranty tracking, technical specs, and bundle management for devices and accessories.",
  keywords: ["electronics wholesale", "tech B2B", "device distribution", "warranty tracking", "B2B electronics platform"],
  alternates: {
    canonical: "https://brandgate.dev/solutions/electronics",
  },
  openGraph: {
    title: "Electronics B2B Wholesale Solutions | BrandGate",
    description: "Wholesale platform built for electronics brands with warranty and spec management.",
    url: "https://brandgate.dev/solutions/electronics",
  },
};

const features = [
  {
    icon: Shield,
    title: "Warranty Tracking",
    description: "Track warranty periods, serial numbers, and manage claims seamlessly from purchase to expiration.",
  },
  {
    icon: FileText,
    title: "Technical Specifications",
    description: "Share detailed specs, datasheets, and compatibility information with retailers and distributors.",
  },
  {
    icon: Zap,
    title: "Model Variants",
    description: "Manage different models, colors, storage capacities, and regional configurations effortlessly.",
  },
  {
    icon: Box,
    title: "Accessory Bundles",
    description: "Create and manage product bundles, kits, and promotional packages with dynamic pricing.",
  },
  {
    icon: Wrench,
    title: "Repair Management",
    description: "Track RMAs, repairs, and replacements. Keep customers informed at every step.",
  },
  {
    icon: Cpu,
    title: "Firmware Updates",
    description: "Distribute firmware and software updates to your retail network efficiently.",
  },
];

const benefits = [
  "Serial number tracking for every unit sold",
  "Automated warranty validation at point of sale",
  "Technical documentation repository",
  "Compatibility matrices and cross-sell recommendations",
  "Bulk import for large product catalogs",
  "Integration with logistics and fulfillment systems",
];

export default function ElectronicsPage() {
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
                Electronics Industry
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase leading-[1.1]">
                For Tech Brands
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/50 text-lg md:text-xl mt-8 max-w-2xl mx-auto font-light">
                The B2B wholesale platform built for electronics and tech brands. Manage warranties, specifications, and complex product variants with ease.
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
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Electronics Features</h2>
                <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
                  Built for the unique challenges of tech product distribution
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

        {/* Benefits Section */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <div className="bg-primary rounded-3xl aspect-square flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.06]" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                  }} />
                  <div className="relative z-10 text-center p-8">
                    <Laptop className="w-24 h-24 text-gold mx-auto mb-6" />
                    <p className="text-primary-foreground/60 text-lg font-medium">Electronics</p>
                    <p className="text-primary-foreground text-2xl font-bold">Distribution Simplified</p>
                  </div>
                </div>
              </FadeIn>
              <div>
                <FadeIn>
                  <div className="w-16 h-1 bg-gold mb-8" />
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Why tech brands choose BrandGate
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    From consumer electronics to industrial devices, BrandGate handles the complexity of tech product distribution so you can focus on innovation.
                  </p>
                </FadeIn>
                <StaggerContainer className="space-y-4">
                  {benefits.map((benefit) => (
                    <StaggerItem key={benefit}>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6">
            <StaggerContainer className="grid md:grid-cols-3 gap-8 text-center">
              <StaggerItem>
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">50%</div>
                <p className="text-primary-foreground/60">Fewer warranty disputes</p>
              </StaggerItem>
              <StaggerItem>
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">100%</div>
                <p className="text-primary-foreground/60">Serial number tracking</p>
              </StaggerItem>
              <StaggerItem>
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">2x</div>
                <p className="text-primary-foreground/60">Faster retailer onboarding</p>
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
                Ready to scale your tech brand?
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                Join electronics brands using BrandGate to manage warranties, track products, and grow their distribution network.
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

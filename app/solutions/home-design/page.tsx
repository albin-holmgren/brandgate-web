import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Truck, Package, Box, Palette, Ruler, CheckCircle2, Star } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home & Design B2B Wholesale Solutions | BrandGate",
  description: "B2B wholesale platform for furniture, decor, and home goods brands. Manage complex products, variants, shipping, and retailer relationships.",
  keywords: ["home goods wholesale", "furniture B2B", "designer wholesale", "home decor distribution", "B2B furniture platform"],
  alternates: {
    canonical: "https://brandgate.dev/solutions/home-design",
  },
  openGraph: {
    title: "Home & Design B2B Wholesale Solutions | BrandGate",
    description: "Streamline wholesale operations for furniture and home goods brands.",
    url: "https://brandgate.dev/solutions/home-design",
  },
};

const features = [
  {
    icon: Palette,
    title: "Room Collections",
    description: "Organize products by room, style, or collection. Help retailers visualize and order complete room setups.",
  },
  {
    icon: Ruler,
    title: "Variant Management",
    description: "Manage colors, sizes, materials, and finishes effortlessly. Track inventory across all product variants.",
  },
  {
    icon: Box,
    title: "Assembly Tracking",
    description: "Include assembly instructions, required tools, and estimated time for every product.",
  },
  {
    icon: Truck,
    title: "Freight Management",
    description: "Handle large item shipping, white glove delivery, and freight logistics seamlessly.",
  },
  {
    icon: Package,
    title: "Dimensional Shipping",
    description: "Calculate shipping costs based on dimensions and weight. Support for oversized items.",
  },
  {
    icon: Star,
    title: "Sample Program",
    description: "Manage sample requests, tracking, and returns. Let retailers experience products firsthand.",
  },
];

const benefits = [
  "Showcase products with high-resolution images and 360° views",
  "Manage complex pricing tiers for different retailer types",
  "Track orders from warehouse to customer delivery",
  "Handle returns and damages with integrated workflows",
  "Generate professional quotes and proposals instantly",
];

export default function HomeDesignPage() {
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
                Home & Design Industry
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase leading-[1.1]">
                Built for Home Brands
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/50 text-lg md:text-xl mt-8 max-w-2xl mx-auto font-light">
                The B2B wholesale platform designed for furniture, decor, and home goods brands. Manage complex products, variants, and shipping with ease.
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
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Features for Home Brands</h2>
                <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
                  Everything you need to manage furniture and home goods wholesale
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
                    <Home className="w-24 h-24 text-gold mx-auto mb-6" />
                    <p className="text-primary-foreground/60 text-lg font-medium">Home & Design</p>
                    <p className="text-primary-foreground text-2xl font-bold">Wholesale Simplified</p>
                  </div>
                </div>
              </FadeIn>
              <div>
                <FadeIn>
                  <div className="w-16 h-1 bg-gold mb-8" />
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Why home brands love BrandGate
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    From small artisans to large furniture manufacturers, BrandGate helps home goods brands scale their wholesale operations effortlessly.
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
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">3x</div>
                <p className="text-primary-foreground/60">Faster retailer onboarding</p>
              </StaggerItem>
              <StaggerItem>
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">40%</div>
                <p className="text-primary-foreground/60">Reduction in order errors</p>
              </StaggerItem>
              <StaggerItem>
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">50+</div>
                <p className="text-primary-foreground/60">Home brands trust us</p>
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
                Ready to scale your home brand?
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                Join home and design brands using BrandGate to streamline their wholesale operations and grow their retailer network.
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

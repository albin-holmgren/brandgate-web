import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shirt, Ruler, Palette, Package, Tag, TrendingUp, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fashion & Apparel B2B Wholesale Platform | BrandGate",
  description: "B2B wholesale platform for fashion brands. Size matrix management, seasonal collections, lookbooks, and tiered pricing for clothing and accessories.",
  keywords: ["fashion wholesale", "apparel B2B", "clothing distribution", "fashion brand platform", "size matrix management"],
  alternates: { canonical: "https://brandgate.dev/solutions/fashion" },
  openGraph: {
    title: "Fashion & Apparel B2B Wholesale Platform | BrandGate",
    description: "Wholesale management for fashion brands with size matrices and seasonal collections.",
    url: "https://brandgate.dev/solutions/fashion",
  },
};

const features = [
  {
    icon: Ruler,
    title: "Size Matrix Management",
    description: "Manage complex size runs from XS to 4XL across different fits. Track inventory at the size-color level with automatic low-stock alerts.",
  },
  {
    icon: Palette,
    title: "Colorway Management",
    description: "Handle multiple colorways per style with swatch libraries. Show available colors with real-time stock visibility.",
  },
  {
    icon: Package,
    title: "Pre-order & Drops",
    description: "Manage pre-orders for upcoming collections. Set drop dates and embargo times for seasonal releases.",
  },
  {
    icon: Tag,
    title: "Tiered Pricing",
    description: "Set different wholesale prices for boutiques vs department stores. Volume discounts and VIP pricing tiers.",
  },
  {
    icon: Sparkles,
    title: "Digital Lookbooks",
    description: "Share interactive lookbooks with retailers. Include styling notes, fabric details, and care instructions.",
  },
  {
    icon: TrendingUp,
    title: "Trend Analytics",
    description: "Track which styles, colors, and sizes sell best. Predict demand and optimize your production runs.",
  },
];

const fashionBenefits = [
  "Eliminate size-ordering errors with smart matrices",
  "Show real-time availability across all SKUs",
  "Process pre-orders with deposit tracking",
  "Manage seasonal collections and transitions",
  "Generate line sheets and wholesale catalogs automatically",
  "Handle returns and exchanges efficiently",
];

export default function FashionPage() {
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
                Fashion & Apparel Industry
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase leading-[1.1]">
                Fashion Wholesale
                <br />Made Simple
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/50 text-lg md:text-xl mt-8 max-w-2xl mx-auto font-light">
                The B2B platform built for fashion brands. Manage size matrices, seasonal drops, and retailer relationships—all in one place.
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
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Built for Fashion Brands</h2>
                <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
                  From streetwear to luxury, our platform handles the unique complexities of fashion wholesale
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
                    <Shirt className="w-24 h-24 text-gold mx-auto mb-6" />
                    <p className="text-primary-foreground/60 text-lg font-medium">Fashion & Apparel</p>
                    <p className="text-primary-foreground text-2xl font-bold">Wholesale Reimagined</p>
                  </div>
                </div>
              </FadeIn>
              <div>
                <FadeIn>
                  <div className="w-16 h-1 bg-gold mb-8" />
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Why fashion brands love us
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    Say goodbye to spreadsheets and email chains. BrandGate gives you the tools to manage collections, sizes, and retailers with ease.
                  </p>
                </FadeIn>
                <StaggerContainer className="space-y-4">
                  {fashionBenefits.map((benefit) => (
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
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">60%</div>
                <p className="text-primary-foreground/60">Faster order processing</p>
              </StaggerItem>
              <StaggerItem>
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">Zero</div>
                <p className="text-primary-foreground/60">Size ordering errors</p>
              </StaggerItem>
              <StaggerItem>
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">3x</div>
                <p className="text-primary-foreground/60">Retailer growth</p>
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
                Ready to streamline your fashion wholesale?
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                Join fashion brands using BrandGate to manage size matrices, seasonal drops, and grow their retailer network.
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

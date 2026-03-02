import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shirt, Ruler, Palette, Package, Tag, TrendingUp, CheckCircle2, Sparkles, ShoppingBag } from "lucide-react";
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
    type: "website",
    images: [{ url: "https://brandgate.dev/og-fashion.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fashion & Apparel B2B Wholesale Platform | BrandGate",
    description: "Wholesale management for fashion brands with size matrices and seasonal collections.",
  },
};

const features = [
  {
    icon: Ruler,
    title: "Size Matrix Management",
    description: "Manage complex size runs from XS to 4XL across different fits. Track inventory at the size-color level with automatic low-stock alerts.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Palette,
    title: "Colorway Management",
    description: "Handle multiple colorways per style with swatch libraries. Show available colors with real-time stock visibility.",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: Package,
    title: "Pre-order & Drops",
    description: "Manage pre-orders for upcoming collections. Set drop dates and embargo times for seasonal releases.",
    color: "bg-green-500/10 text-green-500",
  },
  {
    icon: Tag,
    title: "Tiered Pricing",
    description: "Set different wholesale prices for boutiques vs department stores. Volume discounts and VIP pricing tiers.",
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    icon: ShoppingBag,
    title: "Digital Lookbooks",
    description: "Share interactive lookbooks with retailers. Include styling notes, fabric details, and care instructions.",
    color: "bg-pink-500/10 text-pink-500",
  },
  {
    icon: TrendingUp,
    title: "Trend Analytics",
    description: "Track which styles, colors, and sizes sell best. Predict demand and optimize your production runs.",
    color: "bg-cyan-500/10 text-cyan-500",
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

// Visual Component for Hero
function FashionHeroVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 400" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background */}
        <rect x="50" y="50" width="300" height="300" rx="40" fill="#003822" opacity="0.1" />
        
        {/* Main Fashion Icon Representation */}
        <rect x="120" y="100" width="80" height="100" rx="12" fill="#E5A400" opacity="0.9" />
        <rect x="210" y="120" width="80" height="100" rx="12" fill="#003822" opacity="0.8" />
        <rect x="100" y="220" width="100" height="80" rx="12" fill="#E5A400" opacity="0.7" />
        <rect x="220" y="210" width="90" height="90" rx="12" fill="#003822" opacity="0.6" />
        
        {/* Decorative circles */}
        <circle cx="180" cy="180" r="150" stroke="#E5A400" strokeWidth="2" opacity="0.3" />
        <circle cx="200" cy="200" r="120" stroke="#E5A400" strokeWidth="2" opacity="0.2" />
      </svg>
    </div>
  );
}

export default function FashionPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center py-16 md:py-24 lg:py-32">
              {/* Text Content */}
              <div className="text-center lg:text-left order-2 lg:order-1">
                <FadeIn>
                  <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    <Shirt className="w-4 h-4" />
                    Fashion & Apparel
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.1}>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase leading-[1.1]">
                    Fashion Wholesale
                    <span className="block text-gold">Made Simple</span>
                  </h1>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                  <p className="text-primary-foreground/60 text-base sm:text-lg mt-6 max-w-xl mx-auto lg:mx-0">
                    The B2B platform built for fashion brands. Manage size matrices, seasonal drops, and retailer relationships—all in one place.
                  </p>
                </FadeIn>
                
                <FadeIn delay={0.3}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
                    <Button asChild size="lg" className="bg-gold text-primary hover:bg-gold/90 rounded-full px-8 w-full sm:w-auto">
                      <Link href="/contact">Start Free Trial</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 w-full sm:w-auto">
                      <Link href="/features">See Features</Link>
                    </Button>
                  </div>
                </FadeIn>
              </div>
              
              {/* Visual */}
              <div className="order-1 lg:order-2">
                <FadeIn delay={0.2}>
                  <FashionHeroVisual />
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Cloud */}
        <section className="py-12 bg-muted border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">Trusted by fashion brands worldwide</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
                {['Nordic Apparel', 'Stockholm Style', 'Scandi Fashion', 'Nordic Wear', 'Baltic Design'].map((brand) => (
                  <span key={brand} className="text-lg font-semibold text-foreground">{brand}</span>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12 md:mb-16">
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">Features</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-4">Built for Fashion Brands</h2>
                <p className="text-muted-foreground mt-4 text-base sm:text-lg max-w-2xl mx-auto">
                  From streetwear to luxury, our platform handles the unique complexities of fashion wholesale
                </p>
              </div>
            </FadeIn>
            
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature) => (
                <StaggerItem key={feature.title}>
                  <div className="group bg-card border rounded-2xl p-6 md:p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{feature.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Visual */}
              <FadeIn className="order-2 lg:order-1">
                <div className="bg-primary rounded-3xl p-8 md:p-12 aspect-square flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.06]" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                  }} />
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Shirt className="w-16 h-16 md:w-20 md:h-20 text-gold" />
                    </div>
                    <p className="text-primary-foreground/60 text-base md:text-lg font-medium">Fashion & Apparel</p>
                    <p className="text-primary-foreground text-xl md:text-2xl font-bold">Wholesale Reimagined</p>
                  </div>
                </div>
              </FadeIn>
              
              {/* Content */}
              <div className="order-1 lg:order-2">
                <FadeIn>
                  <span className="text-gold font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                    Why fashion brands love us
                  </h2>
                  <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
                    Say goodbye to spreadsheets and email chains. BrandGate gives you the tools to manage collections, sizes, and retailers with ease.
                  </p>
                </FadeIn>
                
                <StaggerContainer className="space-y-4">
                  {fashionBenefits.map((benefit, i) => (
                    <StaggerItem key={benefit}>
                      <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-background/50 transition-colors">
                        <div className="w-6 h-6 bg-gold/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-gold" />
                        </div>
                        <span className="text-foreground text-sm md:text-base">{benefit}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center">
              <StaggerItem>
                <div className="p-6">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-2">60%</div>
                  <p className="text-primary-foreground/60 text-sm md:text-base">Faster order processing</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="p-6">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-2">Zero</div>
                  <p className="text-primary-foreground/60 text-sm md:text-base">Size ordering errors</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="p-6">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-2">3x</div>
                  <p className="text-primary-foreground/60 text-sm md:text-base">Retailer growth</p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <div className="w-16 h-1 bg-gold mx-auto mb-8" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to streamline your fashion wholesale?
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-2xl mx-auto">
                Join fashion brands using BrandGate to manage size matrices, seasonal drops, and grow their retailer network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gold text-primary hover:bg-gold/90 rounded-full px-8 md:px-10 font-semibold">
                  <Link href="/contact">Book a Demo</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8 md:px-10">
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

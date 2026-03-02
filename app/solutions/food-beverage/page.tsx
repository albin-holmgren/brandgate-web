import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, Apple, Calendar, Thermometer, Truck, Shield, Leaf, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food & Beverage B2B Wholesale Platform | BrandGate",
  description: "B2B wholesale platform for food and beverage brands. Expiry tracking, batch management, temperature monitoring, and compliance for food distribution.",
  keywords: ["food wholesale", "beverage B2B", "food distribution", "expiry tracking", "batch management", "food compliance"],
  alternates: { canonical: "https://brandgate.dev/solutions/food-beverage" },
  openGraph: {
    title: "Food & Beverage B2B Wholesale Platform | BrandGate",
    description: "Compliance-ready wholesale platform for food and beverage brands.",
    url: "https://brandgate.dev/solutions/food-beverage",
    type: "website",
  },
};

const features = [
  {
    icon: Calendar,
    title: "Expiry Date Tracking",
    description: "Track best-by and use-by dates for every batch. Automatic alerts for products nearing expiration. FIFO inventory management.",
    color: "bg-red-500/10 text-red-500",
  },
  {
    icon: Shield,
    title: "Batch & Lot Tracking",
    description: "Complete traceability from production to retailer. Instantly identify affected products for recalls with full chain of custody.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Thermometer,
    title: "Temperature Monitoring",
    description: "Log and track temperature requirements for cold chain products. Alert retailers to storage conditions.",
    color: "bg-cyan-500/10 text-cyan-500",
  },
  {
    icon: Truck,
    title: "Delivery Scheduling",
    description: "Coordinate delivery windows that work for food retailers. Handle just-in-time deliveries and standing orders.",
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    icon: Leaf,
    title: "Certification Management",
    description: "Showcase organic, non-GMO, gluten-free, and other certifications. Track certification expiration dates.",
    color: "bg-green-500/10 text-green-500",
  },
  {
    icon: Apple,
    title: "Nutritional Data",
    description: "Share complete nutritional information, allergen warnings, and ingredient lists with every order.",
    color: "bg-purple-500/10 text-purple-500",
  },
];

const foodBenefits = [
  "Maintain full traceability for food safety compliance",
  "Prevent expired products from reaching retailers",
  "Manage complex delivery schedules and temperature requirements",
  "Handle recalls instantly with batch identification",
  "Track organic and specialty certifications",
  "Generate compliance reports for audits",
];

function FoodHeroVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 400" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="300" height="300" rx="40" fill="#003822" opacity="0.1" />
        <circle cx="160" cy="150" r="50" fill="#E5A400" opacity="0.8" />
        <rect x="220" y="110" width="70" height="90" rx="12" fill="#003822" opacity="0.7" />
        <rect x="110" y="220" width="90" height="70" rx="12" fill="#E5A400" opacity="0.6" />
        <rect x="230" y="210" width="80" height="80" rx="40" fill="#003822" opacity="0.5" />
        <circle cx="200" cy="200" r="150" stroke="#E5A400" strokeWidth="2" opacity="0.3" />
      </svg>
    </div>
  );
}

export default function FoodBeveragePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="relative bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center py-16 md:py-24 lg:py-32">
              <div className="text-center lg:text-left order-2 lg:order-1">
                <FadeIn>
                  <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    <Apple className="w-4 h-4" />
                    Food & Beverage
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.1}>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase leading-[1.1]">
                    Fresh Food
                    <span className="block text-gold">Wholesale</span>
                  </h1>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                  <p className="text-primary-foreground/60 text-base sm:text-lg mt-6 max-w-xl mx-auto lg:mx-0">
                    The compliance-ready B2B platform for food and beverage brands. Track expiry dates, manage batches, and ensure food safety.
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
              
              <div className="order-1 lg:order-2">
                <FadeIn delay={0.2}>
                  <FoodHeroVisual />
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Cloud */}
        <section className="py-12 bg-muted border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">Trusted by food brands worldwide</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
                {['Nordic Foods', 'Organic Co', 'Baltic Beverages', 'Scandi Snacks', 'Fresh Direct'].map((brand) => (
                  <span key={brand} className="text-lg font-semibold text-foreground">{brand}</span>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12 md:mb-16">
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">Features</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-4">Food Industry Features</h2>
                <p className="text-muted-foreground mt-4 text-base sm:text-lg max-w-2xl mx-auto">
                  Built for the unique compliance and tracking needs of food and beverage brands
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
              <div>
                <FadeIn>
                  <span className="text-gold font-semibold text-sm uppercase tracking-wider">Compliance</span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                    Food safety first
                  </h2>
                  <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
                    Food compliance is non-negotiable. BrandGate helps you maintain traceability, manage certifications, and ensure every product meets regulatory standards.
                  </p>
                </FadeIn>
                
                <StaggerContainer className="space-y-4">
                  {foodBenefits.map((benefit) => (
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
              
              <FadeIn>
                <div className="bg-primary rounded-3xl p-8 md:p-12 aspect-square flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.06]" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                  }} />
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Apple className="w-16 h-16 md:w-20 md:h-20 text-gold" />
                    </div>
                    <p className="text-primary-foreground/60 text-base md:text-lg font-medium">Food & Beverage</p>
                    <p className="text-primary-foreground text-xl md:text-2xl font-bold">Compliance Ready</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center">
              <StaggerItem>
                <div className="p-6">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-2">100%</div>
                  <p className="text-primary-foreground/60 text-sm md:text-base">Batch traceability</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="p-6">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-2">Zero</div>
                  <p className="text-primary-foreground/60 text-sm md:text-base">Expired products shipped</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="p-6">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-2">2hr</div>
                  <p className="text-primary-foreground/60 text-sm md:text-base">Recall identification</p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <div className="w-16 h-1 bg-gold mx-auto mb-8" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to scale your food brand?
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-2xl mx-auto">
                Join food and beverage brands using BrandGate to maintain compliance, track batches, and grow their distribution network.
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

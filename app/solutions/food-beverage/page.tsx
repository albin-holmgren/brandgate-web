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
  },
};

const features = [
  {
    icon: Calendar,
    title: "Expiry Date Tracking",
    description: "Track best-by and use-by dates for every batch. Automatic alerts for products nearing expiration. FIFO inventory management.",
  },
  {
    icon: Shield,
    title: "Batch & Lot Tracking",
    description: "Complete traceability from production to retailer. Instantly identify affected products for recalls with full chain of custody.",
  },
  {
    icon: Thermometer,
    title: "Temperature Monitoring",
    description: "Log and track temperature requirements for cold chain products. Alert retailers to storage conditions.",
  },
  {
    icon: Truck,
    title: "Delivery Scheduling",
    description: "Coordinate delivery windows that work for food retailers. Handle just-in-time deliveries and standing orders.",
  },
  {
    icon: Leaf,
    title: "Certification Management",
    description: "Showcase organic, non-GMO, gluten-free, and other certifications. Track certification expiration dates.",
  },
  {
    icon: Apple,
    title: "Nutritional Data",
    description: "Share complete nutritional information, allergen warnings, and ingredient lists with every order.",
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

export default function FoodBeveragePage() {
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
                Food & Beverage Industry
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase leading-[1.1]">
                Fresh Food
                <br />Wholesale
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/50 text-lg md:text-xl mt-8 max-w-2xl mx-auto font-light">
                The compliance-ready B2B platform for food and beverage brands. Track expiry dates, manage batches, and ensure food safety.
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
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Food Industry Features</h2>
                <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
                  Built for the unique compliance and tracking needs of food and beverage brands
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
              <div>
                <FadeIn>
                  <div className="w-16 h-1 bg-gold mb-8" />
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Food safety first
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    Food compliance is non-negotiable. BrandGate helps you maintain traceability, manage certifications, and ensure every product meets regulatory standards.
                  </p>
                </FadeIn>
                <StaggerContainer className="space-y-4">
                  {foodBenefits.map((benefit) => (
                    <StaggerItem key={benefit}>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                        <span className="text-foreground">{benefit}</span>
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
                    <Apple className="w-24 h-24 text-gold mx-auto mb-6" />
                    <p className="text-primary-foreground/60 text-lg font-medium">Food & Beverage</p>
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
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">Zero</div>
                <p className="text-primary-foreground/60">Expired products shipped</p>
              </StaggerItem>
              <StaggerItem>
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">2hr</div>
                <p className="text-primary-foreground/60">Recall identification time</p>
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
                Ready to scale your food brand?
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                Join food and beverage brands using BrandGate to maintain compliance, track batches, and grow their distribution network.
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

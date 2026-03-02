import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Building2, Users, Globe, CheckCircle2, BarChart3, Sparkles } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Wholesale for Growing Brands | BrandGate",
  description: "Scale your wholesale operations with advanced features, automation, and analytics. Perfect for brands expanding their retailer network.",
  keywords: ["growing brand wholesale", "scale B2B operations", "wholesale automation", "mid-size brand distribution"],
  alternates: { canonical: "https://brandgate.dev/solutions/growing-brands" },
  openGraph: {
    title: "B2B Wholesale for Growing Brands | BrandGate",
    description: "Advanced wholesale platform for scaling brands.",
    url: "https://brandgate.dev/solutions/growing-brands",
  },
};

const growthFeatures = [
  {
    icon: Users,
    title: "Unlimited Retailers",
    description: "No caps on your growth. Add as many retailers as you need as you expand into new markets.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights into sales trends, top-performing products, and retailer behavior.",
  },
  {
    icon: Globe,
    title: "Multi-Region Support",
    description: "Expand internationally with multi-currency, multi-language, and regional pricing.",
  },
  {
    icon: Building2,
    title: "Team Collaboration",
    description: "Add team members with role-based permissions. Sales, support, and operations working together.",
  },
];

const benefits = [
  "Automated order processing saves hours daily",
  "Smart inventory alerts prevent stockouts",
  "Tiered pricing for different retailer types",
  "Advanced reporting and business intelligence",
  "Priority support and dedicated account manager",
  "API access for custom integrations",
];

export default function GrowingBrandsPage() {
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
                For Growing Brands
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase leading-[1.1]">
                Scale Your
                <br />Wholesale Operations
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/50 text-lg md:text-xl mt-8 max-w-2xl mx-auto font-light">
                Advanced tools and automation for brands expanding their B2B reach. Handle 10x more retailers without 10x the work.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <Button asChild size="lg" className="bg-gold text-primary hover:bg-gold/90 rounded-full px-8">
                  <Link href="/contact">See Growth Plan</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8">
                  <Link href="/pricing">Compare Plans</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <div className="w-16 h-1 bg-gold mx-auto mb-8" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Tools for Scaling</h2>
                <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
                  Everything you need to manage growth efficiently
                </p>
              </div>
            </FadeIn>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {growthFeatures.map((feature) => (
                <StaggerItem key={feature.title}>
                  <div className="bg-card border rounded-2xl p-8 h-full hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                      <feature.icon className="w-7 h-7 text-gold" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Benefits + Pricing */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <FadeIn>
                  <div className="w-16 h-1 bg-gold mb-8" />
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Handle growth without the growing pains
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    Growing brands need more than just features—they need a platform that scales with them. BrandGate grows as you grow.
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
              <FadeIn>
                <div className="bg-card border rounded-2xl p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground">Growth Plan</h3>
                    <div className="mt-4">
                      <span className="text-5xl font-bold text-foreground">€149</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Unlimited retailers",
                      "Unlimited products",
                      "Advanced analytics",
                      "Priority support",
                      "All integrations",
                      "API access",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-gold text-primary hover:bg-gold/90">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6">
            <StaggerContainer className="grid md:grid-cols-3 gap-8 text-center">
              <StaggerItem>
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">3x</div>
                <p className="text-primary-foreground/60">Faster retailer onboarding</p>
              </StaggerItem>
              <StaggerItem>
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">10x</div>
                <p className="text-primary-foreground/60">More orders processed</p>
              </StaggerItem>
              <StaggerItem>
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">50%</div>
                <p className="text-primary-foreground/60">Less admin time</p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <Sparkles className="w-12 h-12 text-gold mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to scale your wholesale?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Join growing brands using BrandGate to expand their retailer network and streamline operations.
              </p>
              <Button asChild size="lg" className="bg-gold text-primary hover:bg-gold/90 rounded-full px-10 font-semibold">
                <Link href="/contact">Book a Demo</Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

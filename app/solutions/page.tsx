import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shirt, Home, Apple, Sparkles, Laptop, Building2, CheckCircle2, TrendingUp, Users, Globe } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Wholesale Solutions by Industry | BrandGate",
  description: "Industry-specific B2B wholesale solutions for fashion, food & beverage, home goods, health & beauty, and electronics. Streamline your distribution with BrandGate.",
  keywords: ["B2B wholesale solutions", "industry distribution", "fashion wholesale", "food distribution", "B2B platform"],
  alternates: {
    canonical: "https://brandgate.dev/solutions",
  },
  openGraph: {
    title: "B2B Wholesale Solutions by Industry | BrandGate",
    description: "Industry-specific B2B wholesale solutions tailored for your business needs.",
    url: "https://brandgate.dev/solutions",
  },
};

const industries = [
  {
    icon: Shirt,
    title: "Fashion & Apparel",
    description: "Size variants, seasonal collections, and lookbook management for fashion brands scaling their wholesale operations.",
    href: "/solutions/fashion",
    stats: "40% faster order processing",
  },
  {
    icon: Apple,
    title: "Food & Beverage",
    description: "Expiry tracking, batch management, and compliance tools for food brands distributing to retailers.",
    href: "/solutions/food-beverage",
    stats: "99.9% traceability accuracy",
  },
  {
    icon: Home,
    title: "Home & Design",
    description: "Product variants and shipping management for furniture, decor, and home goods brands.",
    href: "/solutions/home-design",
    stats: "3x faster onboarding",
  },
  {
    icon: Sparkles,
    title: "Health & Beauty",
    description: "Regulatory compliance and batch tracking for cosmetics and wellness brands.",
    href: "/solutions/health-beauty",
    stats: "Full regulatory compliance",
  },
  {
    icon: Laptop,
    title: "Electronics",
    description: "Warranty tracking and technical specifications for tech products and accessories.",
    href: "/solutions/electronics",
    stats: "50% fewer returns",
  },
  {
    icon: Building2,
    title: "B2B Services",
    description: "Service catalog and contract management for businesses offering B2B services.",
    href: "/contact",
    stats: "Custom workflows",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Scale Faster",
    description: "Onboard new distributors in minutes, not weeks. Automate repetitive tasks and focus on growth.",
  },
  {
    icon: Users,
    title: "Better Relationships",
    description: "Give retailers a branded, self-service portal they will love. 24/7 access to catalogs and orders.",
  },
  {
    icon: Globe,
    title: "Go Global",
    description: "Multi-currency, multi-language support for international expansion. One platform, everywhere.",
  },
];

export default function SolutionsPage() {
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
              <div className="w-16 h-1 bg-gold mx-auto mb-8" />
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase leading-[1.1]">
                B2B Solutions for Every Industry
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/50 text-lg md:text-xl mt-8 max-w-2xl mx-auto font-light">
                Tailored wholesale distribution platforms built for the unique challenges of your industry. From fashion to food, we have you covered.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <Button asChild size="lg" className="bg-gold text-primary hover:bg-gold/90 rounded-full px-8">
                  <Link href="/contact">Get Started Free</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8">
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Solutions by Industry</h2>
                <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
                  Each industry has unique challenges. BrandGate is built to handle them all.
                </p>
              </div>
            </FadeIn>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry) => (
                <StaggerItem key={industry.title}>
                  <Link href={industry.href} className="block group h-full">
                    <div className="bg-card border rounded-2xl p-8 h-full hover:shadow-xl transition-all hover:-translate-y-1">
                      <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                        <industry.icon className="w-8 h-8 text-gold" />
                      </div>
                      <div className="inline-block bg-primary/5 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                        {industry.stats}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{industry.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
                      <div className="mt-6 flex items-center gap-2 text-gold font-medium group-hover:gap-3 transition-all">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Why BrandGate Section */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <div className="w-16 h-1 bg-gold mb-8" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why brands choose BrandGate
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Whether you are a startup or enterprise, BrandGate scales with you. Our platform handles the complexity so you can focus on growth.
                </p>
                <ul className="space-y-4">
                  {[
                    "Industry-specific workflows out of the box",
                    "Integrate with your existing tools",
                    "White-label options for enterprise",
                    "24/7 support and onboarding assistance",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <StaggerContainer className="grid gap-6">
                {benefits.map((benefit) => (
                  <StaggerItem key={benefit.title}>
                    <div className="bg-background rounded-xl p-6 border hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                          <benefit.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground mb-1">{benefit.title}</h3>
                          <p className="text-muted-foreground text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <div className="w-16 h-1 bg-gold mx-auto mb-8" />
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">
                Ready to transform your wholesale?
              </h2>
              <p className="text-primary-foreground/50 text-lg mb-10 max-w-2xl mx-auto">
                Join hundreds of brands using BrandGate to streamline their B2B distribution. Start free, scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gold text-primary hover:bg-gold/90 rounded-full px-10 font-semibold">
                  <Link href="/contact">Start Free Trial</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-10">
                  <Link href="/features">See All Features</Link>
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

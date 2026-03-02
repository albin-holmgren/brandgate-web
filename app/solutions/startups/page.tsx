import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Zap, CheckCircle2, Sparkles, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Wholesale for Startups | BrandGate",
  description: "Affordable B2B wholesale platform for startups and emerging brands. Get started with wholesale distribution without enterprise complexity.",
  keywords: ["startup wholesale", "small brand B2B", "emerging brand distribution", "affordable wholesale platform"],
  alternates: { canonical: "https://brandgate.dev/solutions/startups" },
  openGraph: {
    title: "B2B Wholesale for Startups | BrandGate",
    description: "The perfect wholesale platform for emerging brands and startups.",
    url: "https://brandgate.dev/solutions/startups",
  },
};

const startupFeatures = [
  {
    icon: Rocket,
    title: "Quick Setup",
    description: "Get your B2B portal live in under an hour. No developers needed, no complex configuration.",
  },
  {
    icon: Zap,
    title: "Pay-as-You-Grow",
    description: "Start with our affordable Starter plan. Upgrade only when your business scales.",
  },
  {
    icon: Users,
    title: "First Retailers Free",
    description: "Onboard your first 10 retailers at no extra cost. Perfect for testing the wholesale waters.",
  },
  {
    icon: TrendingUp,
    title: "Growth Tools",
    description: "Built-in analytics show which products and retailers drive your growth.",
  },
];

const benefits = [
  "No setup fees or hidden costs",
  "Free onboarding and training",
  "Simple, intuitive interface",
  "Pre-built templates for quick launch",
  "Community support and resources",
  "Easy migration when you scale",
];

export default function StartupsPage() {
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
                For Startups
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase leading-[1.1]">
                Start Wholesale
                <br />Without the Headache
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/50 text-lg md:text-xl mt-8 max-w-2xl mx-auto font-light">
                The B2B platform designed for emerging brands. Get your wholesale channel running in hours, not months.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <Button asChild size="lg" className="bg-gold text-primary hover:bg-gold/90 rounded-full px-8">
                  <Link href="/contact">Start Free Trial</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8">
                  <Link href="/pricing">See Pricing</Link>
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
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Built for Emerging Brands</h2>
                <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
                  Everything you need to launch wholesale, nothing you do not
                </p>
              </div>
            </FadeIn>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {startupFeatures.map((feature) => (
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
                    Why startups choose us
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    We know startups need to move fast and keep costs low. BrandGate gives you enterprise features at startup-friendly prices.
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
                    <h3 className="text-2xl font-bold text-foreground">Starter Plan</h3>
                    <div className="mt-4">
                      <span className="text-5xl font-bold text-foreground">€49</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Up to 10 retailers",
                      "100 products",
                      "Basic analytics",
                      "Email support",
                      "Standard integrations",
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

        {/* CTA */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <Sparkles className="w-12 h-12 text-gold mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to launch your wholesale channel?
              </h2>
              <p className="text-primary-foreground/50 text-lg mb-8 max-w-2xl mx-auto">
                Join hundreds of startups using BrandGate to grow their B2B business.
              </p>
              <Button asChild size="lg" className="bg-gold text-primary hover:bg-gold/90 rounded-full px-10 font-semibold">
                <Link href="/contact">Start Free Trial</Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

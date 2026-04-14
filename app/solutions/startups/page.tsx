import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Rocket, Zap, Users, TrendingUp, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Wholesale for Startups | BrandGate",
  description: "Affordable B2B wholesale platform for startups. Get started with wholesale distribution without enterprise complexity.",
  alternates: { canonical: "https://brandgate.dev/solutions/startups" },
};

// Simple Dashboard Preview
function SimpleDashboard() {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-primary px-4 py-3">
        <span className="text-white font-semibold text-sm">Your Brand Dashboard</span>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gold/10 p-3 rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">12</p>
            <p className="text-xs text-gray-600">Retailers</p>
          </div>
          <div className="bg-primary/10 p-3 rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">€5.2k</p>
            <p className="text-xs text-gray-600">Revenue</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="bg-gray-50 p-2 rounded text-xs">
            <span className="text-gray-600">●</span> Quick setup in under 1 hour
          </div>
          <div className="bg-gray-50 p-2 rounded text-xs">
            <span className="text-gray-600">●</span> First 10 retailers free
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: Rocket,
    title: "Quick Setup",
    description: "Get your B2B portal live in under an hour. No developers needed.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Zap,
    title: "Pay-as-You-Grow",
    description: "Start with our affordable Starter plan. Upgrade when you scale.",
    color: "bg-gold/10 text-primary",
  },
  {
    icon: Users,
    title: "First Retailers Free",
    description: "Onboard your first 10 retailers at no extra cost.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: TrendingUp,
    title: "Growth Tools",
    description: "Built-in analytics show which products drive your growth.",
    color: "bg-gold/10 text-primary",
  },
];

const benefits = [
  "No setup fees or hidden costs",
  "Free onboarding and training",
  "Simple, intuitive interface",
  "Pre-built templates",
  "Community support",
  "Easy migration when you scale",
];

export default function StartupsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="relative bg-primary text-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center py-16 md:py-24 lg:py-32">
              <div className="text-center lg:text-left">
                <FadeIn>
                  <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    <Rocket className="w-4 h-4" />
                    For Startups
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.1}>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                    Start Wholesale
                    <span className="block text-gold">Without the Headache</span>
                  </h1>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                  <p className="text-white/60 text-base sm:text-lg mt-6 max-w-xl">
                    The B2B platform designed for emerging brands. Get your wholesale channel running in hours, not months.
                  </p>
                </FadeIn>
                
                <FadeIn delay={0.3}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
                    <Button asChild size="lg" className="bg-gold text-primary hover:bg-gold/90 rounded-full px-8">
                      <Link href="/contact">Start Free Trial</Link>
                    </Button>
                  </div>
                </FadeIn>
              </div>
              
              <FadeIn delay={0.2}>
                <SimpleDashboard />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Pricing Card */}
        <section className="py-12 bg-gold/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gold/20">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-primary">Starter Plan</h3>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-primary">€35</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">€28/month billed annually</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {["Up to 100 products", "Order management", "Product catalog", "Basic analytics", "Email support"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-gold" />
                      {item}
                  </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-primary text-white hover:bg-primary/90">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary">Built for Emerging Brands</h2>
              </div>
            </FadeIn>
            
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <StaggerItem key={feature.title}>
                  <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                    <div className={`w-12 h-14 ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-primary mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <FadeIn>
              <Sparkles className="w-12 h-12 text-gold mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Ready to launch your wholesale channel?</h2>
              <Button asChild className="bg-gold text-primary hover:bg-gold/90 rounded-full px-8">
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

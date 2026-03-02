"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Users, Store, ArrowRight, Package, BarChart3, FileText } from "lucide-react";
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import DemoDashboard from "@/components/sections/demo-dashboard";

const DEMO_MAILTO = `mailto:albin.holmgren97@gmail.com?subject=Book%20a%20Demo%20-%20BrandGate&body=Hi%2C%20I'd%20like%20to%20book%20a%20demo%20of%20BrandGate.`;

const features = [
  { icon: Users, title: "Distributor Portal", desc: "Give each distributor their own branded portal to browse products, place orders, and track deliveries." },
  { icon: ShoppingCart, title: "Order Management", desc: "Process, track, and fulfill orders with real-time status updates and automated notifications." },
  { icon: Store, title: "Online Store Builder", desc: "Create a custom B2B storefront with drag-and-drop editing. No coding required." },
  { icon: Package, title: "Product Catalog", desc: "Manage unlimited SKUs, pricing tiers, and inventory with low-stock alerts across your network." },
  { icon: FileText, title: "Automated Invoicing", desc: "Generate invoices from orders automatically. Track payments and send overdue reminders." },
  { icon: BarChart3, title: "Analytics & Reports", desc: "Revenue dashboards, distributor performance, and product insights to drive growth." },
];

const steps = [
  { step: "01", title: "Set up your store", desc: "Create your branded B2B storefront, add products, and configure pricing tiers for different distributor groups." },
  { step: "02", title: "Invite distributors", desc: "Send invitations to your distribution network. Each distributor gets their own login and personalized catalog." },
  { step: "03", title: "Manage orders", desc: "Receive and process orders, generate invoices, and track everything from your central dashboard." },
];

const testimonials = [
  { 
    quote: "BrandGate transformed our wholesale operations. We went from managing spreadsheets to having a professional B2B portal that our retailers love.", 
    author: "Sarah Lindqvist",
    role: "CEO, Nordic Apparel",
    metric: "3x faster order processing"
  },
  { 
    quote: "The batch tracking feature is a game-changer for us. We can trace any product instantly, which gives us and our retailers complete confidence.", 
    author: "Marcus Berg",
    role: "Operations Director, Baltic Foods",
    metric: "100% traceability achieved"
  },
  { 
    quote: "We evaluated several platforms and BrandGate was the only one that truly understood B2B wholesale. The size matrix alone saved us hours every week.", 
    author: "Emma Chen",
    role: "Founder, Stockholm Style Co",
    metric: "40% reduction in errors"
  },
];

export function HomePage() {
  return (
    <>
      {/* Hero */}
      <section aria-label="Hero" className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 50% 80%, hsl(45 93% 47% / 0.04) 0%, transparent 60%)'
        }} />
        <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-40 text-center">
          <FadeIn>
            <div className="w-16 h-1 bg-gold mx-auto mb-8 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] uppercase max-w-5xl mx-auto">
              The B2B distribution platform for brands
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-primary-foreground/60 text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed font-light">
              Manage your entire distribution network from one place. Orders, products, invoicing, and your own branded storefront — all in one platform.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 text-base px-10 rounded-full font-semibold h-12">
                <a href="https://app.brandgate.dev/signup">Get Started <ArrowRight className="w-4 h-4 ml-2" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base px-10 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground rounded-full h-12">
                <a href={DEMO_MAILTO}>Book a Demo</a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Interactive Demo */}
      <section aria-label="Interactive product demo" className="bg-card -mt-16 relative z-10 pb-8">
        <ScrollReveal className="max-w-6xl mx-auto px-6">
          <DemoDashboard />
          <p className="text-center text-xs text-muted-foreground mt-4">
            ↑ Interactive demo — click the sidebar to explore different views
          </p>
        </ScrollReveal>
      </section>

      {/* Features overview */}
      <section aria-label="Key features" className="py-24 md:py-32 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-20">
            <div className="w-12 h-1 bg-gold mx-auto mb-6 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground uppercase tracking-tight">Everything your brand needs</h2>
            <p className="text-muted-foreground mt-5 text-lg max-w-xl mx-auto">One platform to manage distributors, process orders, and grow your wholesale business.</p>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.08} className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <article className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-[0.04]">
                    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
                      <circle cx="80" cy="20" r="40" stroke="currentColor" strokeWidth="0.5" />
                      <circle cx="80" cy="20" r="25" stroke="currentColor" strokeWidth="0.5" />
                      <circle cx="80" cy="20" r="10" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <f.icon className="w-7 h-7 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How it works */}
      <section aria-label="How it works" className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-20">
            <div className="w-12 h-1 bg-gold mx-auto mb-6 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">How it works</h2>
            <p className="text-primary-foreground/50 mt-5 text-lg">Get started in three simple steps.</p>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((s) => (
              <StaggerItem key={s.step} className="text-center">
                <span className="text-6xl md:text-7xl font-bold text-gold/20 block mb-4" aria-hidden="true">{s.step}</span>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-primary-foreground/50 text-sm leading-relaxed max-w-sm mx-auto">{s.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section aria-label="Customer testimonials" className="py-24 md:py-32 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <div className="w-12 h-1 bg-gold mx-auto mb-6 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground uppercase tracking-tight">Loved by brands</h2>
            <p className="text-muted-foreground mt-5 text-lg max-w-xl mx-auto">See what our customers have to say about BrandGate.</p>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <article className="bg-card border border-border rounded-2xl p-8 h-full flex flex-col hover:shadow-xl transition-shadow">
                  <div className="text-gold text-4xl font-serif mb-4">"</div>
                  <p className="text-foreground flex-1 mb-6 leading-relaxed">{t.quote}</p>
                  <div className="pt-6 border-t border-border">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-semibold">{t.author.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{t.author}</p>
                        <p className="text-sm text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                    <div className="mt-3 inline-flex items-center gap-2 bg-gold/10 text-gold px-3 py-1 rounded-full text-sm font-medium">
                      {t.metric}
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Call to action" className="bg-primary text-primary-foreground py-24 md:py-32">
        <ScrollReveal className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-12 h-1 bg-gold mx-auto mb-8 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">Ready to streamline your distribution?</h2>
          <p className="text-primary-foreground/50 mt-6 text-lg">Start your free trial or book a personalized demo.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 text-base px-10 rounded-full font-semibold h-12">
              <a href="https://app.brandgate.dev/signup">Get Started Free <ArrowRight className="w-4 h-4 ml-2" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-10 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground rounded-full h-12">
              <a href={DEMO_MAILTO}>Book a Demo</a>
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}

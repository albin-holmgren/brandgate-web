"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { ArrowRight, Zap, Shield, Handshake } from "lucide-react";

const DEMO_MAILTO = `mailto:albin.holmgren97@gmail.com?subject=Book%20a%20Demo%20-%20BrandGate&body=Hi%2C%20I'd%20like%20to%20book%20a%20demo%20of%20BrandGate.`;

const values = [
  { icon: Zap, title: "Simplicity", desc: "We believe powerful tools should be easy to use. Every feature is designed to reduce complexity, not add it." },
  { icon: Shield, title: "Reliability", desc: "Your distribution network runs 24/7 — and so does BrandGate. Built for enterprise uptime and data integrity." },
  { icon: Handshake, title: "Partnership", desc: "We succeed when our customers succeed. Our team works alongside you to optimize your distribution strategy." },
];

const milestones = [
  { year: "2024", title: "Founded in Stockholm", desc: "BrandGate was born from the frustration of managing B2B distribution with spreadsheets and email." },
  { year: "2025", title: "Platform launch", desc: "Launched the core platform with order management, distributor portal, and product catalog." },
  { year: "2026", title: "Store builder & AI tools", desc: "Introduced the drag-and-drop storefront editor and AI-powered website importer for instant branding." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section aria-label="About hero" className="relative bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
          <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-36 text-center">
            <FadeIn>
              <div className="w-16 h-1 bg-gold mx-auto mb-8 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase leading-[1.1]">
                Built for brands that scale through distribution
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/50 text-lg mt-8 max-w-2xl mx-auto font-light">
                We're on a mission to make B2B distribution as seamless as B2C e-commerce.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 text-base px-10 rounded-full font-semibold h-12">
                  <a href={DEMO_MAILTO}>Book a Demo <ArrowRight className="w-4 h-4 ml-2" /></a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Mission */}
        <section aria-label="Our mission" className="py-24 md:py-32 bg-card">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <div className="w-12 h-1 bg-gold mb-6 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground uppercase tracking-tight mb-8">Our mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Distribution is the backbone of wholesale — yet most brands still manage it with outdated tools, disconnected systems, and manual processes. BrandGate exists to change that.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                  We provide a single, modern platform where brands can manage their entire distribution network — from onboarding distributors to processing orders and tracking performance.
                </p>
              </FadeIn>
              <ScrollReveal delay={0.15}>
                <div className="bg-primary rounded-3xl aspect-square flex items-center justify-center p-8 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.06]" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                  }} />
                  <div className="relative z-10 flex flex-col items-center gap-6">
                    <div className="grid grid-cols-3 gap-3">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                          <div className="w-5 h-5 rounded-full bg-gold/40" />
                        </div>
                      ))}
                    </div>
                    <p className="text-primary-foreground/40 text-xs uppercase tracking-widest">Distribution Network</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section aria-label="Company values" className="py-24 md:py-32 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal className="text-center mb-16">
              <div className="w-12 h-1 bg-gold mx-auto mb-6 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">Our values</h2>
            </ScrollReveal>
            <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-3 gap-8">
              {values.map((v) => (
                <StaggerItem key={v.title}>
                  <article className="bg-accent/30 rounded-2xl p-10 text-center border border-primary-foreground/5 h-full">
                    <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
                      <v.icon className="w-7 h-7 text-gold" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                    <p className="text-primary-foreground/50 text-sm leading-relaxed">{v.desc}</p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Timeline */}
        <section aria-label="Company timeline" className="py-24 md:py-32 bg-card border-t border-border">
          <div className="max-w-4xl mx-auto px-6">
            <ScrollReveal className="text-center mb-16">
              <div className="w-12 h-1 bg-gold mx-auto mb-6 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
              <h2 className="text-3xl md:text-5xl font-bold text-foreground uppercase tracking-tight">Our journey</h2>
            </ScrollReveal>
            <div className="relative">
              <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-primary/30 to-border" />
              <div className="space-y-12">
                {milestones.map((m, i) => (
                  <FadeIn key={m.year} delay={i * 0.1}>
                    <div className="relative pl-16">
                      <div className="absolute left-[18px] top-4 w-[11px] h-[11px] rounded-full bg-gold border-2 border-card" />
                      <div className="absolute left-0 top-0 w-12 h-12 rounded-2xl bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                        {m.year.slice(2)}'
                      </div>
                      <h3 className="text-xl font-bold text-foreground"><time dateTime={m.year}>{m.year}</time> — {m.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{m.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section aria-label="Call to action" className="bg-primary text-primary-foreground py-24 md:py-32">
          <ScrollReveal className="max-w-4xl mx-auto px-6 text-center">
            <div className="w-12 h-1 bg-gold mx-auto mb-8 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">Ready to modernize your distribution?</h2>
            <p className="text-primary-foreground/50 mt-6 text-lg">Start your free trial and see the difference.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 text-base px-10 rounded-full font-semibold h-12">
                <a href="https://app.brandgate.dev/signup">Get Started <ArrowRight className="w-4 h-4 ml-2" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base px-10 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground rounded-full h-12">
                <a href={DEMO_MAILTO}>Book a Demo</a>
              </Button>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}

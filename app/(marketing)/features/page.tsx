"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Users, ShoppingCart, Package, FileText, BarChart3, Store, CheckCircle2, ArrowRight } from "lucide-react";
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";

const features = [
  {
    icon: Users,
    title: "Distributor Portal",
    desc: "Give every distributor a branded, personalized experience with their own login, product catalog, and order history.",
    bullets: [
      "Custom-branded login and storefront per distributor",
      "Role-based access with tiered pricing visibility",
      "Self-service ordering with real-time stock levels",
      "Automated welcome emails and onboarding flows",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Order Management",
    desc: "Process, track, and fulfill every order with confidence using real-time status tracking and batch actions.",
    bullets: [
      "Real-time order status tracking and notifications",
      "Bulk order processing and batch actions",
      "Draft orders, returns, and credit note workflows",
      "Integration-ready with ERP and shipping providers",
    ],
  },
  {
    icon: Package,
    title: "Product Catalog",
    desc: "Manage your entire product range with unlimited SKUs, variant support, and tiered pricing per distributor group.",
    bullets: [
      "Unlimited SKUs with variant support",
      "Tiered pricing per distributor group",
      "Inventory tracking with low-stock alerts",
      "Category and collection management",
    ],
  },
  {
    icon: FileText,
    title: "Automated Invoicing",
    desc: "Generate invoices from confirmed orders automatically. Track payments and send overdue reminders.",
    bullets: [
      "Auto-generate invoices from confirmed orders",
      "Payment tracking with overdue reminders",
      "Credit notes and partial payment support",
      "Export to accounting systems (Fortnox, Visma)",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    desc: "Data-driven insights with revenue dashboards, distributor rankings, and product performance reports.",
    bullets: [
      "Revenue dashboards with period comparison",
      "Top-performing distributors and products",
      "Regional sales breakdown and trends",
      "Exportable reports in CSV and PDF",
    ],
  },
  {
    icon: Store,
    title: "Online Store Editor",
    desc: "Build your B2B storefront without writing code using a drag-and-drop section editor.",
    bullets: [
      "Drag-and-drop section editor",
      "Customizable hero, product grid, and CTA blocks",
      "Mobile-responsive out of the box",
      "Brand colors, logos, and typography controls",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section aria-label="Features hero" className="relative bg-primary text-primary-foreground overflow-hidden">
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
                Everything you need to manage distribution
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/50 text-lg mt-8 max-w-2xl mx-auto font-light">
                From distributor onboarding to order fulfillment — BrandGate gives you the tools to scale wholesale effortlessly.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Feature blocks */}
        <section aria-label="Platform features" className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 space-y-32">
            {features.map((feature, i) => (
              <article
                key={feature.title}
                className={`flex flex-col md:flex-row items-center gap-16 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Illustration placeholder */}
                <ScrollReveal className="flex-1 w-full">
                  <div className="bg-primary rounded-3xl aspect-[4/3] flex items-center justify-center relative overflow-hidden p-6">
                    <div className="absolute inset-0 opacity-[0.06]" style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                      backgroundSize: '32px 32px'
                    }} />
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="w-20 h-20 rounded-3xl bg-primary-foreground/10 flex items-center justify-center">
                        <feature.icon className="w-10 h-10 text-gold" />
                      </div>
                      <p className="text-primary-foreground/40 text-sm font-medium uppercase tracking-widest">{feature.title}</p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <FadeIn>
                    <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </FadeIn>
                  <FadeIn delay={0.1}>
                    <h2 className="text-2xl md:text-4xl font-bold text-foreground uppercase tracking-tight">{feature.title}</h2>
                  </FadeIn>
                  <FadeIn delay={0.15}>
                    <p className="text-muted-foreground text-base leading-relaxed">{feature.desc}</p>
                  </FadeIn>
                  <FadeIn delay={0.2}>
                    <ul className="space-y-4 pt-2">
                      {feature.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                          <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </FadeIn>
                  <FadeIn delay={0.4}>
                    <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors pt-2">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </FadeIn>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section aria-label="Call to action" className="bg-primary text-primary-foreground py-24 md:py-32">
          <ScrollReveal className="max-w-4xl mx-auto px-6 text-center">
            <div className="w-12 h-1 bg-gold mx-auto mb-8 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">Ready to see it in action?</h2>
            <p className="text-primary-foreground/50 mt-6 text-lg">Start your free trial or book a personalized demo.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 text-base px-10 rounded-full font-semibold h-12">
                <a href="https://app.brandgate.dev/signup">Get Started <ArrowRight className="w-4 h-4 ml-2" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base px-10 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground rounded-full h-12">
                <a href="mailto:albin.holmgren97@gmail.com?subject=Book%20a%20Demo%20-%20BrandGate&body=Hi%2C%20I'd%20like%20to%20book%20a%20demo%20of%20BrandGate.">Book a Demo</a>
              </Button>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}

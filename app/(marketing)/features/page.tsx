import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { DashboardPreview, PortalPreview, OrderFlowGraphic, MobilePreview, IntegrationGrid, AnalyticsChart } from "@/components/visuals/dashboard-previews";
import { CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | BrandGate - B2B Distribution Platform",
  description: "Explore BrandGate's powerful features: distributor portal, order management, product catalog, invoicing, analytics, and more.",
  keywords: ["B2B features", "wholesale platform", "distributor portal", "order management", "B2B e-commerce"],
  alternates: { canonical: "https://brandgate.dev/features" },
  openGraph: {
    title: "Features | BrandGate",
    description: "Everything you need to manage B2B distribution in one platform.",
    url: "https://brandgate.dev/features",
  },
};

const features = [
  {
    id: "portal",
    title: "Distributor Portal",
    description: "Give every distributor a branded, personalized experience with their own login, product catalog, and order history.",
    bullets: [
      "Custom-branded login and storefront per distributor",
      "Role-based access with tiered pricing visibility",
      "Self-service ordering with real-time stock levels",
      "Automated welcome emails and onboarding flows",
    ],
    visual: <PortalPreview />,
  },
  {
    id: "orders",
    title: "Order Management",
    description: "Process, track, and fulfill every order with confidence using real-time status tracking and batch actions.",
    bullets: [
      "Real-time order status tracking and notifications",
      "Bulk order processing and batch actions",
      "Draft orders, returns, and credit note workflows",
      "Integration-ready with ERP and shipping providers",
    ],
    visual: <OrderFlowGraphic />,
  },
  {
    id: "catalog",
    title: "Product Catalog",
    description: "Manage your entire product range with unlimited SKUs, variant support, and tiered pricing per distributor group.",
    bullets: [
      "Unlimited SKUs with variant support",
      "Tiered pricing per distributor group",
      "Inventory tracking with low-stock alerts",
      "Category and collection management",
    ],
    visual: <DashboardPreview />,
  },
  {
    id: "store",
    title: "Online Store Builder",
    description: "Launch a branded B2B storefront in minutes with a drag-and-drop editor — no designers or developers required.",
    bullets: [
      "Drag-and-drop editor with live preview",
      "Custom domain, branding, and typography",
      "Responsive out of the box on mobile and desktop",
      "Distributor-specific catalogs and pricing",
    ],
    visual: <MobilePreview />,
  },
  {
    id: "invoicing",
    title: "Automated Invoicing",
    description: "Generate invoices from orders automatically, track payment status, and keep receivables under control.",
    bullets: [
      "Invoices generated automatically from orders",
      "Credit notes and returns workflow",
      "Payment history and status tracking",
      "Export to CSV or your accounting tool",
    ],
    visual: <DashboardPreview />,
  },
  {
    id: "analytics",
    title: "Analytics & Reports",
    description: "Data-driven insights with revenue dashboards, distributor rankings, and product performance reports.",
    bullets: [
      "Revenue dashboards with period comparison",
      "Top-performing distributors and products",
      "Regional sales breakdown and trends",
      "Exportable reports in CSV and PDF",
    ],
    visual: <AnalyticsChart />,
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
                <FadeIn>
                  <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Sparkles className="w-4 h-4" />
                    Platform Features
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.1}>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                    Everything You Need to
                    <span className="block text-gold">Scale Wholesale</span>
                  </h1>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                  <p className="text-primary-foreground/60 text-base sm:text-lg mt-6 max-w-xl mx-auto lg:mx-0">
                    From distributor onboarding to order fulfillment — BrandGate gives you the tools to scale wholesale effortlessly.
                  </p>
                </FadeIn>
                
                <FadeIn delay={0.3}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
                    <Button asChild size="lg" className="bg-gold text-primary hover:bg-gold/90 rounded-full px-8">
                      <Link href="/contact">Start Free Trial</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 rounded-full px-8">
                      <Link href="/pricing">View Pricing</Link>
                    </Button>
                  </div>
                </FadeIn>
              </div>
              
              <FadeIn delay={0.2}>
                <DashboardPreview />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-12 bg-muted border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <p className="text-center text-sm text-muted-foreground mb-6 uppercase tracking-wider">Integrates with your favorite tools</p>
              <IntegrationGrid />
            </FadeIn>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12 md:mb-16">
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">Features</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-4">Powerful Tools for B2B Success</h2>
              </div>
            </FadeIn>
            
            <div className="space-y-16 md:space-y-24">
              {features.map((feature, index) => (
                <div key={feature.id} id={feature.id} className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <FadeIn>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">{feature.title}</h3>
                      <p className="text-muted-foreground text-base md:text-lg mb-6">{feature.description}</p>
                      <ul className="space-y-3">
                        {feature.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                            <span className="text-foreground">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </FadeIn>
                  </div>
                  <FadeIn delay={0.1} className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-muted p-4 md:p-8 rounded-2xl">
                      {feature.visual}
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready to see it in action?</h2>
              <p className="text-primary-foreground/60 text-base md:text-lg mb-8">Start your free trial or book a personalized demo.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gold text-primary hover:bg-gold/90 rounded-full px-8">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 rounded-full px-8">
                  <Link href="/contact">Book a Demo</Link>
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

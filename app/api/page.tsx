import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, FileText, Terminal, Webhook } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Documentation | BrandGate Developers",
  description: "Complete API reference for integrating with BrandGate. REST API, webhooks, and SDKs.",
  alternates: { canonical: "https://brandgate.dev/api" },
};

const apiSections = [
  {
    icon: Terminal,
    title: "REST API",
    description: "Full REST API for products, orders, customers, and more. JSON responses, OAuth2 auth.",
    endpoint: "api.brandgate.dev/v1",
  },
  {
    icon: Webhook,
    title: "Webhooks",
    description: "Real-time notifications for orders, inventory changes, and customer events.",
    endpoint: "Event-driven",
  },
  {
    icon: Code,
    title: "SDKs",
    description: "Official SDKs for Node.js, Python, PHP, and Ruby. Get started in minutes.",
    endpoint: "npm install brandgate",
  },
];

export default function ApiPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative bg-primary text-primary-foreground py-24 md:py-32">
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <div className="w-16 h-1 bg-gold mx-auto mb-8" />
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
                API Reference
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/50 text-lg mt-6 max-w-2xl mx-auto">
                Build custom integrations with our REST API, webhooks, and official SDKs.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8 inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-lg font-mono text-sm">
                <Code className="w-4 h-4" />
                api.brandgate.dev/v1
              </div>
            </FadeIn>
          </div>
        </section>

        {/* API Sections */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {apiSections.map((section) => (
                <StaggerItem key={section.title}>
                  <div className="bg-card border rounded-2xl p-8 h-full hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                      <section.icon className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{section.title}</h3>
                    <p className="text-muted-foreground mb-4">{section.description}</p>
                    <code className="text-xs bg-muted px-2 py-1 rounded">{section.endpoint}</code>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Code Example */}
        <section className="py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-6">
            <FadeIn>
              <h2 className="text-2xl font-bold text-foreground mb-6">Quick Start</h2>
              <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto">
                <pre className="text-sm text-slate-300 font-mono">
{`// Get your API key from dashboard
const brandgate = require('brandgate')('your_api_key');

// List all products
const products = await brandgate.products.list();

// Create an order
const order = await brandgate.orders.create({
  customer_id: 'cust_123',
  items: [{ product_id: 'prod_456', quantity: 10 }]
});`}
                </pre>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <FileText className="w-12 h-12 text-gold mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to build?</h2>
              <p className="text-muted-foreground mb-8">Get your API keys and start integrating.</p>
              <Button asChild className="bg-gold text-primary hover:bg-gold/90">
                <Link href="https://app.brandgate.dev">Get API Key</Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

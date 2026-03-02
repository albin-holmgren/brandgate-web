import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Calculator, Truck, CreditCard, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrations | BrandGate",
  description: "Connect BrandGate with Shopify, WooCommerce, Fortnox, Visma, and your favorite tools.",
  alternates: { canonical: "https://brandgate.dev/integrations" },
};

const integrations = [
  {
    category: "E-commerce",
    items: [
      { name: "Shopify", desc: "Sync products and orders with your Shopify store", icon: ShoppingBag },
      { name: "WooCommerce", desc: "Connect your WordPress store seamlessly", icon: ShoppingBag },
    ],
  },
  {
    category: "Accounting",
    items: [
      { name: "Fortnox", desc: "Automatic invoicing and bookkeeping", icon: Calculator },
      { name: "Visma", desc: "Financial management integration", icon: Calculator },
    ],
  },
  {
    category: "Logistics",
    items: [
      { name: "nShift", desc: "Shipping and delivery management", icon: Truck },
      { name: "PostNord", desc: "Nordic shipping integration", icon: Truck },
    ],
  },
  {
    category: "Payment",
    items: [
      { name: "Stripe", desc: "Secure payment processing", icon: CreditCard },
      { name: "Klarna", desc: "Buy now, pay later for B2B", icon: CreditCard },
    ],
  },
];

export default function IntegrationsPage() {
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
                Integrations
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/50 text-lg mt-6 max-w-2xl mx-auto">
                Connect BrandGate with your existing tools. We integrate with the platforms you already use.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Integration Categories */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <StaggerContainer className="grid md:grid-cols-2 gap-12">
              {integrations.map((category) => (
                <StaggerItem key={category.category}>
                  <div className="bg-card border rounded-2xl p-8">
                    <h2 className="text-xl font-bold text-foreground mb-6">{category.category}</h2>
                    <div className="space-y-6">
                      {category.items.map((item) => (
                        <div key={item.name} className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                            <item.icon className="w-6 h-6 text-gold" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* API CTA */}
        <section className="py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold text-foreground mb-4">Need a custom integration?</h2>
              <p className="text-muted-foreground mb-8">Our API allows you to build custom integrations for your specific needs.</p>
              <Button asChild className="bg-gold text-primary hover:bg-gold/90">
                <Link href="/api">View API Docs</Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

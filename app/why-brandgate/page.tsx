import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { CheckCircle2, X, Zap, Shield, Users, BarChart3 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why BrandGate? | Compare B2B Wholesale Platforms",
  description: "See how BrandGate compares to spreadsheets, generic e-commerce, and enterprise ERPs. Purpose-built for B2B wholesale.",
  alternates: { canonical: "https://brandgate.dev/why-brandgate" },
};

const comparisons = [
  {
    icon: Zap,
    title: "vs. Spreadsheets",
    brandgate: [
      "Real-time inventory updates",
      "Automatic order processing",
      "Self-service retailer portal",
      "Built-in invoicing",
      "Analytics & reporting",
    ],
    competitor: [
      "Manual data entry errors",
      "Email order chaos",
      "Constant back-and-forth",
      "Separate invoicing tools",
      "No insights",
    ],
  },
  {
    icon: Shield,
    title: "vs. Generic E-commerce",
    brandgate: [
      "B2B-specific pricing tiers",
      "Distributor-specific catalogs",
      "Net payment terms support",
      "Volume discount automation",
      "Purchase order workflows",
    ],
    competitor: [
      "B2C-focused features",
      "Same prices for everyone",
      "Credit card only",
      "No wholesale discounts",
      "Retail checkout flow",
    ],
  },
  {
    icon: Users,
    title: "vs. Enterprise ERP",
    brandgate: [
      "Set up in hours, not months",
      "Affordable for SMBs",
      "Modern, intuitive interface",
      "No consultants needed",
      "Scales with your growth",
    ],
    competitor: [
      "6+ month implementation",
      "Enterprise pricing ($50k+)",
      "Dated, complex UI",
      "Requires IT team",
      "Overkill for most brands",
    ],
  },
];

const features = [
  { name: "B2B-specific pricing", spreadsheets: false, ecommerce: "partial", erp: true, brandgate: true },
  { name: "Self-service portal", spreadsheets: false, ecommerce: false, erp: "partial", brandgate: true },
  { name: "Real-time inventory", spreadsheets: false, ecommerce: true, erp: true, brandgate: true },
  { name: "Quick setup (< 1 day)", spreadsheets: true, ecommerce: true, erp: false, brandgate: true },
  { name: "Affordable pricing", spreadsheets: true, ecommerce: true, erp: false, brandgate: true },
  { name: "Modern UI", spreadsheets: false, ecommerce: true, erp: false, brandgate: true },
  { name: "Industry features", spreadsheets: false, ecommerce: false, erp: "partial", brandgate: true },
  { name: "No IT required", spreadsheets: true, ecommerce: true, erp: false, brandgate: true },
];

function Check({ value }: { value: boolean | string }) {
  if (value === true) return <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" aria-label="Yes" />;
  if (value === "partial") return <span className="text-yellow-600 text-sm">Partial</span>;
  return <X className="w-5 h-5 text-muted-foreground/40 mx-auto" aria-label="No" />;
}

export default function WhyBrandGatePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section aria-label="Why BrandGate hero" className="relative bg-primary text-primary-foreground py-24 md:py-32">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <div className="w-16 h-1 bg-gold mx-auto mb-8" />
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase leading-[1.1]">
                Purpose-built for
                <span className="block text-gold">B2B Wholesale</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/50 text-lg md:text-xl mt-8 max-w-2xl mx-auto font-light">
                See why brands choose BrandGate over spreadsheets, generic e-commerce, and complex ERP systems.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-10">
                <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 rounded-full px-10 h-12 font-semibold">
                  <Link href="/pricing">See Pricing</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Comparison Cards */}
        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <div className="w-12 h-1 bg-gold mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground uppercase tracking-tight">How we compare</h2>
              </div>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {comparisons.map((comp) => (
                <StaggerItem key={comp.title}>
                  <div className="bg-card border border-border rounded-2xl p-8 h-full">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <comp.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-6">{comp.title}</h3>

                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-semibold text-gold uppercase tracking-wider">BrandGate</span>
                        <ul className="mt-3 space-y-2">
                          {comp.brandgate.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                              <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">The alternative</span>
                        <ul className="mt-3 space-y-2">
                          {comp.competitor.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <X className="w-4 h-4 text-muted-foreground/40 shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-20 md:py-24 bg-muted">
          <div className="max-w-5xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <div className="w-12 h-1 bg-gold mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground uppercase tracking-tight">Feature comparison</h2>
              </div>
            </FadeIn>

            <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
              <table className="w-full">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="text-left p-4 font-semibold text-sm">Feature</th>
                    <th className="p-4 text-center text-sm font-medium">Spreadsheets</th>
                    <th className="p-4 text-center text-sm font-medium">Generic E-commerce</th>
                    <th className="p-4 text-center text-sm font-medium">Enterprise ERP</th>
                    <th className="p-4 text-center text-sm font-semibold bg-gold text-gold-foreground">BrandGate</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, i) => (
                    <tr key={feature.name} className={i % 2 === 0 ? "bg-muted/30" : "bg-card"}>
                      <td className="p-4 text-sm font-medium text-foreground">{feature.name}</td>
                      <td className="p-4"><Check value={feature.spreadsheets} /></td>
                      <td className="p-4"><Check value={feature.ecommerce} /></td>
                      <td className="p-4"><Check value={feature.erp} /></td>
                      <td className="p-4 bg-gold/5"><Check value={feature.brandgate} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24 bg-primary text-primary-foreground text-center">
          <div className="max-w-3xl mx-auto px-6">
            <BarChart3 className="w-12 h-12 text-gold mx-auto mb-6" aria-hidden="true" />
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">Ready to switch?</h2>
            <p className="text-primary-foreground/60 mb-8">
              See why brands are moving off generic e-commerce platforms to purpose-built B2B wholesale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 rounded-full px-10 h-12 font-semibold">
                <Link href="/contact">Start Free Trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground rounded-full px-10 h-12">
                <Link href="/pricing">Compare Plans</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

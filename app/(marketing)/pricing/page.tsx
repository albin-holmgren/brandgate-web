"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { CheckCircle2, ArrowRight, ThumbsUp, Minus } from "lucide-react";

type Currency = "SEK" | "EUR" | "USD";

const exchangeRates: Record<Currency, number> = { SEK: 1, EUR: 0.088, USD: 0.094 };
const currencySymbols: Record<Currency, string> = { SEK: "kr", EUR: "€", USD: "$" };
const currencyPrefix: Record<Currency, boolean> = { SEK: false, EUR: true, USD: true };

const formatPrice = (sekAmount: number, currency: Currency): string => {
  const converted = Math.round(sekAmount * exchangeRates[currency]);
  const formatted = converted.toLocaleString();
  if (currencyPrefix[currency]) return `${currencySymbols[currency]}${formatted}`;
  return `${formatted} ${currencySymbols[currency]}`;
};

const monthlyPricesSEK = { Starter: 399, Pro: 3199, Scale: 6999 };
const annualPricesSEK = { Starter: 319, Pro: 2559, Scale: 5599 };

const tiers = [
  {
    name: "Starter" as const,
    subtitle: "For brands getting started",
    features: ["Up to 100 products", "Order management", "Product catalog", "Basic analytics", "Email support", "0% tx fee discount"],
    cta: "Start Free Trial",
    highlight: false,
    badge: null,
  },
  {
    name: "Pro" as const,
    subtitle: "For growing brands",
    features: ["Up to 500 products", "Online store builder", "Automated invoicing", "Advanced analytics", "Priority support", "Custom price lists", "8% tx fee discount"],
    cta: "Start Free Trial",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Scale" as const,
    subtitle: "For large-scale operations",
    features: ["Unlimited products", "API access", "Dedicated support", "22% tx fee discount", "Everything in Pro", "Custom integrations"],
    cta: "Start Free Trial",
    highlight: false,
    badge: "Best Value",
  },
];

const comparisonRows = [
  { feature: "Products", starter: "100", pro: "500", scale: "Unlimited" },
  { feature: "Order management", starter: true, pro: true, scale: true },
  { feature: "Product catalog", starter: true, pro: true, scale: true },
  { feature: "Online store builder", starter: false, pro: true, scale: true },
  { feature: "Automated invoicing", starter: false, pro: true, scale: true },
  { feature: "Advanced analytics", starter: false, pro: true, scale: true },
  { feature: "Custom price lists", starter: false, pro: true, scale: true },
  { feature: "API access", starter: false, pro: false, scale: true },
  { feature: "Tx fee discount", starter: "0%", pro: "8%", scale: "22%" },
  { feature: "Support", starter: "Email", pro: "Priority", scale: "Dedicated" },
];

const faqs = [
  { q: "Can I try BrandGate for free?", a: "Yes! All plans come with a 14-day free trial. No credit card required to get started." },
  { q: "How do transaction fees work?", a: "A small percentage fee is applied to each order processed through the platform, based on order value tiers (1.60% up to 250k SEK, 0.50% up to 1M, 0.30% above). Higher plans get fee discounts. Minimum fee is 60 SEK per order. Fees are accumulated weekly and billed every Monday." },
  { q: "Can I switch plans later?", a: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards and bank transfers via Stripe." },
  { q: "Is there a setup fee?", a: "No. There are no setup fees or hidden costs beyond subscription and transaction fees." },
  { q: "Do you offer annual billing?", a: "Yes, annual billing is available with a 20% discount on all plans. Use the toggle above the pricing cards." },
];

const CellValue = ({ value, highlight }: { value: string | boolean; highlight?: boolean }) => {
  if (typeof value === "string") return <span className={highlight ? "font-semibold" : ""}>{value}</span>;
  if (value) return <CheckCircle2 className={`w-4 h-4 mx-auto ${highlight ? "text-gold" : "text-primary"}`} />;
  return <Minus className="w-4 h-4 mx-auto text-muted-foreground/30" />;
};

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [currency, setCurrency] = useState<Currency>("SEK");

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section aria-label="Pricing hero" className="relative bg-primary text-primary-foreground overflow-hidden">
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
                Simple, transparent pricing
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/50 text-lg mt-8 max-w-2xl mx-auto font-light">
                Monthly subscription + per-order transaction fees. No hidden costs.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Pricing cards */}
        <section aria-label="Pricing plans" className="py-24 md:py-32 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-14">
              <div className="flex items-center gap-4">
                <span className={`text-sm font-medium transition-colors ${!annual ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
                <button
                  onClick={() => setAnnual(!annual)}
                  aria-label={annual ? "Switch to monthly billing" : "Switch to annual billing"}
                  className={`relative w-14 h-7 rounded-full transition-colors ${annual ? "bg-primary" : "bg-border"}`}
                >
                  <span className={`absolute top-0.5 w-6 h-6 rounded-full bg-card shadow-md transition-transform ${annual ? "left-[30px]" : "left-0.5"}`} />
                </button>
                <span className={`text-sm font-medium transition-colors ${annual ? "text-foreground" : "text-muted-foreground"}`}>
                  Annual <span className="text-gold text-xs font-bold ml-1">Save 20%</span>
                </span>
              </div>
              <div className="flex items-center gap-1 bg-secondary rounded-full p-1 border border-border">
                {(["SEK", "EUR", "USD"] as Currency[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${currency === c ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </FadeIn>

            <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {tiers.map((tier) => {
                const prices = annual ? annualPricesSEK : monthlyPricesSEK;
                const price = prices[tier.name];
                return (
                  <StaggerItem key={tier.name}>
                    <article
                      className={`rounded-2xl p-8 flex flex-col relative h-full ${
                        tier.highlight
                          ? "text-primary-foreground border-2 border-gold shadow-2xl"
                          : "bg-card border border-border"
                      }`}
                      style={tier.highlight ? {
                        background: 'linear-gradient(135deg, hsl(160 100% 11%) 0%, hsl(160 80% 14%) 100%)'
                      } : undefined}
                    >
                      {tier.badge && (
                        <span className={`absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold px-5 py-1.5 rounded-full flex items-center gap-1.5 ${
                          tier.name === "Pro"
                            ? "bg-gold text-gold-foreground"
                            : "bg-primary text-primary-foreground"
                        }`}>
                          <ThumbsUp className="w-3.5 h-3.5" />
                          {tier.badge}
                        </span>
                      )}
                      <p className={`text-xs uppercase tracking-wider font-medium ${tier.highlight ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
                        {tier.subtitle}
                      </p>
                      <h3 className={`text-2xl font-bold mt-2 ${tier.highlight ? "" : "text-foreground"}`}>{tier.name}</h3>
                      <div className="mt-6 mb-8">
                        <span className={`text-5xl font-bold ${tier.highlight ? "" : "text-foreground"}`}>
                          {formatPrice(price, currency)}
                        </span>
                        <span className={`text-sm ml-1 ${tier.highlight ? "text-primary-foreground/50" : "text-muted-foreground"}`}>/mo</span>
                      </div>
                      <ul className="space-y-3.5 flex-1">
                        {tier.features.map((f) => (
                          <li key={f} className={`flex items-start gap-2.5 text-sm ${tier.highlight ? "text-primary-foreground/80" : "text-foreground"}`}>
                            <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${tier.highlight ? "text-gold" : "text-primary"}`} />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Button
                        asChild
                        className={`mt-8 w-full rounded-full h-11 font-semibold ${
                          tier.highlight ? "bg-gold text-gold-foreground hover:bg-gold/90" : ""
                        }`}
                        variant={tier.highlight ? "default" : "outline"}
                      >
                        <a href="https://app.brandgate.dev/signup">{tier.cta}</a>
                      </Button>
                    </article>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            <FadeIn delay={0.3} className="flex flex-wrap items-center justify-center gap-6 mt-14">
              {[
                { label: "14-day free trial", icon: "🎁" },
                { label: "No credit card required", icon: "💳" },
                { label: "Cancel anytime", icon: "🛡️" },
              ].map((item) => (
                <span key={item.label} className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-secondary rounded-full px-5 py-2.5 border border-border">
                  <span>{item.icon}</span> {item.label}
                </span>
              ))}
            </FadeIn>
          </div>
        </section>

        {/* Transaction fees */}
        <section aria-label="Transaction fees" className="py-24 md:py-32 bg-secondary border-t border-border">
          <div className="max-w-4xl mx-auto px-6">
            <ScrollReveal className="text-center mb-12">
              <div className="w-12 h-1 bg-gold mx-auto mb-6 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
              <h2 className="text-2xl md:text-4xl font-bold text-foreground uppercase tracking-tight">Transaction Fees</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                A small percentage-based fee on every order. Higher plans get bigger discounts. Fees accumulate weekly and are billed every Monday.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="overflow-x-auto bg-card rounded-2xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Order Value</th>
                      <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">Fee Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-5 py-3.5 font-medium text-foreground">≤ {formatPrice(250000, currency)}</td>
                      <td className="px-5 py-3.5 text-right text-foreground font-semibold">1.60%</td>
                    </tr>
                    <tr className="border-b border-border bg-secondary/30">
                      <td className="px-5 py-3.5 font-medium text-foreground">{formatPrice(250001, currency)} – {formatPrice(1000000, currency)}</td>
                      <td className="px-5 py-3.5 text-right text-foreground font-semibold">0.50%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3.5 font-medium text-foreground">&gt; {formatPrice(1000000, currency)}</td>
                      <td className="px-5 py-3.5 text-right text-foreground font-semibold">0.30%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
                <span className="bg-card border border-border rounded-full px-4 py-2">Minimum: {formatPrice(60, currency)} per order</span>
                <span className="bg-card border border-border rounded-full px-4 py-2">Billed weekly (Mondays)</span>
                <span className="bg-card border border-border rounded-full px-4 py-2">50/50 supplier/distributor split (configurable)</span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Comparison table */}
        <section aria-label="Plan comparison" className="py-24 md:py-32 bg-card border-t border-border">
          <div className="max-w-5xl mx-auto px-6">
            <ScrollReveal className="text-center mb-12">
              <div className="w-12 h-1 bg-gold mx-auto mb-6 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
              <h2 className="text-2xl md:text-4xl font-bold text-foreground uppercase tracking-tight">Compare plans</h2>
            </ScrollReveal>
            <ScrollReveal>
              <div className="overflow-x-auto bg-card rounded-2xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Feature</th>
                      <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">Starter</th>
                      <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-foreground bg-gold/5 border-x border-gold/10">Pro</th>
                      <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">Scale</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr key={row.feature} className={`border-b border-border last:border-0 ${i % 2 === 1 ? "bg-secondary/30" : ""}`}>
                        <td className="px-5 py-3.5 font-medium text-foreground">{row.feature}</td>
                        <td className="px-5 py-3.5 text-center text-muted-foreground"><CellValue value={row.starter} /></td>
                        <td className="px-5 py-3.5 text-center bg-gold/5 border-x border-gold/10"><CellValue value={row.pro} highlight /></td>
                        <td className="px-5 py-3.5 text-center text-muted-foreground"><CellValue value={row.scale} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ */}
        <section aria-label="Frequently asked questions" className="py-24 md:py-32 bg-secondary border-t border-border">
          <div className="max-w-3xl mx-auto px-6">
            <ScrollReveal className="text-center mb-12">
              <div className="w-12 h-1 bg-gold mx-auto mb-6 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
              <h2 className="text-2xl md:text-4xl font-bold text-foreground uppercase tracking-tight">Frequently asked questions</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                    <AccordionTrigger className="text-left text-foreground hover:no-underline text-base font-medium">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section aria-label="Call to action" className="bg-primary text-primary-foreground py-24 md:py-32">
          <ScrollReveal className="max-w-4xl mx-auto px-6 text-center">
            <div className="w-12 h-1 bg-gold mx-auto mb-8 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">Start your free 14-day trial</h2>
            <p className="text-primary-foreground/50 mt-6 text-lg">No credit card required. Set up in minutes.</p>
            <Button asChild size="lg" className="mt-10 bg-gold text-gold-foreground hover:bg-gold/90 text-base px-10 rounded-full font-semibold h-12">
              <a href="https://app.brandgate.dev/signup">Get Started Free <ArrowRight className="w-4 h-4 ml-2" /></a>
            </Button>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}

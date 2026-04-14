import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | BrandGate",
  description: "Frequently asked questions about BrandGate B2B wholesale platform. Pricing, features, integrations, and more.",
  alternates: { canonical: "https://brandgate.dev/faq" },
};

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How long does it take to set up BrandGate?",
        a: "Most brands are up and running within 1-2 hours. Import your products, invite your retailers, and you're ready to start taking orders. Our onboarding team is available to help if needed.",
      },
      {
        q: "Do I need technical skills to use BrandGate?",
        a: "Not at all. BrandGate is designed for business users, not developers. Our drag-and-drop store builder and intuitive interface mean you can manage everything without writing code.",
      },
      {
        q: "Can I try BrandGate before committing?",
        a: "Yes. We offer a 14-day free trial with no credit card required. You get full access to all features during the trial period.",
      },
    ],
  },
  {
    category: "Pricing & Plans",
    questions: [
      {
        q: "What's included in the free trial?",
        a: "The free trial includes full access to all features, all integrations, and email support. No credit card required.",
      },
      {
        q: "Can I upgrade or downgrade my plan?",
        a: "Yes. You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any payments.",
      },
      {
        q: "Are there any setup fees or hidden costs?",
        a: "No setup fees and no hidden costs — you pay only the subscription and transaction fees listed on the pricing page. For Enterprise plans, we offer custom pricing based on your specific needs.",
      },
    ],
  },
  {
    category: "Features & Functionality",
    questions: [
      {
        q: "Which integrations do you support?",
        a: "We integrate with Shopify, WooCommerce, Fortnox, Visma, Stripe, and Klarna, with more on the roadmap. We also offer a full REST API for custom integrations.",
      },
      {
        q: "Can I set different prices for different retailers?",
        a: "Yes. BrandGate supports tiered pricing, volume discounts, and customer-specific price lists. You can create pricing groups and assign retailers accordingly.",
      },
      {
        q: "Is there a mobile app for retailers?",
        a: "BrandGate is fully responsive and works on all devices. Retailers can browse your catalog and place orders from their phone, tablet, or desktop.",
      },
    ],
  },
  {
    category: "Support & Security",
    questions: [
      {
        q: "What kind of support do you offer?",
        a: "Email support is included with all plans. Pro plans include priority support with faster response times. Scale plans get dedicated account managers.",
      },
      {
        q: "Is my data secure with BrandGate?",
        a: "Security is a top priority. We use strong encryption in transit and at rest, run in reputable data centers, and follow industry best practices for access control.",
      },
      {
        q: "Can I export my data if I decide to leave?",
        a: "Yes, your data is yours. You can export products, orders, and customer information at any time in standard formats (CSV, JSON).",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section aria-label="FAQ hero" className="relative bg-primary text-primary-foreground py-24 md:py-32">
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
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
                Frequently Asked Questions
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/50 text-lg mt-6 max-w-2xl mx-auto">
                Everything you need to know about BrandGate.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6">
            <StaggerContainer className="space-y-12">
              {faqs.map((category) => (
                <StaggerItem key={category.category}>
                  <h2 className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="bg-card border border-border rounded-2xl divide-y divide-border">
                    {category.questions.map((item) => (
                      <AccordionItem key={item.q} value={item.q} className="px-6 border-b-0">
                        <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Still have questions */}
        <section className="py-20 bg-muted">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Still have questions?</h2>
              <p className="text-muted-foreground mb-8">
                Can&rsquo;t find the answer you&rsquo;re looking for? Our team is here to help.
              </p>
              <Button asChild className="bg-gold text-gold-foreground hover:bg-gold/90 rounded-full px-8 h-12 font-semibold">
                <Link href="/contact">Contact us</Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

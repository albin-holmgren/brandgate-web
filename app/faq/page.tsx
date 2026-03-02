import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { HelpCircle, Search, MessageCircle, ChevronDown } from "lucide-react";
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
        a: "Most brands are up and running within 1-2 hours. Import your products, invite your retailers, and you're ready to start taking orders. Our onboarding team is available to help if needed."
      },
      {
        q: "Do I need technical skills to use BrandGate?",
        a: "Not at all. BrandGate is designed for business users, not developers. Our drag-and-drop store builder and intuitive interface mean you can manage everything without writing code."
      },
      {
        q: "Can I try BrandGate before committing?",
        a: "Yes! We offer a 14-day free trial with no credit card required. You get full access to all features during the trial period."
      }
    ]
  },
  {
    category: "Pricing & Plans",
    questions: [
      {
        q: "What's included in the free trial?",
        a: "The free trial includes full access to all features including unlimited products, up to 10 retailers, all integrations, and email support. No credit card required."
      },
      {
        q: "Can I upgrade or downgrade my plan?",
        a: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any payments."
      },
      {
        q: "Are there any setup fees or hidden costs?",
        a: "No setup fees, no hidden costs. You only pay the monthly subscription fee. For Enterprise plans, we offer custom pricing based on your specific needs."
      }
    ]
  },
  {
    category: "Features & Functionality",
    questions: [
      {
        q: "Which integrations do you support?",
        a: "We integrate with Shopify, WooCommerce, Fortnox, Visma, Stripe, Klarna, and many more. We also offer a full REST API for custom integrations."
      },
      {
        q: "Can I set different prices for different retailers?",
        a: "Yes. BrandGate supports tiered pricing, volume discounts, and customer-specific pricing. You can create pricing groups and assign retailers accordingly."
      },
      {
        q: "Is there a mobile app for retailers?",
        a: "BrandGate is fully responsive and works on all devices. Retailers can browse your catalog and place orders from their phone, tablet, or desktop."
      }
    ]
  },
  {
    category: "Support & Security",
    questions: [
      {
        q: "What kind of support do you offer?",
        a: "Email support is included with all plans. Growth plans include priority support with faster response times. Enterprise plans get dedicated account managers and 24/7 phone support."
      },
      {
        q: "Is my data secure with BrandGate?",
        a: "Security is our top priority. We use bank-level encryption, SOC 2 compliant data centers, and regular security audits. Enterprise plans include additional security features like SSO and audit logs."
      },
      {
        q: "Can I export my data if I decide to leave?",
        a: "Yes, your data is yours. You can export all your data including products, orders, and customer information at any time in standard formats (CSV, JSON)."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#003822] text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <FadeIn>
              <div className="w-16 h-16 bg-[#E5A400]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-8 h-8 text-[#E5A400]" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
              <p className="text-white/60 text-lg">Everything you need to know about BrandGate</p>
            </FadeIn>
          </div>
        </section>

        {/* Search Bar */}
        <section className="py-8 bg-gray-50 border-b">
          <div className="max-w-2xl mx-auto px-4">
            <FadeIn>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search questions..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-[#E5A400] focus:ring-2 focus:ring-[#E5A400]/20 outline-none transition-all"
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <StaggerContainer className="space-y-8">
              {faqs.map((category) => (
                <StaggerItem key={category.category}>
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-[#003822] mb-4 flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-[#E5A400]" />
                      {category.category}
                    </h2>
                    <div className="space-y-4">
                      {category.questions.map((item, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                          <h3 className="font-semibold text-[#003822] mb-2 flex items-start gap-2">
                            <ChevronDown className="w-5 h-5 text-[#E5A400] shrink-0 mt-0.5" />
                            {item.q}
                          </h3>
                          <p className="text-gray-600 ml-7">{item.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Still have questions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <FadeIn>
              <h2 className="text-2xl font-bold text-[#003822] mb-4">Still have questions?</h2>
              <p className="text-gray-600 mb-6">Can't find the answer you're looking for? Our team is here to help.</p>
              <Button asChild className="bg-[#E5A400] text-[#003822] hover:bg-[#E5A400]/90 rounded-full px-8">
                <Link href="/contact">Contact Support</Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

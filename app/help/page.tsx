import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle, Mail, MessageCircle, FileQuestion } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center | BrandGate Support",
  description: "Get help with BrandGate. Browse FAQs, contact support, or schedule a training session.",
  alternates: { canonical: "https://brandgate.dev/help" },
};

const helpCategories = [
  {
    icon: FileQuestion,
    title: "Getting Started",
    description: "Set up your account, invite team members, and configure your first distributor.",
    articles: ["Quick Start Guide", "Account Setup", "Adding Products"],
  },
  {
    icon: MessageCircle,
    title: "Using the Platform",
    description: "Learn how to manage orders, invoicing, and your distributor network.",
    articles: ["Processing Orders", "Managing Invoices", "Distributor Portal"],
  },
  {
    icon: HelpCircle,
    title: "Integrations",
    description: "Connect BrandGate with your existing tools like Shopify, Fortnox, and Visma.",
    articles: ["Shopify Integration", "Fortnox Setup", "API Documentation"],
  },
];

export default function HelpPage() {
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
                Help Center
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/50 text-lg mt-6 max-w-2xl mx-auto">
                Find answers, get support, and learn how to make the most of BrandGate.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {helpCategories.map((category) => (
                <StaggerItem key={category.title}>
                  <div className="bg-card border rounded-2xl p-8 h-full hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                      <category.icon className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{category.title}</h3>
                    <p className="text-muted-foreground mb-6">{category.description}</p>
                    <ul className="space-y-2">
                      {category.articles.map((article) => (
                        <li key={article}>
                          <Link href="#" className="text-sm text-primary hover:underline">
                            {article}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <Mail className="w-12 h-12 text-gold mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Can't find what you need?</h2>
              <p className="text-muted-foreground mb-8">Our support team is here to help.</p>
              <Button asChild className="bg-gold text-primary hover:bg-gold/90">
                <Link href="mailto:support@brandgate.dev">Contact Support</Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

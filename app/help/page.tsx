import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { HelpCircle, Mail, MessageCircle, FileQuestion, ArrowRight } from "lucide-react";
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
    title: "Getting started",
    description: "Set up your account, invite team members, and configure your first distributor.",
  },
  {
    icon: MessageCircle,
    title: "Using the platform",
    description: "Learn how to manage orders, invoicing, and your distributor network.",
  },
  {
    icon: HelpCircle,
    title: "Integrations",
    description: "Connect BrandGate with your existing tools like Shopify, Fortnox, and Visma.",
  },
];

export default function HelpPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section aria-label="Help center hero" className="relative bg-primary text-primary-foreground overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative max-w-4xl mx-auto px-6 py-24 md:py-36 text-center">
            <FadeIn>
              <div className="w-16 h-1 bg-gold mx-auto mb-8 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase leading-[1.1]">
                Help Center
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/60 text-lg md:text-xl mt-8 max-w-2xl mx-auto font-light">
                Find answers, get support, and learn how to make the most of BrandGate.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Categories */}
        <section aria-label="Help categories" className="py-24 md:py-32 bg-card border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal className="text-center mb-20">
              <div className="w-12 h-1 bg-gold mx-auto mb-6 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
              <h2 className="text-3xl md:text-5xl font-bold text-foreground uppercase tracking-tight">Where do you need help?</h2>
            </ScrollReveal>
            <StaggerContainer staggerDelay={0.08} className="grid md:grid-cols-3 gap-6">
              {helpCategories.map((category) => (
                <StaggerItem key={category.title}>
                  <article className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full">
                    <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                      <category.icon className="w-7 h-7 text-primary-foreground" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{category.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{category.description}</p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Contact support */}
        <section aria-label="Contact support" className="py-24 md:py-32 bg-primary text-primary-foreground">
          <ScrollReveal className="max-w-3xl mx-auto px-6 text-center">
            <div className="w-12 h-1 bg-gold mx-auto mb-8 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
            <Mail className="w-10 h-10 text-gold mx-auto mb-6" aria-hidden="true" />
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">Can&rsquo;t find what you need?</h2>
            <p className="text-primary-foreground/60 mt-6 text-lg max-w-xl mx-auto font-light">
              Our support team is here to help. Send us a message and we&rsquo;ll get back to you quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 text-base px-10 rounded-full font-semibold h-12">
                <a href="mailto:support@brandgate.dev">Contact Support <ArrowRight className="w-4 h-4 ml-2" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base px-10 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground rounded-full h-12">
                <Link href="/faq">Read the FAQ</Link>
              </Button>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}

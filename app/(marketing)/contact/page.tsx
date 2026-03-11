"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Mail, CheckCircle2, Calendar } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      message: formData.get('message') as string,
    };
    try {
      const res = await fetch(
        `https://nwyosjcvtftkabxboikn.supabase.co/functions/v1/send-contact`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      );
      if (!res.ok) throw new Error('Failed to send');
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email us at albin.holmgren@brandgate.dev");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <header className="relative bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
          <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
            <FadeIn>
              <div className="w-16 h-1 bg-gold mx-auto mb-8 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase leading-[1.1]">
                Get in touch
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/50 text-lg mt-8 max-w-2xl mx-auto font-light">
                Have a question or ready to get started? We'd love to hear from you.
              </p>
            </FadeIn>
          </div>
        </header>

        {/* Contact form + details */}
        <section aria-label="Contact form and details" className="py-24 md:py-32 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-5 gap-16 max-w-6xl mx-auto">
              {/* Form */}
              <FadeIn className="md:col-span-3">
                <div className="w-12 h-1 bg-gold mb-6 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground uppercase tracking-tight mb-4">Send us a message</h2>
                <div className="flex items-center gap-2 mb-8">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-muted-foreground">Typically replies within 4 hours</span>
                </div>
                {submitted ? (
                  <div className="bg-primary rounded-2xl p-12 text-center text-primary-foreground">
                    <CheckCircle2 className="w-12 h-12 text-gold mx-auto mb-4" />
                    <p className="text-2xl font-bold mb-2">Thank you!</p>
                    <p className="text-primary-foreground/60 text-sm">We've received your message and will get back to you within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                        <Input id="name" name="name" placeholder="Your name" required className="h-12 rounded-xl" autoComplete="name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="you@company.com" required className="h-12 rounded-xl" autoComplete="email" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-foreground font-medium">Company</Label>
                      <Input id="company" name="company" placeholder="Your company name" className="h-12 rounded-xl" autoComplete="organization" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                      <Textarea id="message" name="message" placeholder="Tell us about your distribution needs..." rows={6} required className="rounded-xl" />
                    </div>
                    {error && <p className="text-sm text-destructive">{error}</p>}
                    <Button type="submit" size="lg" disabled={loading} className="w-full bg-gold text-gold-foreground hover:bg-gold/90 rounded-full h-12 font-semibold text-base">
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </FadeIn>

              {/* Contact info */}
              <FadeIn delay={0.2} className="md:col-span-2 space-y-8">
                <div>
                  <div className="w-12 h-1 bg-gold mb-6 shadow-[0_0_12px_hsl(45,93%,47%,0.4)]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground uppercase tracking-tight mb-8">Contact details</h2>
                </div>
                <address className="not-italic space-y-6">
                  <StaggerContainer className="space-y-6">
                    {[
                      { icon: Mail, label: "Email", value: "albin.holmgren@brandgate.dev", href: "mailto:albin.holmgren@brandgate.dev" },
                    ].map((item) => (
                      <StaggerItem key={item.label}>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                            <item.icon className="w-5 h-5 text-primary-foreground" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground">{item.label}</p>
                            {'href' in item && item.href ? (
                              <a href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors mt-0.5 block">{item.value}</a>
                            ) : (
                              <p className="text-sm text-muted-foreground mt-0.5">{item.value}</p>
                            )}
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </address>

                <div className="bg-gold/5 border border-gold/20 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-5 h-5 text-gold" />
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">Prefer a call?</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Book a 30-minute demo with our team to see BrandGate in action.</p>
                  <Button asChild variant="outline" className="w-full rounded-full h-10 font-semibold border-gold/30 text-foreground hover:bg-gold/10">
                    <a href="mailto:albin.holmgren97@gmail.com?subject=Book%20a%20Demo%20-%20BrandGate&body=Hi%2C%20I'd%20like%20to%20book%20a%20demo%20of%20BrandGate.">Book a Demo Call</a>
                  </Button>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">Quick answers</h3>
                  <p className="text-sm text-muted-foreground">
                    Check our <Link href="/pricing" className="text-primary hover:underline font-semibold">Pricing FAQ</Link> for answers to common billing and feature questions.
                  </p>
                </div>

                <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-gold">Office hours</h3>
                  <p className="text-sm text-primary-foreground/60">Monday – Friday: 09:00 – 17:00 CET</p>
                  <p className="text-sm text-primary-foreground/60 mt-1">We typically respond within 4 hours during business hours.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

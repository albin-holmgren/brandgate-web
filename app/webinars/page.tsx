import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webinars | BrandGate Training",
  description: "Live training sessions and recorded workshops on B2B distribution best practices.",
  alternates: { canonical: "https://brandgate.dev/webinars" },
};

export default function WebinarsPage() {
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
                Webinars
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/50 text-lg mt-6 max-w-2xl mx-auto">
                Live training sessions and recorded workshops to help you master B2B distribution.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Empty state */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <FadeIn>
              <Video className="w-12 h-12 text-gold mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Webinars coming soon
              </h2>
              <p className="text-muted-foreground mb-8">
                We&rsquo;re planning live training sessions on B2B distribution, retailer
                onboarding, and wholesale growth. In the meantime, we&rsquo;re happy to walk
                you through the platform one-on-one.
              </p>
              <Button asChild className="bg-gold text-primary hover:bg-gold/90">
                <Link href="/contact">Book a live walkthrough</Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

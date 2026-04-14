import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides & E-books | BrandGate Resources",
  description: "In-depth guides and e-books on B2B distribution, wholesale growth, and scaling your brand.",
  alternates: { canonical: "https://brandgate.dev/guides" },
};

export default function GuidesPage() {
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
                Guides & E-books
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/50 text-lg mt-6 max-w-2xl mx-auto">
                Free resources to help you master B2B distribution and grow your wholesale business.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Empty state */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <FadeIn>
              <BookOpen className="w-12 h-12 text-gold mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Our first guides are on the way
              </h2>
              <p className="text-muted-foreground mb-8">
                We&rsquo;re putting together in-depth playbooks on building a wholesale channel,
                pricing strategy, and scaling from B2C to B2B. Let us know you&rsquo;re interested
                and we&rsquo;ll send the first guide the moment it&rsquo;s ready.
              </p>
              <Button asChild className="bg-gold text-primary hover:bg-gold/90">
                <Link href="/contact">Get the first guide</Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

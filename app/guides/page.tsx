import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Download, FileText, Video } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides & E-books | BrandGate Resources",
  description: "Download free guides and e-books on B2B distribution, wholesale growth, and scaling your brand.",
  alternates: { canonical: "https://brandgate.dev/guides" },
};

const guides = [
  {
    icon: BookOpen,
    title: "The B2B Distribution Playbook",
    description: "A complete guide to building and managing your wholesale distribution network.",
    pages: "45 pages",
    cta: "Download Free",
  },
  {
    icon: FileText,
    title: "Wholesale Pricing Strategy",
    description: "How to set wholesale prices that maximize margins while keeping retailers happy.",
    pages: "28 pages",
    cta: "Download Free",
  },
  {
    icon: Download,
    title: "Scaling from B2C to B2B",
    description: "The essential roadmap for brands adding wholesale to their direct-to-consumer business.",
    pages: "52 pages",
    cta: "Download Free",
  },
];

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

        {/* Guides Grid */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide) => (
                <StaggerItem key={guide.title}>
                  <div className="bg-card border rounded-2xl p-8 h-full hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                      <guide.icon className="w-8 h-8 text-gold" />
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">{guide.pages}</div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{guide.title}</h3>
                    <p className="text-muted-foreground mb-6">{guide.description}</p>
                    <Button variant="outline" className="w-full">
                      {guide.cta}
                    </Button>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold text-foreground mb-4">Want more resources?</h2>
              <p className="text-muted-foreground mb-8">Check out our blog for the latest insights.</p>
              <Button asChild className="bg-gold text-primary hover:bg-gold/90">
                <Link href="/blog">Visit Blog</Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

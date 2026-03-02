import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Truck, Package, Box } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Home & Design Solutions - BrandGate",
  description: "B2B wholesale solutions for home goods and design brands. Manage furniture, decor, and furnishings distribution.",
};

export default function HomeDesignPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
          <div className="relative max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
            <FadeIn>
              <div className="inline-block bg-gold text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Home & Design
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
                Built for Home Brands
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/50 text-lg mt-6 max-w-2xl mx-auto font-light">
                B2B wholesale platform for furniture, decor, and home goods brands. Manage complex products and shipping.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Button asChild size="lg" className="mt-8 bg-gold text-primary hover:bg-gold/90">
                <Link href="/contact">Start Free Trial</Link>
              </Button>
            </FadeIn>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-foreground">Features for Home Brands</h2>
                <p className="text-muted-foreground mt-4">Everything you need to manage home goods wholesale</p>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Home, title: "Room Collections", desc: "Organize products by room and style. Create curated collections for retailers." },
                { icon: Package, title: "Variant Management", desc: "Manage colors, sizes, and materials. Track inventory across all variants." },
                { icon: Box, title: "Assembly Tracking", desc: "Track assembly requirements and instructions for each product." },
                { icon: Truck, title: "Freight Management", desc: "Handle large item shipping and freight logistics seamlessly." },
              ].map((feature) => (
                <div key={feature.title} className="bg-card border rounded-xl p-8">
                  <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to scale your home brand?</h2>
              <p className="text-muted-foreground mb-8">Join home and design brands using BrandGate.</p>
              <Button asChild size="lg" className="bg-gold text-primary hover:bg-gold/90">
                <Link href="/contact">Book a Demo</Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

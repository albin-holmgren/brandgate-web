import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shirt, Home, Apple, Sparkles, Laptop, Building2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Solutions - BrandGate | Industry-Specific B2B Wholesale",
  description: "B2B wholesale solutions tailored for your industry. Fashion, food, home goods, and more.",
};

const industries = [
  {
    icon: Shirt,
    title: "Fashion & Apparel",
    description: "Size variants, seasonal collections, and lookbook management for fashion brands.",
    href: "/solutions/fashion",
  },
  {
    icon: Apple,
    title: "Food & Beverage",
    description: "Expiry tracking, batch management, and compliance for food brands.",
    href: "/solutions/food-beverage",
  },
  {
    icon: Home,
    title: "Home & Design",
    description: "Product variants and shipping management for home goods brands.",
    href: "/solutions/home-design",
  },
  {
    icon: Sparkles,
    title: "Health & Beauty",
    description: "Regulatory compliance and batch tracking for cosmetics brands.",
    href: "/solutions/health-beauty",
  },
  {
    icon: Laptop,
    title: "Electronics",
    description: "Warranty tracking and technical specifications for electronics.",
    href: "/solutions/electronics",
  },
  {
    icon: Building2,
    title: "B2B Services",
    description: "Service catalog and contract management for service businesses.",
    href: "/solutions",
  },
];

export default function SolutionsPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
                Industry Solutions
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-primary-foreground/50 text-lg mt-6 max-w-2xl mx-auto font-light">
                B2B wholesale solutions tailored for your industry. From fashion to food, we have you covered.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-foreground">Solutions by Industry</h2>
                <p className="text-muted-foreground mt-4">Choose your industry to see how BrandGate can help</p>
              </div>
            </FadeIn>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry) => (
                <StaggerItem key={industry.title}>
                  <Link href={industry.href} className="block group">
                    <div className="bg-card border rounded-xl p-8 h-full hover:shadow-lg transition-shadow">
                      <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                        <industry.icon className="w-8 h-8 text-gold" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{industry.title}</h3>
                      <p className="text-muted-foreground">{industry.description}</p>
                      <div className="mt-6 flex items-center gap-2 text-gold font-medium">
                        Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold text-foreground mb-4">Don't see your industry?</h2>
              <p className="text-muted-foreground mb-8">BrandGate works for any B2B business. Contact us to learn more.</p>
              <Button asChild size="lg" className="bg-gold text-primary hover:bg-gold/90">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Shield, Users, Globe, CheckCircle2, Lock, Sparkles, Headphones } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise B2B Wholesale Solutions | BrandGate",
  description: "White-label B2B wholesale platform for enterprise brands. Custom integrations, dedicated support, and enterprise-grade security.",
  keywords: ["enterprise wholesale", "white label B2B", "custom integrations", "enterprise distribution platform"],
  alternates: { canonical: "https://brandgate.dev/solutions/enterprise" },
  openGraph: {
    title: "Enterprise B2B Wholesale Solutions | BrandGate",
    description: "Enterprise-grade wholesale platform with white-label and custom solutions.",
    url: "https://brandgate.dev/solutions/enterprise",
  },
};

const enterpriseFeatures = [
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "SOC 2 compliant, SSO, role-based access control, and audit logs. Your data is protected at every level.",
  },
  {
    icon: Building2,
    title: "White-Label Platform",
    description: "Fully branded experience for your retailers. Your logo, your colors, your domain—no BrandGate branding.",
  },
  {
    icon: Globe,
    title: "Global Deployment",
    description: "Multi-region hosting, GDPR compliance, and support for 50+ currencies and languages.",
  },
  {
    icon: Shield,
    title: "Custom Integrations",
    description: "Connect with your existing ERP, CRM, and WMS systems. Our team builds custom integrations for you.",
  },
];

const benefits = [
  "Dedicated account manager and success team",
  "99.99% uptime SLA with 24/7 monitoring",
  "Custom feature development available",
  "On-premise deployment option",
  "Advanced security and compliance controls",
  "Custom contracts and billing terms",
];

export default function EnterprisePage() {
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
          <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
            <FadeIn>
              <div className="inline-block bg-gold text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                For Enterprise
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase leading-[1.1]">
                Enterprise-Grade
                <br />Wholesale Power
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/50 text-lg md:text-xl mt-8 max-w-2xl mx-auto font-light">
                White-label B2B platform with custom integrations, dedicated support, and the security large brands demand.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <Button asChild size="lg" className="bg-gold text-primary hover:bg-gold/90 rounded-full px-8">
                  <Link href="/contact">Contact Sales</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8">
                  <Link href="/pricing">Enterprise Pricing</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <div className="w-16 h-1 bg-gold mx-auto mb-8" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Built for Enterprise</h2>
                <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
                  Security, scale, and support that meets enterprise standards
                </p>
              </div>
            </FadeIn>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {enterpriseFeatures.map((feature) => (
                <StaggerItem key={feature.title}>
                  <div className="bg-card border rounded-2xl p-8 h-full hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                      <feature.icon className="w-7 h-7 text-gold" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Benefits + Contact */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <FadeIn>
                  <div className="w-16 h-1 bg-gold mb-8" />
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    The enterprise advantage
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    Large brands need more than software—they need a partner. Our enterprise team works with you to ensure success at every stage.
                  </p>
                </FadeIn>
                <StaggerContainer className="space-y-4">
                  {benefits.map((benefit) => (
                    <StaggerItem key={benefit}>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
              <FadeIn>
                <div className="bg-card border rounded-2xl p-8">
                  <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                    <Headphones className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Talk to Our Team</h3>
                  <p className="text-muted-foreground mb-6">
                    Schedule a consultation with our enterprise team to discuss your specific requirements and get a custom quote.
                  </p>
                  <ul className="space-y-2 mb-8 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gold" />
                      Custom demo tailored to your needs
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gold" />
                      Security review and compliance discussion
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gold" />
                      Integration planning session
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-gold text-primary hover:bg-gold/90">
                    <Link href="/contact">Schedule Consultation</Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6">
            <StaggerContainer className="grid md:grid-cols-3 gap-8 text-center">
              <StaggerItem>
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">99.99%</div>
                <p className="text-primary-foreground/60">Uptime SLA</p>
              </StaggerItem>
              <StaggerItem>
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">24/7</div>
                <p className="text-primary-foreground/60">Enterprise support</p>
              </StaggerItem>
              <StaggerItem>
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">SOC 2</div>
                <p className="text-primary-foreground/60">Compliant</p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <Building2 className="w-12 h-12 text-gold mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready for an enterprise solution?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how BrandGate can power your enterprise wholesale operations.
              </p>
              <Button asChild size="lg" className="bg-gold text-primary hover:bg-gold/90 rounded-full px-10 font-semibold">
                <Link href="/contact">Contact Enterprise Sales</Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

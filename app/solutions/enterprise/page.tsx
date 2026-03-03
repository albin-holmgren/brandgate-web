import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Lock, Building2, Globe, Shield, CheckCircle2, Headphones } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise B2B Wholesale | BrandGate",
  description: "White-label B2B platform for enterprise brands. Custom integrations and dedicated support.",
  alternates: { canonical: "https://brandgate.dev/solutions/enterprise" },
};

// Enterprise Dashboard Preview
function EnterpriseDashboard() {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-[#003822] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-[#003822] font-bold text-xs">E</div>
          <span className="text-white font-semibold text-sm">Enterprise Portal</span>
        </div>
        <span className="bg-[#E5A400] text-[#003822] text-xs px-2 py-1 rounded font-medium">99.99% Uptime</span>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-[#003822] text-white p-3 rounded-lg text-center">
            <p className="text-2xl font-bold">500+</p>
            <p className="text-xs text-white/70">Retailers</p>
          </div>
          <div className="bg-[#E5A400] text-[#003822] p-3 rounded-lg text-center">
            <p className="text-2xl font-bold">€2M+</p>
            <p className="text-xs text-[#003822]/70">Monthly Volume</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Shield className="w-4 h-4 text-[#003822]" />
            SOC 2 Compliant
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Lock className="w-4 h-4 text-[#003822]" />
            SSO Enabled
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Globe className="w-4 h-4 text-[#003822]" />
            Multi-Region
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "SOC 2 compliant, SSO, role-based access control, and audit logs.",
    color: "bg-[#003822]/10 text-[#003822]",
  },
  {
    icon: Building2,
    title: "White-Label",
    description: "Fully branded experience. Your logo, your colors, your domain.",
    color: "bg-[#E5A400]/10 text-[#003822]",
  },
  {
    icon: Globe,
    title: "Global Deployment",
    description: "Multi-region hosting, GDPR compliance, 50+ currencies.",
    color: "bg-[#003822]/10 text-[#003822]",
  },
  {
    icon: Shield,
    title: "Custom Integrations",
    description: "Connect with your ERP, CRM, and WMS systems.",
    color: "bg-[#E5A400]/10 text-[#003822]",
  },
];

const benefits = [
  "Dedicated account manager",
  "99.99% uptime SLA",
  "Custom feature development",
  "On-premise deployment option",
  "Advanced security controls",
  "Custom contracts",
];

export default function EnterprisePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="relative bg-[#003822] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center py-16 md:py-24 lg:py-32">
              <div className="text-center lg:text-left">
                <FadeIn>
                  <div className="inline-flex items-center gap-2 bg-[#E5A400]/20 text-[#E5A400] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    <Building2 className="w-4 h-4" />
                    Enterprise
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.1}>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                    Enterprise-Grade
                    <span className="block text-[#E5A400]">Wholesale Power</span>
                  </h1>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                  <p className="text-white/60 text-base sm:text-lg mt-6 max-w-xl">
                    White-label B2B platform with custom integrations, dedicated support, and enterprise security.
                  </p>
                </FadeIn>
                
                <FadeIn delay={0.3}>
                  <Button asChild size="lg" className="bg-[#E5A400] text-[#003822] hover:bg-[#E5A400]/90 rounded-full px-8 mt-8">
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                </FadeIn>
              </div>
              
              <FadeIn delay={0.2}>
                <EnterpriseDashboard />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#003822]">Built for Enterprise</h2>
              </div>
            </FadeIn>
            
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <StaggerItem key={feature.title}>
                  <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                    <div className={`w-12 h-14 ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-[#003822] mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Benefits + Contact */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <FadeIn>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#003822] mb-6">The Enterprise Advantage</h2>
                </FadeIn>
                
                <StaggerContainer className="space-y-4">
                  {benefits.map((benefit) => (
                    <StaggerItem key={benefit}>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#E5A400] mt-0.5 shrink-0" />
                        <span className="text-[#003822]">{benefit}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
              
              <FadeIn>
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#003822]/10">
                  <div className="w-14 h-14 bg-[#E5A400]/10 rounded-xl flex items-center justify-center mb-6">
                    <Headphones className="w-7 h-7 text-[#003822]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#003822] mb-4">Talk to Our Team</h3>
                  <p className="text-gray-600 mb-6">Schedule a consultation to discuss your requirements.</p>
                  <Button asChild className="w-full bg-[#003822] text-white hover:bg-[#003822]/90">
                    <Link href="/contact">Schedule Consultation</Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-[#003822] text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#E5A400]">99.99%</div>
                <p className="text-white/60 text-sm">Uptime SLA</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#E5A400]">24/7</div>
                <p className="text-white/60 text-sm">Support</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#E5A400]">SOC 2</div>
                <p className="text-white/60 text-sm">Compliant</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

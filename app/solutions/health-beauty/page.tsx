import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Sparkles, Shield, Tag, Leaf, Beaker, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health & Beauty B2B Wholesale | BrandGate",
  description: "B2B wholesale platform for cosmetics and wellness brands. Regulatory compliance, batch tracking, and ingredient management.",
  alternates: { canonical: "https://brandgate.dev/solutions/health-beauty" },
  openGraph: {
    title: "Health & Beauty B2B Wholesale | BrandGate",
    description: "Compliance-ready platform for beauty brands.",
    url: "https://brandgate.dev/solutions/health-beauty",
  },
};

// Batch Tracking Preview
function BatchTrackingPreview() {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-[#003822] px-4 py-3">
        <span className="text-white font-semibold text-sm">Batch Tracking</span>
      </div>
      <div className="p-4">
        <div className="space-y-3">
          {[
            { batch: "BT-2026-001", product: "Face Cream 50ml", expiry: "2027-03-15", status: "Active" },
            { batch: "BT-2026-002", product: "Serum 30ml", expiry: "2027-06-20", status: "Active" },
            { batch: "BT-2026-003", product: "Moisturizer", expiry: "2027-01-10", status: "Expiring" },
          ].map((item) => (
            <div key={item.batch} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg text-sm">
              <div>
                <p className="font-medium text-[#003822]">{item.product}</p>
                <p className="text-gray-500 text-xs">{item.batch}</p>
              </div>
              <div className="text-right">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  item.status === "Active" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                }`}>{item.status}</span>
                <p className="text-xs text-gray-500 mt-1">{item.expiry}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Certification Badges Preview
function CertificationPreview() {
  return (
    <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-200">
      <p className="text-sm font-semibold text-[#003822] mb-4">Product Certifications</p>
      <div className="flex flex-wrap gap-2">
        {[
          { label: "Organic", color: "bg-green-100 text-green-700" },
          { label: "Cruelty-Free", color: "bg-pink-100 text-pink-700" },
          { label: "Vegan", color: "bg-[#E5A400]/20 text-[#003822]" },
          { label: "Natural", color: "bg-[#003822]/10 text-[#003822]" },
        ].map((cert) => (
          <span key={cert.label} className={`px-3 py-1.5 rounded-full text-xs font-medium ${cert.color}`}>
            {cert.label}
          </span>
        ))}
      </div>
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-600 mb-1">Ingredients</p>
        <p className="text-xs text-gray-500">Aqua, Glycerin, Hyaluronic Acid, Vitamin E...</p>
      </div>
    </div>
  );
}

const features = [
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Track ingredients, certifications, and compliance documentation. Stay audit-ready.",
    color: "bg-[#003822]/10 text-[#003822]",
  },
  {
    icon: Tag,
    title: "Batch Tracking",
    description: "Full traceability from production to retailer. Instantly identify affected products.",
    color: "bg-[#E5A400]/10 text-[#003822]",
  },
  {
    icon: Beaker,
    title: "Ingredient Lists",
    description: "Share detailed ingredient information and allergen warnings with retailers.",
    color: "bg-[#003822]/10 text-[#003822]",
  },
  {
    icon: Sparkles,
    title: "Product Variants",
    description: "Manage shades, sizes, scents, and product lines. Track inventory for every variant.",
    color: "bg-[#E5A400]/10 text-[#003822]",
  },
  {
    icon: Leaf,
    title: "Certification Badges",
    description: "Showcase organic, vegan, cruelty-free, and other certifications prominently.",
    color: "bg-[#003822]/10 text-[#003822]",
  },
  {
    icon: Shield,
    title: "Quality Control",
    description: "Document quality checks, COAs, and testing results for every batch.",
    color: "bg-[#E5A400]/10 text-[#003822]",
  },
];

const complianceFeatures = [
  "EU Cosmetics Regulation compliance",
  "FDA cosmetic labeling requirements",
  "Complete batch and lot traceability",
  "Ingredient transparency documentation",
  "Safety data sheet management",
  "Expiration date tracking",
];

export default function HealthBeautyPage() {
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
                    <Sparkles className="w-4 h-4" />
                    Health & Beauty
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.1}>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase leading-[1.1]">
                    For Beauty
                    <span className="block text-[#E5A400]">Brands</span>
                  </h1>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                  <p className="text-white/60 text-base sm:text-lg mt-6 max-w-xl">
                    Compliance-ready B2B platform for cosmetics and wellness brands. Manage batch tracking and regulatory requirements.
                  </p>
                </FadeIn>
                
                <FadeIn delay={0.3}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
                    <Button asChild size="lg" className="bg-[#E5A400] text-[#003822] hover:bg-[#E5A400]/90 rounded-full px-8">
                      <Link href="/contact">Start Free Trial</Link>
                    </Button>
                  </div>
                </FadeIn>
              </div>
              
              <FadeIn delay={0.2}>
                <BatchTrackingPreview />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12 md:mb-16">
                <span className="text-[#E5A400] font-semibold text-sm uppercase tracking-wider">Features</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003822] mt-4">Beauty Industry Features</h2>
              </div>
            </FadeIn>
            
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature) => (
                <StaggerItem key={feature.title}>
                  <div className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 h-full hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                      <feature.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-[#003822] mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <FadeIn>
                  <span className="text-[#E5A400] font-semibold text-sm uppercase tracking-wider">Compliance</span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003822] mt-4 mb-6">
                    Compliance made simple
                  </h2>
                </FadeIn>
                
                <StaggerContainer className="space-y-4">
                  {complianceFeatures.map((feature) => (
                    <StaggerItem key={feature}>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#E5A400] mt-0.5 shrink-0" />
                        <span className="text-[#003822]">{feature}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
              
              <FadeIn>
                <CertificationPreview />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-[#003822] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Scale your beauty brand with confidence
              </h2>
              <Button asChild size="lg" className="bg-[#E5A400] text-[#003822] hover:bg-[#E5A400]/90 rounded-full px-10 font-semibold">
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

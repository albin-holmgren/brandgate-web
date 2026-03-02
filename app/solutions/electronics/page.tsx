import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Laptop, Shield, FileText, Zap, Box, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electronics B2B Wholesale | BrandGate",
  description: "B2B wholesale platform for electronics and tech brands. Warranty tracking, serial numbers, and technical specs.",
  alternates: { canonical: "https://brandgate.dev/solutions/electronics" },
  openGraph: {
    title: "Electronics B2B Wholesale | BrandGate",
    description: "Wholesale platform for electronics brands.",
    url: "https://brandgate.dev/solutions/electronics",
  },
};

// Warranty Tracking Preview
function WarrantyTrackingPreview() {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-[#003822] px-4 py-3">
        <span className="text-white font-semibold text-sm">Warranty & Serial Tracking</span>
      </div>
      <div className="p-4">
        <div className="space-y-3">
          {[
            { serial: "SN-7829-1029", product: "Wireless Headphones", warranty: "24 months", status: "Active" },
            { serial: "SN-7829-1030", product: "Smart Watch Pro", warranty: "12 months", status: "Active" },
            { serial: "SN-7829-1031", product: "Bluetooth Speaker", warranty: "12 months", status: "Expiring" },
          ].map((item) => (
            <div key={item.serial} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg text-sm">
              <div>
                <p className="font-medium text-[#003822]">{item.product}</p>
                <p className="text-gray-500 text-xs font-mono">{item.serial}</p>
              </div>
              <div className="text-right">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  item.status === "Active" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                }`}>{item.status}</span>
                <p className="text-xs text-gray-500 mt-1">{item.warranty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Product Specs Preview
function ProductSpecsPreview() {
  return (
    <div className="bg-white rounded-xl shadow-xl p-5 border border-gray-200">
      <p className="text-sm font-semibold text-[#003822] mb-4">Technical Specifications</p>
      <div className="space-y-3">
        {[
          { label: "Model", value: "PRO-X200" },
          { label: "Connectivity", value: "Bluetooth 5.2, WiFi 6" },
          { label: "Battery", value: "5000mAh, 24hr life" },
          { label: "Warranty", value: "2 Years" },
        ].map((spec) => (
          <div key={spec.label} className="flex justify-between text-sm border-b border-gray-100 pb-2 last:border-0">
            <span className="text-gray-500">{spec.label}</span>
            <span className="font-medium text-[#003822]">{spec.value}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 bg-[#E5A400]/10 rounded-lg">
        <p className="text-xs text-[#003822] font-medium">Datasheet PDF</p>
        <p className="text-xs text-gray-500">Download technical documentation</p>
      </div>
    </div>
  );
}

const features = [
  {
    icon: Shield,
    title: "Warranty Tracking",
    description: "Track warranty periods, serial numbers, and manage claims from purchase to expiration.",
    color: "bg-[#003822]/10 text-[#003822]",
  },
  {
    icon: FileText,
    title: "Technical Specifications",
    description: "Share detailed specs, datasheets, and compatibility information with retailers.",
    color: "bg-[#E5A400]/10 text-[#003822]",
  },
  {
    icon: Zap,
    title: "Model Variants",
    description: "Manage different models, colors, storage capacities, and configurations.",
    color: "bg-[#003822]/10 text-[#003822]",
  },
  {
    icon: Box,
    title: "Accessory Bundles",
    description: "Create and manage product bundles, kits, and promotional packages.",
    color: "bg-[#E5A400]/10 text-[#003822]",
  },
  {
    icon: Laptop,
    title: "Repair Management",
    description: "Track RMAs, repairs, and replacements. Keep customers informed.",
    color: "bg-[#003822]/10 text-[#003822]",
  },
  {
    icon: Zap,
    title: "Firmware Updates",
    description: "Distribute firmware and software updates to your retail network.",
    color: "bg-[#E5A400]/10 text-[#003822]",
  },
];

const benefits = [
  "Serial number tracking for every unit sold",
  "Automated warranty validation",
  "Technical documentation repository",
  "Compatibility matrices",
  "Bulk import for large catalogs",
  "Logistics integration",
];

export default function ElectronicsPage() {
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
                    <Laptop className="w-4 h-4" />
                    Electronics
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.1}>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase leading-[1.1]">
                    For Tech
                    <span className="block text-[#E5A400]">Brands</span>
                  </h1>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                  <p className="text-white/60 text-base sm:text-lg mt-6 max-w-xl">
                    B2B wholesale platform for electronics brands. Warranty tracking, serial numbers, and technical specs management.
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
                <WarrantyTrackingPreview />
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003822] mt-4">Electronics Features</h2>
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

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeIn>
                <ProductSpecsPreview />
              </FadeIn>
              
              <div>
                <FadeIn>
                  <span className="text-[#E5A400] font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003822] mt-4 mb-6">
                    Why tech brands choose us
                  </h2>
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
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-[#003822] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Ready to scale your tech brand?
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

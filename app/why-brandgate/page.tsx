import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { CheckCircle2, X, ArrowRight, Zap, Shield, Users, BarChart3 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why BrandGate? | Compare B2B Wholesale Platforms",
  description: "See how BrandGate compares to spreadsheets, generic e-commerce, and enterprise ERPs. Purpose-built for B2B wholesale.",
  alternates: { canonical: "https://brandgate.dev/why-brandgate" },
};

const comparisons = [
  {
    icon: Zap,
    title: "vs. Spreadsheets",
    brandgate: [
      "Real-time inventory updates",
      "Automatic order processing",
      "Self-service retailer portal",
      "Built-in invoicing",
      "Analytics & reporting",
    ],
    competitor: [
      "Manual data entry errors",
      "Email order chaos",
      "Constant back-and-forth",
      "Separate invoicing tools",
      "No insights",
    ],
    winner: "brandgate",
  },
  {
    icon: Shield,
    title: "vs. Generic E-commerce",
    brandgate: [
      "B2B-specific pricing tiers",
      "Distributor-specific catalogs",
      "Net payment terms support",
      "Volume discount automation",
      "Purchase order workflows",
    ],
    competitor: [
      "B2C-focused features",
      "Same prices for everyone",
      "Credit card only",
      "No wholesale discounts",
      "Retail checkout flow",
    ],
    winner: "brandgate",
  },
  {
    icon: Users,
    title: "vs. Enterprise ERP",
    brandgate: [
      "Set up in hours, not months",
      "Affordable for SMBs",
      "Modern, intuitive interface",
      "No consultants needed",
      "Scales with your growth",
    ],
    competitor: [
      "6+ month implementation",
      "Enterprise pricing ($50k+)",
      "Dated, complex UI",
      "Requires IT team",
      "Overkill for most brands",
    ],
    winner: "brandgate",
  },
];

const features = [
  { name: "B2B-specific pricing", spreadsheets: false, ecommerce: "partial", erp: true, brandgate: true },
  { name: "Self-service portal", spreadsheets: false, ecommerce: false, erp: "partial", brandgate: true },
  { name: "Real-time inventory", spreadsheets: false, ecommerce: true, erp: true, brandgate: true },
  { name: "Quick setup (< 1 day)", spreadsheets: true, ecommerce: true, erp: false, brandgate: true },
  { name: "Affordable pricing", spreadsheets: true, ecommerce: true, erp: false, brandgate: true },
  { name: "Modern UI", spreadsheets: false, ecommerce: true, erp: false, brandgate: true },
  { name: "Industry features", spreadsheets: false, ecommerce: false, erp: "partial", brandgate: true },
  { name: "No IT required", spreadsheets: true, ecommerce: true, erp: false, brandgate: true },
];

function Check({ value }: { value: boolean | string }) {
  if (value === true) return <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />;
  if (value === "partial") return <span className="text-yellow-500 text-sm">Partial</span>;
  return <X className="w-5 h-5 text-red-400 mx-auto" />;
}

export default function WhyBrandGatePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-[#003822] text-white py-20 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Purpose-Built for
                <span className="text-[#E5A400] block">B2B Wholesale</span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                See why brands choose BrandGate over spreadsheets, generic e-commerce, 
                and complex ERP systems.
              </p>
              <Button className="bg-[#E5A400] text-[#003822] hover:bg-[#E5A400]/90 rounded-full px-8">
                <Link href="/pricing">See Pricing</Link>
              </Button>
            </FadeIn>
          </div>
        </section>

        {/* Comparison Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-[#003822]">How We Compare</h2>
              </div>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {comparisons.map((comp) => (
                <StaggerItem key={comp.title}>
                  <div className="bg-gray-50 rounded-2xl p-8 h-full border border-gray-100">
                    <div className="w-14 h-14 bg-[#003822]/10 rounded-xl flex items-center justify-center mb-6">
                      <comp.icon className="w-7 h-7 text-[#003822]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#003822] mb-6">{comp.title}</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-semibold text-[#E5A400] uppercase">BrandGate</span>
                        <ul className="mt-2 space-y-2">
                          {comp.brandgate.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                              <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-200">
                        <span className="text-xs font-semibold text-gray-400 uppercase">The Alternative</span>
                        <ul className="mt-2 space-y-2">
                          {comp.competitor.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                              <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#003822]">Feature Comparison</h2>
              </div>
            </FadeIn>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-[#003822] text-white">
                  <tr>
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="p-4 text-center text-sm">Spreadsheets</th>
                    <th className="p-4 text-center text-sm">Generic E-commerce</th>
                    <th className="p-4 text-center text-sm">Enterprise ERP</th>
                    <th className="p-4 text-center text-sm bg-[#E5A400] text-[#003822]">BrandGate</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, i) => (
                    <tr key={feature.name} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-4 text-sm font-medium text-gray-900">{feature.name}</td>
                      <td className="p-4"><Check value={feature.spreadsheets} /></td>
                      <td className="p-4"><Check value={feature.ecommerce} /></td>
                      <td className="p-4"><Check value={feature.erp} /></td>
                      <td className="p-4 bg-[#E5A400]/5"><Check value={feature.brandgate} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#003822] text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <BarChart3 className="w-12 h-12 text-[#E5A400] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to switch?</h2>
            <p className="text-white/60 mb-8">See why brands are moving off generic e-commerce platforms to purpose-built B2B wholesale.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#E5A400] text-[#003822] hover:bg-[#E5A400]/90 rounded-full px-8">
                <Link href="/contact">Start Free Trial</Link>
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8">
                <Link href="/pricing">Compare Plans</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

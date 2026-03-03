import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, Shield, Beaker, Leaf, Tag, CheckCircle2,
  AlertCircle, FileText, QrCode, ArrowRight
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health & Beauty Wholesale | BrandGate",
  description: "Compliance-ready B2B platform for cosmetics brands. Batch tracking, regulatory compliance, and certification management.",
  alternates: { canonical: "https://brandgate.dev/solutions/health-beauty" },
};

// INGREDIENT TRANSPARENCY - Unique to Beauty
function IngredientTransparencyVisual() {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-[#003822] px-4 py-3 flex items-center justify-between">
        <span className="text-white font-semibold text-sm flex items-center gap-2">
          <Beaker className="w-4 h-4" />
          Full Ingredient Disclosure
        </span>
        <span className="bg-white/20 text-white text-xs px-2 py-1 rounded">EU Compliant</span>
      </div>
      <div className="p-4">
        <p className="text-sm font-medium text-gray-900 mb-3">Radiance Serum - 30ml</p>
        
        {/* INCI List */}
        <div className="bg-gray-50 rounded-lg p-3 mb-4">
          <p className="text-xs text-gray-500 mb-2">INCI Ingredients (EU Standard)</p>
          <p className="text-xs text-gray-700 leading-relaxed">
            Aqua, Glycerin, Niacinamide, Hyaluronic Acid, Tocopherol, 
            Retinol, Phenoxyethanol, Ethylhexylglycerin
          </p>
        </div>

        {/* Key Claims */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-gray-50 border border-green-200 rounded-lg p-2 text-center">
            <Leaf className="w-4 h-4 text-gray-600 mx-auto mb-1" />
            <p className="text-xs font-medium text-gray-700">Vegan</p>
          </div>
          <div className="bg-gray-50 border border-pink-200 rounded-lg p-2 text-center">
            <Sparkles className="w-4 h-4 text-[#003822] mx-auto mb-1" />
            <p className="text-xs font-medium text-[#003822]">Cruelty-Free</p>
          </div>
        </div>

        {/* Allergen Warning */}
        <div className="bg-gray-50 border-l-4 border-yellow-400 p-3 rounded">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-[#E5A400] shrink-0 mt-0.5" />
            <p className="text-xs text-[#003822]">
              <span className="font-semibold">Contains:</span> Retinol. Not recommended during pregnancy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// BATCH & COA TRACKING - Unique to Beauty
function BatchTrackingVisual() {
  return (
    <div className="bg-white rounded-xl shadow-xl p-4 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-gray-900 flex items-center gap-2">
          <QrCode className="w-4 h-4 text-[#003822]" />
          Batch QR Tracking
        </span>
        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">Active</span>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
          <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
            <QrCode className="w-6 h-6 text-[#003822]" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Batch: BT-2026-0892</p>
            <p className="text-xs text-gray-500">Mfg: Jan 10, 2026</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-semibold text-gray-600">COA ✓</p>
            <p className="text-xs text-gray-500">Expires 2028</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs font-medium text-[#003822] mb-2">Quality Documents</p>
          <div className="flex gap-2">
            <span className="text-xs bg-white px-2 py-1 rounded border">COA.pdf</span>
            <span className="text-xs bg-white px-2 py-1 rounded border">MSDS.pdf</span>
            <span className="text-xs bg-white px-2 py-1 rounded border">Micro.pdf</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HealthBeautyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO - Compliance Focus */}
        <section className="bg-[#003822] text-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <FadeIn>
                  <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
                    <Shield className="w-4 h-4" />
                    Regulatory Compliant
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">
                    Beauty
                    <span className="text-gray-200 block">Without Risk</span>
                  </h1>
                  <p className="text-white/80 text-lg mt-6 max-w-lg">
                    The only B2B platform with full EU Cosmetics Regulation compliance. 
                    Track every batch, ingredient, and certification automatically.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-8">
                    <Button className="bg-white text-[#003822] hover:bg-gray-100 rounded-full px-8 font-semibold">
                      <Link href="/contact">Start Free Trial</Link>
                    </Button>
                  </div>
                </FadeIn>
              </div>
              <FadeIn delay={0.2}>
                <IngredientTransparencyVisual />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* COMPLIANCE BADGES */}
        <section className="py-6 bg-gray-50 border-y border-pink-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {['EU Cosmetics Regulation', 'FDA Compliant', 'GMP Certified', 'ISO 22716'].map((badge) => (
                <span key={badge} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-[#003822]">
                  <CheckCircle2 className="w-4 h-4" /> {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ASYMMETRIC GRID LAYOUT */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-[#003822] font-semibold text-sm uppercase">Compliance Features</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                  Built for Regulatory Complexity
                </h2>
              </div>
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Large Feature Card */}
              <div className="lg:col-span-2 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100">
                <div className="w-14 h-14 bg-gray-500 rounded-xl flex items-center justify-center mb-6">
                  <Beaker className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Complete Ingredient Transparency</h3>
                <p className="text-gray-600 mb-6">
                  Automatic INCI list generation, allergen flagging, and full ingredient 
                  disclosure for every product. Share complete product information with retailers instantly.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-lg text-center">
                    <p className="text-lg font-bold text-[#003822]">INCI</p>
                    <p className="text-xs text-gray-500">Standard Format</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center">
                    <p className="text-lg font-bold text-[#003822]"> allergens</p>
                    <p className="text-xs text-gray-500">Auto-Detected</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center">
                    <p className="text-lg font-bold text-[#003822]">26</p>
                    <p className="text-xs text-gray-500">EU Allergens</p>
                  </div>
                </div>
              </div>

              {/* Stacked Cards */}
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6 border border-purple-100">
                  <div className="w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center mb-4">
                    <QrCode className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Batch QR Codes</h3>
                  <p className="text-sm text-gray-600">
                    Every batch gets a unique QR code linking to full traceability data.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border border-pink-100">
                  <div className="w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">COA Storage</h3>
                  <p className="text-sm text-gray-600">
                    Attach Certificates of Analysis, MSDS, and micro reports to every batch.
                  </p>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-green-100">
                <div className="w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Certification Badges</h3>
                <p className="text-sm text-gray-600">
                  Display organic, vegan, and cruelty-free certifications prominently.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-amber-100">
                <div className="w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center mb-4">
                  <Tag className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Variant Tracking</h3>
                <p className="text-sm text-gray-600">
                  Track every shade, size, and formulation variant independently.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-rose-100">
                <div className="w-12 h-12 bg-[#E5A400] rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Control</h3>
                <p className="text-sm text-gray-600">
                  Document quality checks and testing results for every production run.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BATCH TRACKING SECTION */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <FadeIn>
                  <div className="inline-flex items-center gap-2 bg-gray-100 text-[#003822] px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <QrCode className="w-4 h-4" />
                    Full Traceability
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Instant Recall Response
                  </h2>
                  <p className="text-gray-600 text-lg mb-6">
                    When quality issues arise, speed matters. Our batch tracking system lets you 
                    identify affected products and notify retailers within minutes, not days.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "QR code on every product links to batch data",
                      "One-click retailer notification system",
                      "Complete chain of custody documentation",
                      "Regulatory report generation"
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#003822] shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
              <div className="order-1 lg:order-2">
                <FadeIn delay={0.2}>
                  <BatchTrackingVisual />
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#003822] text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <Sparkles className="w-12 h-12 text-gray-200 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Compliance confidence, built in</h2>
            <Button className="bg-white text-[#003822] hover:bg-gray-100 rounded-full px-10 py-6 text-lg font-semibold">
              <Link href="/contact">Get Started Free</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

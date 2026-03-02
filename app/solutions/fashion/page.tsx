import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { 
  Shirt, Ruler, Palette, Tag, TrendingUp, CheckCircle2, 
  Layers, Clock, Percent, ArrowRight, Sparkles 
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fashion Wholesale Platform | BrandGate",
  description: "B2B platform for fashion brands. Manage size matrices, colorways, pre-orders, and digital lookbooks.",
  alternates: { canonical: "https://brandgate.dev/solutions/fashion" },
};

// SIZE MATRIX VISUAL - Unique to Fashion
function SizeMatrixVisual() {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-[#003822] px-4 py-3 flex items-center justify-between">
        <span className="text-white font-semibold text-sm">Size Matrix</span>
        <span className="bg-[#E5A400] text-[#003822] text-xs px-2 py-1 rounded font-bold">LIVE STOCK</span>
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-500 mb-3">Summer Dress - Navy Blue</p>
        <div className="grid grid-cols-6 gap-1 text-center text-xs">
          {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size, i) => (
            <div key={size} className="bg-gray-100 p-2 rounded font-medium text-gray-600">{size}</div>
          ))}
          {[12, 24, 48, 36, 18, 8].map((stock, i) => (
            <div key={i} className={`p-2 rounded font-bold ${
              stock < 10 ? 'bg-red-100 text-red-600' : 
              stock < 20 ? 'bg-yellow-100 text-yellow-700' : 
              'bg-green-100 text-green-700'
            }`}>
              {stock}
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2 text-xs">
          <span className="w-3 h-3 bg-green-100 rounded" /> In Stock
          <span className="w-3 h-3 bg-yellow-100 rounded" /> Low
          <span className="w-3 h-3 bg-red-100 rounded" /> Critical
        </div>
      </div>
    </div>
  );
}

// LOOKBOOK VISUAL - Unique to Fashion
function LookbookVisual() {
  return (
    <div className="bg-white rounded-xl shadow-xl p-4 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-[#003822]">Spring Collection 2026</span>
        <span className="text-xs text-gray-400">Page 1 of 12</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-3">
          <div className="bg-gradient-to-br from-pink-100 to-purple-100 h-32 rounded-lg flex items-center justify-center">
            <Shirt className="w-10 h-10 text-pink-400" />
          </div>
          <p className="text-xs font-medium text-gray-700">Floral Dress</p>
          <p className="text-xs text-gray-500">€45 wholesale</p>
        </div>
        <div className="space-y-3">
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 h-32 rounded-lg flex items-center justify-center">
            <Layers className="w-10 h-10 text-blue-400" />
          </div>
          <p className="text-xs font-medium text-gray-700">Linen Blazer</p>
          <p className="text-xs text-gray-500">€89 wholesale</p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <span className="bg-[#E5A400]/20 text-[#003822] text-xs px-2 py-1 rounded-full">New Arrival</span>
        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">In Stock</span>
      </div>
    </div>
  );
}

export default function FashionPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO - Fashion Focus */}
        <section className="bg-[#003822] text-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <FadeIn>
                  <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
                    <Shirt className="w-4 h-4" />
                    Fashion & Apparel
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">
                    Size-Perfect
                    <span className="text-[#E5A400] block">Wholesale</span>
                  </h1>
                  <p className="text-white/60 text-lg mt-6 max-w-lg">
                    The only B2B platform with intelligent size matrix management. 
                    Never sell out of mediums while larges sit in stock.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-8">
                    <Button className="bg-[#E5A400] text-[#003822] hover:bg-[#E5A400]/90 rounded-full px-8">
                      <Link href="/contact">Start Free</Link>
                    </Button>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8">
                      <Link href="/features">See Size Matrix</Link>
                    </Button>
                  </div>
                </FadeIn>
              </div>
              <FadeIn delay={0.2}>
                <SizeMatrixVisual />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* FASHION-SPECIFIC FEATURES */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-[#E5A400] font-semibold text-sm uppercase">Fashion-Specific Tools</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#003822] mt-3">
                  Built for How Fashion Works
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Size Matrix - Unique to Fashion */}
              <FadeIn>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <Ruler className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#003822] mb-3">Size Matrix Management</h3>
                  <p className="text-gray-600 mb-4">
                    Track every size-color combination independently. Get alerts when specific sizes run low.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E5A400]" />
                      XS to 4XL tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E5A400]" />
                      Size-specific alerts
                    </li>
                  </ul>
                </div>
              </FadeIn>

              {/* Colorways - Unique to Fashion */}
              <FadeIn delay={0.1}>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                    <Palette className="w-7 h-7 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#003822] mb-3">Colorway Management</h3>
                  <p className="text-gray-600 mb-4">
                    Manage multiple colors per style with visual swatches. Retailers see exactly what they are ordering.
                  </p>
                  <div className="flex gap-2 mt-4">
                    <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-white shadow" />
                    <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white shadow" />
                    <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white shadow" />
                    <div className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-white shadow" />
                    <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white shadow flex items-center justify-center text-xs">+5</div>
                  </div>
                </div>
              </FadeIn>

              {/* Pre-orders - Unique to Fashion */}
              <FadeIn delay={0.2}>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                    <Clock className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#003822] mb-3">Pre-order & Drops</h3>
                  <p className="text-gray-600 mb-4">
                    Take pre-orders for upcoming collections. Set embargo dates and manage drops like a pro.
                  </p>
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Summer Drop</span>
                      <span className="text-[#E5A400] font-semibold">In 5 days</span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Tiered Pricing - Unique to Fashion */}
              <FadeIn delay={0.3}>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                    <Tag className="w-7 h-7 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#003822] mb-3">Boutique vs Department</h3>
                  <p className="text-gray-600 mb-4">
                    Different prices for boutiques and big box stores. Volume discounts that make sense.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Boutique</span>
                      <span className="font-semibold text-[#003822]">€45</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Department Store</span>
                      <span className="font-semibold text-[#003822]">€38</span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Digital Lookbooks */}
              <FadeIn delay={0.4}>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                    <Layers className="w-7 h-7 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#003822] mb-3">Digital Lookbooks</h3>
                  <p className="text-gray-600 mb-4">
                    Share beautiful, interactive lookbooks. Include styling notes and fabric details.
                  </p>
                </div>
              </FadeIn>

              {/* Trend Analytics */}
              <FadeIn delay={0.5}>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                    <TrendingUp className="w-7 h-7 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#003822] mb-3">Trend Analytics</h3>
                  <p className="text-gray-600 mb-4">
                    See which styles, colors, and sizes are trending. Predict demand before you manufacture.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* LOOKBOOK SECTION - Unique Visual */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <LookbookVisual />
              </FadeIn>
              <div>
                <FadeIn>
                  <span className="text-[#E5A400] font-semibold text-sm uppercase">Digital Showroom</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#003822] mt-3 mb-6">
                    Your Collection, Beautifully Presented
                  </h2>
                  <p className="text-gray-600 text-lg mb-6">
                    Replace PDF line sheets with interactive digital lookbooks. Retailers can browse, 
                    zoom, and order directly from your collection presentation.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "High-resolution product images",
                      "Fabric composition and care instructions",
                      "Size guide integration",
                      "Direct ordering from lookbook"
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#E5A400] shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#003822] text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <Sparkles className="w-12 h-12 text-[#E5A400] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to streamline your fashion wholesale?</h2>
            <Button className="bg-[#E5A400] text-[#003822] hover:bg-[#E5A400]/90 rounded-full px-10 py-6 text-lg font-semibold">
              <Link href="/contact">Get Started Free</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

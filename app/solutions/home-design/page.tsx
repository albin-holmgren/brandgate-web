import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { 
  Home, Palette, Box, Truck, Ruler, CheckCircle2,
  Layers, Maximize, Package, ArrowRight
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home & Design Wholesale | BrandGate",
  description: "B2B platform for furniture and home goods. Manage room collections, shipping dimensions, and assembly instructions.",
  alternates: { canonical: "https://brandgate.dev/solutions/home-design" },
};

// ROOM COLLECTION VISUALIZER - Unique to Home
function RoomVisualizer() {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-amber-800 px-4 py-3 flex items-center justify-between">
        <span className="text-white font-semibold text-sm flex items-center gap-2">
          <Home className="w-4 h-4" />
          Living Room Collection
        </span>
        <span className="bg-white/20 text-white text-xs px-2 py-1 rounded">12 items</span>
      </div>
      <div className="p-4">
        {/* Room Layout */}
        <div className="bg-amber-50 rounded-lg p-4 mb-4">
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2 bg-white rounded-lg p-3 shadow-sm">
              <div className="h-16 bg-amber-100 rounded flex items-center justify-center mb-2">
                <Layers className="w-8 h-8 text-amber-600" />
              </div>
              <p className="text-xs font-medium text-center">Sofa</p>
              <p className="text-xs text-gray-500 text-center">€899</p>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="h-16 bg-amber-100 rounded flex items-center justify-center mb-2">
                <Box className="w-6 h-6 text-amber-600" />
              </div>
              <p className="text-xs font-medium text-center">Lamp</p>
              <p className="text-xs text-gray-500 text-center">€149</p>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="h-12 bg-amber-100 rounded flex items-center justify-center mb-2">
                <Package className="w-6 h-6 text-amber-600" />
              </div>
              <p className="text-xs font-medium text-center">Table</p>
              <p className="text-xs text-gray-500 text-center">€449</p>
            </div>
            <div className="col-span-2 bg-white rounded-lg p-3 shadow-sm">
              <div className="h-12 bg-amber-100 rounded flex items-center justify-center mb-2">
                <Maximize className="w-8 h-8 text-amber-600" />
              </div>
              <p className="text-xs font-medium text-center">Rug</p>
              <p className="text-xs text-gray-500 text-center">€299</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Total Collection Value</span>
          <span className="font-bold text-amber-800">€1,796</span>
        </div>
      </div>
    </div>
  );
}

// SHIPPING DIMENSIONS CALCULATOR - Unique to Home
function ShippingCalcVisual() {
  return (
    <div className="bg-white rounded-xl shadow-xl p-4 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-gray-900 flex items-center gap-2">
          <Truck className="w-4 h-4 text-amber-700" />
          Freight Calculator
        </span>
      </div>
      
      <div className="space-y-4">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-xs text-gray-500 mb-2">Product Dimensions</p>
          <div className="flex items-center gap-2">
            <div className="bg-white px-3 py-2 rounded border text-center flex-1">
              <p className="text-lg font-bold text-gray-900">200</p>
              <p className="text-xs text-gray-500">cm (L)</p>
            </div>
            <span className="text-gray-400">×</span>
            <div className="bg-white px-3 py-2 rounded border text-center flex-1">
              <p className="text-lg font-bold text-gray-900">90</p>
              <p className="text-xs text-gray-500">cm (W)</p>
            </div>
            <span className="text-gray-400">×</span>
            <div className="bg-white px-3 py-2 rounded border text-center flex-1">
              <p className="text-lg font-bold text-gray-900">85</p>
              <p className="text-xs text-gray-500">cm (H)</p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">Shipping Cost</p>
              <p className="text-xs text-gray-500">Based on volumetric weight</p>
            </div>
            <p className="text-2xl font-bold text-amber-700">€127</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-600">
          <CheckCircle2 className="w-4 h-4 text-green-500" />
          White glove delivery available
        </div>
      </div>
    </div>
  );
}

export default function HomeDesignPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO - Home Focus */}
        <section className="bg-amber-800 text-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <FadeIn>
                  <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
                    <Home className="w-4 h-4" />
                    Home & Design
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">
                    Room-Perfect
                    <span className="text-amber-300 block">Collections</span>
                  </h1>
                  <p className="text-white/80 text-lg mt-6 max-w-lg">
                    Sell complete room concepts, not just individual pieces. 
                    Help retailers visualize and order entire spaces.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-8">
                    <Button className="bg-amber-400 text-amber-900 hover:bg-amber-300 rounded-full px-8 font-semibold">
                      <Link href="/contact">Start Free Trial</Link>
                    </Button>
                  </div>
                </FadeIn>
              </div>
              <FadeIn delay={0.2}>
                <RoomVisualizer />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* UNIQUE HORIZONTAL FEATURE CARDS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-amber-700 font-semibold text-sm uppercase">Built for Furniture</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                  Handle Complex Products with Ease
                </h2>
              </div>
            </FadeIn>

            {/* Horizontal scrolling cards on mobile */}
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Room Collections */}
              <FadeIn>
                <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100 flex flex-col h-full">
                  <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
                    <Palette className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Room Collections</h3>
                  <p className="text-gray-600 flex-1">
                    Curate complete room sets. Living room, bedroom, dining — 
                    sell the vision, not just the product.
                  </p>
                  <div className="mt-4 pt-4 border-t border-amber-200">
                    <span className="text-sm text-amber-700 font-medium">12 room templates included</span>
                  </div>
                </div>
              </FadeIn>

              {/* Variant Management */}
              <FadeIn delay={0.1}>
                <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100 flex flex-col h-full">
                  <div className="w-14 h-14 bg-amber-600 rounded-xl flex items-center justify-center mb-6">
                    <Ruler className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Size & Finish Variants</h3>
                  <p className="text-gray-600 flex-1">
                    Track inventory across sizes, colors, and materials. 
                    Oak vs walnut, 2-seater vs 3-seater — all managed.
                  </p>
                  <div className="mt-4 pt-4 border-t border-amber-200">
                    <span className="text-sm text-amber-700 font-medium">Unlimited variants</span>
                  </div>
                </div>
              </FadeIn>

              {/* Assembly Instructions */}
              <FadeIn delay={0.2}>
                <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100 flex flex-col h-full">
                  <div className="w-14 h-14 bg-amber-700 rounded-xl flex items-center justify-center mb-6">
                    <Box className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Assembly Guides</h3>
                  <p className="text-gray-600 flex-1">
                    Attach PDF instructions, videos, and assembly time estimates. 
                    Reduce support calls from retailers.
                  </p>
                  <div className="mt-4 pt-4 border-t border-amber-200">
                    <span className="text-sm text-amber-700 font-medium">PDF & video support</span>
                  </div>
                </div>
              </FadeIn>

              {/* Freight Management */}
              <FadeIn delay={0.3}>
                <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100 flex flex-col h-full">
                  <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                    <Truck className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Freight Management</h3>
                  <p className="text-gray-600 flex-1">
                    Calculate shipping by dimensions and weight. Support for 
                    oversized items and white glove delivery.
                  </p>
                  <div className="mt-4 pt-4 border-t border-orange-200">
                    <span className="text-sm text-orange-700 font-medium">Real-time freight quotes</span>
                  </div>
                </div>
              </FadeIn>

              {/* Dimensional Shipping */}
              <FadeIn delay={0.4}>
                <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100 flex flex-col h-full">
                  <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                    <Maximize className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Dimensional Weight</h3>
                  <p className="text-gray-600 flex-1">
                    Automatic volumetric weight calculations. Never undercharge 
                    for bulky but light items again.
                  </p>
                  <div className="mt-4 pt-4 border-t border-orange-200">
                    <span className="text-sm text-orange-700 font-medium">Smart calculations</span>
                  </div>
                </div>
              </FadeIn>

              {/* Sample Program */}
              <FadeIn delay={0.5}>
                <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100 flex flex-col h-full">
                  <div className="w-14 h-14 bg-orange-700 rounded-xl flex items-center justify-center mb-6">
                    <Package className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Sample Program</h3>
                  <p className="text-gray-600 flex-1">
                    Let retailers order swatches and small samples. Track 
                    sample inventory separately from main stock.
                  </p>
                  <div className="mt-4 pt-4 border-t border-orange-200">
                    <span className="text-sm text-orange-700 font-medium">Swatch tracking</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* SHIPPING CALCULATOR SECTION */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <FadeIn>
                  <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <Truck className="w-4 h-4" />
                    Smart Shipping
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Never Lose Money on Shipping Again
                  </h2>
                  <p className="text-gray-600 text-lg mb-6">
                    Furniture shipping is complex. Our dimensional weight calculator ensures 
                    you charge accurately for bulky items, whether shipping a rug or a sectional sofa.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Automatic volumetric weight calculations",
                      "White glove delivery options",
                      "Assembly service add-ons",
                      "Room-of-choice delivery scheduling"
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
              <FadeIn delay={0.2}>
                <ShippingCalcVisual />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-amber-800 text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <Home className="w-12 h-12 text-amber-300 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to furnish more homes?</h2>
            <Button className="bg-amber-400 text-amber-900 hover:bg-amber-300 rounded-full px-10 py-6 text-lg font-semibold">
              <Link href="/contact">Get Started Free</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

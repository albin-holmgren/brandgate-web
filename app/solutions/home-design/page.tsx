import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Home, Truck, Package, Box, Palette, Ruler, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home & Design B2B Wholesale | BrandGate",
  description: "B2B wholesale platform for furniture, decor, and home goods brands. Manage variants, shipping, and retailer relationships.",
  alternates: { canonical: "https://brandgate.dev/solutions/home-design" },
  openGraph: {
    title: "Home & Design B2B Wholesale | BrandGate",
    description: "Wholesale platform for furniture and home goods brands.",
    url: "https://brandgate.dev/solutions/home-design",
  },
};

// Home & Design Dashboard Preview
function HomeDesignDashboard() {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-[#003822] px-4 py-3 flex items-center justify-between">
        <span className="text-white font-semibold text-sm">Nordic Home</span>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-white/30" />
          <div className="w-2 h-2 rounded-full bg-white/30" />
          <div className="w-2 h-2 rounded-full bg-white/30" />
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-500 mb-3">Product Variants</p>
        <div className="space-y-2">
          {[
            { name: "Sofa - 3 seater", variants: "Gray, Beige, Navy", stock: "12" },
            { name: "Dining Table", variants: "Oak, Walnut", stock: "8" },
            { name: "Lamp Set", variants: "Gold, Black", stock: "24" },
          ].map((item) => (
            <div key={item.name} className="flex items-center justify-between bg-gray-50 p-2 rounded text-xs">
              <div>
                <p className="font-medium text-gray-900">{item.name}</p>
                <p className="text-gray-500">{item.variants}</p>
              </div>
              <span className="bg-[#E5A400]/10 text-[#003822] px-2 py-1 rounded font-medium">{item.stock} in stock</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Room Collection Preview
function RoomCollectionPreview() {
  return (
    <div className="bg-white rounded-xl shadow-xl p-4 border border-gray-200">
      <p className="text-sm font-semibold text-gray-900 mb-3">Living Room Collection</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-[#003822]/5 p-3 rounded-lg text-center">
          <div className="w-full h-16 bg-[#003822]/10 rounded mb-2" />
          <p className="text-xs text-gray-600">Sofa</p>
        </div>
        <div className="bg-[#E5A400]/10 p-3 rounded-lg text-center">
          <div className="w-full h-16 bg-[#E5A400]/20 rounded mb-2" />
          <p className="text-xs text-gray-600">Table</p>
        </div>
        <div className="bg-[#003822]/5 p-3 rounded-lg text-center">
          <div className="w-full h-16 bg-[#003822]/10 rounded mb-2" />
          <p className="text-xs text-gray-600">Lamp</p>
        </div>
        <div className="bg-[#E5A400]/10 p-3 rounded-lg text-center">
          <div className="w-full h-16 bg-[#E5A400]/20 rounded mb-2" />
          <p className="text-xs text-gray-600">Rug</p>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: Palette,
    title: "Room Collections",
    description: "Organize products by room, style, or collection. Help retailers visualize and order complete room setups.",
    color: "bg-[#003822]/10 text-[#003822]",
  },
  {
    icon: Ruler,
    title: "Variant Management",
    description: "Manage colors, sizes, materials, and finishes. Track inventory across all product variants.",
    color: "bg-[#E5A400]/10 text-[#003822]",
  },
  {
    icon: Box,
    title: "Assembly Tracking",
    description: "Include assembly instructions, required tools, and estimated time for every product.",
    color: "bg-[#003822]/10 text-[#003822]",
  },
  {
    icon: Truck,
    title: "Freight Management",
    description: "Handle large item shipping, white glove delivery, and freight logistics seamlessly.",
    color: "bg-[#E5A400]/10 text-[#003822]",
  },
  {
    icon: Package,
    title: "Dimensional Shipping",
    description: "Calculate shipping costs based on dimensions and weight. Support for oversized items.",
    color: "bg-[#003822]/10 text-[#003822]",
  },
  {
    icon: Home,
    title: "Sample Program",
    description: "Manage sample requests, tracking, and returns. Let retailers experience products firsthand.",
    color: "bg-[#E5A400]/10 text-[#003822]",
  },
];

const benefits = [
  "Showcase products with high-resolution images",
  "Manage complex pricing tiers for different retailers",
  "Track orders from warehouse to customer delivery",
  "Handle returns and damages efficiently",
  "Generate professional quotes instantly",
];

export default function HomeDesignPage() {
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
                    <Home className="w-4 h-4" />
                    Home & Design
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.1}>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase leading-[1.1]">
                    Built for
                    <span className="block text-[#E5A400]">Home Brands</span>
                  </h1>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                  <p className="text-white/60 text-base sm:text-lg mt-6 max-w-xl">
                    B2B wholesale platform for furniture, decor, and home goods. Manage complex products and shipping with ease.
                  </p>
                </FadeIn>
                
                <FadeIn delay={0.3}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
                    <Button asChild size="lg" className="bg-[#E5A400] text-[#003822] hover:bg-[#E5A400]/90 rounded-full px-8">
                      <Link href="/contact">Start Free Trial</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 rounded-full px-8">
                      <Link href="/features">See Features</Link>
                    </Button>
                  </div>
                </FadeIn>
              </div>
              
              <FadeIn delay={0.2}>
                <HomeDesignDashboard />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12 md:mb-16">
                <span className="text-[#E5A400] font-semibold text-sm uppercase tracking-wider">Features</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003822] mt-4">Features for Home Brands</h2>
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

        {/* Benefits + Visual */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeIn>
                <RoomCollectionPreview />
              </FadeIn>
              
              <div>
                <FadeIn>
                  <span className="text-[#E5A400] font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003822] mt-4 mb-6">
                    Why home brands love us
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
                Ready to scale your home brand?
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

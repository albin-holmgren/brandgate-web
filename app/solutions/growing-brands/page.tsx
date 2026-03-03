import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { TrendingUp, Building2, Users, Globe, CheckCircle2, BarChart3 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Wholesale for Growing Brands | BrandGate",
  description: "Scale your wholesale operations with advanced features, automation, and analytics.",
  alternates: { canonical: "https://brandgate.dev/solutions/growing-brands" },
};

// Growth Dashboard Preview
function GrowthDashboard() {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-[#003822] px-4 py-3 flex items-center justify-between">
        <span className="text-white font-semibold text-sm">Growth Dashboard</span>
        <span className="bg-[#E5A400] text-[#003822] text-xs px-2 py-1 rounded-full font-medium">+127%</span>
      </div>
      <div className="p-4">
        <div className="flex items-end gap-2 h-24 mb-4">
          {[30, 45, 40, 60, 55, 80, 95].map((h, i) => (
            <div key={i} className="flex-1 bg-[#003822]/10 rounded-t-md relative">
              <div className="absolute bottom-0 left-0 right-0 bg-[#003822] rounded-t-md transition-all" style={{ height: `${h}%` }} />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="bg-[#E5A400]/10 p-2 rounded">
            <p className="font-bold text-[#003822]">Unlimited</p>
            <p className="text-gray-500">Retailers</p>
          </div>
          <div className="bg-[#003822]/10 p-2 rounded">
            <p className="font-bold text-[#003822]">24/7</p>
            <p className="text-gray-500">Support</p>
          </div>
          <div className="bg-[#E5A400]/10 p-2 rounded">
            <p className="font-bold text-[#003822]">API</p>
            <p className="text-gray-500">Access</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: Users,
    title: "Unlimited Retailers",
    description: "No caps on your growth. Add as many retailers as you need.",
    color: "bg-[#003822]/10 text-[#003822]",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights into sales trends and retailer behavior.",
    color: "bg-[#E5A400]/10 text-[#003822]",
  },
  {
    icon: Globe,
    title: "Multi-Region",
    description: "Expand internationally with multi-currency and regional pricing.",
    color: "bg-[#003822]/10 text-[#003822]",
  },
  {
    icon: Building2,
    title: "Team Collaboration",
    description: "Add team members with role-based permissions.",
    color: "bg-[#E5A400]/10 text-[#003822]",
  },
];

export default function GrowingBrandsPage() {
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
                    <TrendingUp className="w-4 h-4" />
                    For Growing Brands
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.1}>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                    Scale Your
                    <span className="block text-[#E5A400]">Wholesale Operations</span>
                  </h1>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                  <p className="text-white/60 text-base sm:text-lg mt-6 max-w-xl">
                    Advanced tools and automation for brands expanding their B2B reach. Handle 10x more retailers without 10x the work.
                  </p>
                </FadeIn>
                
                <FadeIn delay={0.3}>
                  <Button asChild size="lg" className="bg-[#E5A400] text-[#003822] hover:bg-[#E5A400]/90 rounded-full px-8 mt-8">
                    <Link href="/contact">See Growth Plan</Link>
                  </Button>
                </FadeIn>
              </div>
              
              <FadeIn delay={0.2}>
                <GrowthDashboard />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-12 bg-[#003822]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-xl p-8 border-2 border-[#003822]">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-[#003822]">Pro Plan</h3>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-[#003822]">€281</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">€225/month billed annually</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {["Up to 500 products", "Online store builder", "Automated invoicing", "Advanced analytics", "Priority support", "API access"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-[#E5A400]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-[#003822] text-white hover:bg-[#003822]/90">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#003822]">Tools for Scaling</h2>
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

        {/* Stats */}
        <section className="py-16 bg-[#003822] text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#E5A400]">3x</div>
                <p className="text-white/60 text-sm">Faster onboarding</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#E5A400]">10x</div>
                <p className="text-white/60 text-sm">More orders</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#E5A400]">50%</div>
                <p className="text-white/60 text-sm">Less admin time</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

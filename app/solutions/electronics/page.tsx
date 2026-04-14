import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { 
  Laptop, Shield, FileText, Zap, Box, CheckCircle2,
  Cpu, Wrench, BarChart3, ArrowRight
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electronics Wholesale | BrandGate",
  description: "B2B platform for electronics brands. Warranty tracking, serial numbers, technical specs, and firmware management.",
  alternates: { canonical: "https://brandgate.dev/solutions/electronics" },
};

// SERIAL NUMBER TRACKING - Unique to Electronics
function SerialTrackerVisual() {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-primary px-4 py-3 flex items-center justify-between">
        <span className="text-white font-semibold text-sm flex items-center gap-2">
          <Cpu className="w-4 h-4" />
          Serial Number Tracking
        </span>
        <span className="bg-gold text-gray-900 text-xs px-2 py-1 rounded font-bold">LIVE</span>
      </div>
      <div className="p-4">
        <div className="space-y-3">
          {[
            { serial: "SN-X200-78A2-B9F1", product: "Wireless Headphones Pro", status: "active", warranty: "18 months left" },
            { serial: "SN-X200-78A2-B9F2", product: "Wireless Headphones Pro", status: "active", warranty: "18 months left" },
            { serial: "SN-X200-78A2-B9F3", product: "Wireless Headphones Pro", status: "repair", warranty: "Claim filed" },
          ].map((item, i) => (
            <div key={item.serial} className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono text-gray-600">{item.serial}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  item.status === 'active' ? 'bg-gray-100 text-gray-700' : 'bg-gray-100 text-primary'
                }`}>{item.status}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">{item.product}</span>
                <span className="text-xs text-primary">{item.warranty}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-cyan-200">
          <div className="flex items-center gap-2 text-sm text-primary">
            <CheckCircle2 className="w-4 h-4" />
            <span className="font-medium">Block scanning enabled</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// TECHNICAL SPECS SHEET - Unique to Electronics
function TechSpecsVisual() {
  return (
    <div className="bg-white rounded-xl shadow-xl p-5 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Laptop className="w-5 h-5 text-gold" />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">ProBook X200</p>
            <p className="text-xs text-gray-500">Model: PB-X200-15</p>
          </div>
        </div>
        <span className="bg-gray-100 text-primary text-xs px-2 py-1 rounded font-medium">TECH SPECS</span>
      </div>
      
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-xs text-gray-500 mb-1">Processor</p>
            <p className="text-sm font-semibold text-gray-900">M2 Pro Chip</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-xs text-gray-500 mb-1">Memory</p>
            <p className="text-sm font-semibold text-gray-900">16GB RAM</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-xs text-gray-500 mb-1">Storage</p>
            <p className="text-sm font-semibold text-gray-900">512GB SSD</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-xs text-gray-500 mb-1">Display</p>
            <p className="text-sm font-semibold text-gray-900">15.6" 4K OLED</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 pt-2 border-t">
          <FileText className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary">Download full spec sheet (PDF)</span>
        </div>
      </div>
    </div>
  );
}

export default function ElectronicsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO - Tech Focus */}
        <section className="bg-primary text-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <FadeIn>
                  <div className="inline-flex items-center gap-2 bg-gold/20 px-4 py-2 rounded-full text-sm mb-6 text-gold/30">
                    <Cpu className="w-4 h-4" />
                    Electronics & Tech
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">
                    Serial-Level
                    <span className="text-gold block">Tracking</span>
                  </h1>
                  <p className="text-gray-400 text-lg mt-6 max-w-lg">
                    Track every unit by serial number. Manage warranties, handle RMAs, 
                    and keep firmware updated across your entire distribution network.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-8">
                    <Button asChild className="bg-gold text-gray-900 hover:bg-gold/30 rounded-full px-8 font-semibold">
                      <Link href="/contact">Start Free Trial</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-slate-600 text-gray-300 hover:bg-primary rounded-full px-8">
                      <Link href="/features">See API</Link>
                    </Button>
                  </div>
                </FadeIn>
              </div>
              <FadeIn delay={0.2}>
                <SerialTrackerVisual />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* TECH SPECS BANNER */}
        <section className="py-8 bg-primary border-y border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { label: "Warranty Tracking", value: "Per Serial" },
                { label: "Firmware OTA", value: "Supported" },
                { label: "RMA Management", value: "Built-in" },
                { label: "API Access", value: "REST + GraphQL" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-gold font-bold text-lg">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIAGONAL/ZIGZAG LAYOUT */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-primary font-semibold text-sm uppercase">Tech-Specific Features</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                  Built for Hardware Distribution
                </h2>
              </div>
            </FadeIn>

            <div className="space-y-20">
              {/* Feature 1 - Left aligned */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <FadeIn>
                  <div className="bg-gray-50 rounded-2xl p-8 border border-slate-100">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                      <Shield className="w-7 h-7 text-gold" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Warranty by Serial</h3>
                    <p className="text-gray-600 mb-6">
                      Every unit gets its own warranty timeline. Track activation dates, 
                      validate claims instantly, and prevent warranty fraud.
                    </p>
                    <ul className="space-y-3">
                      {["Automatic warranty validation", "Claims history per serial", "Repair tracking", "Replacement management"].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                    <TechSpecsVisual />
                  </div>
                </FadeIn>
              </div>

              {/* Feature 2 - Right aligned */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <FadeIn className="order-2 lg:order-1">
                  <div className="bg-gray-50 rounded-2xl p-8 border border-cyan-100">
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Zap className="w-4 h-4 text-gray-600" />
                          </div>
                          <span className="font-semibold text-gray-900">Firmware v2.4.1 Released</span>
                        </div>
                        <p className="text-sm text-gray-600 ml-11">Pushed to 2,847 devices</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                            <BarChart3 className="w-4 h-4 text-primary" />
                          </div>
                          <span className="font-semibold text-gray-900">Update Analytics</span>
                        </div>
                        <p className="text-sm text-gray-600 ml-11">94% adoption rate</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
                <FadeIn delay={0.1} className="order-1 lg:order-2">
                  <div className="bg-gray-50 rounded-2xl p-8 border border-slate-100">
                    <div className="w-14 h-14 bg-gray-500 rounded-xl flex items-center justify-center mb-6">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Firmware Distribution</h3>
                    <p className="text-gray-600 mb-6">
                      Push OTA updates to your entire retail network. Track adoption rates 
                      and ensure all devices run the latest software.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Current firmware</span>
                        <span className="font-mono text-primary">v2.4.1</span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Feature 3 - Left aligned */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <FadeIn>
                  <div className="bg-gray-50 rounded-2xl p-8 border border-slate-100">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                      <Box className="w-7 h-7 text-gold" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Bundle Management</h3>
                    <p className="text-gray-600 mb-6">
                      Create product bundles and kits. Track component inventory and 
                      manage promotional packages with ease.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <p className="text-sm font-medium text-gray-900 mb-2">Starter Kit Bundle</p>
                      <div className="flex gap-2 text-xs">
                        <span className="bg-gray-100 px-2 py-1 rounded">Headphones</span>
                        <span className="bg-gray-100 px-2 py-1 rounded">Case</span>
                        <span className="bg-gray-100 px-2 py-1 rounded">Cable</span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <div className="bg-gray-50 rounded-2xl p-8 border border-orange-100">
                    <div className="w-14 h-14 bg-gray-500 rounded-xl flex items-center justify-center mb-6">
                      <Wrench className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">RMA Management</h3>
                    <p className="text-gray-600 mb-6">
                      Handle returns and repairs efficiently. Track RMA status, 
                      communicate with retailers, and manage repair workflows.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                        <span className="text-sm text-gray-600">Open RMAs</span>
                        <span className="font-bold text-gold">12</span>
                      </div>
                      <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                        <span className="text-sm text-gray-600">Avg. Resolution</span>
                        <span className="font-bold text-gray-600">3.2 days</span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* API SECTION */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="bg-primary rounded-2xl p-8 md:p-12 text-center md:text-left">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Cpu className="w-12 h-12 text-gold mb-6" />
                    <h2 className="text-3xl font-bold text-white mb-4">Built for Integration</h2>
                    <p className="text-gray-400 mb-6">
                      Connect with your existing systems. Our REST and GraphQL APIs 
                      make integration with your ERP, CRM, and logistics platforms simple.
                    </p>
                    <Button asChild className="bg-gold text-gray-900 hover:bg-gold/30 rounded-full">
                      <Link href="/api">View API Docs</Link>
                    </Button>
                  </div>
                  <div className="bg-primary rounded-xl p-6 font-mono text-sm">
                    <p className="text-gold mb-2">// Get product by serial</p>
                    <p className="text-gray-300">GET /api/v1/products/serial/{'{sn}'}</p>
                    <p className="text-gray-500 mt-4 mb-2">Response:</p>
                    <div className="text-gray-300 space-y-1">
                      <p>{`{`}</p>
                      <p className="pl-4">"serial": "SN-X200-78A2",</p>
                      <p className="pl-4">"warranty_status": "active",</p>
                      <p className="pl-4">"firmware_version": "2.4.1"</p>
                      <p>{`}`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <Cpu className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to scale your tech distribution?</h2>
            <Button asChild className="bg-gold text-gray-900 hover:bg-gold/30 rounded-full px-10 py-6 text-lg font-semibold">
              <Link href="/contact">Get Started Free</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

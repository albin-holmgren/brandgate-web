import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { 
  Apple, Calendar, Thermometer, Shield, Leaf, Truck,
  CheckCircle2, AlertTriangle, Clock, MapPin, ArrowRight
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food & Beverage Wholesale | BrandGate",
  description: "Compliance-ready B2B platform for food brands. Batch tracking, expiry management, and temperature monitoring.",
  alternates: { canonical: "https://brandgate.dev/solutions/food-beverage" },
};

// BATCH TRACKING TIMELINE - Unique to Food
function BatchTimelineVisual() {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-primary px-4 py-3 flex items-center justify-between">
        <span className="text-white font-semibold text-sm flex items-center gap-2">
          <Shield className="w-4 h-4" />
          Batch Traceability
        </span>
        <span className="bg-white/20 text-white text-xs px-2 py-1 rounded">GS1 Standard</span>
      </div>
      <div className="p-4">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
          
          {/* Timeline Items */}
          {[
            { date: "Jan 15", event: "Produced", batch: "LOT-2026-015", status: "complete" },
            { date: "Jan 16", event: "Quality Check", batch: "PASSED", status: "complete" },
            { date: "Jan 18", event: "Shipped to Warehouse", batch: "WH-782", status: "complete" },
            { date: "Jan 20", event: "Received by Retailer", batch: "STORE-45", status: "current" },
          ].map((item, i) => (
            <div key={i} className="relative flex items-start gap-4 mb-4 last:mb-0">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 relative z-10 ${
                item.status === 'complete' ? 'bg-gray-500' : 'bg-gold'
              }`}>
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{item.date}</span>
                  <span className="text-xs font-mono bg-white px-2 py-0.5 rounded">{item.batch}</span>
                </div>
                <p className="text-sm font-medium text-gray-900 mt-1">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// EXPIRY ALERT DASHBOARD - Unique to Food
function ExpiryAlertVisual() {
  return (
    <div className="bg-white rounded-xl shadow-xl p-4 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-gray-900 flex items-center gap-2">
          <Clock className="w-4 h-4 text-gold" />
          Expiry Monitoring
        </span>
        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full font-medium">3 Alerts</span>
      </div>
      
      <div className="space-y-3">
        {[
          { product: "Organic Yogurt", expiry: "3 days", level: "critical", batch: "YG-2026-092" },
          { product: "Fresh Juice", expiry: "7 days", level: "warning", batch: "FJ-2026-118" },
          { product: "Artisan Cheese", expiry: "14 days", level: "ok", batch: "CH-2026-045" },
        ].map((item) => (
          <div key={item.batch} className={`p-3 rounded-lg border-l-4 ${
            item.level === 'critical' ? 'bg-gray-50 border-red-500' :
            item.level === 'warning' ? 'bg-gray-50 border-yellow-500' :
            'bg-gray-50 border-green-500'
          }`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">{item.product}</p>
                <p className="text-xs text-gray-500 font-mono">{item.batch}</p>
              </div>
              <div className="text-right">
                <p className={`text-sm font-bold ${
                  item.level === 'critical' ? 'text-gray-600' :
                  item.level === 'warning' ? 'text-gold' :
                  'text-gray-600'
                }`}>{item.expiry}</p>
                <p className="text-xs text-gray-500">remaining</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FoodBeveragePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO - Food Safety Focus */}
        <section className="bg-primary text-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <FadeIn>
                  <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
                    <Shield className="w-4 h-4" />
                    Food Safety Compliant
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">
                    Trace Every
                    <span className="text-gold block">Batch</span>
                  </h1>
                  <p className="text-white/80 text-lg mt-6 max-w-lg">
                    From farm to shelf, track every batch with complete traceability. 
                    Be recall-ready in minutes, not days.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-8">
                    <Button asChild className="bg-gold text-primary hover:bg-gold/30 rounded-full px-8 font-semibold">
                      <Link href="/contact">Start Free Trial</Link>
                    </Button>
                  </div>
                </FadeIn>
              </div>
              <FadeIn delay={0.2}>
                <BatchTimelineVisual />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* COMPLIANCE BADGES */}
        <section className="py-8 bg-gray-50 border-y border-green-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-primary">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle2 className="w-4 h-4" /> EU Food Safety
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle2 className="w-4 h-4" /> FDA Compliant
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle2 className="w-4 h-4" /> HACCP Ready
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle2 className="w-4 h-4" /> GS1 Standards
              </span>
            </div>
          </div>
        </section>

        {/* UNIQUE GRID LAYOUT - Not matching other pages */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-gray-700 font-semibold text-sm uppercase">Food-Specific Features</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                  Built for Food Safety
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-12 gap-6">
              {/* Large Card - Batch Tracking */}
              <div className="md:col-span-7 bg-gray-50 rounded-2xl p-8 border border-green-100">
                <div className="w-14 h-14 bg-gray-500 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Complete Batch Traceability</h3>
                <p className="text-gray-600 mb-4">
                  Track every batch from production to retail shelf. In case of recall, 
                  identify affected products instantly with full chain of custody.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold">2-minute</span> recall identification
                  </div>
                </div>
              </div>

              {/* Stacked Cards */}
              <div className="md:col-span-5 space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6 border border-yellow-100">
                  <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Expiry Management</h3>
                  <p className="text-sm text-gray-600">
                    Automatic alerts when products approach expiry. FIFO inventory management.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border border-blue-100">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                    <Thermometer className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Temperature Logs</h3>
                  <p className="text-sm text-gray-600">
                    Track cold chain compliance. Alert retailers to storage conditions.
                  </p>
                </div>
              </div>

              {/* Bottom Cards */}
              <div className="md:col-span-4 bg-gray-50 rounded-2xl p-6 border border-green-100">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Certifications</h3>
                <p className="text-sm text-gray-600">
                  Track organic, non-GMO, and specialty certifications with expiration alerts.
                </p>
              </div>

              <div className="md:col-span-4 bg-gray-50 rounded-2xl p-6 border border-orange-100">
                <div className="w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Delivery Windows</h3>
                <p className="text-sm text-gray-600">
                  Coordinate just-in-time deliveries. Handle standing orders efficiently.
                </p>
              </div>

              <div className="md:col-span-4 bg-gray-50 rounded-2xl p-6 border border-purple-100">
                <div className="w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center mb-4">
                  <Apple className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Nutritional Data</h3>
                <p className="text-sm text-gray-600">
                  Share complete ingredient lists, allergens, and nutritional information.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EXPIRY SECTION - Unique to Food */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <FadeIn>
                  <div className="inline-flex items-center gap-2 bg-gray-100 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <AlertTriangle className="w-4 h-4" />
                    Proactive Alerts
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Never Ship Expired Products Again
                  </h2>
                  <p className="text-gray-600 text-lg mb-6">
                    Our intelligent expiry management system tracks every batch and alerts you 
                    before products expire. Protect your brand reputation and reduce waste.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Automatic FIFO inventory rotation",
                      "Multi-level expiry alerts (30, 14, 7 days)",
                      "Retailer notification system",
                      "Waste reduction analytics"
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gray-600 shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
              <div className="order-1 lg:order-2">
                <FadeIn>
                  <ExpiryAlertVisual />
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <Shield className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Food safety starts with traceability</h2>
            <Button asChild className="bg-gold text-primary hover:bg-gold/30 rounded-full px-10 py-6 text-lg font-semibold">
              <Link href="/contact">Get Started Free</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

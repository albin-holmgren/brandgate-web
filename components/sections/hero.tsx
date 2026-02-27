"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { FadeIn, ScrollReveal } from "@/components/motion/fade-in";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <>
      {/* Dark Hero Section */}
      <section className="relative pt-24 pb-0 bg-[#022c22] overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center pt-16 pb-8">
            <FadeIn>
              {/* Yellow accent line */}
              <div className="w-12 h-0.5 bg-[#fbbf24] mx-auto mb-8" />
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 uppercase">
                The B2B Distribution<br />Platform for Brands
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Manage your entire distribution network from one place. Orders, products, invoicing, and your own branded storefront — all in one platform.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-[#fbbf24] hover:bg-[#f59e0b] text-[#022c22] px-8 h-12 text-base font-semibold"
                  asChild
                >
                  <a href="https://app.brandgate.dev/signup">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-8 h-12 text-base bg-transparent"
                  asChild
                >
                  <Link href="/features">
                    Book a Demo
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>

        {/* Dashboard Mockup */}
        <ScrollReveal delay={0.5}>
          <div className="relative mx-auto max-w-5xl px-4 mt-12">
            <div className="rounded-t-xl border border-gray-700 bg-[#0d1f1c] shadow-2xl overflow-hidden">
              {/* Browser chrome */}
              <div className="bg-[#1a2e28] px-4 py-3 flex items-center gap-2 border-b border-gray-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#fbbf24]" />
                  <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-gray-400">app.brandgate.com/admin/dashboard</span>
                </div>
              </div>
              
              {/* Dashboard content */}
              <div className="flex">
                {/* Sidebar */}
                <div className="w-48 bg-[#022c22] border-r border-gray-700 p-4 hidden sm:block">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-6 h-6 rounded bg-[#fbbf24]" />
                    <span className="text-white font-semibold text-sm">BrandGate</span>
                  </div>
                  <nav className="space-y-1">
                    {["Dashboard", "Online Store", "Orders", "Products", "Distributors", "Analytics"].map((item, i) => (
                      <div
                        key={item}
                        className={`px-3 py-2 rounded text-sm ${i === 0 ? 'bg-[#1a2e28] text-white' : 'text-gray-400 hover:text-white'}`}
                      >
                        {item}
                      </div>
                    ))}
                  </nav>
                </div>

                {/* Main content */}
                <div className="flex-1 p-4 sm:p-6">
                  {/* Top bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative flex-1 max-w-md">
                      <div className="h-9 bg-[#1a2e28] rounded-md border border-gray-700 flex items-center px-3">
                        <span className="text-gray-500 text-sm">Search orders, products...</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 ml-4">
                      <div className="w-8 h-8 rounded-full bg-[#1a2e28] border border-gray-700" />
                      <span className="text-white text-sm hidden sm:block">Acme Brands AB</span>
                    </div>
                  </div>

                  {/* Welcome section */}
                  <div className="mb-6">
                    <h2 className="text-white font-semibold text-lg mb-1">Welcome back, Admin</h2>
                    <p className="text-gray-400 text-sm">Monday, February 17, 2026</p>
                    <p className="text-gray-400 text-sm">Bromma, AB</p>
                  </div>

                  {/* Quick actions */}
                  <div className="flex gap-3 mb-6">
                    <button className="px-4 py-2 bg-[#1a2e28] text-gray-300 rounded-md text-sm border border-gray-700 hover:bg-[#2a3e38]">
                      New Order
                    </button>
                    <button className="px-4 py-2 bg-[#1a2e28] text-gray-300 rounded-md text-sm border border-gray-700 hover:bg-[#2a3e38]">
                      Add Product
                    </button>
                    <button className="px-4 py-2 bg-[#1a2e28] text-gray-300 rounded-md text-sm border border-gray-700 hover:bg-[#2a3e38]">
                      Invite
                    </button>
                  </div>

                  {/* Tabs */}
                  <div className="border-b border-gray-700 mb-4">
                    <div className="flex gap-6">
                      {["Overview", "Activity Log"].map((tab, i) => (
                        <button
                          key={tab}
                          className={`pb-3 text-sm ${i === 0 ? 'text-[#fbbf24] border-b-2 border-[#fbbf24]' : 'text-gray-400'}`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { label: "Total Revenue", value: "1.2M kr", change: "+12%" },
                      { label: "Orders This Month", value: "48", change: "+8%" },
                      { label: "Active Distributors", value: "156", change: "+3" },
                      { label: "Products", value: "2,847", change: "+24" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-[#1a2e28] rounded-lg p-4 border border-gray-700">
                        <p className="text-gray-400 text-xs mb-1">{stat.label}</p>
                        <p className="text-white font-semibold text-xl">{stat.value}</p>
                        <p className="text-[#22c55e] text-xs mt-1">{stat.change}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* White section below */}
      <section className="bg-white py-20">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <div className="w-12 h-0.5 bg-[#fbbf24] mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#022c22] mb-4">
              Everything You Need to Scale
            </h2>
            <p className="text-lg text-gray-600">
              From distributor management to automated invoicing, BrandGate provides all the tools you need to grow your B2B business.
            </p>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}

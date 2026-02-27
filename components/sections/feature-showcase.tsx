"use client";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/motion/fade-in";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const showcaseFeatures = [
  {
    badge: "Distributor Portal",
    title: "Give your distributors a branded experience",
    description: "Your distributors get their own branded login portal with tiered pricing, exclusive catalogs, and self-service ordering. Reduce support tickets while increasing order frequency.",
    features: [
      "Branded login with your logo and colors",
      "Tiered pricing based on volume or relationship",
      "Self-service order placement and tracking",
      "Exclusive catalogs for specific distributors",
    ],
    image: "distributor-portal",
    reversed: false,
  },
  {
    badge: "Order Management",
    title: "Real-time tracking from order to delivery",
    description: "Track every order in real-time, process bulk orders efficiently, and handle returns with ease. Keep your distributors informed at every step.",
    features: [
      "Real-time order status updates",
      "Bulk order processing and editing",
      "Automated email notifications",
      "Streamlined returns handling",
    ],
    image: "order-management",
    reversed: true,
  },
  {
    badge: "Automated Invoicing",
    title: "Get paid faster with automated invoicing",
    description: "Invoices are automatically generated from orders and sent to your accounting system. Track payments and reduce time-to-cash with automated reminders.",
    features: [
      "Auto-generate invoices from orders",
      "Integration with Fortnox, Visma, and more",
      "Payment tracking and reminders",
      "Multi-currency support",
    ],
    image: "invoicing",
    reversed: false,
  },
];

function ShowcaseCard({
  badge,
  title,
  description,
  features,
  reversed,
}: {
  badge: string;
  title: string;
  description: string;
  features: string[];
  reversed: boolean;
}) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
      <div className={reversed ? 'lg:order-2' : ''}>
        <Badge className="mb-4 bg-[#fbbf24]/10 text-[#fbbf24] hover:bg-[#fbbf24]/10 border-0">
          {badge}
        </Badge>
        <h3 className="text-2xl sm:text-3xl font-bold text-[#022c22] mb-4">
          {title}
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          {description}
        </p>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#022c22] flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-[#fbbf24]" />
              </div>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          variant="outline"
          className="border-[#022c22] text-[#022c22] hover:bg-[#022c22] hover:text-white"
          asChild
        >
          <Link href="/features">
            Learn more
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className={reversed ? 'lg:order-1' : ''}>
        <div className="relative aspect-[4/3] rounded-xl border border-gray-200 bg-[#f8faf9] shadow-lg overflow-hidden">
          <div className="absolute inset-0 p-6">
            {badge === "Distributor Portal" && (
              <div className="h-full flex flex-col">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-[#022c22]" />
                    <span className="font-semibold text-[#022c22]">Acme Distributors</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[#fbbf24]/10 text-[#fbbf24] text-xs font-medium">
                    Premium Partner
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-500">Available Credit</p>
                    <p className="text-xl font-semibold text-[#022c22]">250,000 kr</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-500">Active Orders</p>
                    <p className="text-xl font-semibold text-[#022c22]">12</p>
                  </div>
                  <div className="col-span-2 p-4 bg-white rounded-lg border border-gray-200">
                    <p className="text-sm font-medium text-[#022c22] mb-2">Quick Order</p>
                    <div className="h-20 bg-[#f8faf9] rounded" />
                  </div>
                </div>
              </div>
            )}
            {badge === "Order Management" && (
              <div className="h-full flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <div className="px-3 py-1 rounded-full bg-[#022c22] text-white text-xs">All Orders</div>
                  <div className="px-3 py-1 rounded-full bg-white text-gray-600 text-xs border border-gray-200">Pending</div>
                  <div className="px-3 py-1 rounded-full bg-white text-gray-600 text-xs border border-gray-200">Shipped</div>
                </div>
                <div className="space-y-2">
                  {["ORD-2024-001", "ORD-2024-002", "ORD-2024-003"].map((order, i) => (
                    <div key={i} className="p-3 bg-white rounded-lg border border-gray-200 flex items-center justify-between">
                      <div>
                        <p className="font-medium text-[#022c22]">{order}</p>
                        <p className="text-xs text-gray-500">Acme Distributors</p>
                      </div>
                      <div className={`px-2 py-1 rounded text-xs font-medium ${i === 0 ? 'bg-[#fbbf24]/10 text-[#fbbf24]' : i === 1 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
                        {i === 0 ? 'Processing' : i === 1 ? 'Shipped' : 'Delivered'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {badge === "Automated Invoicing" && (
              <div className="h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-[#022c22]">Recent Invoices</h4>
                  <div className="px-3 py-1 rounded bg-green-100 text-green-600 text-xs font-medium">
                    98% Paid on Time
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { id: "INV-001", amount: "45,000 kr", status: "Paid" },
                    { id: "INV-002", amount: "32,500 kr", status: "Pending" },
                    { id: "INV-003", amount: "67,200 kr", status: "Paid" },
                  ].map((inv, i) => (
                    <div key={i} className="p-3 bg-white rounded-lg border border-gray-200 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-[#f8faf9] flex items-center justify-center">
                          <FileTextIcon />
                        </div>
                        <div>
                          <p className="font-medium text-[#022c22]">{inv.id}</p>
                          <p className="text-xs text-gray-500">{inv.amount}</p>
                        </div>
                      </div>
                      <div className={`px-2 py-1 rounded text-xs font-medium ${inv.status === 'Paid' ? 'bg-green-100 text-green-600' : 'bg-[#fbbf24]/10 text-[#fbbf24]'}`}>
                        {inv.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FileTextIcon() {
  return (
    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

export function FeatureShowcase() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <Container>
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-12 h-0.5 bg-[#fbbf24] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#022c22] mb-4">
            Built for how Nordic brands work
          </h2>
          <p className="text-lg text-gray-600">
            Every feature is designed to solve real problems for brands distributing through wholesalers and retailers.
          </p>
        </ScrollReveal>

        <div className="space-y-20 lg:space-y-32">
          {showcaseFeatures.map((feature, index) => (
            <ScrollReveal key={feature.badge} delay={index * 0.1}>
              <ShowcaseCard {...feature} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

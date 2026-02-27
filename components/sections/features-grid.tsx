"use client";

import { Container } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import {
  Building2,
  ShoppingCart,
  Package,
  FileText,
  BarChart3,
  Store,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Building2,
    title: "Distributor Portal",
    description: "Branded login, tiered pricing, and self-service ordering for your distribution network.",
    href: "/features#distributor-portal",
  },
  {
    icon: ShoppingCart,
    title: "Order Management",
    description: "Real-time tracking, bulk processing, and streamlined returns handling.",
    href: "/features#order-management",
  },
  {
    icon: Package,
    title: "Product Catalog",
    description: "Unlimited SKUs, variants, and automated inventory alerts across all channels.",
    href: "/features#product-catalog",
  },
  {
    icon: FileText,
    title: "Automated Invoicing",
    description: "Auto-generate invoices from orders with payment tracking and accounting exports.",
    href: "/features#invoicing",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Revenue dashboards, distributor rankings, and exportable business reports.",
    href: "/features#analytics",
  },
  {
    icon: Store,
    title: "Online Store Builder",
    description: "Drag-and-drop editor with mobile-responsive themes and brand customization.",
    href: "/features#store-builder",
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-20 lg:py-32 bg-[#f8faf9]">
      <Container>
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <Link href={feature.href} className="group block h-full">
                <Card className="h-full border-0 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#022c22] text-[#fbbf24]">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#022c22] mb-2 group-hover:text-[#065f46] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-[#fbbf24]">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "790",
    description: "Perfect for small brands just getting started with B2B distribution.",
    features: [
      "Up to 5 distributors",
      "1,000 products",
      "Basic order management",
      "Email support",
      "Fortnox integration",
      "Standard reports",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "1,490",
    description: "For growing brands with expanding distributor networks.",
    features: [
      "Up to 25 distributors",
      "10,000 products",
      "Advanced order management",
      "Priority support",
      "All integrations",
      "Custom reports",
      "Branded distributor portal",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "2,990",
    description: "For established brands with complex distribution needs.",
    features: [
      "Unlimited distributors",
      "Unlimited products",
      "Advanced automation",
      "24/7 phone support",
      "Custom integrations",
      "Advanced analytics",
      "White-label solution",
      "Dedicated account manager",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <Container>
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <div className="w-12 h-0.5 bg-[#fbbf24] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#022c22] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </ScrollReveal>

        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <Card className={`h-full border-0 shadow-sm ${plan.popular ? 'ring-2 ring-[#fbbf24] relative' : 'bg-white'}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#fbbf24] text-[#022c22] hover:bg-[#fbbf24] font-semibold">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="pb-6">
                  <h3 className="text-xl font-semibold text-[#022c22]">
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-[#022c22]">
                      {plan.price}
                    </span>
                    <span className="text-gray-500">kr/mo</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-[#fbbf24] hover:bg-[#f59e0b] text-[#022c22] font-semibold'
                        : 'border-2 border-[#022c22] text-[#022c22] hover:bg-[#022c22] hover:text-white'
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <a href="https://app.brandgate.dev/signup">
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#fbbf24] shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.4} className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Need a custom solution?{" "}
            <Link href="/contact" className="text-[#fbbf24] font-medium hover:underline">
              Contact our sales team
            </Link>
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

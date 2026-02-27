"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/fade-in";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-[#022c22] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#065f46] to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#fbbf24] to-transparent opacity-10" />

      <Container className="relative z-10">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <div className="w-12 h-0.5 bg-[#fbbf24] mx-auto mb-8" />
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Ready to Transform Your Distribution?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Join hundreds of Nordic brands already using BrandGate to streamline their B2B operations and grow their wholesale business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#fbbf24] hover:bg-[#f59e0b] text-[#022c22] px-8 h-12 text-base font-semibold"
              asChild
            >
              <a href="https://app.brandgate.dev/signup">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 h-12 text-base bg-transparent"
              asChild
            >
              <Link href="/contact">
                Book a Demo
              </Link>
            </Button>
          </div>

          <p className="mt-8 text-sm text-white/50">
            No credit card required · 14-day free trial · Cancel anytime
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

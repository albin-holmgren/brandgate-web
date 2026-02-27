"use client";

import { Container } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "BrandGate transformed how we manage our distributor network. We've reduced order processing time by 60% and our distributors love the self-service portal.",
    author: "Maria Lindqvist",
    role: "CEO, Nordic Home Goods",
    location: "Stockholm, Sweden",
  },
  {
    quote: "The automated invoicing feature alone has saved us countless hours. Integration with Fortnox was seamless and we get paid faster than ever.",
    author: "Anders Johansson",
    role: "CFO, ScandiDesign AB",
    location: "Gothenburg, Sweden",
  },
  {
    quote: "We evaluated several B2B platforms but BrandGate was the only one that truly understood the Nordic wholesale market. Highly recommended.",
    author: "Erik Nilsson",
    role: "Sales Director, Baltic Traders",
    location: "Copenhagen, Denmark",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-[#f8faf9]">
      <Container>
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <div className="w-12 h-0.5 bg-[#fbbf24] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#022c22] mb-4">
            Trusted by Nordic Brands
          </h2>
          <p className="text-lg text-gray-600">
            See what our customers have to say about their experience with BrandGate.
          </p>
        </ScrollReveal>

        <StaggerContainer
          staggerDelay={0.15}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <Card className="h-full border-0 bg-white shadow-sm">
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="h-8 w-8 text-[#fbbf24] mb-4" />
                  <p className="text-[#022c22] mb-6 flex-1 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="font-semibold text-[#022c22]">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

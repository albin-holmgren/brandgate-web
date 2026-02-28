// Distribution ROI Calculator - CORRECT BrandGate Styling
// Uses actual brand colors from globals.css

"use client";

import { useState } from "react";
import { Calculator, Clock, DollarSign, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ROICalculator() {
  const [inputs, setInputs] = useState({
    distributors: 10,
    ordersPerMonth: 50,
    hoursPerOrder: 2,
    hourlyRate: 50,
    errorRate: 5,
    errorCost: 200,
  });

  const calculateSavings = () => {
    const {
      distributors,
      ordersPerMonth,
      hoursPerOrder,
      hourlyRate,
      errorRate,
      errorCost,
    } = inputs;

    const monthlyHours = ordersPerMonth * hoursPerOrder;
    const monthlyLaborCost = monthlyHours * hourlyRate;
    const monthlyErrorCost = (ordersPerMonth * (errorRate / 100)) * errorCost;
    const currentMonthlyCost = monthlyLaborCost + monthlyErrorCost;

    const bgHoursPerOrder = 0.5;
    const bgErrorRate = 1;
    const bgMonthlyHours = ordersPerMonth * bgHoursPerOrder;
    const bgMonthlyLaborCost = bgMonthlyHours * hourlyRate;
    const bgMonthlyErrorCost = (ordersPerMonth * (bgErrorRate / 100)) * errorCost;
    const bgMonthlyCost = bgMonthlyLaborCost + bgMonthlyErrorCost;
    const bgSubscriptionCost = distributors <= 5 ? 79 : distributors <= 20 ? 199 : 499;

    const monthlySavings = currentMonthlyCost - bgMonthlyCost - bgSubscriptionCost;
    const yearlySavings = monthlySavings * 12;
    const hoursSaved = monthlyHours - bgMonthlyHours;
    const roi = yearlySavings > 0 ? ((yearlySavings / (bgSubscriptionCost * 12)) * 100).toFixed(0) : "0";

    return {
      currentMonthlyCost,
      bgMonthlyCost,
      bgSubscriptionCost,
      monthlySavings,
      yearlySavings,
      hoursSaved,
      roi,
    };
  };

  const results = calculateSavings();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#4D4D4D] font-sans">
      {/* Header - Matching brandgate.dev */}
      <header className="sticky top-0 z-50 bg-[#F5F5F5] border-b border-[#E3E3E3]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo-cropped.png" alt="BrandGate" className="h-8 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-sm font-medium text-[#6E6B6B] hover:text-[#003822] transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-[#6E6B6B] hover:text-[#003822] transition-colors">
              Pricing
            </Link>
            <Link href="/blog" className="text-sm font-medium text-[#6E6B6B] hover:text-[#003822] transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium text-[#6E6B6B] hover:text-[#003822] transition-colors">
              Contact
            </Link>
          </nav>
          <Link
            href="/signup"
            className="hidden md:inline-flex items-center justify-center text-sm font-semibold bg-[#E5A400] text-[#1A1A1A] hover:bg-[#E5A400]/90 rounded-full px-6 h-10 transition-all"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#F5F5F5] border-b border-[#E3E3E3]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
          <div className="w-16 h-1 bg-[#E5A400] mx-auto mb-8" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-[#003822] max-w-4xl mx-auto">
            Distribution ROI Calculator
          </h1>
          <p className="text-[#6E6B6B] text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed">
            Calculate how much time and money you could save with automated distribution management.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="bg-white rounded-2xl border border-[#E3E3E3] p-8 shadow-sm">
              <h2 className="text-xl font-semibold mb-8 flex items-center gap-3 text-[#003822]">
                <Calculator className="w-5 h-5 text-[#E5A400]" />
                Your Current Setup
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#4D4D4D] mb-3">
                    Number of Distributors
                  </label>
                  <input
                    type="number"
                    value={inputs.distributors}
                    onChange={(e) => setInputs({ ...inputs, distributors: Number(e.target.value) })}
                    className="w-full px-4 py-3 bg-[#F5F5F5] border border-[#E3E3E3] rounded-lg text-[#4D4D4D] focus:border-[#003822] focus:outline-none focus:ring-2 focus:ring-[#003822]/20 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#4D4D4D] mb-3">
                    Orders Per Month
                  </label>
                  <input
                    type="number"
                    value={inputs.ordersPerMonth}
                    onChange={(e) => setInputs({ ...inputs, ordersPerMonth: Number(e.target.value) })}
                    className="w-full px-4 py-3 bg-[#F5F5F5] border border-[#E3E3E3] rounded-lg text-[#4D4D4D] focus:border-[#003822] focus:outline-none focus:ring-2 focus:ring-[#003822]/20 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#4D4D4D] mb-3">
                    Hours Spent Per Order
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    value={inputs.hoursPerOrder}
                    onChange={(e) => setInputs({ ...inputs, hoursPerOrder: Number(e.target.value) })}
                    className="w-full px-4 py-3 bg-[#F5F5F5] border border-[#E3E3E3] rounded-lg text-[#4D4D4D] focus:border-[#003822] focus:outline-none focus:ring-2 focus:ring-[#003822]/20 transition-colors"
                  />
                  <p className="text-xs text-[#6E6B6B] mt-2">
                    Includes order entry, communication, invoicing, tracking
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#4D4D4D] mb-3">
                    Average Hourly Rate ($)
                  </label>
                  <input
                    type="number"
                    value={inputs.hourlyRate}
                    onChange={(e) => setInputs({ ...inputs, hourlyRate: Number(e.target.value) })}
                    className="w-full px-4 py-3 bg-[#F5F5F5] border border-[#E3E3E3] rounded-lg text-[#4D4D4D] focus:border-[#003822] focus:outline-none focus:ring-2 focus:ring-[#003822]/20 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#4D4D4D] mb-3">
                    Error Rate (%)
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    value={inputs.errorRate}
                    onChange={(e) => setInputs({ ...inputs, errorRate: Number(e.target.value) })}
                    className="w-full px-4 py-3 bg-[#F5F5F5] border border-[#E3E3E3] rounded-lg text-[#4D4D4D] focus:border-[#003822] focus:outline-none focus:ring-2 focus:ring-[#003822]/20 transition-colors"
                  />
                  <p className="text-xs text-[#6E6B6B] mt-2">
                    Wrong products, pricing errors, shipping mistakes
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#4D4D4D] mb-3">
                    Average Cost Per Error ($)
                  </label>
                  <input
                    type="number"
                    value={inputs.errorCost}
                    onChange={(e) => setInputs({ ...inputs, errorCost: Number(e.target.value) })}
                    className="w-full px-4 py-3 bg-[#F5F5F5] border border-[#E3E3E3] rounded-lg text-[#4D4D4D] focus:border-[#003822] focus:outline-none focus:ring-2 focus:ring-[#003822]/20 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              {/* Main Savings Card */}
              <div className="bg-[#003822] text-white rounded-2xl p-8">
                <h3 className="text-lg font-medium mb-2 text-white/80">Your Potential Savings</h3>
                <div className="text-5xl font-bold mb-1">
                  {formatCurrency(results.yearlySavings)}
                </div>
                <p className="text-white/70">per year</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#E5A400]">
                  <TrendingUp className="w-4 h-4" />
                  <span>{results.roi}% ROI with BrandGate</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-[#E3E3E3] p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-[#003822]" />
                    <span className="text-sm text-[#6E6B6B]">Hours Saved</span>
                  </div>
                  <div className="text-2xl font-bold text-[#003822]">
                    {Math.round(results.hoursSaved * 12)} hrs
                  </div>
                  <p className="text-xs text-[#6E6B6B] mt-1">per year</p>
                </div>

                <div className="bg-white rounded-2xl border border-[#E3E3E3] p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <DollarSign className="w-4 h-4 text-[#003822]" />
                    <span className="text-sm text-[#6E6B6B]">Monthly Savings</span>
                  </div>
                  <div className="text-2xl font-bold text-[#003822]">
                    {formatCurrency(results.monthlySavings)}
                  </div>
                  <p className="text-xs text-[#6E6B6B] mt-1">vs current process</p>
                </div>
              </div>

              {/* Cost Comparison */}
              <div className="bg-white rounded-2xl border border-[#E3E3E3] p-8 shadow-sm">
                <h3 className="font-semibold mb-6 text-[#003822]">Cost Comparison</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-[#E3E3E3]">
                    <span className="text-[#6E6B6B]">Current Monthly Cost</span>
                    <span className="font-semibold text-[#4D4D4D]">
                      {formatCurrency(results.currentMonthlyCost)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-[#E3E3E3]">
                    <span className="text-[#6E6B6B]">BrandGate Subscription</span>
                    <span className="font-semibold text-[#4D4D4D]">
                      {formatCurrency(results.bgSubscriptionCost)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[#003822]">
                    <span className="font-medium">Monthly Savings</span>
                    <span className="font-bold text-xl">
                      {formatCurrency(results.monthlySavings)}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-white rounded-2xl border border-[#E3E3E3] p-8 text-center shadow-sm">
                <h3 className="font-semibold mb-2 text-[#003822]">Ready to save time and money?</h3>
                <p className="text-[#6E6B6B] text-sm mb-6">
                  Join brands already streamlining their distribution
                </p>
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 text-base font-semibold bg-[#E5A400] text-[#1A1A1A] hover:bg-[#E5A400]/90 rounded-full px-10 h-12 transition-all"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-[#003822] mb-2">75%</div>
              <p className="text-[#6E6B6B]">Less time on order processing</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#003822] mb-2">80%</div>
              <p className="text-[#6E6B6B]">Reduction in order errors</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[#003822] mb-2">10x</div>
              <p className="text-[#6E6B6B]">ROI within first year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F5F5F5] border-t border-[#E3E3E3] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#6E6B6B] text-sm">
              © 2024 BrandGate. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-[#6E6B6B] hover:text-[#003822] transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-[#6E6B6B] hover:text-[#003822] transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

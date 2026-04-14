"use client";

import { useState } from "react";
import { Calculator, Clock, DollarSign, TrendingUp, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/motion/fade-in";

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

  const inputClass =
    "w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors";
  const labelClass = "block text-sm font-medium text-foreground mb-3";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section aria-label="ROI calculator hero" className="relative bg-primary text-primary-foreground py-24 md:py-32">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <div className="w-16 h-1 bg-gold mx-auto mb-8" />
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase leading-[1.1]">
                Distribution ROI Calculator
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/50 text-lg md:text-xl mt-8 max-w-2xl mx-auto font-light">
                Estimate how much time and money you could save with automated distribution management.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Inputs */}
              <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                <h2 className="text-xl font-semibold mb-8 flex items-center gap-3 text-foreground">
                  <Calculator className="w-5 h-5 text-gold" aria-hidden="true" />
                  Your current setup
                </h2>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="distributors" className={labelClass}>Number of distributors</label>
                    <input
                      id="distributors"
                      type="number"
                      value={inputs.distributors}
                      onChange={(e) => setInputs({ ...inputs, distributors: Number(e.target.value) })}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="ordersPerMonth" className={labelClass}>Orders per month</label>
                    <input
                      id="ordersPerMonth"
                      type="number"
                      value={inputs.ordersPerMonth}
                      onChange={(e) => setInputs({ ...inputs, ordersPerMonth: Number(e.target.value) })}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="hoursPerOrder" className={labelClass}>Hours spent per order</label>
                    <input
                      id="hoursPerOrder"
                      type="number"
                      step="0.5"
                      value={inputs.hoursPerOrder}
                      onChange={(e) => setInputs({ ...inputs, hoursPerOrder: Number(e.target.value) })}
                      className={inputClass}
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      Includes order entry, communication, invoicing, tracking.
                    </p>
                  </div>

                  <div>
                    <label htmlFor="hourlyRate" className={labelClass}>Average hourly rate ($)</label>
                    <input
                      id="hourlyRate"
                      type="number"
                      value={inputs.hourlyRate}
                      onChange={(e) => setInputs({ ...inputs, hourlyRate: Number(e.target.value) })}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="errorRate" className={labelClass}>Error rate (%)</label>
                    <input
                      id="errorRate"
                      type="number"
                      step="0.5"
                      value={inputs.errorRate}
                      onChange={(e) => setInputs({ ...inputs, errorRate: Number(e.target.value) })}
                      className={inputClass}
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      Wrong products, pricing errors, shipping mistakes.
                    </p>
                  </div>

                  <div>
                    <label htmlFor="errorCost" className={labelClass}>Average cost per error ($)</label>
                    <input
                      id="errorCost"
                      type="number"
                      value={inputs.errorCost}
                      onChange={(e) => setInputs({ ...inputs, errorCost: Number(e.target.value) })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <p className="mt-6 text-xs text-muted-foreground">
                  Estimates only — based on the inputs you provide and typical workflow assumptions for BrandGate.
                </p>
              </div>

              {/* Results */}
              <div className="space-y-6">
                <div className="bg-primary text-primary-foreground rounded-2xl p-8">
                  <h3 className="text-lg font-medium mb-2 text-primary-foreground/80">Your potential savings</h3>
                  <div className="text-5xl font-bold mb-1">{formatCurrency(results.yearlySavings)}</div>
                  <p className="text-primary-foreground/70">per year</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-gold">
                    <TrendingUp className="w-4 h-4" aria-hidden="true" />
                    <span>{results.roi}% estimated ROI with BrandGate</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">Hours saved</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      {Math.round(results.hoursSaved * 12)} hrs
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">per year</p>
                  </div>

                  <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <DollarSign className="w-4 h-4 text-primary" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">Monthly savings</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      {formatCurrency(results.monthlySavings)}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">vs current process</p>
                  </div>
                </div>

                <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                  <h3 className="font-semibold mb-6 text-foreground">Cost comparison</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-border">
                      <span className="text-muted-foreground">Current monthly cost</span>
                      <span className="font-semibold text-foreground">
                        {formatCurrency(results.currentMonthlyCost)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-border">
                      <span className="text-muted-foreground">BrandGate subscription</span>
                      <span className="font-semibold text-foreground">
                        {formatCurrency(results.bgSubscriptionCost)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-primary">
                      <span className="font-medium">Monthly savings</span>
                      <span className="font-bold text-xl">
                        {formatCurrency(results.monthlySavings)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl border border-border p-8 text-center shadow-sm">
                  <h3 className="font-semibold mb-2 text-foreground">Ready to save time and money?</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Start a free trial and see your numbers for real.
                  </p>
                  <a
                    href="https://app.brandgate.dev/signup"
                    className="inline-flex items-center justify-center gap-2 text-base font-semibold bg-gold text-gold-foreground hover:bg-gold/90 rounded-full px-10 h-12 transition-all"
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

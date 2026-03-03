// Distribution ROI Calculator
// Save as: app/tools/distribution-roi-calculator/page.tsx

"use client";

import { useState } from "react";
import { Calculator, Clock, DollarSign, Users, TrendingUp } from "lucide-react";

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

    // Current costs
    const monthlyHours = ordersPerMonth * hoursPerOrder;
    const monthlyLaborCost = monthlyHours * hourlyRate;
    const monthlyErrorCost = (ordersPerMonth * (errorRate / 100)) * errorCost;
    const currentMonthlyCost = monthlyLaborCost + monthlyErrorCost;

    // With BrandGate (estimated improvements)
    const bgHoursPerOrder = 0.5; // 75% reduction
    const bgErrorRate = 1; // 80% reduction
    const bgMonthlyHours = ordersPerMonth * bgHoursPerOrder;
    const bgMonthlyLaborCost = bgMonthlyHours * hourlyRate;
    const bgMonthlyErrorCost = (ordersPerMonth * (bgErrorRate / 100)) * errorCost;
    const bgMonthlyCost = bgMonthlyLaborCost + bgMonthlyErrorCost;

    // BrandGate cost (estimated based on distributors)
    const bgSubscriptionCost = distributors <= 5 ? 79 : distributors <= 20 ? 199 : 499;

    // Net savings
    const monthlySavings = currentMonthlyCost - bgMonthlyCost - bgSubscriptionCost;
    const yearlySavings = monthlySavings * 12;
    const hoursSaved = monthlyHours - bgMonthlyHours;
    const roi = ((yearlySavings / (bgSubscriptionCost * 12)) * 100).toFixed(0);

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
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-slate-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            Distribution ROI Calculator
          </h1>
          <p className="text-slate-400 text-lg">
            Calculate how much time and money you could save with automated distribution management.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-blue-600" />
              Your Current Setup
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Number of Distributors
                </label>
                <input
                  type="number"
                  value={inputs.distributors}
                  onChange={(e) =>
                    setInputs({ ...inputs, distributors: Number(e.target.value) })
                  }
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Orders Processed Per Month
                </label>
                <input
                  type="number"
                  value={inputs.ordersPerMonth}
                  onChange={(e) =>
                    setInputs({ ...inputs, ordersPerMonth: Number(e.target.value) })
                  }
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Hours Spent Per Order
                </label>
                <input
                  type="number"
                  step="0.5"
                  value={inputs.hoursPerOrder}
                  onChange={(e) =>
                    setInputs({ ...inputs, hoursPerOrder: Number(e.target.value) })
                  }
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-xs text-slate-500 mt-1">
                  Includes order entry, communication, invoicing, tracking
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Average Hourly Rate ($)
                </label>
                <input
                  type="number"
                  value={inputs.hourlyRate}
                  onChange={(e) =>
                    setInputs({ ...inputs, hourlyRate: Number(e.target.value) })
                  }
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Error Rate (%)
                </label>
                <input
                  type="number"
                  step="0.5"
                  value={inputs.errorRate}
                  onChange={(e) =>
                    setInputs({ ...inputs, errorRate: Number(e.target.value) })
                  }
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-xs text-slate-500 mt-1">
                  Wrong products, pricing errors, shipping mistakes
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Average Cost Per Error ($)
                </label>
                <input
                  type="number"
                  value={inputs.errorCost}
                  onChange={(e) =>
                    setInputs({ ...inputs, errorCost: Number(e.target.value) })
                  }
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Main Savings Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-medium mb-2">Your Potential Savings</h3>
              <div className="text-4xl font-bold mb-1">
                {formatCurrency(results.yearlySavings)}
              </div>
              <p className="text-blue-100">per year</p>
              <div className="mt-4 flex items-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>{results.roi}% ROI with BrandGate</span>
              </div>
            </div>

            {/* Breakdown Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm text-slate-600">Hours Saved</span>
                </div>
                <div className="text-2xl font-bold text-slate-900">
                  {Math.round(results.hoursSaved * 12)} hrs
                </div>
                <p className="text-xs text-slate-500">per year</p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-slate-600">Monthly Savings</span>
                </div>
                <div className="text-2xl font-bold text-slate-900">
                  {formatCurrency(results.monthlySavings)}
                </div>
                <p className="text-xs text-slate-500">vs current process</p>
              </div>
            </div>

            {/* Current vs BrandGate */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="font-semibold mb-4">Cost Comparison</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                  <span className="text-slate-600">Current Monthly Cost</span>
                  <span className="font-semibold text-slate-900">
                    {formatCurrency(results.currentMonthlyCost)}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                  <span className="text-slate-600">BrandGate Subscription</span>
                  <span className="font-semibold text-slate-900">
                    {formatCurrency(results.bgSubscriptionCost)}
                  </span>
                </div>
                <div className="flex justify-between items-center text-emerald-600">
                  <span className="font-medium">Monthly Savings</span>
                  <span className="font-bold text-lg">
                    {formatCurrency(results.monthlySavings)}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-slate-900 text-white rounded-xl p-6 text-center">
              <h3 className="font-semibold mb-2">Ready to save time and money?</h3>
              <p className="text-slate-400 text-sm mb-4">
                Join brands already streamlining their distribution
              </p>
              <a
                href="/signup"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <div className="text-3xl font-bold text-slate-900 mb-1">75%</div>
            <p className="text-slate-600">Less time on order processing</p>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-slate-900 mb-1">80%</div>
            <p className="text-slate-600">Reduction in order errors</p>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-slate-900 mb-1">10x</div>
            <p className="text-slate-600">ROI within first year</p>
          </div>
        </div>
      </div>
    </div>
  );
}

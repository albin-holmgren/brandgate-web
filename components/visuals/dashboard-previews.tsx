"use client";

import React from "react";

// Dashboard Preview Component - Shows actual UI mockup
export function DashboardPreview() {
  return (
    <div className="relative w-full max-w-2xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
      {/* Browser Chrome */}
      <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 text-center">
          <div className="bg-white px-4 py-1 rounded-md text-xs text-gray-500 inline-block">app.brandgate.dev</div>
        </div>
      </div>
      
      {/* Dashboard Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900">Dashboard</h3>
            <p className="text-sm text-gray-500">Welcome back, Nordic Apparel</p>
          </div>
          <div className="flex gap-2">
            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">12 New Orders</div>
          </div>
        </div>
        
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: "Revenue", value: "€24,500", change: "+12%" },
            { label: "Orders", value: "156", change: "+8%" },
            { label: "Retailers", value: "42", change: "+3" },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-50 p-3 rounded-lg">
              <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
              <p className="text-lg font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs text-green-600">{stat.change}</p>
            </div>
          ))}
        </div>
        
        {/* Recent Orders Table */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Recent Orders</h4>
          <div className="space-y-2">
            {[
              { retailer: "Boutique Stockholm", items: "12 items", total: "€2,400", status: "Processing" },
              { retailer: "Fashion House", items: "24 items", total: "€4,800", status: "Shipped" },
              { retailer: "Nordic Retail", items: "8 items", total: "€1,600", status: "Delivered" },
            ].map((order, i) => (
              <div key={i} className="flex items-center justify-between bg-white p-3 rounded-md text-sm">
                <div>
                  <p className="font-medium text-gray-900">{order.retailer}</p>
                  <p className="text-gray-500 text-xs">{order.items}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{order.total}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    order.status === "Processing" ? "bg-yellow-100 text-yellow-700" :
                    order.status === "Shipped" ? "bg-blue-100 text-blue-700" :
                    "bg-green-100 text-green-700"
                  }`}>{order.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Distributor Portal Preview
export function PortalPreview() {
  return (
    <div className="relative w-full max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-primary px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white font-bold text-sm">N</div>
          <span className="text-white font-semibold">Nordic Apparel</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Product Catalog</h4>
          <div className="grid grid-cols-2 gap-2">
            {[
              { name: "Summer Dress", price: "€45", color: "bg-pink-100" },
              { name: "Linen Shirt", price: "€35", color: "bg-blue-100" },
              { name: "Cotton Tee", price: "€25", color: "bg-gray-100" },
              { name: "Wool Sweater", price: "€65", color: "bg-amber-100" },
            ].map((product) => (
              <div key={product.name} className={`${product.color} p-3 rounded-lg`}>
                <div className="w-full h-16 bg-white/50 rounded-md mb-2" />
                <p className="text-xs font-medium text-gray-900">{product.name}</p>
                <p className="text-xs text-gray-600">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
        
        <button className="w-full bg-primary text-white py-2.5 rounded-lg text-sm font-medium">
          View Full Catalog
        </button>
      </div>
    </div>
  );
}

// Order Management Flow
export function OrderFlowGraphic() {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="flex items-center justify-between gap-4">
        {[
          { step: "1", label: "Order Placed", icon: "🛒", color: "bg-blue-500" },
          { step: "2", label: "Processing", icon: "⚙️", color: "bg-yellow-500" },
          { step: "3", label: "Shipped", icon: "📦", color: "bg-purple-500" },
          { step: "4", label: "Delivered", icon: "✅", color: "bg-green-500" },
        ].map((item, i) => (
          <React.Fragment key={item.step}>
            <div className="flex flex-col items-center">
              <div className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center text-2xl shadow-lg mb-2`}>
                {item.icon}
              </div>
              <div className="text-center">
                <p className="text-xs font-bold text-gray-900">Step {item.step}</p>
                <p className="text-xs text-gray-500">{item.label}</p>
              </div>
            </div>
            {i < 3 && (
              <div className="flex-1 h-1 bg-gray-200 rounded-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// Feature Showcase Card
export function FeatureShowcase({ 
  title, 
  description, 
  visual 
}: { 
  title: string; 
  description: string; 
  visual: React.ReactNode;
}) {
  return (
    <div className="bg-card border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
      </div>
      <div className="bg-muted px-6 py-4">
        {visual}
      </div>
    </div>
  );
}

// Integration Grid
export function IntegrationGrid() {
  const integrations = [
    { name: "Shopify", color: "bg-green-500", icon: "S" },
    { name: "WooCommerce", color: "bg-purple-500", icon: "W" },
    { name: "Fortnox", color: "bg-blue-500", icon: "F" },
    { name: "Visma", color: "bg-red-500", icon: "V" },
    { name: "Stripe", color: "bg-indigo-500", icon: "St" },
    { name: "Klarna", color: "bg-pink-500", icon: "K" },
  ];
  
  return (
    <div className="grid grid-cols-3 gap-4">
      {integrations.map((int) => (
        <div key={int.name} className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center gap-2 hover:shadow-md transition-shadow">
          <div className={`w-10 h-10 ${int.color} rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
            {int.icon}
          </div>
          <span className="text-xs font-medium text-gray-700">{int.name}</span>
        </div>
      ))}
    </div>
  );
}

// Mobile App Preview
export function MobilePreview() {
  return (
    <div className="relative w-48 mx-auto">
      <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
        <div className="bg-white rounded-[2rem] overflow-hidden">
          {/* Notch */}
          <div className="h-6 bg-gray-900 mx-16 rounded-b-xl" />
          
          {/* Screen */}
          <div className="p-4 space-y-3">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary/10 rounded-lg" />
              <div>
                <div className="h-2 w-20 bg-gray-200 rounded" />
                <div className="h-1.5 w-12 bg-gray-100 rounded mt-1" />
              </div>
            </div>
            
            <div className="bg-primary/5 p-3 rounded-xl">
              <div className="h-2 w-24 bg-primary/20 rounded mb-2" />
              <div className="text-2xl font-bold text-primary">€24.5k</div>
              <div className="text-xs text-green-600">+12% this month</div>
            </div>
            
            <div className="space-y-2">
              <div className="h-10 bg-gray-50 rounded-lg" />
              <div className="h-10 bg-gray-50 rounded-lg" />
              <div className="h-10 bg-gray-50 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Analytics Chart
export function AnalyticsChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-gray-700">Revenue Growth</span>
        <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">+23%</span>
      </div>
      <div className="flex items-end gap-2 h-24">
        {[40, 55, 45, 70, 60, 85, 90].map((height, i) => (
          <div key={i} className="flex-1 bg-primary/10 rounded-t-md relative group">
            <div 
              className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-md transition-all duration-500"
              style={{ height: `${height}%` }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-2 text-xs text-gray-400">
        <span>Mon</span>
        <span>Sun</span>
      </div>
    </div>
  );
}

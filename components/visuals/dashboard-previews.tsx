"use client";

import React from "react";
import {
  ShoppingCart,
  Cog,
  Truck,
  CheckCircle2,
  ShoppingBag,
  Calculator,
  CreditCard,
} from "lucide-react";

// Dashboard preview — a product screenshot stylized in the brand palette.
export function DashboardPreview() {
  return (
    <div className="relative w-full max-w-2xl mx-auto bg-card rounded-xl shadow-2xl overflow-hidden border border-border">
      {/* Browser chrome */}
      <div className="bg-muted px-4 py-3 flex items-center gap-2 border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
        </div>
        <div className="flex-1 text-center">
          <div className="bg-card px-4 py-1 rounded-md text-xs text-muted-foreground inline-block">
            app.brandgate.dev
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-foreground">Dashboard</h3>
            <p className="text-sm text-muted-foreground">Today&rsquo;s overview</p>
          </div>
          <div className="flex gap-2">
            <div className="bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-medium">
              12 New Orders
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: "Revenue", value: "€24,500" },
            { label: "Orders", value: "156" },
            { label: "Retailers", value: "42" },
          ].map((stat) => (
            <div key={stat.label} className="bg-muted p-3 rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-lg font-bold text-foreground">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-muted rounded-lg p-4">
          <h4 className="text-sm font-semibold text-foreground mb-3">Recent orders</h4>
          <div className="space-y-2">
            {[
              { retailer: "Order #1048", items: "12 items", total: "€2,400", status: "Processing" },
              { retailer: "Order #1047", items: "24 items", total: "€4,800", status: "Shipped" },
              { retailer: "Order #1046", items: "8 items", total: "€1,600", status: "Delivered" },
            ].map((order) => (
              <div key={order.retailer} className="flex items-center justify-between bg-card p-3 rounded-md text-sm border border-border">
                <div>
                  <p className="font-medium text-foreground">{order.retailer}</p>
                  <p className="text-muted-foreground text-xs">{order.items}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-foreground">{order.total}</p>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      order.status === "Processing"
                        ? "bg-muted-foreground/10 text-muted-foreground"
                        : order.status === "Shipped"
                        ? "bg-gold/10 text-gold"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Distributor portal preview — brand-only palette.
export function PortalPreview() {
  return (
    <div className="relative w-full max-w-md mx-auto bg-card rounded-xl shadow-2xl overflow-hidden border border-border">
      <div className="bg-primary px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm">
            B
          </div>
          <span className="text-primary-foreground font-semibold">Your brand portal</span>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-foreground mb-3">Product catalog</h4>
          <div className="grid grid-cols-2 gap-2">
            {[
              { name: "Product A", price: "€45" },
              { name: "Product B", price: "€35" },
              { name: "Product C", price: "€25" },
              { name: "Product D", price: "€65" },
            ].map((product) => (
              <div key={product.name} className="bg-muted p-3 rounded-lg border border-border">
                <div className="w-full h-16 bg-card rounded-md mb-2 border border-border" />
                <p className="text-xs font-medium text-foreground">{product.name}</p>
                <p className="text-xs text-muted-foreground">{product.price}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg text-sm font-medium"
        >
          View full catalog
        </button>
      </div>
    </div>
  );
}

// Order flow — primary circles with a gold accent for the current step.
export function OrderFlowGraphic() {
  const steps = [
    { label: "Order placed", icon: ShoppingCart },
    { label: "Processing", icon: Cog },
    { label: "Shipped", icon: Truck },
    { label: "Delivered", icon: CheckCircle2 },
  ];
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="flex items-center justify-between gap-4">
        {steps.map((item, i) => (
          <React.Fragment key={item.label}>
            <div className="flex flex-col items-center">
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-2 ${
                  i === 1 ? "bg-gold text-gold-foreground" : "bg-primary text-primary-foreground"
                }`}
              >
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="text-center">
                <p className="text-xs font-bold text-foreground">Step {i + 1}</p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </div>
            </div>
            {i < steps.length - 1 && <div className="flex-1 h-[2px] bg-border rounded-full" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// Integration grid — monochrome tiles, no external brand colors.
export function IntegrationGrid() {
  const integrations = [
    { name: "Shopify", icon: ShoppingBag },
    { name: "WooCommerce", icon: ShoppingBag },
    { name: "Fortnox", icon: Calculator },
    { name: "Visma", icon: Calculator },
    { name: "Stripe", icon: CreditCard },
    { name: "Klarna", icon: CreditCard },
  ];

  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
      {integrations.map((int) => (
        <div
          key={int.name}
          className="bg-card border border-border p-4 rounded-xl flex flex-col items-center gap-2 hover:border-primary/20 hover:shadow-sm transition-all"
        >
          <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
            <int.icon className="w-5 h-5 text-primary" aria-hidden="true" />
          </div>
          <span className="text-xs font-medium text-muted-foreground">{int.name}</span>
        </div>
      ))}
    </div>
  );
}

// Mobile preview — phone chrome in foreground tone, content in brand palette.
export function MobilePreview() {
  return (
    <div className="relative w-48 mx-auto">
      <div className="bg-foreground rounded-[2.5rem] p-2 shadow-2xl">
        <div className="bg-card rounded-[2rem] overflow-hidden">
          <div className="h-6 bg-foreground mx-16 rounded-b-xl" />
          <div className="p-4 space-y-3">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary/10 rounded-lg" />
              <div>
                <div className="h-2 w-20 bg-muted rounded" />
                <div className="h-1.5 w-12 bg-muted rounded mt-1" />
              </div>
            </div>

            <div className="bg-primary/5 p-3 rounded-xl">
              <div className="h-2 w-24 bg-primary/20 rounded mb-2" />
              <div className="text-2xl font-bold text-primary">€24.5k</div>
              <div className="text-xs text-gold font-medium">This month</div>
            </div>

            <div className="space-y-2">
              <div className="h-10 bg-muted rounded-lg" />
              <div className="h-10 bg-muted rounded-lg" />
              <div className="h-10 bg-muted rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Analytics chart — gold accent for the headline delta.
export function AnalyticsChart() {
  return (
    <div className="bg-card p-4 rounded-xl shadow-sm border border-border">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-foreground">Revenue growth</span>
        <span className="text-xs text-gold bg-gold/10 px-2 py-1 rounded-full font-medium">+23%</span>
      </div>
      <div className="flex items-end gap-2 h-24">
        {[40, 55, 45, 70, 60, 85, 90].map((height, i) => (
          <div key={i} className="flex-1 bg-primary/10 rounded-t-md relative">
            <div
              className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-md transition-all duration-500"
              style={{ height: `${height}%` }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
        <span>Mon</span>
        <span>Sun</span>
      </div>
    </div>
  );
}

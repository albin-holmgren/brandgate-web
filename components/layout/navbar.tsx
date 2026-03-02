"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const megaMenuItems = [
  {
    label: "Product",
    href: "/features",
    columns: [
      {
        title: "Core Features",
        links: [
          { label: "Distributor Portal", href: "/features#portal" },
          { label: "Order Management", href: "/features#orders" },
          { label: "Product Catalog", href: "/features#catalog" },
          { label: "Store Builder", href: "/features#store" },
          { label: "Auto Invoicing", href: "/features#invoicing" },
          { label: "Analytics", href: "/features#analytics" },
        ],
      },
      {
        title: "Solutions",
        links: [
          { label: "Growing Brands", href: "/solutions" },
          { label: "Enterprise", href: "/solutions" },
          { label: "International", href: "/solutions" },
          { label: "Multi-Channel", href: "/solutions" },
        ],
      },
      {
        title: "Integrations",
        links: [
          { label: "Shopify", href: "/integrations" },
          { label: "WooCommerce", href: "/integrations" },
          { label: "Fortnox", href: "/integrations" },
          { label: "Visma", href: "/integrations" },
          { label: "View All →", href: "/integrations" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    columns: [
      {
        title: "By Industry",
        links: [
          { label: "Fashion & Apparel", href: "/solutions/fashion" },
          { label: "Home & Design", href: "/solutions" },
          { label: "Food & Beverage", href: "/solutions/food-beverage" },
          { label: "Health & Beauty", href: "/solutions" },
          { label: "Electronics", href: "/solutions" },
        ],
      },
      {
        title: "By Size",
        links: [
          { label: "Startups", href: "/solutions" },
          { label: "Growing Brands", href: "/solutions" },
          { label: "Enterprise", href: "/solutions" },
        ],
      },
      {
        title: "By Challenge",
        links: [
          { label: "Scaling Wholesale", href: "/solutions" },
          { label: "Global Expansion", href: "/solutions" },
          { label: "Retailer Management", href: "/solutions" },
          { label: "B2B E-commerce", href: "/solutions" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href: "/blog",
    columns: [
      {
        title: "Learn",
        links: [
          { label: "Blog", href: "/blog" },
          { label: "Guides & E-books", href: "/blog" },
          { label: "Webinars", href: "/blog" },
          { label: "Case Studies", href: "/blog" },
        ],
      },
      {
        title: "Tools",
        links: [
          { label: "ROI Calculator", href: "/tools/distribution-roi-calculator" },
          { label: "Templates", href: "/blog" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Help Center", href: "/contact" },
          { label: "Documentation", href: "/contact" },
          { label: "API Reference", href: "/contact" },
          { label: "Contact Support", href: "/contact" },
        ],
      },
    ],
  },
];

const simpleLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "Company" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-primary-foreground/10 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo-cropped.png" alt="BrandGate" width={146} height={27} className="h-5 w-auto brightness-0 invert" priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Mega Menu Items */}
          {megaMenuItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveMegaMenu(item.label)}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors hover:text-primary-foreground ${
                  pathname.startsWith(item.href)
                    ? "text-primary-foreground"
                    : "text-primary-foreground/60"
                }`}
              >
                {item.label}
                <ChevronDown className="w-4 h-4" />
              </Link>

              {/* Mega Menu Dropdown */}
              {activeMegaMenu === item.label && (
                <div className="absolute top-full left-0 w-[600px] bg-white rounded-lg shadow-xl border border-gray-100 p-6 grid grid-cols-3 gap-6">
                  {item.columns?.map((column) => (
                    <div key={column.title}>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        {column.title}
                      </h3>
                      <ul className="space-y-2">
                        {column.links.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              className="text-sm text-gray-700 hover:text-primary transition-colors flex items-center gap-1 group"
                            >
                              <span className="group-hover:translate-x-1 transition-transform">
                                {link.label}
                              </span>
                              {link.label.includes("→") && (
                                <span className="text-gold">→</span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Simple Links */}
          {simpleLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary-foreground ${
                pathname === link.href
                  ? "text-primary-foreground"
                  : "text-primary-foreground/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="https://app.brandgate.dev/login" className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            Login
          </a>
          <Button asChild size="sm" className="bg-gold text-gold-foreground hover:bg-gold/90 rounded-full px-6 font-semibold">
            <a href="https://app.brandgate.dev/signup">Get Started</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-primary-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-primary-foreground/10 bg-primary px-6 py-4 space-y-3 max-h-[80vh] overflow-y-auto">
          {/* Mega Menu Items - Mobile */}
          {megaMenuItems.map((item) => (
            <div key={item.label} className="space-y-2">
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm font-medium text-primary-foreground"
              >
                {item.label}
              </Link>
              <div className="pl-4 space-y-1 border-l border-primary-foreground/20">
                {item.columns?.map((column) => (
                  <div key={column.title} className="py-2">
                    <h4 className="text-xs text-primary-foreground/50 uppercase mb-2">{column.title}</h4>
                    {column.links.slice(0, 3).map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1 text-sm text-primary-foreground/70 hover:text-primary-foreground"
                      >
                        {link.label.replace(" →", "")}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Simple Links */}
          {simpleLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 text-sm font-medium ${
                pathname === link.href ? "text-primary-foreground" : "text-primary-foreground/60"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-3 border-t border-primary-foreground/10 flex flex-col gap-2">
            <a href="https://app.brandgate.dev/login" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-primary-foreground/60">
              Login
            </a>
            <Button asChild size="sm" className="w-full bg-gold text-gold-foreground hover:bg-gold/90 rounded-full font-semibold">
              <a href="https://app.brandgate.dev/signup" onClick={() => setMobileOpen(false)}>Get Started</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

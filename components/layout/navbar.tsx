"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";

const megaMenuData = {
  product: {
    label: "Product",
    sections: [
      {
        title: "Platform",
        items: [
          { label: "Distributor Portal", desc: "Self-service portal for retailers", href: "/features#portal" },
          { label: "Order Management", desc: "Process and track orders", href: "/features#orders" },
          { label: "Product Catalog", desc: "Manage your product range", href: "/features#catalog" },
          { label: "Store Builder", desc: "Create B2B storefronts", href: "/features#store" },
        ],
      },
      {
        title: "Operations",
        items: [
          { label: "Auto Invoicing", desc: "Automated billing", href: "/features#invoicing" },
          { label: "Analytics", desc: "Insights and reports", href: "/features#analytics" },
          { label: "Integrations", desc: "Connect your tools", href: "/integrations" },
          { label: "API Access", desc: "Build custom solutions", href: "/integrations" },
        ],
      },
    ],
  },
  solutions: {
    label: "Solutions",
    sections: [
      {
        title: "By Industry",
        items: [
          { label: "Fashion & Apparel", desc: "Clothing & accessories", href: "/solutions/fashion" },
          { label: "Food & Beverage", desc: "Food products", href: "/solutions/food-beverage" },
          { label: "Home & Design", desc: "Furniture & decor", href: "/solutions/home-design" },
          { label: "Health & Beauty", desc: "Cosmetics & wellness", href: "/solutions/health-beauty" },
          { label: "Electronics", desc: "Tech products", href: "/solutions/electronics" },
        ],
      },
      {
        title: "By Size",
        items: [
          { label: "Startups", desc: "Growing brands", href: "/solutions" },
          { label: "Growing Brands", desc: "Scale operations", href: "/solutions" },
          { label: "Enterprise", desc: "Large operations", href: "/solutions" },
        ],
      },
    ],
  },
  resources: {
    label: "Resources",
    sections: [
      {
        title: "Learn",
        items: [
          { label: "Blog", desc: "Latest insights", href: "/blog" },
          { label: "Guides & E-books", desc: "In-depth resources", href: "/blog" },
          { label: "Case Studies", desc: "Success stories", href: "/blog" },
          { label: "Webinars", desc: "Online training", href: "/blog" },
        ],
      },
      {
        title: "Tools",
        items: [
          { label: "ROI Calculator", desc: "Calculate savings", href: "/tools/distribution-roi-calculator" },
          { label: "Help Center", desc: "Get support", href: "/contact" },
          { label: "Documentation", desc: "Technical docs", href: "/contact" },
          { label: "API Reference", desc: "Developer resources", href: "/contact" },
        ],
      },
    ],
  },
};

const simpleLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "Company" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-primary-foreground/10 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo-cropped.png" alt="BrandGate" width={146} height={27} className="h-5 w-auto brightness-0 invert" priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center">
          {Object.entries(megaMenuData).map(([key, data]) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => setActiveMenu(key)}
            >
              <button
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-primary-foreground flex items-center gap-1 h-16 cursor-pointer hover:bg-primary-foreground/5 rounded-md ${
                  activeMenu === key || pathname.startsWith(key === 'product' ? '/features' : key === 'solutions' ? '/solutions' : '/blog')
                    ? "text-primary-foreground bg-primary-foreground/5"
                    : "text-primary-foreground/60"
                }`}
              >
                {data.label}
              </button>
            </div>
          ))}
          
          {simpleLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary-foreground ${
                pathname === link.href ? "text-primary-foreground" : "text-primary-foreground/60"
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

      {/* Full-width Mega Menu */}
      {activeMenu && (
        <div
          className="hidden lg:block absolute left-0 right-0 top-[63px] bg-primary border-b border-primary-foreground/10 shadow-lg pt-1"
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-2 gap-8">
              {megaMenuData[activeMenu as keyof typeof megaMenuData].sections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-xs font-semibold text-primary-foreground/40 uppercase tracking-wider mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="group flex items-start gap-3 p-2 -m-2 rounded-lg hover:bg-primary-foreground/10 transition-colors cursor-pointer"
                        >
                          <div className="flex-1">
                            <div className="font-medium text-primary-foreground group-hover:text-gold transition-colors">
                              {item.label}
                            </div>
                            <div className="text-sm text-primary-foreground/50">
                              {item.desc}
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-primary-foreground/30 group-hover:text-gold group-hover:translate-x-1 transition-all flex-shrink-0 mt-0.5" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-primary z-40 overflow-y-auto">
          <div className="px-6 py-4 space-y-6">
            {Object.entries(megaMenuData).map(([key, data]) => (
              <div key={key} className="space-y-2">
                <div className="text-sm font-medium text-primary-foreground/80 uppercase tracking-wider">
                  {data.label}
                </div>
                <div className="space-y-1 pl-4">
                  {data.sections.flatMap(s => s.items).map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-sm text-primary-foreground/60 hover:text-primary-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            
            {simpleLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm font-medium text-primary-foreground"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-primary-foreground/10 flex flex-col gap-2">
              <a href="https://app.brandgate.dev/login" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-primary-foreground/60">
                Login
              </a>
              <Button asChild size="sm" className="w-full bg-gold text-gold-foreground hover:bg-gold/90 rounded-full font-semibold">
                <a href="https://app.brandgate.dev/signup" onClick={() => setMobileOpen(false)}>Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

const breadcrumbMap: Record<string, string> = {
  "": "Home",
  "features": "Features",
  "pricing": "Pricing",
  "about": "About",
  "contact": "Contact",
  "blog": "Blog",
  "guides": "Guides",
  "faq": "FAQ",
  "help": "Help Center",
  "api": "API Documentation",
  "integrations": "Integrations",
  "solutions": "Solutions",
  "fashion": "Fashion & Apparel",
  "food-beverage": "Food & Beverage",
  "home-design": "Home & Design",
  "health-beauty": "Health & Beauty",
  "electronics": "Electronics",
  "startups": "Startups",
  "growing-brands": "Growing Brands",
  "enterprise": "Enterprise",
  "company": "Company",
  "team": "Our Team",
  "terms": "Terms of Service",
  "privacy": "Privacy Policy",
  "why-brandgate": "Why BrandGate",
};

export function Breadcrumbs() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);
  
  if (paths.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="py-4 bg-gray-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center flex-wrap gap-2 text-sm">
          <li>
            <Link href="/" className="flex items-center gap-1 text-gray-500 hover:text-[#003822] transition-colors">
              <Home className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          
          {paths.map((path, index) => {
            const href = "/" + paths.slice(0, index + 1).join("/");
            const isLast = index === paths.length - 1;
            
            return (
              <li key={path} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                {isLast ? (
                  <span className="font-medium text-[#003822]" aria-current="page">
                    {breadcrumbMap[path] || path}
                  </span>
                ) : (
                  <Link 
                    href={href} 
                    className="text-gray-500 hover:text-[#003822] transition-colors capitalize"
                  >
                    {breadcrumbMap[path] || path}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

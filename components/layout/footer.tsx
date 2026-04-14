import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Integrations", href: "/integrations" },
      { label: "API", href: "/api" },
    ],
  },
  solutions: {
    title: "Solutions",
    links: [
      { label: "Fashion & Apparel", href: "/solutions/fashion" },
      { label: "Food & Beverage", href: "/solutions/food-beverage" },
      { label: "Home & Design", href: "/solutions/home-design" },
      { label: "Health & Beauty", href: "/solutions/health-beauty" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/guides" },
      { label: "FAQ", href: "/faq" },
      { label: "Help Center", href: "/help" },
      { label: "ROI Calculator", href: "/tools/distribution-roi-calculator" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Get in touch */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-5 h-5 text-gold" />
                <span className="font-semibold text-lg">Stay in the loop</span>
              </div>
              <p className="text-white/60">
                Questions, feedback, or want to hear when we ship something new? Drop us a line.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-primary font-semibold rounded-lg hover:bg-gold/90 transition-colors"
              >
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold">BrandGate</span>
            </Link>
            <p className="mt-4 text-white/60 max-w-sm">
              The all-in-one B2B distribution platform for brands. Manage distributors, orders, and scale your wholesale business.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">{footerLinks.product.title}</h3>
            <ul className="space-y-2">
              {footerLinks.product.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">{footerLinks.solutions.title}</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">{footerLinks.resources.title}</h3>
            <ul className="space-y-2">
              {footerLinks.resources.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">{footerLinks.company.title}</h3>
            <ul className="space-y-2">
              {footerLinks.company.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © 2026 BrandGate. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

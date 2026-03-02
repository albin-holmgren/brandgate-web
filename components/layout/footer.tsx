import Link from "next/link";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Integrations", href: "/integrations" },
      { label: "API", href: "/contact" },
    ],
  },
  solutions: {
    title: "Solutions",
    links: [
      { label: "Fashion & Apparel", href: "/solutions/fashion" },
      { label: "Food & Beverage", href: "/solutions/food-beverage" },
      { label: "Home & Design", href: "/solutions" },
      { label: "Health & Beauty", href: "/solutions" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Guides", href: "/blog" },
      { label: "Help Center", href: "/contact" },
      { label: "ROI Calculator", href: "/tools/distribution-roi-calculator" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/company/team" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/contact" },
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
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold">BrandGate</span>
            </Link>
            <p className="mt-4 text-primary-foreground/60 max-w-sm">
              The all-in-one B2B distribution platform for brands. Manage distributors, orders, and scale your wholesale business.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="https://linkedin.com" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Twitter
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">{footerLinks.product.title}</h3>
            <ul className="space-y-2">
              {footerLinks.product.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
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
                  <Link href={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
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
                  <Link href={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
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
                  <Link href={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2026 BrandGate. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

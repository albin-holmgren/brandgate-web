"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-primary-foreground/10 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo-cropped.png" alt="BrandGate" width={146} height={27} className="h-5 w-auto brightness-0 invert" priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary-foreground ${
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
        <div className="hidden md:flex items-center gap-4">
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
          className="md:hidden p-2 text-primary-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-primary-foreground/10 bg-primary px-6 py-4 space-y-3">
          {navLinks.map((link) => (
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

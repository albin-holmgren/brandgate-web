import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing – BrandGate B2B Distribution Platform",
  description: "Simple, transparent pricing for brands of every size. Start free, scale as you grow. No hidden fees — just powerful B2B distribution tools.",
  openGraph: {
    title: "Pricing – BrandGate B2B Distribution Platform",
    description: "Simple, transparent pricing for brands of every size. Start free, scale as you grow. No hidden fees — just powerful B2B distribution tools.",
    url: "https://brandgate.dev/pricing",
    siteName: "BrandGate",
    type: "website",
    images: [{ url: "https://brandgate.dev/og-image.png", width: 1200, height: 630, alt: "BrandGate – B2B Distribution Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing – BrandGate B2B Distribution Platform",
    description: "Simple, transparent pricing for brands of every size. Start free, scale as you grow. No hidden fees — just powerful B2B distribution tools.",
    images: ["https://brandgate.dev/og-image.png"],
  },
  alternates: { canonical: "https://brandgate.dev/pricing" },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

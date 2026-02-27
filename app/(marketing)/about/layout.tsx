import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About – BrandGate B2B Distribution Platform",
  description: "BrandGate is on a mission to make B2B distribution as seamless as B2C e-commerce. Founded in Stockholm, built for brands that scale through distribution.",
  openGraph: {
    title: "About – BrandGate B2B Distribution Platform",
    description: "BrandGate is on a mission to make B2B distribution as seamless as B2C e-commerce. Founded in Stockholm, built for brands that scale through distribution.",
    url: "https://brandgate.dev/about",
    siteName: "BrandGate",
    type: "website",
    images: [{ url: "https://brandgate.dev/og-image.png", width: 1200, height: 630, alt: "BrandGate – B2B Distribution Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About – BrandGate B2B Distribution Platform",
    description: "BrandGate is on a mission to make B2B distribution as seamless as B2C e-commerce. Founded in Stockholm, built for brands that scale through distribution.",
    images: ["https://brandgate.dev/og-image.png"],
  },
  alternates: { canonical: "https://brandgate.dev/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

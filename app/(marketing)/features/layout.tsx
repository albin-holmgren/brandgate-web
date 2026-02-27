import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features – BrandGate B2B Distribution Platform",
  description: "Explore BrandGate's full feature set: distributor portal, order management, product catalog, automated invoicing, online store builder, and analytics.",
  openGraph: {
    title: "Features – BrandGate B2B Distribution Platform",
    description: "Explore BrandGate's full feature set: distributor portal, order management, product catalog, automated invoicing, online store builder, and analytics.",
    url: "https://brandgate.dev/features",
    siteName: "BrandGate",
    type: "website",
    images: [{ url: "https://brandgate.dev/og-image.png", width: 1200, height: 630, alt: "BrandGate – B2B Distribution Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Features – BrandGate B2B Distribution Platform",
    description: "Explore BrandGate's full feature set: distributor portal, order management, product catalog, automated invoicing, online store builder, and analytics.",
    images: ["https://brandgate.dev/og-image.png"],
  },
  alternates: { canonical: "https://brandgate.dev/features" },
};

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brandgate.dev"),
  title: {
    default: "BrandGate – B2B Distribution Platform for Brands",
    template: "%s – BrandGate",
  },
  description: "BrandGate is the all-in-one B2B distribution platform. Manage distributors, orders, products, invoicing, analytics, and your branded online store from one place.",
  keywords: ["B2B distribution platform", "wholesale management", "distributor portal", "order management", "product catalog", "B2B e-commerce", "distribution software", "brand distribution", "wholesale platform", "Nordic B2B"],
  authors: [{ name: "BrandGate AB" }],
  openGraph: {
    title: "BrandGate – B2B Distribution Platform for Brands",
    description: "BrandGate is the all-in-one B2B distribution platform. Manage distributors, orders, products, invoicing, analytics, and your branded online store from one place.",
    type: "website",
    url: "https://brandgate.dev",
    siteName: "BrandGate",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BrandGate – B2B Distribution Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BrandGate – B2B Distribution Platform for Brands",
    description: "BrandGate is the all-in-one B2B distribution platform. Manage distributors, orders, products, invoicing, analytics, and your branded online store from one place.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://brandgate.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

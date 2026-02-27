import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact – BrandGate B2B Distribution Platform",
  description: "Get in touch with the BrandGate team. Book a demo, ask a question, or start your free trial today.",
  openGraph: {
    title: "Contact – BrandGate B2B Distribution Platform",
    description: "Get in touch with the BrandGate team. Book a demo, ask a question, or start your free trial today.",
    url: "https://brandgate.dev/contact",
    siteName: "BrandGate",
    type: "website",
    images: [{ url: "https://brandgate.dev/og-image.png", width: 1200, height: 630, alt: "BrandGate – B2B Distribution Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact – BrandGate B2B Distribution Platform",
    description: "Get in touch with the BrandGate team. Book a demo, ask a question, or start your free trial today.",
    images: ["https://brandgate.dev/og-image.png"],
  },
  alternates: { canonical: "https://brandgate.dev/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

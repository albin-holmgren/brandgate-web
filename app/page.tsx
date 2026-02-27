import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HomePage } from "@/components/sections/home-page";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "BrandGate",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://brandgate.dev",
  description: "BrandGate is the all-in-one B2B distribution platform. Manage distributors, orders, products, invoicing, analytics, and your branded online store from one place.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    description: "Free 14-day trial, no credit card required",
  },
  creator: {
    "@type": "Organization",
    name: "BrandGate AB",
    url: "https://brandgate.dev",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Stockholm",
      addressCountry: "SE",
    },
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  );
}

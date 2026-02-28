// Translations for BrandGate
// English (default) and Swedish

export const translations = {
  en: {
    // Navigation
    nav: {
      features: "Features",
      pricing: "Pricing",
      about: "About",
      blog: "Blog",
      contact: "Contact",
      getStarted: "Get Started",
    },

    // Hero
    hero: {
      title: "B2B Distribution Platform for Brands",
      subtitle:
        "Manage your entire distribution network from one place. Orders, products, invoicing, and your own branded storefront — all in one platform.",
      ctaPrimary: "Start Free Trial",
      ctaSecondary: "Book Demo",
    },

    // Features
    features: {
      title: "Everything your brand needs",
      subtitle:
        "One platform to manage distributors, process orders, and grow your wholesale business.",
      distributorPortal: {
        title: "Distributor Portal",
        description:
          "Give each distributor their own branded portal to browse products, place orders, and track deliveries.",
      },
      orderManagement: {
        title: "Order Management",
        description:
          "Process, track, and fulfill orders with real-time status updates and automated notifications.",
      },
      storeBuilder: {
        title: "Online Store Builder",
        description:
          "Create a custom B2B storefront with drag-and-drop editing. No coding required.",
      },
      productCatalog: {
        title: "Product Catalog",
        description:
          "Manage unlimited SKUs, pricing tiers, and inventory with low-stock alerts across your network.",
      },
      invoicing: {
        title: "Automated Invoicing",
        description:
          "Generate invoices from orders automatically. Track payments and send overdue reminders.",
      },
      analytics: {
        title: "Analytics & Reports",
        description:
          "Revenue dashboards, distributor performance, and product insights to drive growth.",
      },
    },

    // How it works
    howItWorks: {
      title: "How it works",
      subtitle: "Get started in three simple steps.",
      step1: {
        title: "Set up your store",
        description:
          "Create your branded B2B storefront, add products, and configure pricing tiers for different distributor groups.",
      },
      step2: {
        title: "Invite distributors",
        description:
          "Send invitations to your distribution network. Each distributor gets their own login and personalized catalog.",
      },
      step3: {
        title: "Manage orders",
        description:
          "Receive and process orders, generate invoices, and track everything from your central dashboard.",
      },
    },

    // CTA
    cta: {
      title: "Ready to streamline your distribution?",
      subtitle: "Start your free trial or book a personalized demo.",
      primary: "Start Free Trial",
      secondary: "Book Demo",
    },

    // Footer
    footer: {
      description:
        "The modern platform for B2B distribution management. Built for brands, loved by distributors.",
      product: "Product",
      company: "Company",
      legal: "Legal",
      rights: "All rights reserved.",
    },

    // SEO
    seo: {
      title: "BrandGate - B2B Distribution Platform for Brands",
      description:
        "Manage your entire distribution network from one place. Orders, products, invoicing, and your own branded storefront — all in one platform.",
    },
  },

  sv: {
    // Navigation
    nav: {
      features: "Funktioner",
      pricing: "Priser",
      about: "Om oss",
      blog: "Blogg",
      contact: "Kontakt",
      getStarted: "Kom igång",
    },

    // Hero
    hero: {
      title: "B2B-distributionsplattform för varumärken",
      subtitle:
        "Hantera hela ditt distributionsnätverk från ett ställe. Ordrar, produkter, fakturering och din egen varumärkesanpassade butik — allt i en plattform.",
      ctaPrimary: "Starta gratis provperiod",
      ctaSecondary: "Boka demo",
    },

    // Features
    features: {
      title: "Allt ditt varumärke behöver",
      subtitle:
        "En plattform för att hantera distributörer, behandla ordrar och växa din grossistverksamhet.",
      distributorPortal: {
        title: "Distributörsportal",
        description:
          "Ge varje distributör sin egen varumärkesanpassade portal för att bläddra bland produkter, lägga ordrar och spåra leveranser.",
      },
      orderManagement: {
        title: "Orderhantering",
        description:
          "Behandle, spåra och fullfölj ordrar med realtidsuppdateringar och automatiserade aviseringar.",
      },
      storeBuilder: {
        title: "Bygg din webbutik",
        description:
          "Skapa en anpassad B2B-butik med dra-och-släpp-redigering. Ingen kodning krävs.",
      },
      productCatalog: {
        title: "Produktkatalog",
        description:
          "Hantera obegränsat antal SKU:er, prisnivåer och lager med låg lagervarningar i hela ditt nätverk.",
      },
      invoicing: {
        title: "Automatiserad fakturering",
        description:
          "Generera fakturor automatiskt från ordrar. Spåra betalningar och skicka påminnelser vid förseningar.",
      },
      analytics: {
        title: "Analys & Rapporter",
        description:
          "Intäktsinstrumentpaneler, distributörsprestanda och produktinsikter för att driva tillväxt.",
      },
    },

    // How it works
    howItWorks: {
      title: "Så fungerar det",
      subtitle: "Kom igång i tre enkla steg.",
      step1: {
        title: "Konfigurera din butik",
        description:
          "Skapa din varumärkesanpassade B2B-butik, lägg till produkter och konfigurera prisnivåer för olika distributörsgrupper.",
      },
      step2: {
        title: "Bjud in distributörer",
        description:
          "Skicka inbjudningar till ditt distributionsnätverk. Varje distributör får sin egen inloggning och personlig katalog.",
      },
      step3: {
        title: "Hantera ordrar",
        description:
          "Ta emot och behandla ordrar, generera fakturor och spåra allt från din centrala instrumentpanel.",
      },
    },

    // CTA
    cta: {
      title: "Redo att effektivisera din distribution?",
      subtitle: "Starta din gratis provperiod eller boka en personlig demo.",
      primary: "Starta gratis provperiod",
      secondary: "Boka demo",
    },

    // Footer
    footer: {
      description:
        "Den moderna plattformen för B2B-distributionshantering. Byggd för varumärken, älskad av distributörer.",
      product: "Produkt",
      company: "Företag",
      legal: "Juridiskt",
      rights: "Alla rättigheter förbehållna.",
    },

    // SEO
    seo: {
      title: "BrandGate - B2B-distributionsplattform för varumärken",
      description:
        "Hantera hela ditt distributionsnätverk från ett ställe. Ordrar, produkter, fakturering och din egen varumärkesanpassade butik — allt i en plattform.",
    },
  },
};

export type Locale = keyof typeof translations;

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en;
}

export function getSEO(locale: Locale) {
  return translations[locale].seo;
}

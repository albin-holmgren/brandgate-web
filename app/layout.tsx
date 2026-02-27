import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brandgate.dev"),
  title: {
    default: "BrandGate - B2B Distribution Platform for Brands",
    template: "%s - BrandGate",
  },
  description: "BrandGate is the all-in-one b2b distribution platform. Manage distributors, orders, products, invoicing, analytics, and your branded online store from one place.",
  keywords: ["B2B distribution platform", "wholesale management", "distributor portal", "order management", "product catalog", "B2B e-commerce", "distribution software", "brand distribution", "wholesale platform", "Nordic B2B"],
  authors: [{ name: "BrandGate AB" }],
  openGraph: {
    title: "BrandGate - B2B Distribution Platform for Brands",
    description: "BrandGate is the all-in-one b2b distribution platform. Manage distributors, orders, products, invoicing, analytics, and your branded online store from one place.",
    type: "website",
    url: "https://brandgate.dev",
    siteName: "BrandGate",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BrandGate - B2B Distribution Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BrandGate - B2B Distribution Platform for Brands",
    description: "BrandGate is the all-in-one b2b distribution platform. Manage distributors, orders, products, invoicing, analytics, and your branded online store from one place.",
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

const mixpanelScript = `
(function(f,b){if(!b.__SV){var a,e,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2===a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!=typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_timestamp start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=f.createElement("script");a.type="text/javascript";a.async=!0;a.src="https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";e=f.getElementsByTagName("script")[0];e.parentNode.insertBefore(a,e)}})(document,window.mixpanel||[]);
mixpanel.init('9277e80f2dc38a2e8bab577cc8f20268', {track_pageview: true, persistent_anonymous_id: true});
mixpanel.track('Page View');
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="mixpanel-snippet"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: mixpanelScript }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

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
  verification: {
    google: "please-add-your-google-search-console-verification-code-here",
  },
};

const analyticsScripts = `
// Mixpanel Initialization
(function(f,b){if(!b.__SV){var a,e,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0))}}var c=b;"undefined"!=typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_timestamp start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=f.createElement("script");a.type="text/javascript";a.async=!0;a.src="https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";e=f.getElementsByTagName("script")[0];e.parentNode.insertBefore(a,e)}})(document,window.mixpanel||[]);
mixpanel.init('9277e80f2dc38a2e8bab577cc8f20268', {track_pageview: true, persistent_anonymous_id: true});
mixpanel.track('Page View');

// Google Analytics 4 - REPLACE GA-XXXXXXXXX-8 WITH YOUR GA4 MEASUREMENT ID
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'GA-XXXXXXXXX-8');

// Comprehensive Tracking Suite
(function() {
  // Wait for analytics libraries to load
  var checkInterval = setInterval(function() {
    if (typeof mixpanel !== 'undefined') {
      clearInterval(checkInterval);
      
      // 1. BUTTON CLICK TRACKING
      document.addEventListener('click', function(e) {
        var target = e.target;
        var buttonText = (target.textContent || target.innerText || '').trim().substring(0, 50);
        var buttonId = target.id || target.getAttribute('data-track') || 'unlabeled';
        var pagePath = window.location.pathname;
        
        if (target.tagName === 'BUTTON' || target.type === 'submit' || target.getAttribute('data-track') === 'button') {
          mixpanel.track('Button Click', {
            'button_text': buttonText,
            'button_id': buttonId,
            'page': pagePath,
            'timestamp': new Date().toISOString()
          });
          
          if (typeof gtag !== 'undefined') {
            gtag('event', 'button_click', {
              'button_text': buttonText,
              'button_id': buttonId,
              'page': pagePath
            });
          }
        }
      });
      
      // 2. FORM SUBMISSION TRACKING
      document.querySelectorAll('form').forEach(function(form) {
        form.addEventListener('submit', function(e) {
          var formId = form.id || form.getAttribute('data-form-id') || 'unlabeled_form';
          var formName = form.getAttribute('data-form-name') || formId;
          
          mixpanel.track('Form Submit', {
            'form_id': formId,
            'form_name': formName,
            'page': window.location.pathname,
            'timestamp': new Date().toISOString()
          });
          
          if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submit', {
              'form_id': formId,
              'form_name': formName
            });
          }
        });
      });
      
      // 3. SCROLL DEPTH TRACKING
      var scrollTracked = {};
      window.addEventListener('scroll', function() {
        var scrollPercent = Math.round((window.scrollY + window.innerHeight) / document.body.scrollHeight * 100);
        
        [25, 50, 75, 90].forEach(function(threshold) {
          if (scrollPercent >= threshold && !scrollTracked['scroll_' + threshold]) {
            scrollTracked['scroll_' + threshold] = true;
            mixpanel.track('Scroll Depth', {
              'percent': threshold,
              'page': window.location.pathname
            });
          }
        });
      });
      
      // 4. TIME ON PAGE TRACKING
      var startTime = Date.now();
      window.addEventListener('beforeunload', function() {
        var timeOnPage = Math.round((Date.now() - startTime) / 1000);
        mixpanel.track('Time on Page', {
          'duration_seconds': timeOnPage,
          'page': window.location.pathname
        });
      });
      
      // 5. EXTERNAL LINK CLICKS out of site
      document.addEventListener('click', function(e) {
        var target = e.target;
        var href = target.getAttribute('href');
        
        if (href && (href.startsWith(http://') || href.startsWith('https://')) && !href.includes('brandgate.dev') && !href.includes('webbrandgate.vercel.app')) {
          mixpanel.track('External Link Click', {
            'link': href,
            'page': window.location.pathname,
            'text': target.innerText || 'unknown'
          });
        }
      });
      
      // 6. SECTION VISIBILITY TRACKING (Intersection Observer)
      if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              var sectionId = entry.target.id || entry.target.getAttribute('data-section') || 'unlabeled';
              mixpanel.track('Section Viewed', {
                'section': sectionId,
                'page': window.location.pathname
              });
            }
          });
        }, { threshold: 0.5 });
        
        document.querySelectorAll('section[id], [data-section]').forEach(function(section) {
          observer.observe(section);
        });
      }
      
      console.log('[Analytics] Comprehensive tracking active');
    }
  }, 1000);
})();

// Stripe Revenue Tracking Helper (Call this from payment success page)
function trackStripeRevenue(chargeId, amount, currency, customerId, plan) {
  if (typeof mixpanel !== 'undefined') {
    mixpanel.people.track_charge(amount, {
      '$currency': currency,
      'charge_id': chargeId,
      'plan': plan,
      'customer_id': customerId
    });
    mixpanel.track('Purchase', {
      'amount': amount,
      'currency': currency,
      'plan': plan,
      'charge_id': chargeId
    });
  }
}

// Trial Conversion Tracking
function trackTrialSignup(email, source, plan) {
  if (typeof mixpanel !== 'undefined') {
    mixpanel.people.set({
      '$email': email,
      'plan': plan || 'trial',
      'signup_source': source,
      $signup_date': new Date().toISOString()
    });
    mixpanel.track('Trial Signup', {
      'email': email,
      'source': source,
      'plan': plan
    });
  }
}
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
          id="analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: analyticsScripts }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

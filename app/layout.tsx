import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
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

// Enhanced Analytics Script
const analyticsScripts = `
// Mixpanel Initialization
(function(f,b){if(!b.__SV){var a,e,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!=typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_timestamp start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=f.createElement("script");a.type="text/javascript";a.async=!0;a.src="https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";e=f.getElementsByTagName("script")[0];e.parentNode.insertBefore(a,e)}})(document,window.mixpanel||[]);

// Initialize Mixpanel with advanced settings
mixpanel.init('9277e80f2dc38a2e8bab577cc8f20268', {
  debug: false,
  track_pageview: true,
  persistence: 'localStorage',
  loaded: function(mixpanel) {
    // Identify the user if they have a distinct_id in localStorage
    var distinctId = mixpanel.get_distinct_id();
    console.log('[Mixpanel] Loaded with distinct_id:', distinctId);
  }
});

// Google Analytics 4 + Google Ads
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-GMPPJ71Y58');
gtag('config', 'AW-18008237380');

// Enhanced Event Tracking
(function() {
  'use strict';
  
  // Wait for Mixpanel to load
  var initInterval = setInterval(function() {
    if (typeof mixpanel !== 'undefined' && mixpanel.track) {
      clearInterval(initInterval);
      initTracking();
    }
  }, 500);

  function initTracking() {
    console.log('[Analytics] Initializing enhanced tracking...');
    
    var startTime = Date.now();
    var scrollDepths = {};
    var sessionId = Math.random().toString(36).substring(2, 15);
    
    // 1. ENHANCED BUTTON CLICK TRACKING
    document.addEventListener('click', function(e) {
      var target = e.target;
      
      // Find closest button or clickable element
      var button = target.closest('button, a, [role="button"], [data-track="button"]');
      if (!button) return;
      
      var buttonText = (button.textContent || button.innerText || button.getAttribute('aria-label') || 'unlabeled').trim().substring(0, 100);
      var buttonId = button.id || button.getAttribute('data-track-id') || button.getAttribute('href') || 'unlabeled';
      var buttonType = button.tagName.toLowerCase();
      var pagePath = window.location.pathname;
      var pageName = document.title;
      
      // Track the click
      mixpanel.track('Button Click', {
        'button_text': buttonText,
        'button_id': buttonId,
        'button_type': buttonType,
        'page': pagePath,
        'page_name': pageName,
        'session_id': sessionId,
        'timestamp': new Date().toISOString()
      });
      
      // Also track to GA4
      if (typeof gtag !== 'undefined') {
        gtag('event', 'button_click', {
          'button_text': buttonText,
          'button_id': buttonId,
          'page': pagePath
        });
      }
      
      // Track specific conversion buttons
      if (buttonText.toLowerCase().includes('get started') || 
          buttonText.toLowerCase().includes('sign up') ||
          buttonText.toLowerCase().includes('start free')) {
        mixpanel.track('Conversion Button Click', {
          'button_text': buttonText,
          'page': pagePath,
          'type': 'signup_intent'
        });
      }
      
      if (buttonText.toLowerCase().includes('demo') || 
          buttonText.toLowerCase().includes('book')) {
        mixpanel.track('Conversion Button Click', {
          'button_text': buttonText,
          'page': pagePath,
          'type': 'demo_intent'
        });
      }
    });
    
    // 2. ENHANCED FORM TRACKING
    document.querySelectorAll('form').forEach(function(form) {
      form.addEventListener('submit', function(e) {
        var formId = form.id || form.getAttribute('name') || form.getAttribute('data-form-name') || 'unlabeled_form';
        var formAction = form.getAttribute('action') || 'unknown';
        var pagePath = window.location.pathname;
        
        mixpanel.track('Form Submit', {
          'form_id': formId,
          'form_action': formAction,
          'page': pagePath,
          'session_id': sessionId,
          'timestamp': new Date().toISOString()
        });
        
        // Track specific forms
        if (formId.toLowerCase().includes('contact') || formAction.includes('contact')) {
          mixpanel.track('Contact Form Submitted', {
            'page': pagePath,
            'session_id': sessionId
          });
        }
        
        if (formId.toLowerCase().includes('newsletter') || formId.toLowerCase().includes('signup')) {
          mixpanel.track('Newsletter Signup', {
            'page': pagePath,
            'session_id': sessionId
          });
        }
      });
    });
    
    // 3. SCROLL DEPTH TRACKING
    var maxScroll = 0;
    window.addEventListener('scroll', function() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
      }
      
      [25, 50, 75, 90, 100].forEach(function(threshold) {
        if (scrollPercent >= threshold && !scrollDepths['scroll_' + threshold]) {
          scrollDepths['scroll_' + threshold] = true;
          mixpanel.track('Scroll Depth', {
            'percent': threshold,
            'page': window.location.pathname,
            'session_id': sessionId
          });
        }
      });
    });
    
    // 4. TIME ON PAGE TRACKING
    window.addEventListener('beforeunload', function() {
      var timeOnPage = Math.round((Date.now() - startTime) / 1000);
      var engagementLevel = timeOnPage < 10 ? 'quick' : timeOnPage < 60 ? 'brief' : timeOnPage < 180 ? 'engaged' : 'highly_engaged';
      
      mixpanel.track('Time on Page', {
        'duration_seconds': timeOnPage,
        'engagement_level': engagementLevel,
        'max_scroll_percent': maxScroll,
        'page': window.location.pathname,
        'session_id': sessionId
      });
    });
    
    // 5. EXTERNAL LINK TRACKING
    document.addEventListener('click', function(e) {
      var target = e.target.closest('a');
      if (!target) return;
      
      var href = target.getAttribute('href');
      if (!href) return;
      
      var isExternal = href.startsWith('http://') || href.startsWith('https://');
      var isNotBrandgate = !href.includes('brandgate.dev') && !href.includes('webrandgate.vercel.app');
      
      if (isExternal && isNotBrandgate) {
        mixpanel.track('External Link Click', {
          'link_url': href,
          'link_text': target.innerText || target.getAttribute('aria-label') || 'unknown',
          'page': window.location.pathname,
          'session_id': sessionId
        });
      }
      
      // Track app signup clicks specifically
      if (href.includes('app.brandgate.dev') || href.includes('signup')) {
        mixpanel.track('Signup Click', {
          'destination': href,
          'source_page': window.location.pathname,
          'session_id': sessionId
        });
      }
    });
    
    // 6. PRICING PAGE TRACKING (if on pricing page)
    if (window.location.pathname.includes('pricing')) {
      initPricingTracking();
    }
    
    // 7. ERROR TRACKING
    window.addEventListener('error', function(e) {
      mixpanel.track('JavaScript Error', {
        'error_message': e.message,
        'error_filename': e.filename,
        'error_lineno': e.lineno,
        'page': window.location.pathname,
        'session_id': sessionId
      });
    });
    
    console.log('[Analytics] Tracking initialized successfully');
  }
  
  function initPricingTracking() {
    // Track which pricing tier user hovers over or clicks
    var pricingCards = document.querySelectorAll('[data-pricing-tier]');
    pricingCards.forEach(function(card) {
      var tier = card.getAttribute('data-pricing-tier');
      
      card.addEventListener('mouseenter', function() {
        mixpanel.track('Pricing Tier Hover', {
          'tier': tier,
          'page': '/pricing'
        });
      });
    });
    
    mixpanel.track('Pricing Page Viewed', {
      'page': '/pricing',
      'timestamp': new Date().toISOString()
    });
  }
})();

// Helper functions for manual tracking
window.trackEvent = function(eventName, properties) {
  if (typeof mixpanel !== 'undefined') {
    mixpanel.track(eventName, properties);
  }
};

window.trackRevenue = function(chargeId, amount, currency, customerId, plan) {
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
};

window.trackTrialSignup = function(email, source, plan) {
  if (typeof mixpanel !== 'undefined') {
    mixpanel.identify(email);
    mixpanel.people.set({
      '$email': email,
      'plan': plan || 'trial',
      'signup_source': source,
      '$signup_date': new Date().toISOString()
    });
    mixpanel.track('Trial Signup', {
      'email': email,
      'source': source,
      'plan': plan
    });
  }
};
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-18008237380" strategy="afterInteractive" />
        <Script id="analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: analyticsScripts }} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

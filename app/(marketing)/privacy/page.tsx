import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/motion/fade-in";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | BrandGate",
  description: "BrandGate privacy policy. Learn how we collect, use, and protect your data.",
  alternates: { canonical: "https://brandgate.dev/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative bg-primary text-primary-foreground py-24 md:py-32">
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <div className="w-16 h-1 bg-gold mx-auto mb-8" />
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
                Privacy Policy
              </h1>
            </FadeIn>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6">
            <FadeIn>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-8">Last updated: March 2026</p>
                
                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Introduction</h2>
                <p className="text-muted-foreground mb-4">
                  BrandGate AB (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our B2B distribution platform.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Account information (name, email, company name)</li>
                  <li>Business information (products, pricing, distributors)</li>
                  <li>Payment information (processed securely via Stripe)</li>
                  <li>Communication data (support requests, emails)</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Provide and maintain our services</li>
                  <li>Process transactions and send invoices</li>
                  <li>Communicate with you about your account</li>
                  <li>Improve our platform and develop new features</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate technical and organizational measures to protect your data, including encryption, access controls, and regular security audits. However, no method of transmission over the Internet is 100% secure.
                </p>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  Under GDPR and applicable data protection laws, you have the right to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing</li>
                  <li>Request data portability</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have questions about this Privacy Policy or our data practices, please contact us at privacy@brandgate.dev.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

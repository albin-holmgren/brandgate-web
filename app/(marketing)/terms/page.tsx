import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Terms of Service - BrandGate",
  description: "Terms of Service for BrandGate B2B Distribution Platform.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="bg-primary text-primary-foreground py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold uppercase">Terms of Service</h1>
            <p className="mt-4 opacity-70">Last updated: March 2026</p>
          </div>
        </section>
        <section className="py-16 bg-background">
          <div className="max-w-3xl mx-auto px-6 prose prose-lg">
            <p>By using BrandGate, you agree to these terms.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
export const metadata = { title: "Integrations - BrandGate", description: "Connect BrandGate with your favorite tools." };
export default function IntegrationsPage() { return (<><Navbar /><main className="min-h-screen"><section className="bg-primary text-primary-foreground py-20"><div className="max-w-4xl mx-auto px-6 text-center"><h1 className="text-4xl font-bold uppercase">Integrations</h1></div></section><section className="py-16 bg-background"><div className="max-w-3xl mx-auto px-6"><p>Connect with Shopify, WooCommerce, and more.</p></div></section></main><Footer /></>); }

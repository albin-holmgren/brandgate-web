import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
export const metadata = { title: "Fashion Solutions - BrandGate", description: "B2B wholesale for fashion brands." };
export default function FashionPage() { return (<><Navbar /><main className="min-h-screen"><section className="bg-primary text-primary-foreground py-20"><div className="max-w-4xl mx-auto px-6 text-center"><h1 className="text-4xl font-bold uppercase">Fashion & Apparel</h1></div></section><section className="py-16 bg-background"><div className="max-w-3xl mx-auto px-6"><p>Solutions for fashion brands.</p></div></section></main><Footer /></>); }

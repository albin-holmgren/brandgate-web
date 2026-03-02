import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
export const metadata = { title: "Privacy Policy - BrandGate", description: "Privacy Policy for BrandGate." };
export default function PrivacyPage() { return (<><Navbar /><main className="min-h-screen"><section className="bg-primary text-primary-foreground py-20"><div className="max-w-4xl mx-auto px-6 text-center"><h1 className="text-4xl font-bold uppercase">Privacy Policy</h1></div></section><section className="py-16 bg-background"><div className="max-w-3xl mx-auto px-6"><p>Your privacy is important to us.</p></div></section></main><Footer /></>); }

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
export const metadata = { title: "Food & Beverage - BrandGate", description: "B2B wholesale for food brands." };
export default function FoodPage() { return (<><Navbar /><main className="min-h-screen"><section className="bg-primary text-primary-foreground py-20"><div className="max-w-4xl mx-auto px-6 text-center"><h1 className="text-4xl font-bold uppercase">Food & Beverage</h1></div></section><section className="py-16 bg-background"><div className="max-w-3xl mx-auto px-6"><p>Solutions for food and beverage brands.</p></div></section></main><Footer /></>); }

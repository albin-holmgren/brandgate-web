import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "404 – Page Not Found",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary text-primary-foreground flex flex-col items-center justify-center px-6 text-center">
      <div className="w-12 h-1 bg-gold mx-auto mb-8" />
      <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">404</p>
      <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
        Page Not Found
      </h1>
      <p className="text-primary-foreground/50 text-lg max-w-md mb-10">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 rounded-full px-10 font-semibold">
          <Link href="/">Back to Home</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-10">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}

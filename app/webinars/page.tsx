import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, Video, Calendar, Clock, Users } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webinars | BrandGate Training",
  description: "Join live webinars and watch recordings on B2B distribution best practices.",
  alternates: { canonical: "https://brandgate.dev/webinars" },
};

const webinars = [
  {
    icon: Video,
    title: "B2B Distribution 101",
    description: "Learn the fundamentals of building a successful wholesale channel.",
    duration: "45 min",
    date: "On Demand",
    type: "Recording",
  },
  {
    icon: Users,
    title: "Onboarding Retailers at Scale",
    description: "Best practices for efficiently onboarding and managing hundreds of retail partners.",
    duration: "60 min",
    date: "On Demand",
    type: "Recording",
  },
  {
    icon: Calendar,
    title: "Q1 2026 Product Update",
    description: "See what's new in BrandGate and upcoming features for this quarter.",
    duration: "30 min",
    date: "Mar 15, 2026",
    type: "Live",
  },
];

export default function WebinarsPage() {
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
                Webinars
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/50 text-lg mt-6 max-w-2xl mx-auto">
                Live training sessions and recorded workshops to help you master B2B distribution.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Webinars Grid */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webinars.map((webinar) => (
                <StaggerItem key={webinar.title}>
                  <div className="bg-card border rounded-2xl p-8 h-full hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                        <webinar.icon className="w-6 h-6 text-gold" />
                      </div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${webinar.type === 'Live' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                        {webinar.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{webinar.title}</h3>
                    <p className="text-muted-foreground mb-4">{webinar.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {webinar.duration}</span>
                      <span>{webinar.date}</span>
                    </div>
                    <Button variant="outline" className="w-full">
                      {webinar.type === 'Live' ? 'Register Now' : 'Watch Now'}
                    </Button>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold text-foreground mb-4">Missed a session?</h2>
              <p className="text-muted-foreground mb-8">All recordings are available in our resource library.</p>
              <Button asChild className="bg-gold text-primary hover:bg-gold/90">
                <Link href="/guides">Browse Resources</Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

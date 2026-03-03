import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | BrandGate",
  description: "Meet the team behind BrandGate. We're building the future of B2B distribution.",
  alternates: { canonical: "https://brandgate.dev/company/team" },
};

const values = [
  {
    title: "Customer First",
    description: "Everything we build starts with customer needs. We listen, learn, and ship solutions that matter.",
  },
  {
    title: "Move Fast",
    description: "Speed is a competitive advantage. We iterate quickly and get features into customers' hands.",
  },
  {
    title: "Build Trust",
    description: "B2B relationships are built on trust. We help our customers build that trust with their retailers.",
  },
];

export default function TeamPage() {
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
                Our Team
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-primary-foreground/50 text-lg mt-6 max-w-2xl mx-auto">
                We're building the future of B2B distribution. Based in Gothenburg, serving brands worldwide.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-foreground">Our Values</h2>
                <p className="text-muted-foreground mt-4">The principles that guide everything we do</p>
              </div>
            </FadeIn>
            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <div className="bg-card border rounded-2xl p-8 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
              <p className="text-primary-foreground/50 text-lg mb-8">
                We're always looking for talented people who want to build something meaningful.
              </p>
              <a 
                href="mailto:careers@brandgate.dev" 
                className="inline-flex items-center justify-center bg-gold text-primary hover:bg-gold/90 rounded-full px-8 py-3 font-semibold transition-colors"
              >
                View Open Positions
              </a>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

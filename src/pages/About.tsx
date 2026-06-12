import { Navbar } from "@/components/Navbar";
import { PageBanner, About, Stats, WhyChooseUs, Testimonials, CTA, Footer } from "@/components/sections";
import { useDocumentMetadata } from "../hooks/useDocumentMetadata";

export default function AboutPage() {
  useDocumentMetadata({
    title: "About — TRI·CUBE Digital Solutions",
    description: "Learn about TRI·CUBE Digital Solutions — our mission, vision, values, and the team behind 50+ websites and 250+ projects.",
    ogTitle: "About TRI·CUBE Digital Solutions",
    ogDescription: "Mission, vision and values of TRI·CUBE Digital Solutions."
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageBanner eyebrow="About" title={<>Who We Are at <span className="gradient-text-gold">TRI·CUBE</span></>}
        sub="A premium digital studio delivering web, software, internships and academic projects." />
      <About heading={false} />
      <Stats floating={false} />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

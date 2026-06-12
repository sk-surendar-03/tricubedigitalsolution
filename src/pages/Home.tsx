import { Navbar } from "@/components/Navbar";
import {
  Hero, Stats, About, Services, WhyChooseUs, Process, TechStack,
  Internship, Portfolio, Testimonials, FAQ, CTA, Footer,
} from "@/components/sections";
import { useDocumentMetadata } from "../hooks/useDocumentMetadata";

export default function Home() {
  useDocumentMetadata({
    title: "TRI·CUBE Digital Solutions — Transforming Ideas Into Digital Excellence",
    description: "Premium web development, Django & Python solutions, internships, and final year academic projects. 50+ websites, 200+ students trained, 250+ projects delivered.",
    ogTitle: "TRI·CUBE Digital Solutions",
    ogDescription: "Premium web development, internships and final year project solutions."
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <TechStack />
      <Internship />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

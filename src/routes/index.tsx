import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import {
  Hero, Stats, About, Services, WhyChooseUs, Process, TechStack,
  Internship, Portfolio, Testimonials, FAQ, CTA, Footer,
} from "@/components/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TRI·CUBE Digital Solutions — Transforming Ideas Into Digital Excellence" },
      { name: "description", content: "Premium web development, Django & Python solutions, internships, and final year academic projects. 50+ websites, 200+ students trained, 250+ projects delivered." },
      { property: "og:title", content: "TRI·CUBE Digital Solutions" },
      { property: "og:description", content: "Premium web development, internships and final year project solutions." },
    ],
  }),
  component: Home,
});

function Home() {
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

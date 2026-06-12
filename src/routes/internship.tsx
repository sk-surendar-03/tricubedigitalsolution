import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { PageBanner, Internship, Testimonials, FAQ, CTA, Footer } from "@/components/sections";

export const Route = createFileRoute("/internship")({
  head: () => ({
    meta: [
      { title: "Internship Programs — TRI·CUBE Digital Solutions" },
      { name: "description", content: "Apply for Python, Django, Full Stack and Web Development internships with live projects, certificates and placement guidance." },
      { property: "og:title", content: "TRI·CUBE Internship Programs" },
      { property: "og:description", content: "Hands-on internships designed by industry experts." },
    ],
  }),
  component: InternshipPage,
});

function InternshipPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageBanner eyebrow="Internship" title={<>Launch Your <span className="gradient-text-gold">Tech Career</span></>}
        sub="Hands-on internships built around real client work, mentor support and certificates." />
      <Internship heading={false} />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

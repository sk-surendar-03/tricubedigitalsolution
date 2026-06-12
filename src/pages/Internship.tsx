import { Navbar } from "@/components/Navbar";
import { PageBanner, Internship, Testimonials, FAQ, CTA, Footer } from "@/components/sections";
import { useDocumentMetadata } from "../hooks/useDocumentMetadata";

export default function InternshipPage() {
  useDocumentMetadata({
    title: "Internship Programs — TRI·CUBE Digital Solutions",
    description: "Apply for Python, Django, Full Stack and Web Development internships with live projects, certificates and placement guidance.",
    ogTitle: "TRI·CUBE Internship Programs",
    ogDescription: "Hands-on internships designed by industry experts."
  });

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

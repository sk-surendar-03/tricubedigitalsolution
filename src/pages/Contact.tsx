import { Navbar } from "@/components/Navbar";
import { PageBanner, Contact, FAQ, Footer } from "@/components/sections";
import { useDocumentMetadata } from "../hooks/useDocumentMetadata";

export default function ContactPage() {
  useDocumentMetadata({
    title: "Contact — TRI·CUBE Digital Solutions",
    description: "Get in touch with TRI·CUBE Digital Solutions for web development, internships and final year projects. We respond within hours.",
    ogTitle: "Contact TRI·CUBE Digital Solutions",
    ogDescription: "Let's talk about your project or internship."
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageBanner eyebrow="Contact" title={<>Let's <span className="gradient-text-gold">Talk</span></>}
        sub="Tell us about your project or internship — we usually reply within hours." />
      <Contact heading={false} />
      <FAQ />
      <Footer />
    </div>
  );
}

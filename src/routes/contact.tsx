import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { PageBanner, Contact, FAQ, Footer } from "@/components/sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TRI·CUBE Digital Solutions" },
      { name: "description", content: "Get in touch with TRI·CUBE Digital Solutions for web development, internships and final year projects. We respond within hours." },
      { property: "og:title", content: "Contact TRI·CUBE Digital Solutions" },
      { property: "og:description", content: "Let's talk about your project or internship." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
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

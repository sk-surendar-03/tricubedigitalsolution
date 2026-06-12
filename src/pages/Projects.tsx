import { Navbar } from "@/components/Navbar";
import { PageBanner, Projects, FAQ, CTA, Footer } from "@/components/sections";
import { useDocumentMetadata } from "../hooks/useDocumentMetadata";

export default function ProjectsPage() {
  useDocumentMetadata({
    title: "Final Year Projects — TRI·CUBE Digital Solutions",
    description: "Final year academic projects in Python, Django, Web, AI and Machine Learning with full documentation and source code.",
    ogTitle: "Academic Project Solutions",
    ogDescription: "Score top grades with industry-quality projects."
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageBanner eyebrow="Projects" title={<>Academic <span className="gradient-text-gold">Project Solutions</span></>}
        sub="Industry-quality final year projects with documentation, source code, and viva support." />
      <Projects heading={false} />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

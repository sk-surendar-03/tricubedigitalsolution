import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { PageBanner, Projects, FAQ, CTA, Footer } from "@/components/sections";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Final Year Projects — TRI·CUBE Digital Solutions" },
      { name: "description", content: "Final year academic projects in Python, Django, Web, AI and Machine Learning with full documentation and source code." },
      { property: "og:title", content: "Academic Project Solutions" },
      { property: "og:description", content: "Score top grades with industry-quality projects." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
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

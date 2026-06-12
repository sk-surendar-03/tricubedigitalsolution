import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { PageBanner, Services, Process, TechStack, WhyChooseUs, CTA, Footer } from "@/components/sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — TRI·CUBE Digital Solutions" },
      { name: "description", content: "Website development, Django, Python, e-commerce, internships and final year project services by TRI·CUBE." },
      { property: "og:title", content: "Services — TRI·CUBE" },
      { property: "og:description", content: "End-to-end digital and educational services crafted with precision." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageBanner eyebrow="Services" title={<>Everything You Need, <span className="gradient-text-gold">Beautifully Built</span></>}
        sub="From production websites to academic projects — six core services delivered with premium quality." />
      <Services heading={false} />
      <Process />
      <TechStack />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </div>
  );
}

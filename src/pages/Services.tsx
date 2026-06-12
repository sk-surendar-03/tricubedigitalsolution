import { Navbar } from "@/components/Navbar";
import { PageBanner, Services, Process, TechStack, WhyChooseUs, CTA, Footer } from "@/components/sections";
import { useDocumentMetadata } from "../hooks/useDocumentMetadata";

export default function ServicesPage() {
  useDocumentMetadata({
    title: "Services — TRI·CUBE Digital Solutions",
    description: "Website development, Django, Python, e-commerce, internships and final year project services by TRI·CUBE.",
    ogTitle: "Services — TRI·CUBE",
    ogDescription: "End-to-end digital and educational services crafted with precision."
  });

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

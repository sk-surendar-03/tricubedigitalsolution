import { Navbar } from "@/components/Navbar";
import { PageBanner, Portfolio, Testimonials, CTA, Footer } from "@/components/sections";
import { useDocumentMetadata } from "../hooks/useDocumentMetadata";

export default function PortfolioPage() {
  useDocumentMetadata({
    title: "Portfolio — TRI·CUBE Digital Solutions",
    description: "Selected portfolio of websites, apps, dashboards and student projects delivered by TRI·CUBE Digital Solutions.",
    ogTitle: "Selected Portfolio — TRI·CUBE",
    ogDescription: "Websites, applications, and student projects we've delivered."
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageBanner eyebrow="Portfolio" title={<>Work We're <span className="gradient-text-gold">Proud Of</span></>}
        sub="A glimpse of websites, applications and student projects shipped by our team." />
      <Portfolio heading={false} />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

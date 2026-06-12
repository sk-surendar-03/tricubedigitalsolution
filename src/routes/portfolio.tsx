import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { PageBanner, Portfolio, Testimonials, CTA, Footer } from "@/components/sections";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — TRI·CUBE Digital Solutions" },
      { name: "description", content: "Selected portfolio of websites, apps, dashboards and student projects delivered by TRI·CUBE Digital Solutions." },
      { property: "og:title", content: "Selected Portfolio — TRI·CUBE" },
      { property: "og:description", content: "Websites, applications, and student projects we've delivered." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
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

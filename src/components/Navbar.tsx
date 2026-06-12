import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useRouterState } from "@tanstack/react-router";
// import { LOGO_URL } from "@/lib/brand";
import logo from "../assets/logo.jpeg";


const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Internship", to: "/internship" },
  { label: "Projects", to: "/projects" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  // On inner pages the banner is dark — force the solid nav background so the menu stays readable.
  const solid = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${solid ? "py-2" : "py-4"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-2.5 transition-all ${
            solid ? "glass-light shadow-[0_8px_30px_-12px_rgba(10,31,68,0.15)]" : "bg-transparent"
          }`}
        >

          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="TRI·CUBE" className="h-11 w-11 object-contain rounded-lg shadow-md bg-white/90 p-0.5" width={44} height={44} />
            <div className="leading-tight">
              <div className="font-display font-bold text-lg sm:text-xl tracking-tight" style={{ color: "var(--navy)" }}>
                TRI<span style={{ color: "var(--gold)" }}>·</span>CUBE
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] hidden sm:block" style={{ color: "var(--muted-foreground)" }}>Digital Solutions</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeProps={{ className: "nav-link-active text-foreground" }}
                inactiveProps={{ className: "text-foreground/70 hover:text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
                className="relative px-4 py-2 text-sm font-medium transition-colors group"
              >
                {l.label}
                <span
                  className="nav-underline absolute left-4 right-4 -bottom-0.5 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ background: "var(--gradient-gold)" }}
                />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary text-sm">Get Started</Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg transition-colors hover:bg-muted text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 glass-light rounded-2xl p-4 flex flex-col gap-1"
            >
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "bg-secondary font-semibold" }}
                  activeOptions={{ exact: l.to === "/" }}
                  className="px-4 py-2.5 rounded-lg hover:bg-muted text-sm font-medium"
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2 text-sm">Get Started</Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

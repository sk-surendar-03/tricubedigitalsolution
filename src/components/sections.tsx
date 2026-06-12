import { motion, AnimatePresence } from "framer-motion";
import {
  Code2, Globe, ShoppingCart, GraduationCap, Briefcase,
  Award, Users, Headphones, Sparkles, Rocket, ShieldCheck,
  FileCheck, MessageSquare, Trophy, Layers,
  Mail, Phone, MapPin, Send, ArrowRight, ArrowLeft, Star, Quote,
  Linkedin, Instagram,
  CheckCircle2, Brain, Cpu, Zap, Target, Compass, HelpCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Counter } from "@/components/Counter";
import { SpiderWeb } from "@/components/SpiderWeb";
import { LOGO_URL, BRAND } from "@/lib/brand";
import heroBg from "@/assets/hero-bg.jpg";
import ll from "@/assets/nlogo.png";

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, sub, light = false }: { eyebrow: string; title: React.ReactNode; sub?: string; light?: boolean }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className="text-center max-w-3xl mx-auto mb-14"
    >
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
        style={{
          background: light ? "color-mix(in oklab, white 18%, transparent)" : "color-mix(in oklab, var(--royal) 10%, transparent)",
          color: light ? "white" : "var(--royal)",
        }}>
        <Sparkles className="w-3.5 h-3.5" /> {eyebrow}
      </span>
      <h1 className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${light ? "text-white" : ""}`}>{title}</h1>
      {sub && <p className={`mt-4 text-base sm:text-lg ${light ? "text-white/80" : "text-muted-foreground"}`}>{sub}</p>}
    </motion.div>
  );
}

/* ---------------- PAGE BANNER (for sub-pages) ---------------- */
export function PageBanner({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden isolate">
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(8,18,38,0.95), rgba(20,52,98,0.88) 65%, rgba(12,90,90,0.78))" }} />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>
      <div className="absolute top-1/2 -left-20 w-72 h-72 rounded-full blur-3xl animate-blob z-0" style={{ background: "color-mix(in oklab, var(--teal) 45%, transparent)" }} />
      <div className="absolute bottom-0 -right-20 w-96 h-96 rounded-full blur-3xl animate-blob z-0" style={{ background: "color-mix(in oklab, var(--gold) 35%, transparent)", animationDelay: "2s" }} />
      <div className="relative z-10 mx-auto max-w-5xl text-center text-white">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider glass">
            <Sparkles className="w-3.5 h-3.5" /> {eyebrow}
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">{title}</h1>
          {sub && <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto">{sub}</p>}
        </motion.div>
        <nav className="mt-8 flex justify-center items-center gap-2 text-xs text-white/60">
          <Link to="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-white">{eyebrow}</span>
        </nav>
      </div>
    </section>
  );
}

/* ---------------- HERO ---------------- */
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Light layered background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f4f8ff 45%, #e8f1ff 100%)"
        }} />
        <div className="absolute inset-0 grid-bg opacity-60" />
      </div>

      {/* Blue spider web */}
      <SpiderWeb
        className="absolute inset-0 w-full h-full z-[1]"
        color="30,77,140"
        mouseColor="0,128,128"
      />

      {/* Soft blue/teal blobs */}
      <motion.div
        className="absolute top-1/4 -left-24 w-80 h-80 rounded-full blur-3xl"
        style={{ background: "color-mix(in oklab, var(--royal) 45%, transparent)" }}
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-24 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "color-mix(in oklab, var(--teal) 40%, transparent)" }}
        animate={{ x: [0, -30, 20, 0], y: [0, 20, -25, 0], scale: [1, 0.95, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full blur-3xl"
        style={{ background: "color-mix(in oklab, var(--gold) 28%, transparent)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border"
            style={{
              background: "color-mix(in oklab, var(--royal) 8%, white)",
              borderColor: "color-mix(in oklab, var(--royal) 20%, transparent)",
              color: "var(--royal)",
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--gold)" }} />
            Premium Digital Solutions
          </motion.span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05]" style={{ color: "var(--navy)" }}>
            Transforming Ideas Into{" "}
            <span className="gradient-text inline-block">
              <motion.span
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                style={{ display: "inline-block" }}
              >
                Digital Excellence
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg sm:text-xl max-w-xl"
            style={{ color: "color-mix(in oklab, var(--navy) 75%, white)" }}
          >
            Professional Web Development, Internship Programs, and Final Year Project Solutions crafted by experts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link to="/services" className="btn-primary group">
              Explore Services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/internship"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold border-2 transition-all hover:-translate-y-0.5"
              style={{ borderColor: "var(--royal)", color: "var(--royal)" }}
            >
              Apply Internship
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex items-center gap-6 text-sm"
            style={{ color: "color-mix(in oklab, var(--navy) 65%, white)" }}
          >
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.15, zIndex: 10 }}
                  className="w-9 h-9 rounded-full border-2 border-white shadow-md"
                  style={{
                    background: `linear-gradient(135deg, var(--${["royal","teal","gold","royal"][i-1]}), var(--navy))`,
                  }}
                />
              ))}
            </div>
            <div>
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" style={{ color: "var(--gold)" }} />)}
              </div>
              <span className="text-xs">Trusted by 200+ students & businesses</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }} className="hidden lg:block relative">
          <div className="relative">
            <div className="absolute inset-0 blur-3xl rounded-full animate-pulse-glow" style={{ background: "var(--gradient-brand)", opacity: 0.35 }} />
            {/* rotating conic ring */}
            <div className="absolute inset-[-22px] rounded-[2rem] opacity-80 animate-spin-slow"
              style={{ background: "var(--gradient-cube)", mask: "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)", WebkitMask: "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)", WebkitMaskComposite: "xor", maskComposite: "exclude", padding: "1.5px" } as React.CSSProperties} />
            <motion.div
              className="relative rounded-3xl p-8 text-center border shadow-2xl"
              style={{
                background: "color-mix(in oklab, white 85%, transparent)",
                backdropFilter: "blur(20px)",
                borderColor: "color-mix(in oklab, var(--royal) 18%, transparent)",
              }}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src={ll} alt="TRI·CUBE logo" className="w-56 h-56 mx-auto object-contain drop-shadow-[0_20px_40px_rgba(20,52,98,0.25)]" width={224} height={224} />
              <div className="mt-2 font-display text-2xl font-bold" style={{ color: "var(--navy)" }}>TRI·CUBE</div>
              <div className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--royal)" }}>Digital Solutions</div>
            </motion.div>
          </div>
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1, y: [0, -8, 0] }}
            transition={{ delay: 0.8, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
            className="absolute -left-6 top-10 rounded-2xl p-4 border shadow-lg"
            style={{
              background: "color-mix(in oklab, white 90%, transparent)",
              backdropFilter: "blur(12px)",
              borderColor: "color-mix(in oklab, var(--royal) 20%, transparent)",
            }}
          >
            <Code2 className="w-6 h-6 mb-1" style={{ color: "var(--gold)" }} />
            <div className="text-xs font-semibold" style={{ color: "var(--navy)" }}>Web Dev</div>
          </motion.div>
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1, y: [0, 8, 0] }}
            transition={{ delay: 1, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
            className="absolute -right-6 bottom-16 rounded-2xl p-4 border shadow-lg"
            style={{
              background: "color-mix(in oklab, white 90%, transparent)",
              backdropFilter: "blur(12px)",
              borderColor: "color-mix(in oklab, var(--teal) 25%, transparent)",
            }}
          >
            <Brain className="w-6 h-6 mb-1" style={{ color: "var(--teal)" }} />
            <div className="text-xs font-semibold" style={{ color: "var(--navy)" }}>AI/ML</div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs flex flex-col items-center gap-2"
        style={{ color: "color-mix(in oklab, var(--navy) 55%, white)" }}
      >
        <div className="w-px h-10" style={{ background: "color-mix(in oklab, var(--navy) 35%, transparent)" }} />
        Scroll
      </motion.div>
    </section>
  );
}

/* ---------------- STATS ---------------- */
export function Stats({ floating = true }: { floating?: boolean }) {
  const stats = [
    { value: 50, suffix: "+", label: "Website Projects" },
    { value: 200, suffix: "+", label: "Students Trained" },
    { value: 250, suffix: "+", label: "Final Year Projects" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
  ];
  return (
    <section className={`relative ${floating ? "-mt-16" : "py-16"} z-10 px-4 sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 rounded-3xl p-6 sm:p-8 shadow-[0_30px_80px_-20px_rgba(10,31,68,0.3)] bg-card border">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-4">
              <div className="text-4xl sm:text-5xl font-bold gradient-text font-display">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
export function About({ heading = true }: { heading?: boolean }) {
  const pillars = [
    { icon: Rocket, title: "Mission", text: "Empower businesses and students with cutting-edge digital solutions and hands-on tech education." },
    { icon: Sparkles, title: "Vision", text: "Be a globally trusted partner for digital transformation and the launchpad for India's next tech talent." },
    { icon: ShieldCheck, title: "Core Values", text: "Integrity, innovation, excellence, and unwavering commitment to every client and learner we serve." },
  ];
  return (
    <Section>
      {heading && (
        <SectionHeading
          eyebrow="About Us"
          title={<>About <span className="gradient-text">TRI·CUBE</span> Digital Solutions</>}
          sub="A premium digital studio specialising in web development, software solutions, student internships, and academic project guidance."
        />
      )}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-40" style={{ background: "var(--gradient-brand)" }} />
            <div className="relative rounded-3xl p-10 text-white animated-gradient" style={{ background: "var(--gradient-hero)" }}>
              <div className="grid grid-cols-2 gap-6">
                {[{n:"50+",l:"Websites"},{n:"200+",l:"Interns"},{n:"250+",l:"Projects"},{n:"5★",l:"Rated"}].map((b, i) => (
                  <div key={i} className="glass rounded-2xl p-5">
                    <div className="text-3xl font-bold gradient-text-gold font-display">{b.n}</div>
                    <div className="text-sm text-white/80 mt-1">{b.l}</div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-white/90 text-sm leading-relaxed">
                Successfully delivering high-impact websites, training the next generation of developers, and crafting academic projects that win.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <p className="text-lg text-muted-foreground leading-relaxed">
            TRI·CUBE Digital Solutions specializes in web development, software solutions, student internships, and final year project guidance.
            We've successfully developed <strong className="text-foreground">50+ websites</strong>, trained <strong className="text-foreground">200+ students</strong>, and delivered <strong className="text-foreground">250+ academic projects</strong>.
          </p>
          <div className="mt-8 space-y-4">
            {pillars.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-5 rounded-2xl bg-secondary/50 hover:bg-secondary transition-all hover:translate-x-1">
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg" style={{ background: "var(--gradient-brand)" }}>
                  <p.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ---------------- SERVICES ---------------- */
const serviceList = [
  { icon: Globe, title: "Website Development", desc: "Custom-built, blazing-fast, SEO-friendly websites tailored to your brand." },
  { icon: Layers, title: "Django Development", desc: "Robust backends and admin dashboards with Python's most loved framework." },
  { icon: Code2, title: "Python Development", desc: "Automation, scripts, APIs, and data tools engineered for scale." },
  { icon: ShoppingCart, title: "E-Commerce Development", desc: "Conversion-focused stores with secure payments & smooth checkout." },
  { icon: GraduationCap, title: "Internship Programs", desc: "Industry-grade internships with mentorship and live project exposure." },
  { icon: Briefcase, title: "Final Year Projects", desc: "Complete academic projects with docs, source code, and viva support." },
];

export function Services({ heading = true, className = "" }: { heading?: boolean; className?: string }) {
  return (
    <Section className={`${className} ${heading ? "bg-secondary/30" : ""}`}>
      {heading && (
        <SectionHeading
          eyebrow="What We Do"
          title={<>Our <span className="gradient-text">Services</span></>}
          sub="End-to-end digital and educational services crafted with precision."
        />
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceList.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.08 }}
            className="group card-premium p-7 overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "radial-gradient(circle at top right, color-mix(in oklab, var(--teal) 10%, transparent), transparent 60%)" }} />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" style={{ background: "var(--gradient-brand)", boxShadow: "0 10px 30px -10px color-mix(in oklab, var(--royal) 60%, transparent)" }}>
                <s.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" style={{ color: "var(--teal)" }}>
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- WHY CHOOSE US ---------------- */
export function WhyChooseUs() {
  const features = [
    { icon: Award, title: "Industry Experience", desc: "Years of real-world delivery across domains." },
    { icon: Rocket, title: "Real-Time Projects", desc: "Build actual products, not just toy demos." },
    { icon: Cpu, title: "Modern Technologies", desc: "Latest stacks: React, Django, AI/ML, and more." },
    { icon: ShieldCheck, title: "Affordable Solutions", desc: "Premium quality at student & startup-friendly pricing." },
    { icon: Headphones, title: "Technical Support", desc: "Dedicated post-delivery support, always." },
    { icon: GraduationCap, title: "Career Guidance", desc: "Personalized mentorship and placement direction." },
  ];
  return (
    <Section>
      <SectionHeading eyebrow="Why Choose Us" title={<>The <span className="gradient-text">TRI·CUBE</span> Advantage</>} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
            className="flex gap-4 p-6 rounded-2xl glass-light border hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "color-mix(in oklab, var(--gold) 20%, transparent)", color: "var(--navy)" }}>
              <f.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" style={{ color: "var(--teal)" }} /> {f.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- PROCESS ---------------- */
export function Process() {
  const steps = [
    { icon: MessageSquare, title: "Discovery", desc: "We listen, understand your goals, and define clear deliverables." },
    { icon: Compass, title: "Design", desc: "Wireframes, mockups, and a polished UI tailored to your brand." },
    { icon: Code2, title: "Develop", desc: "Clean, scalable code built with the latest tech stacks." },
    { icon: Zap, title: "Deliver", desc: "Testing, launch, and ongoing support — done right, on time." },
  ];
  return (
    <Section className="bg-secondary/30">
      <SectionHeading eyebrow="How We Work" title={<>Our <span className="gradient-text">Process</span></>} sub="A proven four-step workflow that turns ideas into shipped products." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
        <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px" style={{ background: "linear-gradient(90deg, transparent, var(--royal), var(--teal), var(--gold), transparent)" }} />
        {steps.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="relative text-center">
            <div className="relative inline-flex w-16 h-16 rounded-2xl items-center justify-center text-white shadow-lg" style={{ background: "var(--gradient-brand)" }}>
              <s.icon className="w-7 h-7" />
              <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center" style={{ background: "var(--gold)", color: "var(--navy)" }}>{i + 1}</span>
            </div>
            <h3 className="mt-5 font-bold text-lg">{s.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- TECH STACK ---------------- */
export function TechStack() {
  const techs = [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Python", "Django", "FastAPI",
    "PostgreSQL", "MongoDB", "TensorFlow", "PyTorch", "Docker", "AWS", "Figma", "Git",
  ];
  return (
    <Section>
      <SectionHeading eyebrow="Tools of the Trade" title={<>Our <span className="gradient-text">Tech Stack</span></>} sub="Industry-grade tools we use to ship reliable, modern products." />
      <div className="flex flex-wrap justify-center gap-3">
        {techs.map((t, i) => (
          <motion.span key={t} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}
            className="px-5 py-2.5 rounded-full text-sm font-semibold border bg-card hover:-translate-y-1 hover:shadow-md transition-all cursor-default"
            style={{ borderColor: "color-mix(in oklab, var(--royal) 25%, transparent)" }}>
            {t}
          </motion.span>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- INTERNSHIP ---------------- */
export function Internship({ heading = true }: { heading?: boolean }) {
  const programs = [
    { title: "Python Internship", tag: "Beginner → Pro", color: "var(--royal)" },
    { title: "Django Internship", tag: "Backend Focus", color: "var(--teal)" },
    { title: "Full Stack Internship", tag: "End-to-End", color: "var(--gold)" },
    { title: "Web Development Internship", tag: "Frontend + Design", color: "var(--royal)" },
  ];
  const benefits = [
    { icon: Rocket, text: "Live Projects" },
    { icon: Award, text: "Certificates" },
    { icon: Users, text: "Mentor Support" },
    { icon: Briefcase, text: "Placement Guidance" },
  ];
  return (
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg, transparent, color-mix(in oklab, var(--royal) 5%, transparent), transparent)" }} />
      {heading && (
        <SectionHeading eyebrow="Learn & Earn" title={<>Internship <span className="gradient-text">Programs</span></>}
          sub="Hands-on internships designed by industry experts to launch your tech career." />
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {programs.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="group relative rounded-2xl p-6 text-white overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-300"
            style={{ background: `linear-gradient(135deg, var(--navy), ${p.color})` }}>
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity" style={{ background: p.color }} />
            <GraduationCap className="w-8 h-8 mb-4 opacity-80" />
            <div className="text-xs uppercase tracking-wider opacity-70">{p.tag}</div>
            <h3 className="text-xl font-bold mt-1">{p.title}</h3>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold border-b border-white/40 pb-0.5">
              Apply now <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {benefits.map((b, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="flex items-center gap-3 p-4 rounded-xl bg-secondary/60">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-gold)", color: "var(--navy)" }}>
              <b.icon className="w-5 h-5" />
            </div>
            <span className="font-medium">{b.text}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- PROJECTS ---------------- */
export function Projects({ heading = true }: { heading?: boolean }) {
  const cats = [
    { icon: Code2, name: "Python Projects", count: "60+" },
    { icon: Layers, name: "Django Projects", count: "45+" },
    { icon: Globe, name: "Web Projects", count: "70+" },
    { icon: Brain, name: "AI Projects", count: "35+" },
    { icon: Cpu, name: "Machine Learning", count: "40+" },
  ];
  const features = [
    { icon: FileCheck, title: "Full Documentation", desc: "Detailed reports, diagrams & abstracts." },
    { icon: Code2, title: "Source Code", desc: "Clean, commented, ready-to-run code." },
    { icon: Headphones, title: "Technical Support", desc: "Setup help and viva preparation." },
  ];
  return (
    <Section className={heading ? "bg-secondary/30" : ""}>
      {heading && (
        <SectionHeading eyebrow="Final Year Projects" title={<>Academic <span className="gradient-text">Project Solutions</span></>} sub="Score top grades with industry-quality projects." />
      )}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
        {cats.map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="text-center p-6 rounded-2xl bg-card border hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-3" style={{ background: "var(--gradient-brand)", color: "white" }}>
              <c.icon className="w-7 h-7" />
            </div>
            <div className="font-semibold text-sm">{c.name}</div>
            <div className="text-xs mt-1 font-bold" style={{ color: "var(--gold)" }}>{c.count}</div>
          </motion.div>
        ))}
      </div>
      <div className="grid sm:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <div key={i} className="p-6 rounded-2xl bg-card border">
            <f.icon className="w-8 h-8 mb-3" style={{ color: "var(--teal)" }} />
            <h3 className="font-bold">{f.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- PORTFOLIO ---------------- */
export function Portfolio({ heading = true }: { heading?: boolean }) {
  const items = [
    { title: "Business Websites", tag: "Corporate", gradient: "linear-gradient(135deg, #0A1F44, #1E4D8C)" },
    { title: "E-Commerce Platforms", tag: "Retail", gradient: "linear-gradient(135deg, #1E4D8C, #008080)" },
    { title: "Student Project Portal", tag: "EdTech", gradient: "linear-gradient(135deg, #008080, #F5A623)" },
    { title: "Django Admin Suite", tag: "SaaS", gradient: "linear-gradient(135deg, #0A1F44, #008080)" },
    { title: "ML Dashboard", tag: "AI", gradient: "linear-gradient(135deg, #1E4D8C, #F5A623)" },
    { title: "Healthcare App", tag: "Web App", gradient: "linear-gradient(135deg, #008080, #1E4D8C)" },
  ];
  return (
    <Section>
      {heading && (
        <SectionHeading eyebrow="Our Work" title={<>Selected <span className="gradient-text">Portfolio</span></>} sub="A glimpse of websites, applications, and student projects we've delivered." />
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]">
            <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110" style={{ background: it.gradient }} />
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3), transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2), transparent 50%)"
            }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
              <span className="text-xs uppercase tracking-widest opacity-80">{it.tag}</span>
              <h3 className="text-xl font-bold mt-1">{it.title}</h3>
              <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all" style={{ color: "var(--gold)" }}>
                View case study <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
export function Testimonials() {
  const tests = [
    { name: "Priya Sharma", role: "Final Year Student", text: "My ML project was delivered with stunning documentation. Scored 95+! The team explained every line of code during the viva-prep — I felt completely confident." },
    { name: "Rahul Verma", role: "Startup Founder", text: "TRI·CUBE built our entire e-commerce site from scratch. Conversions doubled in a month and the admin panel is a joy to use." },
    { name: "Ananya Iyer", role: "Web Dev Intern", text: "The internship gave me real client exposure. I shipped production features in week two and got placed before my final semester." },
    { name: "Vikram Patel", role: "CEO, LogisticsCo", text: "Professional, on-time, and genuinely talented. They re-architected our dispatch portal and shaved 40% off page-load times." },
    { name: "Sneha Reddy", role: "Django Intern", text: "Mentors were patient and code reviews were gold. I went from tutorials to building REST APIs my team actually relies on." },
    { name: "Arjun Mehta", role: "Engineering Student", text: "From idea to viva, every step was guided. The documentation and presentation deck were better than anything I could have made alone." },
  ];
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dir, setDir] = useState(1);
  const n = tests.length;
  const go = (d: number) => { setDir(d); setIdx((i) => (i + d + n) % n); };

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => { setDir(1); setIdx((i) => (i + 1) % n); }, 5500);
    return () => clearInterval(t);
  }, [paused, n]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const prev = (idx - 1 + n) % n;
  const next = (idx + 1) % n;
  const active = tests[idx];

  return (
    <Section className="overflow-hidden">
      <SectionHeading eyebrow="Testimonials" title={<>Loved by <span className="gradient-text">Clients & Students</span></>} />
      <div
        className="relative max-w-5xl mx-auto"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Ambient glows */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[60%] h-40 rounded-full blur-3xl pointer-events-none animate-blob"
          style={{ background: "color-mix(in oklab, var(--teal) 25%, transparent)" }} />
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[40%] h-32 rounded-full blur-3xl pointer-events-none animate-blob"
          style={{ background: "color-mix(in oklab, var(--gold) 22%, transparent)", animationDelay: "2s" }} />

        {/* Peek cards */}
        <div className="hidden md:flex absolute inset-y-0 left-0 items-center w-[18%] justify-start pointer-events-none">
          <div className="w-full glass-light border rounded-2xl p-5 opacity-50 scale-90 -rotate-3 shadow-sm">
            <p className="text-xs text-foreground/70 line-clamp-4">"{tests[prev].text}"</p>
            <div className="mt-3 text-xs font-semibold">{tests[prev].name}</div>
          </div>
        </div>
        <div className="hidden md:flex absolute inset-y-0 right-0 items-center w-[18%] justify-end pointer-events-none">
          <div className="w-full glass-light border rounded-2xl p-5 opacity-50 scale-90 rotate-3 shadow-sm">
            <p className="text-xs text-foreground/70 line-clamp-4">"{tests[next].text}"</p>
            <div className="mt-3 text-xs font-semibold">{tests[next].name}</div>
          </div>
        </div>

        {/* Active card */}
        <div className="relative mx-auto md:px-[20%] min-h-[340px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={idx}
              custom={dir}
              initial={{ opacity: 0, x: dir * 80, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -dir * 80, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) go(1);
                else if (info.offset.x > 80) go(-1);
              }}
              className="card-premium relative p-8 sm:p-10 cursor-grab active:cursor-grabbing"
            >
              <Quote className="absolute top-5 right-6 w-16 h-16 opacity-10" style={{ color: "var(--royal)" }} />
              <div className="flex gap-0.5 mb-4">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-current" style={{ color: "var(--gold)" }} />)}
              </div>
              <p className="text-lg sm:text-xl text-foreground/85 leading-relaxed font-medium">
                "{active.text}"
              </p>
              <div className="mt-7 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                  style={{ background: "var(--gradient-brand)" }}>
                  {active.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold">{active.name}</div>
                  <div className="text-sm text-muted-foreground">{active.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
            className="w-11 h-11 rounded-full glass-light border flex items-center justify-center hover:scale-110 transition-transform"
            style={{ color: "var(--royal)" }}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {tests.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }}
                className="h-2 rounded-full transition-all"
                style={{
                  width: i === idx ? 28 : 8,
                  background: i === idx ? "var(--gradient-gold)" : "color-mix(in oklab, var(--royal) 25%, transparent)",
                }}
              />
            ))}
          </div>
          <button
            aria-label="Next testimonial"
            onClick={() => go(1)}
            className="w-11 h-11 rounded-full glass-light border flex items-center justify-center hover:scale-110 transition-transform"
            style={{ color: "var(--royal)" }}
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- FAQ ---------------- */
export function FAQ() {
  const items = [
    { q: "What services do you offer?", a: "Web development, Django/Python solutions, e-commerce, internships, and complete final year academic projects." },
    { q: "Do you provide certificates for internships?", a: "Yes — every intern receives a verifiable certificate plus a letter of recommendation upon successful completion." },
    { q: "How much does a final year project cost?", a: "Pricing depends on technology and complexity. We offer student-friendly packages — share your topic and we'll quote within hours." },
    { q: "Do projects include source code & documentation?", a: "Absolutely. You get full source code, a detailed report, presentation slides, and viva-prep support." },
    { q: "Can you work with international clients?", a: "Yes — we work remotely with clients worldwide and deliver across all time zones." },
    { q: "How long does a typical website take?", a: "Most websites ship in 2–4 weeks. Larger platforms 6–8 weeks. We share a clear timeline up front." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section className="bg-secondary/30">
      <SectionHeading eyebrow="FAQ" title={<>Frequently Asked <span className="gradient-text">Questions</span></>} sub="Quick answers to the things people ask us most." />
      <div className="max-w-3xl mx-auto space-y-3">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
              className="rounded-2xl bg-card border overflow-hidden">
              <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-secondary/50 transition-colors">
                <span className="font-semibold flex items-center gap-3">
                  <HelpCircle className="w-5 h-5" style={{ color: "var(--royal)" }} />
                  {it.q}
                </span>
                <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform ${isOpen ? "rotate-45" : ""}`} style={{ background: "var(--gradient-brand)", color: "white" }}>+</span>
              </button>
              <motion.div initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} className="overflow-hidden">
                <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{it.a}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------------- CTA ---------------- */
export function CTA() {
  return (
    <Section>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
        className="relative rounded-3xl overflow-hidden p-10 sm:p-16 text-center text-white animated-gradient" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2" style={{ background: "var(--gold)" }} />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" style={{ background: "var(--teal)" }} />
        <div className="relative">
          <Trophy className="w-12 h-12 mx-auto mb-4" style={{ color: "var(--gold)" }} />
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
            Ready To Start Your <span className="gradient-text-gold">Digital Journey?</span>
          </h2>
          <p className="mt-4 text-white/80 max-w-xl mx-auto">Let's collaborate and turn your idea into a result-driven product.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">Contact Us <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/services" className="btn-ghost">Get Started</Link>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

/* ---------------- CONTACT ---------------- */
export function Contact({ heading = true }: { heading?: boolean }) {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };
  return (
    <Section className={heading ? "bg-secondary/30" : ""}>
      {heading && (
        <SectionHeading eyebrow="Get In Touch" title={<>Let's <span className="gradient-text">Talk</span></>}
          sub="Tell us about your project or internship — we usually reply within hours." />
      )}
      <div className="grid lg:grid-cols-5 gap-8">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="lg:col-span-2 rounded-3xl p-8 text-white relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full blur-3xl opacity-40" style={{ background: "var(--gold)" }} />
          <div className="relative">
            <h3 className="text-2xl font-bold">TRI·CUBE Digital Solutions</h3>
            <p className="text-white/80 text-sm mt-2">Premium digital studio crafting solutions that scale.</p>
            <div className="mt-8 space-y-5">
              {[
                { icon: Mail, label: "Email", value: BRAND.email, href: `mailto:${BRAND.email}` },
                { icon: Phone, label: "Phone", value: BRAND.phone, href: `tel:${BRAND.phoneRaw}` },
                { icon: MapPin, label: "Location", value: BRAND.location },
              ].map((c, i) => (
                <a key={i} href={c.href ?? undefined} className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl glass flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/60">{c.label}</div>
                    <div className="font-semibold break-all group-hover:text-[var(--gold)] transition-colors">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-10 flex gap-3">
              {[
                { Icon: Instagram, href: BRAND.social.instagram, label: "Instagram" },
                { Icon: Linkedin, href: BRAND.social.linkedin, label: "LinkedIn" },
                { Icon: Mail, href: `mailto:${BRAND.email}`, label: "Email" },
              ].map(({ Icon, href, label }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} onSubmit={handleSubmit}
          className="lg:col-span-3 bg-card rounded-3xl p-8 border space-y-5 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" type="text" placeholder="Your full name" />
            <Field label="Email" type="email" placeholder="you@example.com" />
          </div>
          <Field label="Phone" type="tel" placeholder={BRAND.phone} />
          <div>
            <label className="text-sm font-medium block mb-2">Message</label>
            <textarea required rows={5} placeholder="Tell us about your project..."
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none" />
          </div>
          <button type="submit" className="btn-primary w-full sm:w-auto">
            {sent ? <><CheckCircle2 className="w-4 h-4" /> Message Sent!</> : <>Send Message <Send className="w-4 h-4" /></>}
          </button>
          <p className="text-xs text-muted-foreground flex items-center gap-2"><MessageSquare className="w-3.5 h-3.5" /> We typically respond within 24 hours.</p>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div>
      <label className="text-sm font-medium block mb-2">{label}</label>
      <input required type={type} placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all" />
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
export function Footer() {
  const cols: { title: string; links: { label: string; to: string }[] }[] = [
    { title: "Quick Links", links: [
      { label: "Home", to: "/" }, { label: "About", to: "/about" },
      { label: "Services", to: "/services" }, { label: "Contact", to: "/contact" },
    ]},
    { title: "Services", links: [
      { label: "Web Development", to: "/services" }, { label: "Django", to: "/services" },
      { label: "Python", to: "/services" }, { label: "E-Commerce", to: "/services" },
    ]},
    { title: "Internship", links: [
      { label: "Python", to: "/internship" }, { label: "Django", to: "/internship" },
      { label: "Full Stack", to: "/internship" }, { label: "Web Dev", to: "/internship" },
    ]},
    { title: "Projects", links: [
      { label: "Python", to: "/projects" }, { label: "Django", to: "/projects" },
      { label: "Web", to: "/projects" }, { label: "AI / ML", to: "/projects" },
    ]},
  ];
  return (
    <footer className="relative text-white" style={{ background: "var(--navy)" }}>
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 10% 0%, color-mix(in oklab, var(--royal) 60%, transparent), transparent 50%), radial-gradient(circle at 90% 100%, color-mix(in oklab, var(--teal) 50%, transparent), transparent 50%)"
      }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <img src={LOGO_URL} alt="TRI·CUBE" className="w-11 h-11 rounded-lg" width={44} height={44} loading="lazy" />
              <div>
                <div className="font-display font-bold text-xl">TRI<span style={{ color: "var(--gold)" }}>·</span>CUBE</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">Digital Solutions</div>
              </div>
            </Link>
            <p className="mt-4 text-sm text-white/70 max-w-sm">
              Transforming ideas into digital excellence — web development, internships, and final year projects done right.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: Instagram, href: BRAND.social.instagram, label: "Instagram" },
                { Icon: Linkedin, href: BRAND.social.linkedin, label: "LinkedIn" },
                { Icon: Mail, href: `mailto:${BRAND.email}`, label: "Email" },
                { Icon: Phone, href: `tel:${BRAND.phoneRaw}`, label: "Phone" },
              ].map(({ Icon, href, label }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="mt-5 space-y-1.5 text-sm text-white/70">
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 hover:text-white break-all"><Mail className="w-4 h-4 shrink-0" />{BRAND.email}</a>
              <a href={`tel:${BRAND.phoneRaw}`} className="flex items-center gap-2 hover:text-white"><Phone className="w-4 h-4 shrink-0" />{BRAND.phone}</a>
            </div>
          </div>
          {cols.map((c, i) => (
            <div key={i}>
              <h4 className="font-semibold mb-4 text-white">{c.title}</h4>
              <ul className="space-y-2">
                {c.links.map((l, j) => (
                  <li key={j}>
                    <Link to={l.to} className="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 items-center justify-between text-sm text-white/60">
          <div>© 2026 TRI·CUBE Digital Solutions. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Helper: standard sub-page layout */
export function PageShell({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-background">{children}<Footer /></div>;
}

// Reuse mark for Target import (avoid unused warn under strict)
void Target;

import { useEffect, useRef } from "react";

interface Props {
  className?: string;
  density?: number; // particles per 10k px²
  linkDistance?: number;
  color?: string; // rgb triplet e.g. "245,166,35"
  mouseColor?: string;
}

export function SpiderWeb({
  className = "",
  density = 0.00012,
  linkDistance = 140,
  color = "200,220,255",
  mouseColor = "245,180,80",
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;
    type P = { x: number; y: number; vx: number; vy: number; r: number };
    let pts: P[] = [];
    const mouse = { x: -9999, y: -9999, active: false };

    const init = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const target = Math.max(35, Math.min(120, Math.floor(w * h * density)));
      pts = Array.from({ length: target }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
      }));
    };

    const step = () => {
      ctx.clearRect(0, 0, w, h);
      const linkSq = linkDistance * linkDistance;
      const mouseLink = linkDistance * 1.6;
      const mouseLinkSq = mouseLink * mouseLink;

      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // repel from mouse
        if (mouse.active) {
          const dx = p.x - mouse.x, dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < mouseLinkSq && d2 > 1) {
            const d = Math.sqrt(d2);
            const force = (1 - d / mouseLink) * 1.2;
            p.vx += (dx / d) * force;
            p.vy += (dy / d) * force;
          }
        }
        // friction
        p.vx *= 0.96; p.vy *= 0.96;
        // keep a minimum drift so they don't freeze
        if (Math.hypot(p.vx, p.vy) < 0.15) {
          p.vx += (Math.random() - 0.5) * 0.1;
          p.vy += (Math.random() - 0.5) * 0.1;
        }
        // velocity cap
        const sp = Math.hypot(p.vx, p.vy);
        if (sp > 3) { p.vx *= 3 / sp; p.vy *= 3 / sp; }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},0.55)`;
        ctx.fill();
      }

      // links between points
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < linkSq) {
            const alpha = (1 - d2 / linkSq) * 0.35;
            ctx.strokeStyle = `rgba(${color},${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        // link to mouse
        if (mouse.active) {
          const a = pts[i];
          const dx = a.x - mouse.x, dy = a.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < mouseLinkSq) {
            const alpha = (1 - d2 / mouseLinkSq) * 0.85;
            ctx.strokeStyle = `rgba(${mouseColor},${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(step);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onLeave = () => { mouse.active = false; mouse.x = -9999; mouse.y = -9999; };
    const onResize = () => { init(); };

    init();
    if (!reduce) raf = requestAnimationFrame(step);
    else {
      // single static frame
      step();
      cancelAnimationFrame(raf);
    }

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onMove);
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, [density, linkDistance, color, mouseColor]);

  return <canvas ref={ref} className={`pointer-events-none ${className}`} aria-hidden />;
}

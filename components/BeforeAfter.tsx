'use client';

import { useCallback, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  const start = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    update(e.clientX);
  };
  const move = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    update(e.clientX);
  };
  const end = () => {
    dragging.current = false;
  };

  return (
    <section className="relative section-pad border-t border-gold/10 bg-ink">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_2fr] lg:items-start">
        <div className="max-w-sm">
            <span className="text-[11px] tracking-[0.4em] uppercase text-gold">
              Antes & Depois
            </span>
            <h2 className="mt-4 font-serif text-5xl leading-[1.05] sm:text-6xl">
              Transformações que <span className="gold-text">impressionam</span>.
            </h2>
          <p className="mt-5 max-w-md text-ice/65">
            Arraste para o lado e veja o poder de um projeto bem executado.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          ref={ref}
          onPointerDown={start}
          onPointerMove={move}
          onPointerUp={end}
          onPointerCancel={end}
          className="relative aspect-[16/8.6] w-full select-none overflow-hidden border border-gold/20"
          data-cursor="hover"
        >
          {/* After (full) */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/depois.png')",
            }}
          />
          <div className="absolute right-6 top-6 rounded-full bg-ink/70 px-3 py-1 text-[10px] tracking-[0.3em] uppercase text-gold backdrop-blur">
            Depois
          </div>

          {/* Before (clipped) */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/antes.png')",
              clipPath: `inset(0 ${100 - pos}% 0 0)`,
              filter: 'grayscale(0.8) contrast(0.92)',
            }}
          />
          <div
            className="absolute left-6 top-6 rounded-full bg-ink/70 px-3 py-1 text-[10px] tracking-[0.3em] uppercase text-ice/80 backdrop-blur"
            style={{ opacity: pos > 15 ? 1 : 0 }}
          >
            Antes
          </div>

          {/* Divider + handle */}
          <div
            className="absolute top-0 bottom-0 w-px bg-gold/80 shadow-[0_0_30px_rgba(212,175,55,0.6)]"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold bg-ink/90 text-gold shadow-gold-strong backdrop-blur">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 6 2 12l6 6M16 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

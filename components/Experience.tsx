'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Experience() {
  return (
    <section id="galeria" className="relative section-pad border-t border-gold/10 bg-ink">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_2fr] lg:items-center">
        <div className="max-w-sm">
          <span className="text-[11px] tracking-[0.4em] uppercase text-gold">
            Experiência visual
          </span>
          <h2 className="mt-4 font-serif text-5xl leading-[1.06] sm:text-6xl">
            Cada ambiente conta uma <span className="gold-text">história</span>.
          </h2>
          <p className="mt-5 text-ice/65">
            Projetos pensados para viver momentos únicos com sofisticação,
            conforto e exclusividade.
          </p>
          <a
            href="#galeria"
            className="mt-10 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold"
          >
            Explorar projetos <span>→</span>
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden border border-gold/20">
            <Image
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=90"
              alt="Sala sofisticada"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
          </div>

          <button
            aria-label="Anterior"
            className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-gold/50 bg-ink/80 text-gold"
          >
            ←
          </button>
          <button
            aria-label="Próximo"
            className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-gold/50 bg-ink/80 text-gold"
          >
            →
          </button>

          <div className="mt-4 flex justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="h-1.5 w-1.5 rounded-full bg-ice/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-ice/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

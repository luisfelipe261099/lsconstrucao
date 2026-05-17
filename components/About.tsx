'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  { value: 100, suffix: '+', label: 'Obras entregues' },
  { value: 5, suffix: '+', label: 'Anos de experiência' },
  { value: 98, suffix: '%', label: 'Clientes satisfeitos' },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="relative section-pad overflow-hidden border-t border-gold/10 bg-ink"
    >
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_1.5fr]">
        <div className="max-w-md">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-[11px] tracking-[0.4em] uppercase text-gold"
          >
            Sobre a LS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-serif text-5xl leading-[1.05] sm:text-6xl"
          >
            Excelência em cada detalhe. <span className="gold-text">Compromisso</span>{' '}
            em cada etapa.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-6 max-w-xl text-ice/70 leading-relaxed"
          >
            A LS Construções & Reformas transforma ideias em ambientes extraordinários.
            Atuamos com planejamento, precisão e materiais de alto padrão para
            entregar muito mais que obras, entregamos experiências.
          </motion.p>

          <motion.a
            href="#servicos"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-9 inline-flex items-center gap-3 rounded-sm border border-gold/40 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold transition hover:bg-gold/10"
          >
            Conhecer mais
          </motion.a>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
              className="relative min-h-[220px] border border-gold/15 bg-graphite/30 p-8"
            >
              <div className="text-5xl font-light leading-none text-ice sm:text-6xl">
                <AnimatedCounter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-6 text-sm font-semibold tracking-[0.14em] uppercase text-ice/90">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

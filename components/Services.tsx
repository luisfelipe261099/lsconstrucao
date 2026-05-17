'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    title: 'Construção',
    desc: 'Obras completas do projeto à entrega, com gestão precisa.',
    icon: 'M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6',
  },
  {
    title: 'Reformas',
    desc: 'Transformações totais com design contemporâneo.',
    icon: 'M14.7 6.3a4 4 0 0 0-5.6 5.6L3 18l3 3 6.1-6.1a4 4 0 0 0 5.6-5.6l-2.5 2.5-2.1-2.1z',
  },
  {
    title: 'Porcelanato',
    desc: 'Assentamento técnico com nivelamento milimétrico.',
    icon: 'M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z',
  },
  {
    title: 'Pintura',
    desc: 'Acabamento impecável em texturas premium e efeitos.',
    icon: 'M9 4h12v6H9zM9 10v4l-4 2v6h6v-6l-2-1v-3',
  },
  {
    title: 'Telhados',
    desc: 'Estruturas seguras com isolamento e estética refinada.',
    icon: 'M2 12 12 4l10 8M5 10v10h14V10',
  },
  {
    title: 'Acabamentos',
    desc: 'Detalhes refinados que elevam o padrão do imóvel.',
    icon: 'M4 4h16v4H4zM4 10h10v10H4zM16 10h4v10h-4z',
  },
  {
    title: 'Drywall',
    desc: 'Divisórias e forros com agilidade e perfeição.',
    icon: 'M3 5h18v14H3zM9 5v14M15 5v14',
  },
  {
    title: 'Elétrica',
    desc: 'Instalações seguras e iluminação cenográfica.',
    icon: 'M13 2 4 14h7l-1 8 9-12h-7z',
  },
  {
    title: 'Hidráulica',
    desc: 'Sistemas eficientes com materiais de alta qualidade.',
    icon: 'M12 2c4 5 6 8.5 6 12a6 6 0 0 1-12 0c0-3.5 2-7 6-12z',
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative section-pad overflow-hidden border-t border-gold/10 bg-ink"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div className="max-w-sm">
            <span className="text-[11px] tracking-[0.4em] uppercase text-gold">
              Nossos serviços
            </span>
            <h2 className="mt-4 font-serif text-5xl leading-[1.06] sm:text-6xl">
              Soluções completas para <span className="gold-text">transformar</span>
              {' '}seu imóvel
            </h2>
            <a
              href="#contato"
              className="mt-16 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold"
            >
              Ver todos os serviços <span>→</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  desc,
  icon,
  index,
}: {
  title: string;
  desc: string;
  icon: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(0)`;
    el.style.setProperty('--mx', `${(x + 0.5) * 100}%`);
    el.style.setProperty('--my', `${(y + 0.5) * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative flex min-h-[106px] flex-col items-center justify-center border border-gold/15 bg-ink/45 px-3 py-5 text-center transition-[transform,box-shadow,border-color] duration-300 will-change-transform hover:border-gold/50"
        style={{
          background:
            'radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(212,175,55,0.10), rgba(13,17,23,0.6) 55%)',
        }}
      >
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center text-gold transition group-hover:scale-105">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d={icon} />
          </svg>
        </div>

        <h3 className="text-xs font-semibold tracking-[0.12em] uppercase text-ice">{title}</h3>
        <p className="sr-only">{desc}</p>
      </div>
    </motion.div>
  );
}

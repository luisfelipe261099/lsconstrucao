'use client';

import { motion } from 'framer-motion';

const items = [
  {
    src: '/images/gallery-1.svg',
    span: 'row-span-2',
    label: 'Fachada moderna',
  },
  {
    src: '/images/gallery-2.svg',
    span: '',
    label: 'Cozinha gourmet',
  },
  {
    src: '/images/gallery-3.svg',
    span: '',
    label: 'Sala integrada',
  },
  {
    src: '/images/gallery-4.svg',
    span: 'row-span-2',
    label: 'Suíte master',
  },
  {
    src: '/images/gallery-5.svg',
    span: '',
    label: 'Área gourmet',
  },
  {
    src: '/images/gallery-6.svg',
    span: '',
    label: 'Living premium',
  },
  {
    src: '/images/gallery-7.svg',
    span: '',
    label: 'Porcelanato',
  },
  {
    src: '/images/gallery-8.svg',
    span: '',
    label: 'Reforma moderna',
  },
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="relative section-pad overflow-hidden bg-graphite/40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <span className="text-[11px] tracking-[0.4em] uppercase text-gold">
              — Galeria
            </span>
            <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Projetos que <span className="gold-text">inspiram</span>.
            </h2>
          </div>
          <p className="max-w-md text-ice/65">
            Uma seleção curada de obras concluídas em ambientes residenciais e
            comerciais de alto padrão.
          </p>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] md:grid-cols-3 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.8,
                delay: (i % 4) * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative overflow-hidden rounded-xl border border-gold/10 ${it.span}`}
              data-cursor="hover"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                style={{ backgroundImage: `url('${it.src}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-80 transition group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex items-center justify-between text-xs text-ice">
                  <span className="tracking-[0.25em] uppercase text-gold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-medium">{it.label}</span>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 ring-0 ring-gold/0 transition group-hover:ring-1 group-hover:ring-gold/40" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Juliana Martins',
    role: 'Arquiteta',
    avatar: '/images/avatar-1.svg',
    text: 'Equipe extremamente técnica e atenta a cada detalhe. O acabamento entregue elevou completamente o padrão do projeto.',
  },
  {
    name: 'Rafael Almeida',
    role: 'Empresário',
    avatar: '/images/avatar-2.svg',
    text: 'Reformaram minha cobertura do zero. Prazo cumprido, transparência total e qualidade impecável. Recomendo de olhos fechados.',
  },
  {
    name: 'Camila Souza',
    role: 'Cliente residencial',
    avatar: '/images/avatar-3.svg',
    text: 'A LS transformou minha casa em algo que parecia impossível. Cada ambiente respira sofisticação. Obrigada pelo cuidado.',
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M12 2 14.85 8.6 22 9.3l-5.4 4.9L18.2 22 12 18.3 5.8 22l1.6-7.8L2 9.3l7.15-.7z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative section-pad border-t border-gold/10 bg-ink">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.07),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_2.2fr]">
          <div className="max-w-sm">
            <span className="text-[11px] tracking-[0.4em] uppercase text-gold">
              Depoimentos
            </span>
            <h2 className="mt-4 font-serif text-5xl leading-[1.05] sm:text-6xl">
              A confiança de quem já transformou sonhos em <span className="gold-text">realidade</span>.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative border border-gold/15 bg-graphite/30 p-6 transition hover:border-gold/40"
              >
                <Stars />
                <p className="mt-5 text-sm leading-relaxed text-ice/80">{t.text}</p>
                <div className="mt-8 flex items-center gap-3 border-t border-gold/10 pt-5">
                  <span
                    className="block h-10 w-10 rounded-full border border-gold/40 bg-cover bg-center"
                    style={{ backgroundImage: `url('${t.avatar}')` }}
                    aria-hidden
                  />
                  <div>
                    <div className="text-sm font-semibold text-ice">{t.name}</div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-ice/50">
                      Cliente
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

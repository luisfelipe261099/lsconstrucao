'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Particles (Reduzido para otimização de performance)
  const [particles, setParticles] = useState<
    { x: number; y: number; d: number; s: number; blur: number }[]
  >([]);
  useEffect(() => {
    setParticles(
      Array.from({ length: 15 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        d: 8 + Math.random() * 10, // Animação mais lenta para poupar CPU
        s: 1 + Math.random() * 3,
        blur: Math.random() * 2, // Menor desfoque (blur exige muito da placa de vídeo)
      }))
    );
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-[100svh] min-h-[780px] w-full overflow-hidden grain"
    >
      <motion.div
        style={{ y: yBg, scale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/1.jpeg"
          alt="LS Construções - Background"
          fill
          priority
          className="object-cover object-center"
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-transparent to-ink/80" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 z-[1]">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-gold-light/70"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.s,
              height: p.s,
              filter: `blur(${p.blur}px)`,
              boxShadow: '0 0 15px rgba(244,217,125,0.55)',
            }}
            animate={{
              y: [-25, 25, -25],
              x: [-10, 10, -10],
              opacity: [0.06, 0.45, 0.06],
            }}
            transition={{
              duration: p.d,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-6 pt-20"
      >
        <div className="max-w-[560px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="mb-7 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.24em] uppercase text-gold"
        >
          Bem-vindo a LS Construções & Reformas
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="text-balance font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Construindo <span className="text-ice">luxo</span>, conforto e{' '}
          <span className="gold-text">exclusividade</span>.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-6 max-w-lg text-base text-ice/70"
        >
          Projetos sofisticados com acabamento impecável.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contato"
            className="group inline-flex items-center gap-3 rounded-sm bg-gold-gradient px-8 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-ink"
          >
            Solicitar orçamento <span className="transition group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#galeria"
            className="inline-flex items-center gap-3 rounded-sm border border-ice/30 bg-ink/50 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-ice transition hover:border-gold"
          >
            Ver projetos <span>→</span>
          </a>
        </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-ice/70">
          <span>Role para explorar</span>
          <span className="relative grid h-10 w-6 place-items-start overflow-hidden rounded-full border border-gold/40">
            <motion.span
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-1.5 h-1.5 w-1 rounded-full bg-gold"
            />
          </span>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-y-0 left-6 z-20 hidden w-8 flex-col items-center justify-center gap-4 lg:flex">
        <span className="h-20 w-px bg-gold/50" />
        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        <span className="h-1.5 w-1.5 rounded-full bg-ice/30" />
        <span className="h-1.5 w-1.5 rounded-full bg-ice/30" />
      </div>

      <a
        href="#galeria"
        className="absolute bottom-9 right-6 z-20 hidden items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-ice/80 lg:inline-flex"
      >
        <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/50 text-gold">▶</span>
        Assistir apresentação
      </a>

      <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_54%,rgba(0,0,0,0.62)_100%)]" />
    </section>
  );
}

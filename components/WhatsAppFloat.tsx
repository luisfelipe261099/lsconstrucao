'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/siteConfig';

const baseClass =
  'grid h-11 w-11 place-items-center rounded-full bg-gold-gradient text-ink shadow-gold transition hover:scale-105';

export default function WhatsAppFloat() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-16 right-5 z-[60] hidden flex-col gap-3 md:flex"
    >
      <a
        href={siteConfig.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className={baseClass}
      >
        <span className="text-base">✆</span>
      </a>
      <a href="#contato" aria-label="Ir para contato" className={baseClass}>
        <span className="text-base">⌂</span>
      </a>
      <a href="mailto:contato@lsconstrucoes.com.br" aria-label="Enviar e-mail" className={baseClass}>
        <span className="text-base">✉</span>
      </a>
    </motion.div>
  );
}

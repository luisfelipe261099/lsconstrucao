'use client';

import Image from 'next/image';
import { siteConfig } from '@/lib/siteConfig';

export default function CTA() {
  return (
    <section id="contato" className="relative border-t border-gold/15 bg-ink">
      <div className="mx-auto grid max-w-[1700px] items-stretch lg:grid-cols-[1.2fr_1fr]">
        <div className="relative min-h-[280px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=90"
            alt="Casa de alto padrão construída pela LS Construções em Curitiba"
            fill
            className="object-cover object-center brightness-75"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
        </div>

        <div className="bg-[linear-gradient(120deg,rgba(13,17,23,0.96),rgba(24,18,8,0.92))] px-6 py-16 sm:px-10 lg:px-14">
          <h2 className="font-serif text-5xl leading-[1.02] sm:text-6xl">
            Seu imóvel merece <span className="gold-text">alto padrão</span>.
          </h2>
          <p className="mt-5 max-w-xl text-ice/75">
            Vamos transformar seu projeto em uma obra extraordinária.
          </p>
          <p className="mt-3 max-w-xl text-sm text-ice/65">
            Atendimento direto com Leandro Selusniak em Curitiba - PR.
          </p>

          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-sm bg-gold-gradient px-8 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-ink"
          >
            Solicitar orçamento agora <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

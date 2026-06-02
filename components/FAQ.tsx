'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { siteConfig } from '@/lib/siteConfig';

export const faqs = [
  {
    q: 'Quanto custa reformar um apartamento em Curitiba?',
    a: 'O valor de uma reforma em Curitiba varia conforme o tamanho do imóvel, o nível de acabamento e o escopo (reforma parcial ou completa). Na LS Construções fazemos uma visita técnica gratuita, entendemos seu projeto e enviamos um orçamento detalhado e transparente, sem surpresas. Fale com o Leandro pelo WhatsApp para uma estimativa.',
  },
  {
    q: 'A LS Construções atende em quais cidades além de Curitiba?',
    a: 'Atendemos Curitiba e toda a Região Metropolitana — São José dos Pinhais, Pinhais, Colombo, Araucária, Almirante Tamandaré — além de Campo Largo e Campo Magro. Trabalhamos com obras e reformas residenciais e comerciais de alto padrão em toda a região.',
  },
  {
    q: 'Vocês fazem reforma completa ou só serviços específicos?',
    a: 'Os dois. Executamos desde a construção completa do projeto à entrega até serviços específicos como assentamento de porcelanato, pintura, telhados, drywall, instalações elétricas e hidráulicas e acabamentos finos. Você contrata só o que precisa.',
  },
  {
    q: 'Quanto tempo demora uma reforma de alto padrão?',
    a: 'O prazo depende do escopo da obra, mas trabalhamos sempre com cronograma definido em contrato. Prezamos pelo cumprimento de prazos e pela transparência em cada etapa — você acompanha o andamento do início ao fim.',
  },
  {
    q: 'A LS Construções dá garantia nos serviços?',
    a: 'Sim. Trabalhamos com materiais de alto padrão e mão de obra qualificada, e oferecemos garantia sobre os serviços executados. Nosso compromisso é com a qualidade que se vê e o acabamento impecável em cada projeto.',
  },
  {
    q: 'Como faço para solicitar um orçamento?',
    a: 'É simples e gratuito: fale diretamente com o Leandro Selusniak pelo WhatsApp. Agendamos uma visita técnica, entendemos sua necessidade e enviamos um orçamento detalhado para a sua obra ou reforma em Curitiba e região.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative section-pad border-t border-gold/10 bg-ink"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-start">
          <div className="max-w-sm">
            <span className="text-[11px] tracking-[0.4em] uppercase text-gold">
              Perguntas frequentes
            </span>
            <h2 className="mt-4 font-serif text-5xl leading-[1.06] sm:text-6xl">
              Dúvidas sobre sua <span className="gold-text">obra em Curitiba</span>?
            </h2>
            <p className="mt-5 text-ice/65">
              Reunimos as perguntas mais comuns de quem vai construir ou reformar
              em Curitiba e região. Não achou a sua?
            </p>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold"
            >
              Fale com o Leandro <span>→</span>
            </a>
          </div>

          <div className="divide-y divide-gold/10 border-y border-gold/10">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={f.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <h3 className="text-base font-semibold text-ice sm:text-lg">
                      {f.q}
                    </h3>
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-gold/40 text-gold transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <p className="min-h-0 pb-6 pr-10 text-sm leading-relaxed text-ice/70">
                      {f.a}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

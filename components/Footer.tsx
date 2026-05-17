import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/10 bg-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <Image
            src="/images/logo.svg"
            alt="LS Construções"
            width={88}
            height={88}
            className="h-20 w-20 object-contain"
          />
          <p className="mt-4 max-w-xs text-sm text-ice/70">
            Qualidade que se vê, compromisso que se sente.
          </p>
          <div className="mt-4 flex items-center gap-3 text-gold">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-gold/40">◎</span>
            <span className="grid h-8 w-8 place-items-center rounded-full border border-gold/40">f</span>
            <span className="grid h-8 w-8 place-items-center rounded-full border border-gold/40">◷</span>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Links rápidos</h4>
          <ul className="space-y-2 text-sm text-ice/75">
            <li><a href="#hero" className="transition hover:text-gold">Início</a></li>
            <li><a href="#sobre" className="transition hover:text-gold">Sobre</a></li>
            <li><a href="#servicos" className="transition hover:text-gold">Serviços</a></li>
            <li><a href="#galeria" className="transition hover:text-gold">Projetos</a></li>
            <li><a href="#depoimentos" className="transition hover:text-gold">Depoimentos</a></li>
            <li><a href="#contato" className="transition hover:text-gold">Contato</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Serviços</h4>
          <ul className="space-y-2 text-sm text-ice/75">
            <li>Construção</li>
            <li>Reformas</li>
            <li>Porcelanato</li>
            <li>Pintura</li>
            <li>Telhados</li>
            <li>Acabamentos</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Contato</h4>
          <ul className="space-y-2 text-sm text-ice/75">
            <li>(41) 99539-0806</li>
            <li>contato@lsconstrucoes.com.br</li>
            <li>Curitiba - PR</li>
            <li>Responsável: Leandro Selusniak</li>
          </ul>
          <a
            href="#contato"
            className="mt-6 inline-flex items-center rounded-sm border border-gold/50 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>

      <div className="border-t border-gold/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4 text-xs text-ice/50 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <span>© 2024 LS Construções & Reformas. Todos os direitos reservados.</span>
          <span>Desenvolvido com amor por LS Digital</span>
        </div>
      </div>
    </footer>
  );
}

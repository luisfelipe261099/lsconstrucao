import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'LS Construções e Reformas — Curitiba',
    short_name: 'LS Construções',
    description:
      'Construção e reforma de alto padrão em Curitiba e região metropolitana.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0d1117',
    theme_color: '#0d1117',
    lang: 'pt-BR',
    icons: [
      {
        src: '/images/logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}

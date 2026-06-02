import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

const SITE_URL = 'https://lsconstrucoes.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'LS Construções e Reformas em Curitiba | Construção e Reforma de Alto Padrão',
    template: '%s | LS Construções e Reformas Curitiba',
  },
  description:
    'Empresa de construção e reforma de alto padrão em Curitiba e região. Obras, reformas residenciais e comerciais, porcelanato, pintura, telhados e acabamentos com qualidade impecável. Solicite seu orçamento com Leandro Selusniak.',
  keywords: [
    'construtora em Curitiba',
    'reforma em Curitiba',
    'construção em Curitiba',
    'empresa de reforma Curitiba',
    'reforma de casa Curitiba',
    'reforma de apartamento Curitiba',
    'construção alto padrão Curitiba',
    'pedreiro em Curitiba',
    'assentamento de porcelanato Curitiba',
    'reforma Região Metropolitana de Curitiba',
    'construtora Campo Largo',
    'reforma Batel Água Verde Ecoville',
    'LS Construções e Reformas',
  ],
  authors: [{ name: 'LS Construções e Reformas' }],
  creator: 'LS Construções e Reformas',
  publisher: 'LS Construções e Reformas',
  alternates: {
    canonical: '/',
  },
  category: 'Construção Civil',
  openGraph: {
    title:
      'LS Construções e Reformas em Curitiba | Alto Padrão',
    description:
      'Construção e reforma de alto padrão em Curitiba e região. Qualidade que se vê, compromisso que se sente.',
    url: SITE_URL,
    siteName: 'LS Construções e Reformas',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/images/1.PNG',
        width: 1200,
        height: 630,
        alt: 'LS Construções e Reformas — obras de alto padrão em Curitiba',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LS Construções e Reformas em Curitiba | Alto Padrão',
    description:
      'Construção e reforma de alto padrão em Curitiba e região. Solicite seu orçamento.',
    images: ['/images/1.PNG'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  '@id': `${SITE_URL}/#business`,
  name: 'LS Construções e Reformas',
  alternateName: 'LS Construções',
  description:
    'Empresa de construção e reforma de alto padrão em Curitiba e região metropolitana. Obras, reformas, porcelanato, pintura, telhados e acabamentos.',
  url: SITE_URL,
  telephone: '+55-41-99539-0806',
  email: 'contato@lsconstrucoes.com.br',
  image: `${SITE_URL}/images/1.PNG`,
  logo: `${SITE_URL}/images/logo.svg`,
  priceRange: '$$$',
  founder: { '@type': 'Person', name: 'Leandro Selusniak' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Curitiba',
    addressRegion: 'PR',
    addressCountry: 'BR',
  },
  areaServed: [
    { '@type': 'City', name: 'Curitiba' },
    { '@type': 'City', name: 'São José dos Pinhais' },
    { '@type': 'City', name: 'Pinhais' },
    { '@type': 'City', name: 'Colombo' },
    { '@type': 'City', name: 'Araucária' },
    { '@type': 'City', name: 'Almirante Tamandaré' },
    { '@type': 'City', name: 'Campo Largo' },
    { '@type': 'City', name: 'Campo Magro' },
    {
      '@type': 'AdministrativeArea',
      name: 'Região Metropolitana de Curitiba',
    },
  ],
  knowsLanguage: 'pt-BR',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-41-99539-0806',
    contactType: 'sales',
    areaServed: 'BR',
    availableLanguage: 'Portuguese',
  },
  sameAs: [],
  makesOffer: [
    'Construção de alto padrão',
    'Reforma residencial',
    'Reforma comercial',
    'Assentamento de porcelanato',
    'Pintura',
    'Telhados',
    'Acabamentos',
    'Drywall',
    'Instalações elétricas',
    'Instalações hidráulicas',
  ].map((s) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: s },
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-ink text-ice antialiased">
        <SmoothScroll />
        <CustomCursor />
        <Navbar />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}

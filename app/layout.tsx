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

export const metadata: Metadata = {
  title: 'LS Construções & Reformas — Alto Padrão',
  description:
    'Construindo luxo, conforto e exclusividade. Projetos sofisticados com acabamento impecável. Qualidade que se vê, compromisso que se sente.',
  keywords: [
    'construção alto padrão',
    'reformas premium',
    'LS Construções',
    'arquitetura de luxo',
    'porcelanato',
    'acabamentos',
  ],
  openGraph: {
    title: 'LS Construções & Reformas',
    description:
      'Qualidade que se vê, compromisso que se sente. Construindo luxo, conforto e exclusividade.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
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

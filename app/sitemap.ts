import type { MetadataRoute } from 'next';

const SITE_URL = 'https://lsconstrucoes.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/#sobre`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/#servicos`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/#galeria`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/#depoimentos`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/#faq`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/#contato`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}

const rawWhatsApp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5541995390806';

const normalizedWhatsApp = rawWhatsApp.replace(/\D/g, '');

const whatsappMessage =
  'Ola! Gostaria de solicitar um orcamento com a LS Construcoes e Reformas. Favor falar com Leandro Selusniak.';

export const siteConfig = {
  whatsappNumber: normalizedWhatsApp,
  whatsappLink: `https://wa.me/${normalizedWhatsApp}?text=${encodeURIComponent(whatsappMessage)}`,
};

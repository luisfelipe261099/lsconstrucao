# LS Construções & Reformas — Website Premium

Experiência web cinematográfica de alto padrão construída com Next.js 14, Tailwind CSS, Framer Motion, GSAP e Lenis Scroll.

## ✨ Destaques

- Hero fullscreen com parallax, partículas douradas e overlay cinematográfico
- Smooth scroll com Lenis
- Cursor customizado com hover magnético
- Animações de entrada premium (Framer Motion)
- Seção "Experiência Imersiva" estilo scroll-storytelling
- Comparador interativo Antes/Depois
- Galeria estilo Pinterest premium com hover zoom
- Depoimentos com cards glassmorphism + estrelas douradas
- CTA fullscreen com glow dourado
- Botão WhatsApp flutuante com pulse animation
- 100% responsivo, dark mode nativo
- SEO otimizado, fontes Montserrat (Google Fonts)

## 🎨 Paleta

| Token   | Cor       |
| ------- | --------- |
| ink     | `#0D1117` |
| graphite| `#1D232A` |
| gold    | `#D4AF37` |
| ice     | `#F5F5F5` |

## 🚀 Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## 🏗 Build

```bash
npm run build
npm run start
```

## 📂 Estrutura

```
app/
  layout.tsx        # Layout raiz + fontes + smooth scroll + cursor + navbar
  page.tsx          # Composição de todas as seções
  globals.css       # Estilos globais, utilitários gold/glass/grain
components/
  SmoothScroll.tsx  # Lenis
  CustomCursor.tsx  # Cursor premium dourado
  Navbar.tsx        # Header com glassmorphism ao scroll
  Hero.tsx          # Seção 1 — fullscreen cinematográfica
  About.tsx         # Seção 2 — sobre + contadores animados + parallax
  Services.tsx      # Seção 3 — cards 3D hover
  Experience.tsx    # Seção 4 — storytelling scroll-driven
  BeforeAfter.tsx   # Seção 5 — slider comparativo
  Gallery.tsx       # Seção 6 — galeria masonry premium
  Testimonials.tsx  # Seção 7 — depoimentos
  CTA.tsx           # Seção 8 — CTA fullscreen
  Footer.tsx
  WhatsAppFloat.tsx # Botão flutuante
  AnimatedCounter.tsx
```

## 🔧 Personalização

- Trocar imagens: substitua as URLs do Unsplash pelos seus assets em `/public/`
- Número do WhatsApp: edite em `WhatsAppFloat.tsx` e `CTA.tsx`
- Dados: ajuste arrays em `Services.tsx`, `Testimonials.tsx`, `Gallery.tsx`, `Experience.tsx`

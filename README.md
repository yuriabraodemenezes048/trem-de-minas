# Trem de Minas Ribeirão

Site institucional de página única do restaurante **Trem de Minas Ribeirão** (Ribeirão da Ilha, Florianópolis/SC).

## Stack
Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide React · next/image · next/font

## Como rodar
```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
npm start
```

## Onde alterar as informações
Tudo fica em [`data/site.ts`](data/site.ts): telefone, WhatsApp, endereço, horários, agenda semanal, nota do Google, links (Instagram, Maps) e SEO.
O JSON-LD (`lib/structured-data.ts`) lê esses mesmos dados.

## Como trocar imagens
As fotos ficam em `public/images/`. Substitua os arquivos mantendo o nome, ou altere o mapa `images` em `data/site.ts`
(incluindo `width`, `height` e o texto alternativo). A logo está em `public/logo/` (hoje JPG; troque por PNG/SVG transparente quando disponível
e atualize as referências em `Header.tsx`/`Footer.tsx`; o favicon vem de `app/icon.jpg` e `app/apple-icon.jpg`).

As fotos atuais foram recortadas de frames do vídeo institucional (720px de largura). Para máxima nitidez, substitua por fotografias originais em alta resolução.

## Publicar na Vercel
1. `git init && git add . && git commit -m "Site Trem de Minas Ribeirão"` e envie ao GitHub.
2. Na Vercel, importe o repositório (preset Next.js detectado automaticamente).
3. Opcional: defina `NEXT_PUBLIC_SITE_URL` com o domínio oficial (veja `.env.example`). Sem ela, canonical, sitemap e Open Graph usam a URL de produção da Vercel (`VERCEL_PROJECT_PRODUCTION_URL`) ou `http://localhost:3000` em desenvolvimento; nenhum domínio é inventado.

## Vídeos
`public/videos/` traz 4 trechos curtos (sem áudio, ~100–300 KB cada) recortados do vídeo institucional, sem as legendas: `hero-reel.mp4` (hero), `buffet.mp4` (Gastronomia), `gramado.mp4` (Fazendinha) e `cta.mp4` (CTA final).
O componente `LoopVideo` toca só quando visível, usa a foto como poster e não carrega com `prefers-reduced-motion` ou economia de dados.
Para trocar, substitua os arquivos mantendo os nomes (H.264, sem áudio, `+faststart`).

## Imagens de apoio por IA (opcional)
Não há imagens de IA no repositório. Os slots estão em [`data/ai-images.ts`](data/ai-images.ts), com prompt e negative prompt prontos para cada um:
`comidaBuffet`, `comidaPrato` (Gastronomia), `fazendaAnimais` (Fazendinha), `fazendaCrianca` e `ambiente` (Galeria).
Gere a imagem, salve em `public/images/ai/` com o nome indicado no slot (recomendado WebP, ~1600px) e ela entra sozinha no próximo build; sem o arquivo, o site usa a foto real.
Use com moderação e, se possível, identifique como ilustrativas.

## Privacidade e cookies
- Aviso pequeno no canto da tela (`components/privacy/CookieConsent.tsx`) com **Somente essenciais** e **Aceitar**. A escolha fica no `localStorage` (`trem-cookie-consent` = `accepted` ou `essential`); nada pessoal é coletado. O link **Cookies** no rodapé reabre o painel.
- O Google Maps (conteúdo de terceiros) só carrega com **Aceitar** ou com o clique em **Carregar mapa**; o botão direto para o Google Maps sempre existe. Lógica em `lib/consent.ts` e `components/sections/MapEmbed.tsx`.
- Não há analytics nem pixels. Páginas: `/politica-de-privacidade` e `/termos-de-uso` (ambas no sitemap).

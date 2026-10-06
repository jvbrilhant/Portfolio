# Brilhante — portfólio

Site de portfólio de João Victor Brilhante, feito em [Astro](https://astro.build), estático, em inglês (`/`) e português (`/pt/`).

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321/Portfolio/
npm run build    # gera o site em dist/
```

## Onde fica cada coisa

| O quê | Arquivo |
| --- | --- |
| Textos dos projetos (EN e PT), ordem, ano, links | `src/data/projects.ts` |
| Textos da home, serviços, números, experiência, contato | `src/data/i18n.ts` |
| Capas tipográficas | `src/components/Cover.astro` |
| Estilos (cores, fontes, manchas roxas) | `src/styles/global.css` |
| Imagens dos projetos | `public/work/<projeto>/` |
| Fotos pessoais | `public/me/` |

## Trocar uma capa

Cada projeto tem uma capa tipográfica desenhada em SVG. Para usar uma imagem no lugar dela:

1. Coloque uma imagem **quadrada** (mín. 1000×1000) em `public/covers/`, ex.: `public/covers/abrace.jpg`.
2. Em `src/data/projects.ts`, no projeto correspondente, adicione:
   ```ts
   coverImage: 'covers/abrace.jpg',
   ```
3. Faça commit. A imagem substitui a capa tipográfica na home, na página do projeto e no "próximo disco".

Para só mudar a cor do selo do vinil, altere `label` no mesmo arquivo.

## Imagens de compartilhamento (LinkedIn, WhatsApp…)

Cada projeto tem uma imagem 1200×630 com a capa do disco em `public/og/<projeto>.jpg`.
Depois de mudar uma capa, gere de novo com:

```bash
CHROMIUM_PATH=/caminho/do/chrome npm run og
```

(sem `CHROMIUM_PATH`, instale um navegador com `npx playwright install chromium`).

## Publicação

Cada push na branch `main` publica o site no GitHub Pages pelo workflow `.github/workflows/deploy.yml`.
Endereço: https://jvbrilhant.github.io/Portfolio/

Se um dia usar um domínio próprio, ajuste `site` e remova `base` em `astro.config.mjs`.

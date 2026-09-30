import { defineConfig } from 'astro/config';

// Published on GitHub Pages: https://jvbrilhant.github.io/Portfolio/
// If you move to a custom domain, set `site` to it and remove `base`.
export default defineConfig({
  site: 'https://jvbrilhant.github.io',
  base: '/Portfolio',
  trailingSlash: 'always',
  build: { format: 'directory' },
});

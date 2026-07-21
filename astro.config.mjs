import { defineConfig } from 'astro/config';

// JVN Kompas — statische site, dark-first, SEO + snelheid als prioriteit.
export default defineConfig({
  site: 'https://jvnkompas.be',
  server: { port: 4321, host: true },
  build: { inlineStylesheets: 'auto' },
});

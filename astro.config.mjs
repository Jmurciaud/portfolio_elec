// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Actualiza esta URL con tu usuario y repo de GitHub antes de desplegar:
// https://<usuario>.github.io  (si el repo se llama <usuario>.github.io)
// https://<usuario>.github.io/<repo>  (para cualquier otro repo)
export default defineConfig({
  site: 'https://usuario.github.io',
  integrations: [sitemap()],
});
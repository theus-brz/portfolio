// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://theus-brz.github.io/',
  base: '/theus-brz.github.io',
  integrations: [tailwind()],
});

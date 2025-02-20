import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base:'./',
  build: {
    outDir: './docs',
    emptyOutDir: true
  },
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
    }),
  ],
});

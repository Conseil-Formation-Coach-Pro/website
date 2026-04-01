import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        bilan: resolve(__dirname, "bilan-de-competences.html"),
        coaching: resolve(__dirname, "coaching.html"),
        formation: resolve(__dirname, "formation.html"),
        bureau: resolve(__dirname, "bureau.html"),
        parcours: resolve(__dirname, "parcours.html"),
        legal: resolve(__dirname, "mentions-legales.html")
      }
    }
  }
});

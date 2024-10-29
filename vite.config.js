import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/deploy-Ecommerce-vite/",
  server: { port: 3000 },
  define: { _global: {} },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});

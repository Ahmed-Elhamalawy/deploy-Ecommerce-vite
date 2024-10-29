import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/deploy-Ecommerce-vite/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    manifest: true,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[hash].[ext]",
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js",
      },
    },
  },
  server: { port: 3000 },
  define: { _global: {} },
});

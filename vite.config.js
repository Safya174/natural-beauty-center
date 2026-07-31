import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/natural-beauty-center/",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("@mui")) {
              return "mui";
            }
            if (id.includes("framer-motion")) {
              return "framer";
            }
            return "vendor";
          }
        },
      },
    },
  },
});
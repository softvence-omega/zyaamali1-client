import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    port: 3001,
    strictPort: true,
    origin: "http://0.0.0.0:3000",
    allowedHosts: [
     "adelo.ai",
      "localhost",
    ],
  },
  preview: {
    port: 3001,
    strictPort: true,
    allowedHosts: [
       "adelo.ai",
      "localhost",
    ],
  },
});


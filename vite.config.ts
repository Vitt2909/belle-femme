import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { cloudflare } from "@cloudflare/vite-plugin";
import { nitro } from "nitro/vite";

export default defineConfig(({ command }) => ({
  optimizeDeps: {
    exclude: ["@tanstack/start-server-core"],
  },
  plugins: [
    tanstackStart({ server: { entry: "server" } }),
    ...(process.env.VERCEL ? [nitro()] : []),
    viteReact(),
    tailwindcss(),
    tsconfigPaths(),
    ...(command === "build" && !process.env.VERCEL ? [cloudflare()] : []),
  ],
}));

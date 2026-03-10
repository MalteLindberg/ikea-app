import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "IKEA Planner",
        short_name: "IKEA Planner",
        start_url: "/ikea-app/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/ikea-app/ikeaAppLogo192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/ikea-app/ikeaAppLogo512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ],
  assetsInclude: ["**/*.glb"],
  base: "/ikea-app/",
});

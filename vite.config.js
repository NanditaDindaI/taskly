import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",

      includeAssets: [
        "images/profile.jpg",
      ],

      manifest: {
        name: "Taskly - Student Planner",
        short_name: "Taskly",
        description: "Your Personal Academic Planner",

        theme_color: "#DCCBF7",
        background_color: "#FFF9F5",

        display: "standalone",
        orientation: "portrait",
        start_url: "/",

        icons: [
          {
            src: "/icons/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },

      workbox: {
        globPatterns: [
          "**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp}",
        ],
      },
    }),
  ],
});
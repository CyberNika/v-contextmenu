import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  base: "/v-contextmenu/",
  plugins: [vue(), vueJsx()],
  build: {
    outDir: "site-dist",
  },
});

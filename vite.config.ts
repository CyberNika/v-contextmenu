import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default {
  base: "/v-contextmenu/",
  outDir: "site-dist",
  plugins: [vue(), vueJsx()],
};

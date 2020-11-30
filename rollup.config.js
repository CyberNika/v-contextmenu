import jsx from "acorn-jsx";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";

const config = {
  input: "src/index.ts",
  acornInjectPlugins: [jsx()],
  plugins: [
    typescript(),
    getBabelOutputPlugin({
      plugins: ["@vue/babel-plugin-jsx"],
      allowAllFormats: true,
    }),
  ],
  external: ["vue"],
};

export default [
  // ESModule
  {
    ...config,
    output: {
      file: "dist/index.esm.js",
      format: "es",
    },
  },

  // CommonJS
  {
    ...config,
    output: {
      file: "dist/index.common.js",
      format: "cjs",
      strict: false,
      exports: "named",
    },
  },

  // UMD
  {
    ...config,
    output: {
      file: "dist/index.umd.js",
      format: "umd",
      name: "VContextmenu",
      strict: false,
      exports: "named",
      globals: {
        vue: "Vue",
      },
    },
  },

  // iife
  {
    ...config,
    plugins: [...config.plugins, terser()],
    output: {
      file: "dist/index.js",
      format: "umd",
      name: "VContextmenu",
      strict: false,
      exports: "named",
      globals: {
        vue: "Vue",
      },
    },
  },
];

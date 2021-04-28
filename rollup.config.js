import { terser } from "rollup-plugin-terser";
import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";

const extensions = [".ts", ".tsx"];

const config = {
  input: "src/index.ts",
  plugins: [
    json(),
    nodeResolve({ extensions }),
    babel({
      extensions,
      presets: [
        "@babel/preset-typescript",
        ["@babel/preset-env", { modules: false }],
      ],
      plugins: ["@vue/babel-plugin-jsx"],
      // babelHelpers: "runtime",
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
      file: "dist/index.js",
      format: "umd",
      name: "VContextmenu",
      exports: "named",
      globals: {
        vue: "Vue",
      },
    },
  },

  // UMD mini
  {
    ...config,
    plugins: [...config.plugins, terser()],
    output: {
      file: "dist/index.min.js",
      format: "umd",
      name: "VContextmenu",
      exports: "named",
      globals: {
        vue: "Vue",
      },
    },
  },
];

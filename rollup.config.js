import copy from 'rollup-plugin-copy'
import commonjs from 'rollup-plugin-commonjs'
import VuePlugin from 'rollup-plugin-vue'
import { terser } from "rollup-plugin-terser";

const config = {
  input: 'src/index.js',
  plugins: [
    commonjs(),
    VuePlugin(),
    terser(),
    copy({
      targets: [
        { src: 'src/styles/fonts', dest: 'dist' },
      ],
    }),
  ],
  external: ['vue-runtime-helpers'],
};

export default [
  // ESModule
  Object.assign({}, config, {
    output: {
      file: 'dist/index.esm.js',
      format: 'es',
    },
  }),

  // CommonJS
  Object.assign({}, config, {
    output: {
      file: 'dist/index.common.js',
      format: 'cjs',
      strict: false,
      exports: 'named',
    },
  }),

  // UMD
  Object.assign({}, config, {
    output: {
      file: 'dist/index.js',
      format: 'umd',
      name: 'VContextmenu',
      strict: false,
      exports: 'named',
      globals: {
        'vue-runtime-helpers': 'vueRuntimeHelpers',
      },
    },
    plugins: config.plugins
  }),
];

import vue from 'rollup-plugin-vue'
import copy from 'rollup-plugin-copy'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.common.js',
    format: 'cjs',
  },
  external: [ 'vue' ],
  plugins: [
    vue(),
    copy({
      'src/styles/fonts': 'dist/fonts',
    }),
  ],
}

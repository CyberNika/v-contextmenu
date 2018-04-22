import vue from 'rollup-plugin-vue'
import copy from 'rollup-plugin-copy'
import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.common.js',
    format: 'cjs',
    // format: 'umd',
    // name: 'VContextmenu',
    strict: false,
    exports: 'named',
  },
  plugins: [
    vue(),
    babel(),
    uglify(),
    copy({
      'src/styles/fonts': 'dist/fonts',
    }),
  ],
}

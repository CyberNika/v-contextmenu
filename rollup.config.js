import vue from 'rollup-plugin-vue'
import copy from 'rollup-plugin-copy'
import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

const config = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.common.js',
    format: 'cjs',
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

if (process.env.FORMAT === 'umd') {
  config.output = Object.assign({}, config.output, {
    file: 'dist/index.js',
    format: 'umd',
    name: 'VContextmenu',
  })
}

export default config

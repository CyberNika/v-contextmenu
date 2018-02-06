module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  plugins: [
    'html'
  ],
  rules: {
    'import/resolver': {
      node: { extensions: [ '.js', '.mjs' ] }
    },
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    'import/prefer-default-export': 0,
    'space-before-function-paren': ['error', 'always'],
    'consistent-return': 0,
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'object-shorthand': ['error', 'always', { avoidQuotes: false }],
    'max-len': ['error', 120],
    'global-require': 0,
    'import/no-dynamic-require': 0,
    semi: ['error', 'never'],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'class-methods-use-this': 0,
    'object-curly-newline': ['error', { consistent: true }],
  },
  globals: {}
}

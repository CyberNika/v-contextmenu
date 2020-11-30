module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    // '@typescript-eslint/no-unused-vars': ['error'],
  },
  env: {
    browser: true,
    node: true,
  },
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/base',
    'plugin:vue/vue3-recommended',
    'plugin:nuxt/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  // plugins: ['@typescript-eslint'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  /* Check rules: https://eslint.vuejs.org/rules/ */
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    // we want to avoid extraneous spaces
    'no-unused-vars': 'warn',
    'no-trailing-spaces': 'error',
    'no-multi-spaces': ['error'],
    'no-multiple-empty-lines': 'off',
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'warn',
    'vue/script-setup-uses-vars': 'error' // Enable vue/script-setup-uses-vars rule
  }
}

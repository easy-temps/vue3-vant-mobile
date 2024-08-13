import antfu from '@antfu/eslint-config'
import pluginVue from 'eslint-plugin-vue'

const origin = await antfu({
  // enable UnoCSS support
  // https://unocss.dev/integrations/vscode
  unocss: true,

  formatters: {
    css: true,
  },

  ignores: [
    '.github/**',
    'scripts/**',
  ],
})

export default [
  ...origin,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
]

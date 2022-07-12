module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/eslint-config-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
    './.eslintrc-auto-import.json',
  ],
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'import/no-named-as-default': 'off',
    'import/namespace': [2, { allowComputed: true }],
    'import/no-named-as-default-member': 'off',
    'import/no-unresolved': 'off',
    // enUS: all rules docs https://eslint.org/docs/rules/
    // zhCN: 所有规则文档 https://eslint.bootcss.com/docs/rules/
    // 基础规则 全部 ES 项目通用
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'quote-props': 'off',
    // 禁止混合使用不同的操作符 'error','off'
    'no-mixed-operators': 'off',
    // 禁止未使用过的变量 default: ['error', { vars: 'local' }]
    'no-unused-vars': ['off'],
    // 强制在代码块中开括号前和闭括号后有空格
    'block-spacing': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    /* typescript */
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
  overrides: [
    {
      files: ["*.html"],
      rules: {
        // https://github.com/vuejs/eslint-plugin-vue/issues/1355
        "vue/comment-directive": "off",
      },
    },
  ],
}

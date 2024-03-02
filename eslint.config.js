import antfu from '@antfu/eslint-config'

// We temporarily disable `eslint.config.ts` which given by `eslint-ts-patch`
// Related: https://github.com/antfu/eslint-ts-patch/issues/5
export default antfu({
  // enable UnoCSS support
  // https://unocss.dev/integrations/vscode
  unocss: true,
})

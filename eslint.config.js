import antfu from '@antfu/eslint-config'

export default antfu({
  // enable UnoCSS support
  // https://unocss.dev/integrations/vscode
  unocss: true,

  ignores: [
    'netlify.toml',
    'node_modules',
    'dist',
  ],
})

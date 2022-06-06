import type { ConfigEnv, UserConfig } from 'vite'
import { loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { createStyleImportPlugin } from 'vite-plugin-style-import'
import createMockServer from './build/mockServer'

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  return {
    base: env.VITE_APP_PUBLIC_PATH,
    define: {
      'process.env.VUE_APP_API_BASE_URL': JSON.stringify(env.VITE_APP_API_BASE_URL),
      'process.env.VUE_APP_PUBLIC_PATH': JSON.stringify(env.VITE_APP_PUBLIC_PATH),
    },
    plugins: [
      vue(),
      createStyleImportPlugin({
        resolves:[],
        libs: [{
          libraryName: 'vant',
          esModule: false,
          resolveStyle: (name) => {
            return `vant/es/${name}/style/less`
          }
        }]
      })
    ],
    resolve: {
      alias: {
        '~@': path.join(__dirname, './src'),
        '@': path.join(__dirname, './src'),
        '~': path.join(__dirname, './src/assets'),
        vue: 'vue/dist/vue.esm-bundler.js',
      },
    },
    server: {
      host: true,
      proxy: {
        '/api': {
          // backend url
          target: env.VITE_HTTP_MOCK && env.VITE_MOCK ? createMockServer() : '',
          ws: false,
          changeOrigin: true,
        },
      },
    }
  }
}

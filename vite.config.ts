import { loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import type { ConfigEnv, UserConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import Components from 'unplugin-vue-components/vite'
import { viteVConsole } from 'vite-plugin-vconsole'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import createMockServer from './build/mockServer'
import path from 'path'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
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
      vueJsx(),
      visualizer(),
      Components({
        dts: true,
        resolvers: [VantResolver()],
        types: [],
      }),
      viteVConsole({
        entry: [path.resolve('src/main.ts')],
        localEnabled: command === 'serve',
        enabled: false,
        config: {
          maxLogNumber: 1000,
          theme: 'light'
        }
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

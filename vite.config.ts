import path from 'node:path'
import process from 'node:process'
import { loadEnv } from 'vite'
import type { ConfigEnv, UserConfig } from 'vite'

import { visualizer } from 'rollup-plugin-visualizer'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import vueJsx from '@vitejs/plugin-vue-jsx'

import viewport from 'postcss-mobile-forever'
import autoprefixer from 'autoprefixer'

import { viteVConsole } from 'vite-plugin-vconsole'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'

import UnoCSS from 'unocss/vite'

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)

  return {
    base: env.VITE_APP_PUBLIC_PATH,

    plugins: [
      vue(),
      vueJsx(),
      visualizer(),
      UnoCSS(),
      mockDevServerPlugin(),

      legacy({
        targets: ['defaults', 'not IE 11'],
      }),

      Components({
        extensions: ['vue'],
        resolvers: [VantResolver()],
        include: [/\.vue$/, /\.vue\?vue/],
        dts: 'src/components.d.ts',
      }),

      AutoImport({
        include: [
          /\.[tj]sx?$/,
          /\.vue$/,
          /\.vue\?vue/,
        ],
        imports: [
          'vue',
          'vue-router',
          'vitest',
        ],
        dts: 'src/auto-imports.d.ts',
      }),

      viteVConsole({
        entry: [path.resolve('src/main.ts')],
        enabled: command === 'serve',
        config: {
          maxLogNumber: 1000,
          theme: 'light',
        },
      }),
    ],

    css: {
      postcss: {
        plugins: [
          autoprefixer(),
          viewport({
            appSelector: '#app',
            viewportWidth: 375,
            maxDisplayWidth: 600,
          }),
        ],
      },
    },

    build: {
      cssCodeSplit: false,
      chunkSizeWarningLimit: 2048,
    },

    resolve: {
      alias: {
        '~@': path.join(__dirname, './src'),
        '@': path.join(__dirname, './src'),
        '~': path.join(__dirname, './src/assets'),
      },
    },

    server: {
      host: true,
      port: 3000,
      proxy: {
        '/api': {
          target: '',
          ws: false,
          changeOrigin: true,
        },
      },
    },
  }
}

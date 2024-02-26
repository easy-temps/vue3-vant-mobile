import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { visualizer } from 'rollup-plugin-visualizer'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { unheadVueComposablesImports } from '@unhead/vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'
import Layouts from 'vite-plugin-vue-layouts'
import UnoCSS from 'unocss/vite'
import { createViteVConsole } from './vconsole'

export function createVitePlugins() {
  return [
    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      extensions: ['.vue'],
      routesFolder: 'src/pages',
      dts: 'src/typed-router.d.ts',
    }),

    vue(),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/pengzhanbo/vite-plugin-mock-dev-server
    mockDevServerPlugin(),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ['vue'],
      resolvers: [VantResolver()],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/,
      ],
      imports: [
        'vue',
        'vitest',
        '@vueuse/core',
        VueRouterAutoImports,
        {
          'vue-router/auto': ['useLink'],
        },
        unheadVueComposablesImports,
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
      ],
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS(),

    // https://github.com/vadxq/vite-plugin-vconsole
    createViteVConsole(),

    // https://github.com/webfansplz/vite-plugin-vue-devtools
    VueDevTools(),

    vueJsx(),
    visualizer(),

    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ]
}

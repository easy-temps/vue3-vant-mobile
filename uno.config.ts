import { defineConfig, presetAttributify, presetMini, presetUno } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

// 刚使用unocss的朋友，可以借助这个工具： https://to-unocss.netlify.app

export default defineConfig({
  presets: [
    presetUno,
    presetAttributify,
    // 为什么要用到这个插件？
    // 模板使用 viewport 作为移动端适配方案，unocss 默认单位为 rem
    // 所以需要转成 px，然后由 postcss 把 px 转成 vw/vh，完成适配
    presetRemToPx({
      // 这里为什么要设置基础字体大小？看下面这篇文章
      // https://juejin.cn/post/7262975395620618298
      baseFontSize: 4,
    }),
    presetMini({
      dark: {
        dark: '.van-theme-dark',
        light: '.van-theme-light',
      },
    }),
  ],
  shortcuts: {
    // shortcuts to multiple utilities
    'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
    'btn-blue': 'text-white bg-blue-500 hover:bg-blue-700',
  },
})

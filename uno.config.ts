import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetMini,
} from 'unocss'

import presetWind3 from '@unocss/preset-wind3'
// https://unocss.dev/presets/rem-to-px
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetWind3(),
    presetAttributify,
    presetIcons(),
    presetRemToPx({
      baseFontSize: 4,
    }),
    presetMini(),
  ],
  shortcuts: [
    // shortcuts to multiple utilities
    ['btn', 'px-6 py-3 rounded-3 border-none inline-block bg-green-400 text-white cursor-pointer !outline-none hover:bg-green-600 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
  ],
})

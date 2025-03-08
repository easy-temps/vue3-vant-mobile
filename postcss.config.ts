// 此文件不支持热更新，修改后需要重启生效
export default {
  plugins: {
    'autoprefixer': {},

    // https://github.com/wswmsword/postcss-mobile-forever
    'postcss-mobile-forever': {
      appSelector: '#app',
      viewportWidth: 375,
      maxDisplayWidth: 600,
      border: true,
      rootContainingBlockSelectorList: [
        'van-tabbar',
        'van-popup',
      ],
    },
  },
}

import { createI18n } from 'vue-i18n'
import enUS from 'vant/es/locale/lang/en-US'
import zhCN from 'vant/es/locale/lang/zh-CN'

/**
 * All i18n resources specified in the plugin `include` option can be loaded
 * at once using the import syntax
 */
import messages from '@intlify/unplugin-vue-i18n/messages'
import { Locale, type PickerColumn } from 'vant'

/** 默认语言包名称 */
const FALLBACK_LOCALE = 'zh-CN'

/** 多语言 picker columns */
export const languageColumns: PickerColumn = [
  { text: '简体中文', value: 'zh-CN' },
  { text: 'English', value: 'en-US' },
]

/** 获取当前语言对应的语言包名称 */
function getI18nLocale() {
  const locale = localStorage.getItem('language') || navigator.language
  for (const l of languageColumns) {
    const value = l.value as string
    if (value === locale)
      return locale // 存在当前语言的语言包
    else if (value.indexOf(locale) === 0)
      return value // 存在当前语言的任意地区的语言包
  }
  return FALLBACK_LOCALE // 使用默认语言包
}

export const i18n = createI18n({
  locale: getI18nLocale(),
  legacy: false,
  messages,
})

/** 当前语言 */
export const locale = computed({
  get() {
    return i18n.global.locale.value
  },
  set(language: string) {
    localStorage.setItem('language', language)
    i18n.global.locale.value = language
    Locale.use(language)
  },
})

// 载入 vant 语言包
Locale.use('zh-CN', zhCN)
Locale.use('en-US', enUS)

// 根据当前语言切换 vant 语言包
Locale.use(locale.value)

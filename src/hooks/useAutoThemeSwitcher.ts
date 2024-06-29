import type { AppStore } from '@/stores/modules/app'

export default function useAutoThemeSwitcher(appStore: AppStore) {
  const handleAttributeChange = () => {
    const rootElement = document.documentElement
    if (rootElement.classList.contains('dark'))
      appStore.switchMode('dark')
    else
      appStore.switchMode('light')
  }

  const observerOptions = {
    attributes: true,
    attributeFilter: ['class'],
  }

  const observer = new MutationObserver(handleAttributeChange)

  const targetElement = document.querySelector('html')

  const initializeThemeSwitcher = () => {
    observer.observe(targetElement, observerOptions)
  }

  return { initializeThemeSwitcher }
}

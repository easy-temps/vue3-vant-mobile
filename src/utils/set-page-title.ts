import { appName } from '@/constants'

export default function setPageTitle(title?: string): void {
  window.document.title = title ? `${title} - ${appName}` : appName
}

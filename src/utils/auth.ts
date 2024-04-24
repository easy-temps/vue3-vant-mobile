import { STORAGE_TOKEN_KEY } from '@/stores/mutation-type'

function isLogin() {
  return !!localStorage.getItem(STORAGE_TOKEN_KEY)
}

function getToken() {
  return localStorage.getItem(STORAGE_TOKEN_KEY)
}

function setToken(token: string) {
  localStorage.setItem(STORAGE_TOKEN_KEY, token)
}

function clearToken() {
  localStorage.removeItem(STORAGE_TOKEN_KEY)
}

export { isLogin, getToken, setToken, clearToken }

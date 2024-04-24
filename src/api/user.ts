import request from '@/utils/request'

export interface LoginData {
  username: string
  password: string
}

export interface LoginRes {
  token: string
}

export interface UserState {
  uid?: number
  name?: string
  avatar?: string
  prose?: string
}

export function login(data: LoginData): Promise<any> {
  return request.post<LoginRes>('/auth/login', data)
}

export function logout() {
  return request.post('/user/logout')
}

export function getUserInfo() {
  return request<UserState>('/user/me')
}

import { defineMock } from 'vite-plugin-mock-dev-server'
import { builder } from '../util'

export default defineMock([
  {
    url: '/api/auth/login',
    delay: 500,
    body: () => {
      return {
        code: 0,
        data: {
          token: 'admin',
        },
        msg: 'success',
      }
    },
  },
  {
    url: '/api/user/me',
    delay: 100,
    body: () => {
      return {
        code: 0,
        data: {
          uid: 1,
          name: 'admin',
          avatar: 'https://iconfont.alicdn.com/p/user/eZQFvSX6g8f1/f0d9fd95-a5f0-474d-98b0-d51e8450f2cf.png',
        },
        msg: 'success',
      }
    },
  },
  {
    url: '/api/user/logout',
    delay: 500,
    body: () => {
      return {
        code: 0,
        msg: 'success',
      }
    },
  },
  {
    url: '/api/user/email-code',
    delay: 1000,
    body: () => {
      const code = '123456'
      return builder(code)
    },
  },
  {
    url: '/api/user/reset-password',
    delay: 1000,
    body: () => {
      const res = true
      return builder(res)
    },
  },
  {
    url: '/api/user/register',
    delay: 1000,
    body: () => {
      const res = true
      return builder(res)
    },
  },
])

import { defineMock } from 'vite-plugin-mock-dev-server'
import { builder } from '../util'
import proses from '../data'

export default defineMock({
  url: '/api/prose',
  delay: 100,
  body: () => {
    const rand = Math.floor(Math.random() * proses.value.length)
    const prose = proses.value[rand]
    return builder(prose)
  },
})

// https://github.com/pengzhanbo/vite-plugin-mock-dev-server
import { defineMock } from 'vite-plugin-mock-dev-server'
import proses from '../data'

export default defineMock({
  url: '/api/project/prose',
  delay: 100,
  body: () => {
    const prose = proses.value[Math.floor(Math.random() * 8)]
    return {
      code: 0,
      data: prose,
      msg: 'success',
    }
  },
})

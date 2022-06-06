import { createMockMiddleware } from 'umi-mock-middleware2'
import express from 'express'
const createMockServer = () => {
  const mockTarget = `http://127.0.0.1:${process.env.MOCK_SERVER_PORT}`
  const app = express()
  app.use(createMockMiddleware())
  app.listen(process.env.MOCK_SERVER_PORT, () => {
    console.log(`Mock Server listening at ${mockTarget}`)
  })
  return mockTarget
}

export default createMockServer

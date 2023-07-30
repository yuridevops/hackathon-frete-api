import express from 'express'
import cors from 'cors'
import { router as MainRouter } from './routes'

const { PORT = 3333 } = process.env

export function initServer() {
  const app = express()
  app.use(express.json())
  app.use(cors())
  app.use(MainRouter)
  app.listen(PORT, () => `server running on port ${PORT}`)
}

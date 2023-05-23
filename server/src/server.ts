import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import { authRoutes } from './routes/auth'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true, // http://localhost:3000 // true: todas as URLs de front-end poderão acessar nosso back-end
})

app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('✅ HTTP server running on http://localhost:3333 🚀')
  })

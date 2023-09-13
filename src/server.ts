import { fastify } from 'fastify'
import { gettAllPromptsRoute } from './routes/get-all-prompts'

const app = fastify()

app.register(gettAllPromptsRoute)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })

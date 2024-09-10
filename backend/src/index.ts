import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/user/signup', (c) => {
  const body = c.body
  return c.json(body)
})

app.post('/api/v1/user/signin', (c) => {
  const body = c.body
  return c.json(body)
})

app.post('/api/v1/blog', (c) => {
  const body = c.body
  return c.json(body)
})

app.post('/api/v1/blog', (c) => {
  const body = c.body
  return c.json(body)
})

export default app

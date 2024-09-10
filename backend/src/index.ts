import { Hono } from 'hono'
import { User } from '@prisma/client'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'


const app = new Hono<{
  Bindings:{
    DATABASE_URL: string
  }
}>()

app.post('/api/v1/user/signup', async(c) => {
  const body = await c.req.json()
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try {
    await prisma.user.create({
      data:{
        username: body.username,
        password: body.password,
        name: body.name,
      }
    })
    return c.text('User created')
  } catch (e) {
    return c.text('Invalid')
  }

 
})

app.post('/api/v1/user/signin', (c) => {
  return c.text('hello hono')
})

app.post('/api/v1/blog', (c) => {
  return c.text('hello hono')
})


app.put('/api/v1/blog', (c) => {
  return c.text('hello hono')
})

app.get('/api/v1/blog/:id', (c) => {
  return c.text('hello hono')
})

app.get('/api/v1/blog/bulk', (c) => {
  return c.text('hello hono')
})
export default app

import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";

export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string;
        JWT_SECRET: string;
      }
}>()
blogRouter.use('/*', async (c, next) => {
    next()
})


blogRouter.post('/', async(c) => {
    const body = await c.req.json()
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try {
        const blog = await prisma.blog.create({
            data:{
                title:body.title,
                authorId:1,
                content:body.content,
                thumbnail: body.thumbnail // Add thumbnail property
            }
        })
        return c.json({
            id:blog.id
        })
    } catch (error) {
        return c.text('Invalid')
        
    }
  })
  
  
blogRouter.put('/', async(c) => {
    //update blog
    const body = await c.req.json()
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try {
        const blog = await prisma.blog.update({
            where:{id:body.id},
            data:{
                title:body.title,
                content:body.content,
                thumbnail: body.thumbnail
                
            }
        })
        return c.json({
            id:blog.id
        })
    } catch (error) {
        return c.text('Invalid')
        
    }
  })
  
blogRouter.get('/', async(c) => {
    const body = await c.req.json()
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      try {
          const blog = await prisma.blog.findFirst({
              where:{id:body.id},
          })
          return c.json({
              blog
          })
      } catch (error) {
          c.status(411);
          return c.json({
            msg: "something went wrong while fetching the blog"
          })
          
      }
  })
  
  // todo : add pagination
  blogRouter.get('/bulk', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      try {
          const blog = await prisma.blog.findMany()
          return c.json({
              blog
          })
      } catch (error) {
          return c.text('cannot fetch blogs')
      }
  })
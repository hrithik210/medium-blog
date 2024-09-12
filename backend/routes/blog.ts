import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from 'hono/jwt';
import { CreateblogInput, UpdateBlogInput } from '@hrithik2210/medium-common';

export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string;
        JWT_SECRET: string;
      },
    Variables:{
        userId: string;
      }
}>()

blogRouter.use('/*', async (c, next) => {
    const token = c.req.header('authorization') || ''
    const user = await verify(token, c.env.JWT_SECRET)
    
    if(user){
        c.set('userId', user.id as string)
        await next()
    }
    else{
        c.status(401)
        return c.json({
            msg: "Unauthorized"
        })
    }
})


blogRouter.post('/', async(c) => {
    const authorId = c.get('userId')
    const body = await c.req.json()

    const {success} = CreateblogInput.safeParse(body)
    if (!success) {
        c.status(411);
        return c.text('wrong inputs')
    }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try {
        const blog = await prisma.blog.create({
            data:{
                title:body.title,
                authorId: Number(authorId),
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

    const {success} = UpdateBlogInput.safeParse(body)
    if (!success) {
        c.status(411);
        return c.text('wrong inputs')
    }
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
            blog
        })
    } catch (error) {
        return c.text('Invalid')
        
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
  
blogRouter.get('/:id', async(c) => {
    const id =  c.req.param("id")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      try {
          const blog = await prisma.blog.findFirst({
              where:{id:Number(id)},
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
  

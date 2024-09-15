import { Blog } from "../hooks"
import AppBar from "./AppBar"
import { Avatar } from "./BlogsCard"



const FullBlog = ({blog}: {blog : Blog}) => {

  return (
    <div>
    <AppBar />
    <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-8">
      <div className="flex-grow">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <div className="prose">
          {blog.content.split('\n\n').map((paragraph: string, index: number) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="md:w-1/3">
        <div>
          <h2 className="text-xl font-semibold mb-2">Author</h2>
          <div className="flex items-center gap-4">
            <div className=" p-2">
              <Avatar name={blog.author.name} size={8} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">{blog.author.name}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FullBlog

import { Blog } from "../hooks"



const FullBlog = ({blog}: {blog : Blog}) => {

  return (
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
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Author</h2>
          <div className="flex items-center gap-4">
            <div className="bg-gray-300 rounded-full p-2">
              {/* <User className="w-8 h-8 text-gray-600" /> */}
            </div>
            <div>
              <h3 className="font-semibold">{blog.author.name}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullBlog

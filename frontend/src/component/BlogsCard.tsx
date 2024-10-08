import { Link } from "react-router-dom"

export interface BlogCardProps {
    authorName: string
    title: string
    content: string
    date: string
    id: number
  }
const BlogsCard = ({authorName ,
    date,
    title,
    content,
    id
    }: BlogCardProps)=> {
  return (
    <Link to= {`/blog/${id}`}>
        <div className="border border-b border-slate-200 max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-4 cursor-pointer">
            <div className="flex mb-4 p-4">
                <div className="mr-2">
                    <Avatar name={authorName} />
                </div>
              <p className="font-medium text-gray-900">{authorName || "Anonymous"}</p>
              <p className="text-gray-800 ml-3">{date}</p>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
            <p className="text-md text-gray-900">{content.slice(0,100) + "..."}</p>

            <div className="mt-3 ml-2 text-sm">
                {`${Math.floor(content.length/100)} min read`}
            </div>
          
        </div>
      </Link>
  )
}

export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
  return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
  <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-600 dark:text-gray-300`}>
      {name ? name[0] : "A"}
  </span>
</div>
}

export default BlogsCard

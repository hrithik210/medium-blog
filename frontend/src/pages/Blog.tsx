import { useParams } from "react-router-dom"
import FullBlog from "../component/FullBlog"
import { useBlog } from "../hooks"

const Blog = () => {
  const { id }= useParams()
  const {loading , blog } = useBlog({
    id: id ? parseInt(id) : 0
  })

  if (loading){
    return <div>Loading...</div>
  }
  return (
    <div>
      {blog ? <FullBlog blog={blog}/> : <div>Blog not found</div>}
    </div>
  )
}

export default Blog

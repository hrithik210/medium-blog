import { useParams } from "react-router-dom"
import FullBlog from "../component/FullBlog"
import { useBlog } from "../hooks"

const Blog = () => {
  const { id }= useParams()
  const {loading , blog } = useBlog({
    id: id ? parseInt(id) : 0
  })

  if (loading || !blog){
    return <div>Loading...</div>
  }
  return (
    <div>
      <FullBlog blog={blog}/>
    </div>
  )
}

export default Blog

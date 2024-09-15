import { useParams } from "react-router-dom"
import FullBlog from "../component/FullBlog"
import { useBlog } from "../hooks"
import LoadingSkeleton from "../component/LoadingSkeleton"

const Blog = () => {
  const { id }= useParams()
  const {loading , blog } = useBlog({
    id: id ? parseInt(id) : 0
  })

  if (loading || !blog){
    return <div>
    <LoadingSkeleton/>
    <LoadingSkeleton/>
    <LoadingSkeleton/>
    <LoadingSkeleton/>
    <LoadingSkeleton/>
    <LoadingSkeleton/>
    </div>
  }
  return (
    <div>
      <FullBlog blog={blog}/>
    </div>
  )
}

export default Blog

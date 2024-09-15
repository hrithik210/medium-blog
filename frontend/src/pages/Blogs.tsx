
import AppBar from '../component/AppBar'
import BlogsCard from '../component/BlogsCard'
import LoadingSkeleton from '../component/LoadingSkeleton'
import { useBlogs } from '../hooks'

const Blogs = () => {
    const {loading , blogs} = useBlogs()

    if(loading) {
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
            <AppBar />
            <div>
                {blogs.map((blog) => (
                    <BlogsCard
                        id={blog.id}
                        authorName={blog.author.name|| "Anonymous" }
                        date={"Dec 3, 2023"}
                        title={blog.title}
                        content={blog.content}
                    />
                ))}
             </div>

        </div>
    )
}

export default Blogs

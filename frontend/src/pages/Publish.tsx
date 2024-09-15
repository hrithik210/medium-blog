import axios from "axios"
import { useState } from "react"
import { BACKEND_URL } from "../Config"
import { useNavigate } from "react-router-dom"
import AppBar from "../component/AppBar"

export default function Publish() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const navigate  = useNavigate()

async function publishBlog(){
   const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
        title,
        content
    },{
        headers:{
            Authorization: `${localStorage.getItem("jwt token")}`
        }
    })
    navigate(`/blog/${response.data.id}`)
  }

  return (
    <div>
      <AppBar />
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <div className="bg-white w-full max-w-4xl h-[36rem] rounded-lg shadow-lg overflow-hidden flex flex-col">
        <div className="flex items-center p-4 border-b">
          <button className="text-gray-900 hover:text-gray-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

          </button>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="ml-4 text-2xl font-light text-gray-700 placeholder-gray-400 focus:outline-none flex-grow"
          />
        </div>
        <textarea
          placeholder="Tell your story..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="flex-grow p-4 text-gray-700 placeholder-gray-400 focus:outline-none resize-none"
        />
        <div className="flex justify-end p-4 ">
            <button onClick={publishBlog} type="button" className="text-white bg-green-700 mr-5
            hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium 
            rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Publish</button>
        </div>
    </div>
      
    </div>
    </div>
  )
}

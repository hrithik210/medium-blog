import { Link } from "react-router-dom"
import { Avatar } from "./BlogsCard"


const AppBar = () => {
  return (
    <div className="flex justify-between px-10 py-4">
        <Link to={'/blogs'}>
            <div className="text-xl font-semibold cursor-pointer">Medium</div>
        </Link>
      
        <div className="cursor-pointer">
            <Link to={'/publish'}>
                <button type="button" className="text-white bg-green-700 mr-5
                  hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium 
                  rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">New</button>
            </Link>
            <Avatar  name="hrithik" size={"big"}/>
        </div>
    </div>
  )
}

export default AppBar

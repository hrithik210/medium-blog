import { Avatar } from "./BlogsCard"


const AppBar = () => {
  return (
    <div className="flex justify-between px-10 py-4">
        <div className="text-xl font-semibold cursor-pointer">Medium</div>
        <div className="cursor-pointer">
            <Avatar  name="hrithik" size={8}/>
        </div>
    </div>
  )
}

export default AppBar

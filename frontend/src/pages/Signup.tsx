import Auth from "../component/Auth"
import Quote from "../component/Quote"

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
        <div className="w-full max-w-md">
          <Auth type="signup"/> 
        </div>
      </div>
    
      <div className="hidden lg:flex ">
        <Quote />
      </div>
    </div>
  )
}

export default Signup

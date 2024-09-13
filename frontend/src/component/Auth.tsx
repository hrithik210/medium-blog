import { useState } from "react"
import { Link } from "react-router-dom"
import {SignupInputType} from "@hrithik2210/medium-common"

const Auth = ({type}:{type : "signup" | "signin"}) => {
  const [postInputs, setPostInputs] = useState<SignupInputType>({
    name:"",
    username:"",
    password:""
  })
  return (
    <div className="flex justify-center flex-col h-screen">
        <div className="flex justify-center">
            <div>
                <div className="text-3xl font-bold">
                    Create New Account
                </div>
                <div className="text-gray-500 underline mt-2">
                    Already have a account? <Link to="/signin" >Sign in</Link>
                </div>
                <div>
                    <LabelledInput label="name" type="text" placeholder="Enter your name" 
                        onChange={(e) => 
                            setPostInputs(c => ({...c, name:e.target.value}))
                    } />
                    <LabelledInput label="username" type ="email" placeholder="hrithik@gmail.com" 
                        onChange={(e) => 
                            setPostInputs(c => ({...c, name:e.target.value}))
                    } />

                    <LabelledInput label="password" type="password" placeholder="Enter your password" 
                        onChange={(e) => 
                            setPostInputs(c => ({...c, name:e.target.value}))
                    } />

                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Auth

interface LabelledInputTypes {
    label: string;
    placeholder: string;
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({label , type , placeholder, onChange}:LabelledInputTypes) {
    return <div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input onChange={onChange} type={type} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400
             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
             placeholder={placeholder} required />
        </div>
    </div>
}
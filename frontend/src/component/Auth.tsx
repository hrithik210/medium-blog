import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {SignupInputType} from "@hrithik2210/medium-common"
import axios from "axios"
import { BACKEND_URL } from "../Config"

const Auth = ({ type }:{type : "signup" | "signin"}) => {
  const navigate  = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInputType>({
    name:"",
    username:"",
    password:""
  })

 async function sendRequest() {
    try {
        const response  = await axios.post(`${ BACKEND_URL }/api/v1/user/${type === 'signin' ? "signin": "signup"}`, postInputs);
        const jwt = response.data ;
        localStorage.setItem("jwt token", jwt)
        navigate('/blog')
        
    } catch (error) {
        console.log(error)
        
    }
  }
  return (
    <div className="flex justify-center flex-col h-screen">
        <div className="flex justify-center">
            <div className="">
                <div>
                    <div className="text-3xl font-bold px-10 ">
                        {type== 'signup' ?'Create New Account' : 'Login to your Account' }
                    </div>
                    <div className="text-gray-500 underline mt-2 px-10 text-center">
                        {type ==="signup" ? "Already have a account?" : "Don't have an Account?"} <Link to={type === 'signin'? "/signup": "/signin"} >{type ==='signin' ? "Sign Up":"Sign Ip"}</Link>
                    </div>

                </div>
                <div className="mt-3 pt-4">
                    {type==='signup'?<LabelledInput label="Name" type="text" placeholder="Enter your name" 
                        onChange={(e) => 
                            setPostInputs(c => ({...c, name:e.target.value}))
                    } />: null}
                    <LabelledInput label="Username" type ="email" placeholder="hrithik@gmail.com" 
                        onChange={(e) => 
                            setPostInputs(c => ({...c, username:e.target.value}))
                    } />

                    <LabelledInput label="Password" type="password" placeholder="Enter your password" 
                        onChange={(e) => 
                            setPostInputs(c => ({...c, password:e.target.value}))
                    } />

                </div>

                <button onClick={sendRequest} 
                    className="w-full bg-black text-white mt-3 rounded-lg font-medium py-2">
                    {type ==='signup' ? "Sign Up" : "Sign In"}
                </button>
            </div>
            
        </div>
    </div>
  )
}



interface LabelledInputTypes {
    label: string;
    placeholder: string;
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({label , type , placeholder, onChange}:LabelledInputTypes) {
    return <div>
          <div>
            <label className="block mb-2 text-sm font-bold text-black mt-2">{label}</label>
            <input onChange={onChange} type={type} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400
             dark:focus:ring-blue-500 dark:focus:border-blue-500" 
             placeholder={placeholder} required />
        </div>
    </div>
}

export default Auth
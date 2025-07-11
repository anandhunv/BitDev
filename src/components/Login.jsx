import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useNavigate } from 'react-router'
import { BASE_URL } from '../utils/constants'

const Login = () => {




    const [emailId,setEmailId]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")
    const dispatch = useDispatch()
    const navigate=useNavigate()


    const handleLoginButton=async()=>{

        //api call to login function using axios
try {
  
         const res= await axios.post(`${BASE_URL}/api/auth/login`,{
          email:emailId,
          password: password
         },{
        withCredentials:true
       })
             console.log("Login success:", res.data); // { token: "QpwL5tke4Pnpja7X4" }
             dispatch(addUser(res.data))
             navigate("/profile")


} catch (error) {

  console.log(error)
  const message = error.response?.data?.message || error.message || "Login failed";
  setError(message); // ✅ Only a string here  
}


    }

  return (
    <div className='flex justify-center items-center  '>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 flex flex-col   justify-center">
  <legend className="fieldset-legend">Login</legend>

  <label className="label">Email:{emailId}</label>
  <input type="email"
   className="input focus:outline-none "
   placeholder="Email"
   value={emailId}
   onChange={(e)=> setEmailId(e.target.value)} />

  <label className="label">Password</label>
  <input type="password" 
  className="input focus:outline-none"
   placeholder="Password"
   
   value={password}
   onChange={(e)=>setPassword(e.target.value)}/>

{error && <p className="text-red-500 mt-2">{error}</p>}
  <button onClick={handleLoginButton} className="btn btn-neutral mt-4">Login</button>
</fieldset> 
    </div>
 )
}

export default Login
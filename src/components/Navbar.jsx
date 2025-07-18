import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../utils/constants'
import { removeUser } from '../utils/userSlice'
import { useNavigate } from 'react-router'

const Navbar = () => {

  const user= useSelector((store)=>store.user)
  const dispatch=useDispatch()
      const navigate=useNavigate()

  const handleLogout=async()=>{

    try {
     await axios.post(`${BASE_URL}/api/auth/logout`,{},{withCredentials:true})
      dispatch(removeUser(null))
      navigate("/login")
    } catch (error) {
      
      console.log(error)
    }

  }  

  return (
<div className="navbar bg-white shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">BitDev {user?.name}</a>
  </div>
  <div className="flex gap-2">
    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a onClick={handleLogout}>Logout</a></li>
      </ul>
    </div>
  </div>
</div>  )
}

export default Navbar
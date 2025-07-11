import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {

    const user= useSelector((store)=>store.user)

  return (
    <div>
      <div>Profile Page</div>

      {user && <div>
        <ul>
          <li>{user?.name}</li>
          <li>{user?.email}</li>
        </ul>
      </div>}
    </div>
  )
}

export default Profile
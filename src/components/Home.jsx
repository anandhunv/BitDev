import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { Outlet, useNavigate } from 'react-router';
import Footer from './Footer';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Home = () => {

      const navigate=useNavigate()

  const dispatch=useDispatch()

  const userData=useSelector((store)=>store.user)

// fetch the profile of the user

  const fetchUser=async()=>{

    if(userData) return;
    // update the store
try {
      const  res =await axios.get(`${BASE_URL}/api/auth/profile`,{withCredentials:true})

      dispatch(addUser(res.data))
      

  
} catch (error) {

    console.log(error)

  if(error.status===401){
  navigate("/login")
  }

  
}
  }

  //now fetchuser fetch the user , fetch the user when the component is loaded , so how we do that , use useEffect, when component is loaded useEffwct will called , there we fetch the user

  useEffect(()=>{
    fetchUser()

    
  },[])



  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main content grows to push footer down */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Home;

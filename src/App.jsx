import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Feed from './components/Feed'

const App = () => {
  return (
    <>

    <Provider store={appStore}>

   <BrowserRouter basename='/'>   {/*   wher application base root point to,so all the routes inside is work related to this route */}

<Routes> {/*wraper for diff routes */}

      <Route path='/' element={<Home/>}>
              <Route path='/' element={<Feed/>}/>

        <Route path='/login' element={<Login/>}/>
                <Route path='/profile' element={<Profile/>}/>


      
      </Route>


    <Route path='/test' element={<div>fake  check</div>}/>


</Routes>
    </BrowserRouter>
</Provider>

    </>
  )
}

export default App 



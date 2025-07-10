create vite + react project 
remove app.css and unnessary code 
install tailwind css
install diasy ui
add navbar component from daisy to project

======================================================================

routing(/login ,/user)

use react router
npm i react-router
install npm i react-router

create different path

routing do in root level of application
using  1) BrowserRouter with basename (body or home component)
        2)Routes
        3)Route with path and element


the both are same below
 <Route path="/login" element={<Body/>}></Route>  (using this for createing children route)
  <Route path="/login" element={<Body/>}/>

  
create children route

how??  <Route path="/login" element={}></Route>

inside boy component there is multiple routes


      <Route path='/' element={<Home/>}>   +>parent
        <Route path='/login' element={<Login/>}/>          children route
        <Route path='/profile' element={<Profile/>}/>      children route
      </Route>

but if we run this children path we dont get the anything in the page, beacuse  we only add the login and profile component on this route but we dont add anything inside body(home) component, so where will body compnennt render , we dont give space to render  the children 

so the code says that these are the children routes(login and profile)  amd the home is parent route , so parent should render this children in an outlet, so there is component outlet we need to given an outlet where this children can be render 

so in body(home)  component create an outlet from react router

this is concept of creating childrens route and outlet
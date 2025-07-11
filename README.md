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



======================================================================================


create login page , email password name


use usestate for email and password (binding state variable to your ui component)
 and onchange to change the input values 

when handleLOginbutton click , we do a network call so make it async

install axios to api call 
        //api call to login function using axios

 axios.post("http://localhost:7777/login",{
        emailId,password
       })

       when we try this,axios is try to make a api call  and we have awaited for the result so we use await there and get result in variable


       const res= await axios.post("http://localhost:7777/login",{
        emailId,password
       },{
        withCredentials:true
       })

       try wrap these code in try-catch block whnen make an api call

======================================
cors error

try to make api call from x domain to y domain then its give a cors error(crossorigin), cannot make an api call from different origin to different origin => 
                                      namste dev.com to namstedev.com =its okay nor error 
cors error are at browser level,for securoty reasons brownsers not alllowed cors request

how to handle this case, also at backend server??? 

at backend install cors = npm i cors and use it as a middleware, add middleware to with configurations: origin, credentials:true

app.use(cors({origin: 'http://frontend url',credentials:true }))

but when we do these we not get tokens in  cookies  ,so to get that pass "withcredentials:true" with axios.post in frontend.
whenever making an api call so pass {withcredentials:true}

if dont pass authenticaton will fail

so first setup credential on backend and withcredentail on frontend  while making an api call now everything work smoothly

now tokens set in  cookies


========================================

install reudx/toolkit and react-redux

create a store appstore.js under utils folder
provide the store in app.jsx using provider from "react-redux" and add store to whole application

create slice, userslice using "createSLice" and add configirtaion  using name , initioal state and reducers

at reducers  add methods  "adduser" "removeuser"  using state, action payload and export the user slice and actions

add userslice to appstore and add it into reducer 

*configureStore =>
*Provider =>
*createSlice =>
*add reducer to store

redux store is setuped

========================================================

noe next add when we do login the data details will goto redux store,how?

we use a hook=> useDispatch from react-redux
    const dispatch = useDispatch()
inside login function when user logged inand get response wee add that response to dispatch, 
for that we dispatch an action , wht action => "adduser" action from userlice

             dispatch(addUser(res.data))

dispatch an action and pass the data and it will stored in redux store

=======================

how to subscribe to the store???  to take the data from the store and use the data


we use hook=> "useSelector()" from react-redux

  const user= useSelector((store)=>store.user)

  sowe  get data from the user store we can use that


======================================

const res= await axios.post("http://localhost:5000/api/auth/login",{})


can we hardcoded the url not like this ..always create a constant.js and do it.

export const BASE_URL="http://localhost:5000"

axios.post(`${BASE_URL}/api/auth/login`)







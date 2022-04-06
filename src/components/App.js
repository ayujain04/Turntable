
import React from "react"
import Signup from "./Signup"
import Dashboard from "./Dashboard"
import { Container, } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./Login"
import ProtectedRoutes from "./ProtectedRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import ArtistApplication from "./ArtistApplication"
import About from "./About"
import Market from "./Market"
import Navbar from "./Navbar/Navbar"
//because ProtectedRoutes is an outlet, we can nest
//our routes in there
// still need to build a "market route," but this is where the demo will go.
//   /* <Navbar/> */ goes under Router. 

function App() {
  return (
    <React.Fragment>
     



        <Router>
            <Navbar/>
          <AuthProvider>
            <Routes>
          
            <Route path = "/signup" element = {<Signup/>} />
            <Route path = "/login" element = {<Login/>} />
            <Route path = "forgot-password" element = {<ForgotPassword/>}/>
            <Route element = {<ProtectedRoutes/>} >

              <Route exact path = "/" element = {<Dashboard/>} />
              <Route path = "/update-profile" element = {<UpdateProfile/>}/>
              <Route path = "/artist-application" element = {
      <>         <ArtistApplication/>
      <a
        className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer"
        >
          </a></>
              }/>
               <Route path = "/market" element = {<Market/>}/>
              <Route path = "/about" element = {<About/>}/>
        

            </Route>
            </Routes>
          </AuthProvider>
        </Router>
        
   
    </React.Fragment>
    
 
  )
}

export default App;


import React from "react"
import Signup from "./Signup"
import Dashboard from "./Dashboard"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./Login"
import ProtectedRoutes from "./ProtectedRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import ArtistApplication from "./ArtistApplication"
import Navbar from "./Navbar"
import About from "./About"

//because ProtectedRoutes is an outlet, we can nest
//our routes in there

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
              <Route path = "/artist-application" element = {<ArtistApplication/>}/>
              <Route path = "/about" element = {<About/>}/>

            </Route>
            </Routes>
          </AuthProvider>
        </Router>
        
   
    </React.Fragment>
    
 
  )
}

export default App;

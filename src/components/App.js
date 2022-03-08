
import React from "react"
import Signup from "./Signup"
import Dashboard from "./Dashboard"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./Login"
import ProtectedRoutes from "./ProtectedRoute"
//because Private route is an outlet, we can nest
//our routes in there

function App() {
  return (
    
<Container className = "d-flex align-items-center justify-content-center"
    style = {{ minHeight: "100vh" }}>
      <div className = "w-100" style = {{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
            <Route path = "/signup" element = {<Signup/>} />
            <Route path = "/login" element = {<Login/>} />
            <Route element = {<ProtectedRoutes/>} > 
              <Route exact path = "/" element = {<Dashboard/>} />
            </Route>
            </Routes>
          </AuthProvider>

        </Router>
        </div>
    </Container>


    
 
  )
}

export default App;

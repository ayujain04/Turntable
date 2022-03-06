
import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Switch, Router, Route } from 'react-router-dom';
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App

/*
    <>
    <div className="application">
        <h1>Apply to join TurnTable!</h1>
        <form>
          <fieldset>
            <label>
              <p>Name of Music Group</p>
              <input name="name" />
            </label>
          </fieldset>
          <fieldset>
            <label>
              <p>How many years have you been an artist?</p>
              <input years="years" />
            </label>
          </fieldset>
          <fieldset>
            <label>
              <p>What is your artist email?</p>
              <input email="email" />
            </label>
          </fieldset>
          <fieldset>
            <label>
              <p className="outro">Our team will contact you within 48 hours to see if you are eligible. Thank you for joining the TurnTable Team!</p>
            </label>
          </fieldset>

          <button type="submit">Submit</button>
        </form>
      </div>
      
      <div className="About">
    <h2>
      About TurnTable
    </h2>
    <p>
      Turntable's mission is to allow artists to sell shares of their royalties like they would be able to sell stocks in a major corporoation. If the artists wishes, they could pay dividends each "quarter," but this is not required. Currently, we have no artists selling their shares, but we are eager to work with artists to allow them to sell their shares using the TurnTable marketplace. If this sounds like a good method that you would like to use to raise capital and allow your fans to back you directly, please apply to be one of our first artists onboard. We would love to speak with you if you are interested and have any questions! Thanks, Ayush Jain, Paul Wiskow, and Michael Tu of the Turntable Team 
    </p>
    </div>
      </>
   */
  
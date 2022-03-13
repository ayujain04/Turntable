import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

//this is the home tab
export default function Dashboard() {
    
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate()

    async function handleLogout(){
        setError('')

        try{
            await logout()
            navigate('/login')
        } catch {
            setError('Failed to log out')
        }
    }

  return (
      <>
        <Card>
        <Card.Body>
        <h2 className = "text-center mb-4">Welcome to Turntable!</h2>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
        <h2 className = "text-center mb-4">Profile</h2>
        {error && <Alert variant = "danger">{error}</Alert> }
        <strong>Email:</strong> {currentUser.email}
        <Link to="/update-profile" className = "btn btn-primary w-100 mt-3">Update Profile</Link> 
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
        <h2 className = "text-center mb-4">Apply</h2>
        {error && <Alert variant = "danger">{error}</Alert> }
        <Link to="/artist-application" className = "btn btn-primary w-100 mt-3">Apply to Sell Shares</Link> 
        </Card.Body>
      </Card>
      <div className = "w-100 text-center mt-2">
         <Button variant = "link" onClick = {handleLogout} >Log Out</Button>
        </div>
      </>
  )
}

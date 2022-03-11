import React, { useState } from 'react'
import { Form, Card, Alert, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ArtistApplication() {
    const [loading, setLoading] = useState(false)
    function handleSubmit(){

    }
    return (
    <Card>
    <Card.Body>
        <h2 className = "text-center mb-4">Apply to Sell Shares</h2>
        <Form onSubmit = {handleSubmit}>
            <Form.Group id = "artistName">
                <Form.Label>Artist/Group Name</Form.Label>
                <Form.Control type = "artistName"/>
                </Form.Group>
                <Form.Group id = "email">
                <Form.Label>Email</Form.Label>
                <Form.Control type = "email"/>
                <Form.Group id = "years">
                <Form.Label>How Many Years Have You All Been Artists?</Form.Label>
                <Form.Control type = "years"/>
                </Form.Group>
                </Form.Group>
            <p>One of the members of the Turntable will reach out to you to schedule a meeting within 48 hours. Thank you for applying!</p>
                <Button disabled = {loading} className = "w-100" type = "submit">Submit Application</Button>
        </Form>
        <div className = "w-100 text-center mt-3"> 
        <Link to = "/">Dashboard</Link>
        </div>
    </Card.Body>


</Card>

  )
}

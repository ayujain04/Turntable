import React, { useState } from 'react'
import "./ArtistApplication.scss"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import app from "../firebase"



export default function ArtistApplication() {
  
  const [state, setState] = useState({
    name: "",
    email: "",
    genre: "", 
    musicLink: ""
  })

  const {name, email, genre, musicLink} = state; 
  const handleSubmit = (e) => {
      e.preventDefault();
      if(!name || !email || !genre || !musicLink) {
        toast.error("Please provide a value in each input field")
      } else {
        app.child("contacts").push(state);
        setState({name: "", email: "", genre: "", musicLink: ""}); 
        toast.success("Thank you! The form was submitted successfully!")
      }
  }

  const handleInputChange = (e) => {

    let{name, value} = e.target;
    setState({...state, [name]: value});


  }
  
  
  return (
   <section className = "contact-section">
      <div className = "container">
        <ToastContainer position = "top-center"/>
        <div className = "row justify-content-center">
            <div className='col-md-10'>
              <div className = "wrapper">
                <div className = "row no-gutters">
                  <div className = "col-md-6">
                      <div className = "contact-wrap w-100 p-lg-5 p-4">
                        <h3 className = "mb-4">Artist Application</h3>
                        <form id = "contactForm" className = "contactForm" onSubmit = {handleSubmit} >
                              <div className="row">
                                <div className ="col-md-12">
                                    <div className = "form-group">
                                      <input 
                                      type = "text"
                                      className = "form-control"
                                      name = "name"
                                      placeholder = "Artist Name?"
                                      onChange = {handleInputChange}
                                      value = {name}
                                      />
                                      </div>
                                  </div>
                                  <div className ="col-md-12">
                                    <div className = "form-group">
                                      <input 
                                      type = "email"
                                      className = "form-control"
                                      name = "email"
                                      placeholder = "Email?"
                                      onChange = {handleInputChange}
                                      value = {email}
                                      />
                                      </div>
                                  </div>
                                  <div className ="col-md-12">
                                    <div className = "form-group">
                                      <input 
                                      type = "text"
                                      className = "form-control"
                                      name = "genre"
                                      placeholder = "Genre?"
                                      onChange = {handleInputChange}
                                      value = {genre}
                                      />
                                      </div>
                                  </div>
                                  <div className ="col-md-12">
                                    <div className = "form-group">
                                      <textarea 
                                      type = "text"
                                      className = "form-control"
                                      name = "musicLink"
                                      placeholder = "Link to your music"
                                      cols = "30"
                                      rows = "1"
                                      onChange = {handleInputChange}
                                      value = {musicLink}
                                      ></textarea>
                                      </div>
                                  </div>
                                  <div className='col-md-12'>
                                      <div className = "form-group">
                                        <input  type = "submit" value = "Submit application" className = "btn btn-primary" />
                                        </div>
                                    </div>
                                </div>
                        </form>
                        </div>
                    </div>
                    <div className = "col-md-6 d-flex align-items-stretch">
                      <div className = "info-wrap w-100 p-lg-5 p-4 img">
                        <h3>Contact us</h3>
                        <p className = "mb-4">We're open for any suggestions or just to have a chat.</p>
                        <div className = "dbox w-100 d-flex align-items-start">
                         <div className = "icon d-flex align-items-center justify-content-center">
                           <span className = "fa fa-map-marker"></span>
                           </div>
                           <div className = "text pl-3">
                              <p>
                                <span>Address:</span> Virginia Beach, Virginia
                              </p>
                           </div>
                          </div>
                          <div className = "dbox w-100 d-flex align-items-cneter">
                         <div className = "icon d-flex align-items-center justify-content-center">
                           <span className = "fa fa-phone"></span>
                           </div>
                           <div className = "text pl-3">
                              <p>
                                <span>Phone:</span>
                                <a href="tel://123456789">757-406-5879 </a>
                              </p>
                           </div>
                          </div>
                          <div className = "dbox w-100 d-flex align-items-center">
                         <div className = "icon d-flex align-items-center justify-content-center">
                           <span className = "fa fa-paper-plane"></span>
                           </div>
                           <div className = "text pl-3">
                              <p>
                                <span>Email:</span> <a href = 'mailto:turntablellc3@gmail.com'>turtablellc3@gmail.com</a>
                              </p>
                           </div>
                          </div>
                          <div className = "dbox w-100 d-flex align-items-center">
                         <div className = "icon d-flex align-items-center justify-content-center">
                           <span className = "fa fa-globe"></span>
                           </div>
                           <div className = "text pl-3">
                              <p>
                                <span>Website:</span> <a href = '#'>turntable.com</a>
                              </p>
                           </div>
                          </div>
                        </div>
                      </div>


                  </div>
                </div>
              </div>  
          </div> 
      </div>
   </section>
  )
}




import React from 'react';
import './App.css';

function App() {
  return(
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
           <p className = "outro">Our team will contact you within 48 hours to see if you are eligible. Thank you for joining the TurnTable Team!</p>
         </label>
       </fieldset>

       <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;


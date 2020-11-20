import React from 'react';


const Step1 = (props) => {

  
    if (props.currentStep !== 1) { // Prop: The current step
        return null
      }
      // The markup for the Step 1 UI
      return(
        <div>
        <div className="form-group">
          <label htmlFor="username">Username
          <input
            className="form-input"
            id="username"
            name="username"
            type="text"
            placeholder="Enter Username"
            value={props.username} // Prop: The username input data
            onChange={props.handleChange} // Prop: Puts data into state
          />
          </label>          
               
          </div>
          <div className="form-group">
          <label htmlFor="email">Email
          <input
            className="form-input"
            id="email"
            name="email"
            type="text"
            placeholder="Enter Your Email"
            value={props.email} // Prop: The username input data
            onChange={props.handleChange} // Prop: Puts data into state
          />
          </label>
          </div>
          </div>
        
      )
}

export default Step1

    
     
    
  
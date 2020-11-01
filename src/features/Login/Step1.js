import React from 'react';

const Step1 = (props) => {

  
    if (props.currentStep !== 1) { // Prop: The current step
        return null
      }
      // The markup for the Step 1 UI
      return(
        <div className="form-group">
          <label htmlFor="username"><strong>Username</strong></label>
          <input
            className="form-input"
            id="username"
            name="username"
            type="text"
            placeholder="Type your Username"
            value={props.username} // Prop: The username input data
            onChange={props.handleChange} // Prop: Puts data into state
          />
          {props.error && (
           <p>{props.error}</p>
          )}
        </div>
      )
}

export default Step1
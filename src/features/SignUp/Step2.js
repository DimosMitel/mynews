import React  from 'react';

import {
  Link,
} from "react-router-dom";

const Step2 = (props) => {
    if (props.currentStep !== 2) { // Prop: The current step
        return null
      }
      // The markup for the Step 2 UI
      return(
       
        <div className="form-group">
         
            <label htmlFor="password">Password
            <input
              className="form-input"
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              value={props.password} // Prop: The password input data
              onChange={props.handleChange} // Prop: Puts data into state
            /></label><br />
            <hr />       
             <div class="form-footer">
              Already have an account? <Link role="link" to="/login">Login</Link> 
            </div>   
        </div>
        
      )
}

export default Step2
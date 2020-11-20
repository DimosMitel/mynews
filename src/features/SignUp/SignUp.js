import React, { useState } from 'react';
import Step1 from './Step1';
import './SignUp.css';


const SignUp = (props) => {
  const [form, setValues] = useState({
    currentStep: 1, // Default is Step 1
    username: '',
    email: '',
    password: '', 
   })


    // Use the submitted data to set the state
   const handleChange = (event) => {
      const {name, value} = event.target


       setValues(prevState => ({
        ...prevState,
        [name]: value
    }))
       
       
    }
    
    const _next = () => {
      let curStep = form.currentStep

      setValues(prevState => ({
        ...prevState,
        currentStep: curStep
    }))
    }
      
    const _prev = () => {
      let curStep = form.currentStep
 
      setValues(prevState => ({
        ...prevState,
        currentStep: curStep
    }))
    }
  
  /*
  * the functions for our button
  */
  const previousButton = () => {
    let currentStep = form.currentStep;
    if(currentStep !==1){
      return (
        <button  
          type="button" className="form-button" onClick={_prev}>
        Previous
        </button>
      )
    }
    return null;
  }
  
  const nextButton = () => {
    let currentStep = form.currentStep;
    if(currentStep <2){
      return (
        <button 
          type="button" className="form-button" onClick={_next}>
        Next
        </button>        
      )
    }
    return null;
  }
    
    
    // Render UI will go here...
  
    return (
      
        <> 
        {/* to <> einai React.fragment */}
        
        
        <div className="wrap">    
        <form>
        <div className="form-header">
          <h3 data-testid="registration">Registration</h3>
        </div>
        
          <Step1 
            currentStep={form.currentStep} 
            handleChange={handleChange}
            email={form.email}
            username={form.username}
          />
          {previousButton()}
          {nextButton()}
        </form>
        </div>
        </>
      
    )
}

export default SignUp






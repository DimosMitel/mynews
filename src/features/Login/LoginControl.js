import React, { useState } from 'react';
import Step1 from './Step1';

import './Login.css';

const LoginControl = (props) => {
  const [form, setValues] = useState({
    currentStep: 1, // Default is Step 1
    username: '',
    password: '', 
   })
   const [error, setError] = React.useState("");

    // Use the submitted data to set the state
   
   const handleChange = (event) => {
      const {name, value} = event.target
    
      
       setValues(prevState => ({
        ...prevState,
        [name]: value
    }))
   
    }
    

    // Trigger an alert on form submission
    const handleSubmit = (event) => {
      event.preventDefault()
      const { username, password } = form
      
      alert(`Your registration detail: \n 
        Username: ${username} \n
        Password: ${password}`)
    }

    const _next = () => { 
      
      let curStep = form.currentStep
      if(!error){
      curStep = form.currentStep === 2 ? 2: form.currentStep + 1
      } else {
        setError("");
      }
      setValues(prevState => ({
        ...prevState,
        currentStep: curStep
    }))
    }
      
    const _prev = () => {
      let curStep = form.currentStep
      if(!error){
      curStep = form.currentStep <= 1? 1: form.currentStep - 1
      } else  {
        setError("");
      }
      setValues(prevState => ({
        ...prevState,
        currentStep: curStep
    }))
    }
  
  /*
  * the functions for button
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
      
        <React.Fragment>
        
        <div className="wrap">  
        <form onSubmit={handleSubmit}>
        <div className="form-header">
          <h3>Login</h3>
        </div>
          <Step1 
            currentStep={form.currentStep} 
            handleChange={handleChange}
            username={form.username}
            error={error}
            
          />
      
          {previousButton()}
          {nextButton()}
     
      
        </form>
        </div>
        </React.Fragment>
      
    )
}

export default LoginControl




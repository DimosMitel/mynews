import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import './SignUp.css';


const SignUp = (props) => {
  const [form, setValues] = useState({
    currentStep: 1, // Default is Step 1
    username: '',
    email: '',
    password: '', 
   })

   const [error, setError] = React.useState("");
   const [validateField, setValidateField] = React.useState("");
   const [validation, setValidation] = React.useState("");
   const [passwordStrength, setPasswordStrength] = React.useState("");
   const [passwordStrengthBorder, setPasswordStrengthBorder] = React.useState("");


    // Use the submitted data to set the state
   const handleChange = (event) => {
      const {name, value} = event.target


     /* 
      REGEX	DESCRIPTION (Password)
      ^	The password string will start this way.
      (?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character.
      (?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character.
      (?=.*[0-9])	The string must contain at least 1 numeric character.
      (?=.*[!@#\$%\^&\*])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict.
      (?=.{6,})	The string must be six characters or longer.
            */ 
           const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
           const mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/
     
           setValidateField(name);
           setValidation("required|min:6|max:12");
     
           if (name === "password" ) {
             
             if (strongRegex.test(form.password)) {
               setPasswordStrength("Strong");
               setPasswordStrengthBorder("green");
              
             } else if (mediumRegex.test(form.password)) {
               setPasswordStrength("Medium");
               setPasswordStrengthBorder("orange");
            
             } else {
               setPasswordStrength("Low");
               
             }
     
           } 


       setValues(prevState => ({
        ...prevState,
        [name]: value
    }))
       
       
    }
    
    
    const validate = () => {
      //return true if is valid 
      //else return false
  
      if (validation) {
        const rules = validation.split("|");
        /*email pattern*/
        const emailRegex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i

        if (form[validateField] === form.email) {
          if (!emailRegex.test(form.email)){
           setError(`Incorrect Email`);
           return false
          }
        } 

        /* username pattern */
        const usernameRegex = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;

        if (form[validateField] === form.username) {
          
          if (!usernameRegex.test(form.username)) {
            setError(`incorrect username`);
            return false
          } 
        }  

        for (let i = 0; i < rules.length; i++) {
          const current = rules[i];
          
          if (current === "required") {
            if (!form[validateField]) {
              setError("This field is required");
              return false
            }
          }
          
          const pair = current.split(":")
          
          switch (pair[0]) {
            
            case "min":
              
              if (form[validateField].length < pair[1]) {
                
                setError(`This field must be at least ${pair[1]} characters long`);
                return false
              }
              break;
            case "max":
              if (form[validateField].length > pair[1]) {

                setError(`This field must be no longer than ${pair[1]} characters long`);
                return false;
              }
              break;
            default:
              setError("");
              break;
          }
        }
      }
  
      return true;
    }

    // Trigger an alert on form submission
    const handleSubmit = (event) => {
      event.preventDefault()
      const { username, email, password } = form
      
      alert(`Your registration detail: \n 
        Username: ${username} \n
        E-mail: ${email} \n
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
        <form onSubmit={handleSubmit}>
        <div className="form-header">
          <h3 data-testid="registration">Registration</h3>
        </div>
        
          <Step1 
            currentStep={form.currentStep} 
            handleChange={handleChange}
            email={form.email}
            username={form.username}
            error={error}
            validation={validate}
          />
          <Step2 
            currentStep={form.currentStep} 
            handleChange={handleChange}
            password={form.password}
            error={error}
            validation={validate}
            passStrength={passwordStrength}
            passBorder={passwordStrengthBorder}
          />
          {previousButton()}
          {nextButton()}
        </form>
        </div>
        </>
      
    )
}

export default SignUp
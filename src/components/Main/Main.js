import React from "react"
import './Main.css'
import {
    Switch,
    Route,
  } from "react-router-dom";

  import LoginControl from '../../features/Login/LoginControl'
  import SignUp from '../../features/SignUp/SignUp'  

const Main = () => {
    return (
    <>    
        <Switch>
          
          <Route exact path="/login" component={LoginControl} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
    </>   

    )
}

export default Main;
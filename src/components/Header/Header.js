import React from "react"
import './Header.css';
import {
    Link,
  } from "react-router-dom";

const Header = () => {
    return (
    

      <div className="container-header">
          <div className="item1"><Link to="/">Mynews</Link></div>

          <div className="item2">      
            <div>
              <nav>
                 <Link to="/Login">Login</Link>
              </nav>
             
            </div>
    
          </div>

          <div className="item3">      
            <div>
         
              <nav>
                 <Link to="/signup">SignUp</Link>
              </nav>
            </div>
    
          </div>
                
      </div>

    )
}

export default Header;
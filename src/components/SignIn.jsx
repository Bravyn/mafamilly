import React from 'react'
import '../styles/login.css'

const SignIn = () => {
  return(
  <div className='login'>
          <form action = "">
              <h2>
                Log in:
              </h2>
              <div className='inputbox'>
              <span>Username</span>
                <input type= "text" required = "" autocomplete='off'>

                </input>
                
              </div>
              <div className='inputbox'>
              <span>Password</span>
                <input type= "text" required = "" autocomplete='off' >
                    
                </input>
                </div>
              <button>Log in now!</button>
              </form>
        </div>
  )
}

export default SignIn
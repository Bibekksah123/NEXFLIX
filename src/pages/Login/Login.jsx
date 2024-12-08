import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
function Login() {
  const [singState, setsingState] = useState("Sing In")
  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h2>{singState}</h2>
        <form>
        {singState =="Sing Up"?<input type="text" placeholder='Your Name' />:<></>}
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='password' />
          <button>{singState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {singState=="Sing In"?
          <p>New To Netflix?<span onClick={()=>setsingState("Sing Up")}>Sing Up Now</span>
          </p>:
          <p >Alredy Have Account?<span onClick={()=>setsingState("Sing In")}>Sing In Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
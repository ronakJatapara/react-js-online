import React from "react";
import "./login.css"


function Login({SignupPage,arr})
{
    console.log(arr);

   

    return(
        <>
         <div className="login-container">
    <h2>Login to Your Account</h2>
    <p>Welcome back! Please log in to access your account.</p>
    <form>
      <input type="email" placeholder="Email Address" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Login</button>
      {/* <p >Create Account ? Sign-up</p> */}
    </form>
    <p>or login with:</p>
    <div className="social-login">
      <button>Google</button>
      <button>Facebook</button>
    </div>
    <p className="signup-link">
      Don't have an account? <a href="/signup" onClick={SignupPage}>Sign Up</a>.
    </p>
  </div>
        </>
    )
}



export default Login






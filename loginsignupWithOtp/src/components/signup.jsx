import React, { useState } from "react";
import "./signup.css"

function Signup({handleInput, handleSubmit,Loginpage})
{


  

  

    return(
        <>
         <div className="signup-container">
    <h2>Create Your Account</h2>
    <p>Sign up today to access exclusive content.</p>
    <form action="#" onSubmit={handleSubmit}>
      <input type="text" placeholder="Full Name" name="name" onChange={handleInput}></input>
      <input type="text" placeholder="Email Address" name="email" onChange={handleInput}></input>
      <input type="text" placeholder="Mobile Number" name="number" onChange={handleInput}></input>
      <input type="password" placeholder="Password" name="pass"  onChange={handleInput}></input>
      <button type="submit">Sign Up</button>
      <p  onClick={Loginpage}>Already have an Account? Login</p>
    </form>
    <p>or sign up with:</p>
    <div className="social-signup">
      <button>Google</button>
      <button>Facebook</button>
    </div>
  </div>
        
        </>
    )
}


export default Signup





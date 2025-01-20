import React, { useState } from "react";
import "./login.css"
import Otp from "./otp";


function Login({SignupPage,data,OtpData})
{
    console.log(data);

    const[obj,setObj] =useState({
     
      Number:"",
      Pass:""
    })

  //  console.log(obj);




const[Arr2,setArr2] = useState([])
const LoginChange = (e)=>{
   
  const{name,value} = e.target;
  setObj({...obj , [name]:value})


}
const LoginSubmit = (e) => {

  e.preventDefault();

  let a = data.filter((el) => el.number === obj.Number);

  if (a.length === 0) {
    alert("please check your details")
    
  }
 else if(a[0].number !== obj.Number)
 {
  alert("number is incorrect")
 }
  else if(a[0].pass !== obj.Pass)
  {
    alert("password incorrect")
  }
  
  else{
    alert("done")
  
  }

  console.log((obj));
  // onLogin();

};



 
   

    return(
        <>
         <div className="login-container">
    <h2>Login to Your Account</h2>
    <p>Welcome back! Please log in to access your account.</p>
    <form onSubmit={LoginSubmit}>
      {/* <input type="text" placeholder="Email Address" name="Email" onChange={LoginChange} /> */}
      <input type="text" placeholder=" Mobile number" name="Number" onChange={LoginChange} />

      <input type="text" placeholder="Password" name="Pass"  onChange={LoginChange} />
      <button type="submit" onClick={OtpData} >Login</button>
      {/* <p >Create Account ? Sign-up</p> */}
    </form>
    <p>or login with:</p>
    <div className="social-login">
      <button>Google</button>
      <button>Facebook</button>
    </div>
    <p className="signup-link">
      Don't have an account? <p onClick={SignupPage}>Sign Up</p>
    </p>
  </div>
        </>
    )
}



export default Login






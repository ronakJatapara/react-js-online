import React, { useState } from "react";
import Login from "./login";
import Signup from "./signup";
import Otp from "./otp";


function Both()
{
  const [Swi,setSwi] = useState(false)
  const[SwiOtp,setSwiOtp] =useState(false)

  const [Arr,setArr] = useState({
    name:"",
    email:"",
    number:"",
    pass:""
})



const [data,setData] = useState([])
const handleInput = (e)=>{
    
    const {name,value} = e.target;
    setArr({...Arr,[name]:value })
    


}

const handleSubmit = (e) =>{
    e.preventDefault();
   
    setData([...data,Arr])
    // console.log(data);
}



 const handleLogin = (e)=>{
    e.preventDefault();
    setSwiOtp(true)
 }


   return(
    
    <>
    
    
    {Swi ? (
    <>
     
     {SwiOtp != false ? <Otp></Otp>
     :
      <Login data={data} SignupPage={() => setSwi(false)} handleLogin={handleLogin} />}
      
    </>
  ) : (
    <>
   
      <Signup
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        Loginpage={() => setSwi(true)}
      />
    </>
  )}


  
    </>
   )
}


export default Both









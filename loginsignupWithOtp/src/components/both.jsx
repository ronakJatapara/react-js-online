import React, { useState } from "react";
import Login from "./login";
import Signup from "./signup";


function Both()
{
  const [Swi,setSwi] = useState(false)

  const [Arr,setArr] = useState({
    name:"",
    email:"",
    number:"",
    pass:""
})



const handleInput = (e)=>{
    
    const {name,value} = e.target;
    setArr({...Arr,[name]:value })
    


}

const handleSubmit = (e) =>{
    e.preventDefault();
   
    console.log(Arr);

}




    return(
        <>
       { Swi == true ?  <Login arr={Arr} SignupPage={()=>{setSwi(false)}}></Login> 

        :<Signup handleInput={handleInput} handleSubmit={handleSubmit} Loginpage={()=>{setSwi(true)}}></Signup>}
        </>
    )
}


export default Both




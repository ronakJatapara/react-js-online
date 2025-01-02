


import React , {useState , useContext} from "react"
import userContext from "../context/userContext";

// (5)  this is point from our main topic start


function Login()
{
    // (6) we want to take state for username and password so we have to create two states
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    // (7) we have to pass this value in input tag with value={}

    // (9) now we learn how to fetch value from context
    const {setUser} = useContext(userContext)
    // (10) we think how setUser come setUser is state from usercontextprovider file .. if we add any detail from user we have one method
    // setUser  from that file and take value from useContext
    


    let handleSubmit = (e) =>{
   // (11) if we take useContext we have to run this code
   e.preventDefault()

   // (12) now we take setUser so we pass username and password in setUser
   setUser({username,password})
   // (13) this is code for only post data this is not take data code
    }
    return(
     <div>

     <h2>Login</h2>
     <input type="text" value={username} name="" id="" placeholder="username" onChange={(e)=> setUsername(e.target.value)} />
    {/* // (8) if any changes in this fild so we have to update this state so we write one event   */}
 
    {" "}

     <input type="text" value={password} name="" id="" placeholder="password" onChange={ (e) => setPassword(e.target.value)} />
     <button onClick={handleSubmit}>Submit</button>

     </div>
    )
}

export default Login;
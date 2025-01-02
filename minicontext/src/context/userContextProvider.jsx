import React from "react";
import UserContext from "../context/userContext"

let UserConTextProvider = ({children}) =>{

    const [user,setUser] =React.useState(null)
    
   return(
    <UserContext.Provider value={{user,setUser}}>
        {/* (1) we can not take value from provider usercontext we have to take properties from usercontext , it is provider
        but if we pass only provider it is not work we have pass one more thing 
        
        (2) we have one property from provider "value"(prop). in value we pass one object,in this object we can pass any data
        (3) this is almost halfwork and it is setup 
        
        */}
    {children}
    </UserContext.Provider>
   )

}


export default UserConTextProvider;

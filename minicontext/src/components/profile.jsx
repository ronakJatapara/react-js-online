

import React , {useContext} from "react"
import UserContext from "../context/userContext"

function Profile()
{
    //(14) here we take state "user",not a method "setUser"
    const {user} = useContext(UserContext)
  
    if(!user) return <div>please login</div>
    //(15) we have if condition here for no user

    return <div>
        welcome {user.username}
    </div>


}

export default Profile;
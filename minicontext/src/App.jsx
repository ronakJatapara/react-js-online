
import './App.css'
import Login from "./components/login"
import Profile from "./components/profile"
import UserContextProvider from "./context/userContextProvider"


// (4) we have to import provider here or main.jsx file 

function App() {


  return (
    <UserContextProvider>
      <h1>red and white</h1>
      {/* (16) we have to import two compnent */}
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App

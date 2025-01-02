

import { useEffect, useState } from 'react'
import './App.css'
import  { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'






function App() {

  const [themeMode,setThemeMode] = useState("light")


  const lightTheme = () =>{
    setThemeMode("light")
  }
  const darkTheme = ()=>{
    setThemeMode("dark")
  }

  // actual change in theme //


  useEffect(() => {
    document.querySelector("html").classList.remove("light" , "dark")
    document.querySelector("html").classList.add(themeMode)
    // (10) we can take darkmode or lightmode but we know those are add in thememode thats why we take theme mode

  },[themeMode]) // (11) in this code we have one dependency when any change in  thememode useEffect run again   

  return (
    <ThemeProvider value={{themeMode , darkTheme , lightTheme}}>
      {/*(7) we add the value from theme.js and take value directly from variable*/} 
      {/*(8) now i know this is method but i don't know what is this method do  */}
      {/*(9) in this situation take this method and define as to as name and that functnality add autometacly add in that method  */}
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                     {/* <Card /> */}
                     <Card />
                    </div>
                </div>
      </div>
    </ThemeProvider>
  )
}

export default App




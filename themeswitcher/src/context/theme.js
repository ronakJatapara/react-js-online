
import { createContext , useContext } from "react";

export const ThemeContext = createContext({
    // (1) we can put default value in this object but we can not put default value in first method ... put like object

    themeMode:"light",
    darkTheme: () =>{},
    lightTheme:() =>{},
    //(2) this function are methods and it take from when someone call context then this object will take

})


export const ThemeProvider=ThemeContext.Provider


//    (3) we can make custom hook here
export default function useTheme(){
   return useContext(ThemeContext)
   // (4) it return usecontext and take themecontext in usecontext  
   // (5) in this method we have import only themecontext because every thing add in themecontext   
   // (6) after then we have to go in app.jsx file
}





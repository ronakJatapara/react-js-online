import { useState } from "react"

function App() {
 
  const [Image, setImage] = useState("https://images.pexels.com/photos/2115874/pexels-photo-2115874.jpeg?auto=compress&cs=tinysrgb&w=600"); // Truncated base64 string

  return (
    <>
     <div className="w-full h-screen" style={{backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",}}>

     <div className="fixed flex flex-wrap justify-center items-center bottom-12 inset-x-0 px-2">

    <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

     <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setImage("https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg?auto=compress&cs=tinysrgb&w=600")} style={{backgroundColor:"black"}}>Cricket</button>
     <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  onClick={() => setImage("https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600")} style={{backgroundColor:"black"}}>Football</button>
     <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  onClick={() => setImage("https://images.pexels.com/photos/10347115/pexels-photo-10347115.jpeg?auto=compress&cs=tinysrgb&w=600")} style={{backgroundColor:"black"}}>kabaddi</button>
     <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  onClick={() => setImage("https://images.pexels.com/photos/69773/uss-nimitz-basketball-silhouettes-sea-69773.jpeg?auto=compress&cs=tinysrgb&w=600")} style={{backgroundColor:"black"}}>basketball</button>
     <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  onClick={() => setImage("https://images.pexels.com/photos/163526/field-hockey-player-girls-game-163526.jpeg?auto=compress&cs=tinysrgb&w=600")} style={{backgroundColor:"black"}}>hockey</button>
     <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  onClick={() => setImage("https://images.pexels.com/photos/163487/baseball-player-pitcher-ball-163487.jpeg?auto=compress&cs=tinysrgb&w=600")} style={{backgroundColor:"black"}}>base-ball</button>
     <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  onClick={() => setImage("https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg?auto=compress&cs=tinysrgb&w=600")} style={{backgroundColor:"black"}}>vollyball</button>


    </div>

     </div>

      
     </div>

    </>
  )
}

export default App




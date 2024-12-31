import { useState } from "react"

function App() {
 
  const [color,setColor] = useState("olive")

  return (
    <>
     <div className="w-full h-screen" style={{backgroundColor : color}}>

     <div className="fixed flex flex-wrap justify-center items-center bottom-12 inset-x-0 px-2">

    <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

     <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("red")} style={{backgroundColor:"red"}}>red</button>
     <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  onClick={() => setColor("green")} style={{backgroundColor:"green"}}>Green</button>
     <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  onClick={() => setColor("pink")} style={{backgroundColor:"pink"}}>Pink</button>
     <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  onClick={() => setColor("black")} style={{backgroundColor:"black"}}>Black</button>
     <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  onClick={() => setColor("yellow")} style={{backgroundColor:"yellow"}}>Yellow</button>
     <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  onClick={() => setColor("orange")} style={{backgroundColor:"orange"}}>Orange</button>
     <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"  onClick={() => setColor("purple")} style={{backgroundColor:"purple"}}>Purple</button>


    </div>

     </div>

      
     </div>

    </>
  )
}

export default App




// import { useState } from "react";

// function App() {
//   const [Image, setImage] = useState("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."); // Truncated base64 string

//   return (
//     <div>
//       <h1>Base64 Image Example</h1>
//       <img src={Image} alt="Base64" style={{ width: "300px", height: "auto" }} />
//     </div>
//   );
// }

// export default App;
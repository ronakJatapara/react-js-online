
import React from "react";

function Card2(props)
{
    console.log(props.username, props.info, props.text, props.btn);
    
   return(
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black mt-3">
        <img
          src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
           {props.username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{props.info}</h2>
        </div>
        <p className="text-gray-300">
          {props.text}
        </p>
        <button className="mt-2"><a href="https://www.google.com/search?sca_esv=2ea255c1d9e419d9&sxsrf=ADLYWIIY8gGjkErsX0hNdhYC4PGUhBGlVA:1735620864840&q=chow+mein+chinese+food&uds=ADvngMjcH0KdF7qGWtwTBrP0nt7d0cdZ5RSnXmyZGDVCbHG77DXfd_jRuFXusG0NU4pv9Tsv4Ma3APUw521g7QsU3X1uGiS3eMApzTpEqayBZuviRPiml0_Gev7uGsiQwr77w5kuRNceGt80sneKXMfXVWzfth0ptA&udm=2&sa=X&ved=2ahUKEwiz_fPIm9GKAxUETGwGHfflGIoQxKsJegQIExAB&ictx=0&biw=1536&bih=730&dpr=1.25">{props.btn}</a></button>

      </div>
   )
}

export default Card2
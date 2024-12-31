
import React from "react";

function Card1(props) {
  console.log(props.username, props.info, props.text, props.btn);

  return (
    <div>
      <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images.pexels.com/photos/28594392/pexels-photo-28594392/free-photo-of-artistic-flat-lay-of-coffee-essentials-on-dark-surface.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {props.username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide ">{props.info || "visit me"}</h2>
        </div>
        <p className="text-gray-300">
          {props.text}
        </p>
        <button className="mt-2"><a href="https://www.google.com/search?sca_esv=2ea255c1d9e419d9&sxsrf=ADLYWIJwprDZNys3U0u_0jBX0CIoR6DAxQ:1735620769694&q=indian+food&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3JxdWbs3CkcdlHyEbrNaWhousA6g1P-W7aLn7k_lr4XDtWs7W5tBNejPwIJwUJ16r3jzyqWhg1a39ls4ML3z8pj-Ufp_krMxaJJ4-Mn3vRNfm_coqdrdQ024V3JNK6dad_yTSycrdX1pp0iJH4mG2gyqg_RuszK4V-HMOSu1vGet8w8jt3Q&sa=X&ved=2ahUKEwjv2sSbm9GKAxVrUGwGHfGwBtIQtKgLegQIDhAB&biw=1536&bih=730&dpr=1.25">{props.btn}</a></button>
      </div>
    </div>
  )
}


export default Card1
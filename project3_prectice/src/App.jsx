import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1 from './cards/card1'
import Card2 from './cards/card2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black rounded-xl p-4'>tailwind</h1>
     <Card1  username="ronak" info="this is indian food" text="please use this product" btn="Click Here"/>
     <Card2  username="ronak" info="this is chinise food" text="please use this product" btn="Click Here"/>

    </>
  )
}

export default App

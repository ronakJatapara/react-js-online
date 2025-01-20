import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Both from './components/both'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<Both></Both>
</>
  )
}

export default App

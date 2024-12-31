import { useState , useCallback ,useEffect , useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const[numberAllowed , setnumberAllowed] = useState(false)
  const[charAllowed,setcharAllowed] = useState(false)

  const[password,setPassword]= useState("")


  // ref hook



  const passwordRef = useRef(null)

  const PasswordGenerator = useCallback(()=>{

   let pass = ""
   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

   if(numberAllowed) str += "0123456789"
   if(charAllowed) str += "!@#$%^&*()_+{}"

   for (let i = 1; i <length; i++) {
   let char =Math.floor(Math.random() * str.length +1);    
   pass +=str.charAt(char)
   }

   setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])


  const copyPasswordClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(password)
  } ,[password])


   useEffect(()=>{
    PasswordGenerator();
   } , [length , numberAllowed , charAllowed , PasswordGenerator])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700' id='bigbox'>
      <h1 className='text-center text-white'>password generetor</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4 mt-5'>
      <input type="text" value={password} name="" id="" 
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      ref={passwordRef}
      />
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordClipboard}>copy</button>
     </div>


     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}} />
        <label>Length : {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={()=>{
          setnumberAllowed((prev) => !prev)
        }} />
        <label htmlFor="numberInput">Numbers</label>

        <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={()=>{
          setnumberAllowed((prev) => !prev)
        }} />
        <label htmlFor="numberInput">Characters</label>
      </div>
     </div>


      </div>
    </>
  )
}

export default App

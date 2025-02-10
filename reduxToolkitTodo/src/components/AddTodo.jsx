import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../feature/todo/todoSlice'









function AddTodo() {


 const[input,setInput] = useState("")
 const[image,setImage] = useState("")

 const dispatch = useDispatch()
    
const[Arr,setArr]= useState([])
  const addTodoSubmit = (e) =>{

    e.preventDefault();

    if (input.trim() === "" || image.trim() ==="") return; 
    dispatch(addTodo({text:input , image:image}))
    setInput("")
    setImage("")
    setArr([...Arr,dispatch])
    console.log(Arr);
    
    
    localStorage.setItem("data" , JSON.stringify({...Arr,dispatch}))

   



  }

  return (
    <>
      
   
   <form action="" onSubmit={addTodoSubmit}>
    <input type="text" name="" id="" value={input} placeholder='enter name' onChange={(e)=>setInput(e.target.value)} />
    <input type="text" name="" id="" value={image} placeholder='enter image' onChange={(e)=>setImage(e.target.value)} />


    {/* <input type="text" name="" id="" placeholder='enter email' />
    <input type="text" name="" id="" placeholder='enter password' /> */}

<input type="submit" name="" value={"submit"} id=""  />
   </form>



    </>
  )
}

export default AddTodo

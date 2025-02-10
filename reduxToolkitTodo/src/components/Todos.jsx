import React from 'react'
import { useSelector  , useDispatch} from 'react-redux'
import { removeTodo } from '../feature/todo/todoSlice'

function Todos() {

    const todos = useSelector(state=> state.todo.todos)
    const dispatch = useDispatch();

  return (
    <>
       <div>
        todos
       </div>
       {
        todos.map((todo)=>{
          return(
            <li key={todo.id}>
            {todo.text}
            <img src={todo.image} alt="" />
            <button onClick={()=> dispatch(removeTodo(todo.id))}>x</button>
        </li>
          )
        })
       }
    </>
  )
}

export default Todos






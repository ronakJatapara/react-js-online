import { createSlice , nanoid } from "@reduxjs/toolkit";


const initialState ={
    todos:[{id:1,text:"hello world" , image:"https://images.pexels.com/photos/30538754/pexels-photo-30538754/free-photo-of-elegant-white-dress-in-snowy-winter-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}]
}


export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state, action)=>{


            const{ text , image} = action.payload

            const Todo ={
                id:nanoid(),
                text,
                image
            }
            state.todos.push(Todo)
            console.log(Todo);
            

        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>
                todo.id !== action.payload

            )
        },
        updateTodo:(state,action)=>{
       
            const {id,text} = action.payload;
            const todo = state.todos.find((todo)=> todo.id == id)
            
            if(todo == true)
            {
                todo.text=text
            }
     
        }
        
    }
})


export const{addTodo,removeTodo,updateTodo}= todoSlice.actions;


export default todoSlice.reducer




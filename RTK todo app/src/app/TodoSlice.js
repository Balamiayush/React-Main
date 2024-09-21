import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    
    todos: [
        
    ],
  },
  reducers: {
    addtodo:(state,action)=>{
        state.todos.push({id: nanoid(), text: action.payload, completed: false });   
    },
    removetodo:(state,action)=>{
        state.todos = state.todos.filter((todo) => todo.id!== action.payload);
    },
    toggleTodo:(state,action)=>{
        state.todos = state.todos.map((todo) =>
          todo.id === action.payload? {...todo, completed:!todo.completed} : todo
        );
    }
  }
});


export const { addtodo, removetodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;

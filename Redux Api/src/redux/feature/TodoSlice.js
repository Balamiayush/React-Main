import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  todos: [{ id: nanoid(), title: "Buy groceries", completed: false }],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        title: action.payload.title,
      });
    },
    removetodo:(state,action)=>{
      state.todos = state.todos.filter((todo) => todo.id!== action.payload.id);
    }
  },
});

export const { addtodo, removetodo } = todoSlice.actions;

export default todoSlice.reducer;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo } from "../app/TodoSlice";


const TodoForm = () => {
    const [input,setInput]=useState('')
    const dispatch = useDispatch();
    const formHandler = (e) => {
        
      e.preventDefault();
      dispatch(addtodo(input))
      console.log(input);
    };

  return (
    <form onSubmit={formHandler} className="w-full flex justify-center ">
      <div className="w-[80%]">
        <input
        value={input}
        onChange={(e)=>{setInput(e.target.value)}}
          className="w-full bg-transparent placeholder:text-zinc-600 text-black text-2xl border border-black-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-black-500 hover:border-black-300 shadow-sm focus:shadow"
          placeholder="Type here..."
        />
      </div>
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;

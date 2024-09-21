import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, removetodo } from "../app/TodoSlice";
import { MdDelete } from "react-icons/md";

const AddTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  return (
    <div className="w-full flex flex-col ">
      <h1 className="text-center font-bold text-5xl ">Todos</h1>
      <ul className="list-none">
        {todos.map((todo, index) => (
          <li
            className="mt-4 text-xl  flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white flex gap-5">
              <span>{index + 1}</span>
              {todo.text}
            </div>

            <button
              onClick={() => dispatch(removetodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <MdDelete />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddTodo;

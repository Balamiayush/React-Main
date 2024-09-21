import React from "react";
import TodoForm from "./components/TodoForm";
import AddTodo from "./components/AddTodo";

const App = () => {
  return (
    <div className="w-full h-screen bg-zinc-400 flex  flex-col items-center p-5 gap-5">
      <TodoForm />

      <AddTodo />
    </div>
  );
};

export default App;

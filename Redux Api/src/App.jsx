import React from 'react'
import Todoform from './components/Todoform'
import Addtodo from './components/Addtodo'
import TodoItems from './components/TodoItems'
const App = () => {
  return (
    <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
        <form  className="flex">
        <input
            type="text"
            placeholder="Write Todo..."
            className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        />
        <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
            Add
        </button>
    </form>
        </div>
        <div className="flex flex-wrap gap-y-3">
            
        </div>
    </div>
</div>
  )
}

export default App
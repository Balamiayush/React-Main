import React, { useState } from 'react'

const FIltering = () => {
const [todo,setTodo] = useState('')
const [todos,setTodos] = useState([{
    'id':1,
    'task':'Learn React',
    'completed':false
}])
const formHandler = (e) =>{
    e.preventDefault();
 
      const newtodo = {
          id:todos.length+1,
          task:todo,
          completed:false
        }
        setTodos([...todos,newtodo] )
        setTodo('')
}
const deleteHandler=(id)=>{
  const newTodos = todos.filter((item)=>item.id!==id)
  setTodos(newTodos)
 
}
  return (
    <form className='w-full h-screen bg-cyan-300 flex flex-col   ' onSubmit={formHandler} >
      <div className='flex items-center flex-col gap-8'>
        <h1 className='text-5xl  font-bold'>Filtering Component</h1>
      <p>This is a simple filtering component</p>
      <div className='w-[80%] h-[7vh] flex gap-4 '>
      <input type="text" className='w-full h-full rounded-lg p-2 text-xl font-semibold ' placeholder='Enter your task' onChange={(e)=>(setTodo(e.target.value))}  />
      <button type='submit' className='w-32 h-12 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-700'>Add Task</button>
      </div>
      </div>
      <ul className='w-full h[50vh] flex flex-col items-center    mt-5 text-xl font-bold    '>
     {
       todos.map((items)=>
       { return <div className='flex  items-center gap-5'>
       <li key={items.id}>{items.task}</li> <button onClick={()=>deleteHandler(items.id)}>Delete</button>
       </div>
        }
        
    )
     }
      </ul>
    </form>
  )
}

export default FIltering
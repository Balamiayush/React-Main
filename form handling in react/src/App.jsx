import React from 'react'
import { useForm } from 'react-hook-form'
const App = () => {
  const { register, handleSubmit } = useForm()
  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input {...register('name', { required: true })} />
        <input {...register('email', { pattern: /^\S+@\S+\.\S+$/ })} />
        <button type="submit">Submit</button>
      </form>
      {/* Add more form fields as needed */}
    </div>
  )
}

export default App
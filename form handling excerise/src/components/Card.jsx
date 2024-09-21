import React from 'react'

const Card = ({user,deletingData,id}) => {
  return (
  
    <div className='w-52  bg-zinc-300 rounded-lg flex h-full flex-col gap-1 items-center p-2'>
      <div className="image w-[3vw] h-[3vw] bg-blue-700 rounded-full">
        <img className="w-full h-full object-cover rounded-full" src={user.image} alt="Card Image" />
      </div>
      <h1 className='text-xl mt-1 font-semibold'>{user.name}</h1>
      <h1 className=' font-semibold opacity-80 '>{user.email}</h1>
      <p className='text-center mt-2 font-semibold leading-1 tracking-tight text-xs '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, laboriosam.</p>
      <button onClick={()=>{deletingData(id)}} className="rounded-md bg-red-600 py-1 px-3 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
  remove it

</button>
    </div>
  )
}

export default Card
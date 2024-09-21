import React from 'react'

const User = ({user}) => {
  return (
    <div className="w-full flex justify-center p-5">
        
    <div className='w-72 h-72 bg-blue-600 flex flex-col gap-2 p-2 items-center  rounded-xl '>
        <div className='w-40 h-40  '>
        <img className='w-full h-full object-cover rounded-md' src={user.avatar_url} alt='User Avatar' />
        </div>
        <div className='text-white font-semibold '>User Name: {user.login}</div>
        <div className='text-white font-semibold '>followers: {user.followers}</div>
        <div className='text-white font-semibold '>following: {user.following}</div>
    </div>
    </div>
  )
}

export default User
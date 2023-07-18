import React from 'react'

export default function CreatePost() {
  return (
    <div className='w-full max-w-md h-fit bg-white border-gray-100 border rounded-lg'> 
      <div className='bg-green-100 flex items-center h-20 px-6 rounded-t-lg'>
        <img src="../public/house.png" alt="" className='w-5'/>
        <p className='text-black font-semibold text-lg pl-2'>Home</p>
      </div>
      <div className='flex flex-col justify-center items-center p-4 h-fit'>
        <p className='text-gray-600 mb-6'>Your personal Wroteit page. Create your first post here.</p>
        <button className='bg-blue-500 hover:bg-blue-700 text-white w-11/12 font-bold py-2 px-4 rounded'>New Post</button>
      </div>
      
    </div>
  )
}

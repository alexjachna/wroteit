import React from 'react'
import Nav from '../Nav'

export default function Profile({ username, setUsername }) {
  return (
    <div className='bg-zinc-50 w-full h-full flex flex-col gap-4'>

        <Nav username={username} />

        <div className='w-full px-2 lg:px-60 flex flex-col items-center gap-2'>
            <img src="/public/vite.svg" alt="" className='border-slate-200 border-2 p-6 w-48 shadow-sm rounded-full'/>
            <div className='relative rounded w-11/12 h-48 flex flex-col items-center justify-center gap-8'>
              <p className='text-black text-5xl'>{username}</p>
              <p className='text-black text-xl'>Wroteit User</p>
              <div className='absolute flex items-center justify-center rounded-full bg-red-300 bottom-3 right-3 w-8 h-8'>
                <img src="/public/edit.png" alt="" className='w-4 invert-[100%]'/>
              </div> 
            </div>
        </div>

        <div className='bg-blue-300 w-full h-1/2'>
        
        </div>
    </div>  
  )
}

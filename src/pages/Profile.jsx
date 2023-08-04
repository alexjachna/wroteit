import React from 'react'
import Nav from '../Nav'
import { useNavigate } from 'react-router-dom'

export default function Profile({ username, bio }) {
  const navigate = useNavigate()

  return (
    <div className='bg-zinc-50 w-full h-full flex flex-col items-center gap-4'>

        <Nav username={username} />

        <div className='w-full px-2 lg:px-60 xl:px-96 flex flex-col xl:flex-row items-center gap-2 bg-red-100'>
            <img src="/public/vite.svg" alt="" className='border-slate-200 border-2 p-6 w-48 shadow-sm rounded-full'/>
            <div className='relative rounded w-11/12 h-48 flex flex-col items-center justify-center gap-8'>
              <p className='text-black text-5xl'>{username}</p>
              <p className='text-black text-xl'>{bio}</p>
              <div className='absolute flex items-center justify-center rounded-full bg-red-300 bottom-3 right-3 w-8 h-8' onClick={() => navigate('/EditProfile.jsx')}>
                <img src="/public/edit.png" alt="" className='w-4 invert-[100%]'/>
              </div> 
            </div>
        </div>

        <div className=' w-11/12 border-t-2 h-1/2 flex flex-col items-center py-4'>
          <p className='text-black text-2xl'>Your posts</p>
        </div>
    </div>  
  )
}

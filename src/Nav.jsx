import React from 'react'

export default function Nav() {
  return (
    <div className='flex justify-evenly items-center bg-zinc-100 w-full h-24 border-b-slate-500 border-b-[1px] border-opacity-25'>
      <div className='flex items-center'>
        <img src="./public/wroteit-logo.png" alt="wroteit logo" className='w-12' />
        <p className='text-zinc-700 text-lg font-medium'>Wroteit</p>
      </div>
      <div className='w-96 h-12 relative'>
        <img src="./public/magnifying-glass.png" alt="" className='w-6 absolute top-3 left-3'/>
        <input type="text" className='w-96 h-12 rounded-lg text-black px-4'/>
      </div>
      <img src="./public/vite.svg" alt="" />
    </div>
  )
}

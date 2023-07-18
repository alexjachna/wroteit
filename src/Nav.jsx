import React from 'react'

export default function Nav() {
  return (
    <div className='flex justify-evenly items-center w-full bg-zinc-100 border-b-slate-500 border-b-[1px] border-opacity-25'>
      <div className='flex items-center h-20'>
        <img src="./public/wroteit-logo.png" alt="wroteit logo" className='w-12' />
        <p className='text-zinc-700 text-lg font-medium'>Wroteit</p>
      </div>
      <div className='w-3/12 h-12 relative rounded-lg shadow-sm'>
        <img src="./public/magnifying-glass.png" alt="" className='w-6 absolute top-3 left-3 invert-[50%]'/>
        <input type="text" placeholder='Search for...' className='w-full h-12 rounded-lg text-black border-slate-200 border px-12 active:border-slate-400'/>
      </div>
      <img src="./public/vite.svg" alt="" className='hidden border-slate-200 border-2 p-3 shadow-sm rounded-full lg:block'/>
    </div>
  )
}

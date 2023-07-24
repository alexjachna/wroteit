import { useEffect, useState } from 'react'
import React from 'react'
import Account from './Account'

export default function Nav() {

  const [size, setSize] = useState(window.innerWidth)
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [window.innerWidth])

  return (
    <div className='flex justify-evenly items-center w-full bg-zinc-100 border-b-slate-500 border-b-[1px] border-opacity-25'>
      <div className='flex items-center h-20'>
        <img src="./public/wroteit-logo.png" alt="wroteit logo" className='w-12' />
        <p className='text-zinc-700 text-lg font-medium'>Wroteit</p>
      </div>
      {size >= 1024 ? 
      <>
        <div className='w-6/12 xl:w-3/12 h-12 relative rounded-lg shadow-sm'>
          <img src="./public/magnifying-glass.png" alt="" className='w-6 absolute top-3 left-3 invert-[50%]'/>
          <input type="text" placeholder='Search...' className='w-full h-12 rounded-lg text-black border-slate-200 border px-12 active:border-slate-400'/>
        </div>
        <Account />
      </>
      : 
      <div className=''>
        <img src="../public/hamburger.png" alt="" className='w-10' onClick={() => showNav ? setShowNav(false) : setShowNav(true)}/>
        {showNav ? 
        <div className='absolute z-10 top-0 right-0 w-full h-screen bg-white'>
          <div className='h-20 flex justify-between items-center px-12 gap-5 text-zinc-700 border-b border-b-black'>
            <p className='text-2xl'>Wroteit</p>
            <img src="../public/x-icon.png" alt="" className='w-6' onClick={() => showNav ? setShowNav(false) : setShowNav(true)}/>
          </div>
          <div className='flex flex-col gap-3 text-zinc-700 p-6 border-b border-b-black'>
            <p className='font-bold text-xl'>For you</p>
            <div className='flex gap-4'>
              <img src="../public/magnifying-glass.png" alt="" className='h-6'/>
              <p>Search</p>
            </div>
            <div className='flex gap-4'>
              <img src="../public/profile.png" alt="" className='h-6'/>
              <p>Profile</p>
            </div>
          </div>
          <div className='flex flex-col gap-3 text-zinc-700 p-6'>
            <p className='font-bold text-xl'>Your communities</p>
            <div className='flex gap-4 h-8'>
              <p>r/react</p>
            </div>
            <div className='flex gap-4 h-8'>
              <p>r/theworld</p>
            </div>
          </div>
        </div>
        : 
        null
        }
        
      </div>
      }
    </div>
  )
}

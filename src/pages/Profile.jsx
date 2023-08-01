import React from 'react'
import Nav from '../Nav'

export default function Profile() {
  return (
    <div className='bg-zinc-50 w-full h-full'>
        <Nav />
        <div className='w-full px-2 lg:px-60 flex flex-col'>
            <div className='rounded bg-red-300 w-48 h-48'>
            </div>
        </div>
    </div>  
  )
}

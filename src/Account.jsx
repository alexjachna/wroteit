import React, { useState } from 'react'

export default function Account() {
    const [account, setAccount] = useState(false)

  return (
    <div className='hidden lg:block relative hover:cursor-pointer' onClick={() => account ? setAccount(false) : setAccount(true)}>
        <img src="./public/vite.svg" alt="" className='border-slate-200 border-2 p-3 shadow-sm rounded-full'/>
        { account ? 
        <div className='absolute top-full -left-5 w-24 h-24 bg-red-300'>
            <p>hello world</p>
        </div> :
        null  
        }
    </div>
  )
}

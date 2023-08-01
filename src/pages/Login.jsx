import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({ username, setUsername }) {
    const navigate = useNavigate()

  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className='w-fit p-12 flex flex-col gap-8 items-center justify-center'>
          <img src="/public/wroteit-logo.png" alt="" className='w-24'/>
            <p className='text-black text-2xl'>Wroteit</p>
            <input type="text" className='border-b px-2 h-10 text-black focus:outline-none' placeholder='username' onChange={e => setUsername(e.target.value)} required/>
            <input type="password" className='border-b px-2 h-10 text-black focus:outline-none' placeholder='password' required/>
            <button className='text-white w-36 h-12 bg-blue-500' onClick={() => {
              console.log(username)
              navigate('/Home.jsx')
            }}>Login</button>
        </div>
    </div>
    
  )
}

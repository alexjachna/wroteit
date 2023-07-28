import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({ username, setUsername }) {
    const navigate = useNavigate()

  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className='w-fit p-12 flex flex-col gap-4 items-center justify-center border'>
            <p className='text-black'>Wroteit.</p>
            <input type="text" className='border px-2 text-black' placeholder='username' onChange={e => setUsername(e.target.value)}/>
            <input type="password" className='border px-2 text-black' placeholder='password'/>
            <button className='text-black border w-24' onClick={() => {
              console.log(username)
              navigate('/Home.jsx')
            }}>Login</button>
        </div>
    </div>
    
  )
}

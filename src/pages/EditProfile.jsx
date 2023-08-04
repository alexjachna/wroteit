import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function EditProfile({ username, setUsername, bio, setBio }) {
    const usernameVal = useRef(null)
    const bioVal = useRef(null)
    const navigate = useNavigate()

  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className='w-fit p-12 flex flex-col gap-8 items-center justify-center'>
          <img src="/public/wroteit-logo.png" alt="" className='w-24'/>
            <p className='text-black text-2xl'>Edit Profile</p>
            <input type="text" ref={usernameVal} className='border-b px-2 h-10 text-black focus:outline-none' placeholder={username} onChange={e => setUsername(e.target.value)}/>
            <input type="password" ref={bioVal} className='border-b px-2 h-10 text-black focus:outline-none' placeholder={bio} />
            <button className='text-white w-36 h-12 bg-blue-500' onClick={() => {
                setUsername(usernameVal.current.value)
                setBio(bioVal.current.value)
                navigate('/Home.jsx')
            }}>Save</button>
        </div>
    </div>
  )
}

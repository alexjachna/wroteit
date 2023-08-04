import React from 'react'
import Nav from '../Nav'
import Feed from '../Feed'

export default function Home({ username, bio }) {
  return (
    <div className='w-full h-fit flex flex-col'>
      <Nav username={username} bio={bio} />
      <div className='px-2 lg:px-60 flex flex-col bg-zinc-50 justify-center align-center w-full'>
        <h1 className='text-black text-4xl font-bold w-full py-7'>Your Feed</h1>
        <Feed username={username}/>
      </div>  
    </div>
  )
}

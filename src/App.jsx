import { useState } from 'react'
import Post from './Post'
import Nav from './Nav'
import Posts from './Posts'
import CreatePost from './CreatePost'

function App() {
  const [posts, setPosts] = useState([])

function createPost() {
  setPosts(() => {
    return (
      <Post />
    )
  })
}

  return ( 
    <div className='w-full h-screen flex flex-col'>
      <Nav />
      <div className='px-2 lg:px-60 flex flex-col bg-zinc-50 justify-center align-center w-full'>
        <h1 className='text-black text-4xl font-bold w-full py-7'>Your Feed</h1>
        <div className='w-full h-fit flex flex-col-reverse items-center gap-4
        xl:flex-row xl:justify-center xl:items-start'>   
          <Posts />
          <CreatePost />
        </div>
      </div>
      
    </div>
  )
}

export default App

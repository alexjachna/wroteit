import { useState } from 'react'
import Post from './Post'
import Nav from './Nav'
import Posts from './Posts'

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
    <div className='w-full h-screen flex flex-col items-center'>
      <Nav />
      <div className='w-9/12 h-full bg-slate-300 m-auto'>
        <h1 className='text-black text-4xl font-bold w-full'>Your Feed</h1>
        <Posts />
        <button className='bg-blue-500 hover:bg-blue-700 text-white w-48 font-bold py-2 px-4 rounded' setPosts={setPosts}>New Post</button>
      </div>
    </div>
  )
}

export default App

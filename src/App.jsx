import { useState } from 'react'
import Post from './Post'

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
    <div>
      <h1>Wroteit</h1>
      <div id="posts">
        {posts.map(post => {

        })}
      </div>
      <button setPosts={setPosts}>New Post</button>
    </div>
  )
}

export default App

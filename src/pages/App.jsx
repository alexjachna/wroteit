import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'
import { useState, useEffect } from 'react'
import EditProfile from './EditProfile'

function App() {

  const [username, setUsername] = useState('')
  const [bio, setBio] = useState('Wroteit User')
  const [posts, setPosts] = useState(() => {
        const localVal = localStorage.getItem('items')
        if (localVal == null) {
            return [{ username: "alexjachna123", id: crypto.randomUUID(), community: "react", title: "hello world", desc: "hello world, this is react." }, 
                    { username: "krazykoala45", id: crypto.randomUUID(), community: "theworld", title: "This is my World.", desc: "Hello world, the world is mine!!!!" }]
        }
        
        return JSON.parse(localVal)
    })

    useEffect(() => {
    localStorage.setItem('items', JSON.stringify(posts))
  }, [posts])
  
  return ( 
    <div className='w-full h-screen flex flex-col'>
      <Router>
        <Routes>
          <Route path="/" element={<Login username={username} setUsername={setUsername}/>} />
          <Route path="/Home.jsx" element={<Home username={username} bio={bio} posts={posts} setPosts={setPosts}/>} />
          <Route path="/Profile.jsx" element={<Profile username={username} bio={bio} posts={posts}/>} />
          <Route path="/EditProfile.jsx" element={<EditProfile username={username} setUsername={setUsername} bio={bio} setBio={setBio}/>} />
        </Routes>
      </Router>
    </div>
    
  )
}

export default App

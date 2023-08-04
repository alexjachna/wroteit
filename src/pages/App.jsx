import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'
import { useState } from 'react'
import EditProfile from './EditProfile'

function App() {

  const [username, setUsername] = useState('')
  const [bio, setBio] = useState('Wroteit User')
  
  return ( 
    <div className='w-full h-screen flex flex-col'>
      <Router>
        <Routes>
          <Route path="/" element={<Login username={username} setUsername={setUsername}/>} />
          <Route path="/Home.jsx" element={<Home username={username} bio={bio}/>} />
          <Route path="/Profile.jsx" element={<Profile username={username} bio={bio} />} />
          <Route path="/EditProfile.jsx" element={<EditProfile username={username} setUsername={setUsername} bio={bio} setBio={setBio}/>} />
        </Routes>
      </Router>
    </div>
    
  )
}

export default App

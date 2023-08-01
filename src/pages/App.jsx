import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'
import { useState } from 'react'

function App() {

  const [username, setUsername] = useState('')
  
  return ( 
    <div className='w-full h-screen flex flex-col'>
      <Router>
        <Routes>
          <Route path="/" element={<Login username={username} setUsername={setUsername}/>} />
          <Route path="/Home.jsx" element={<Home username={username}/>} />
          <Route path="/Profile.jsx" element={<Profile username={username} setUsername={setUsername} />} />
        </Routes>
      </Router>
    </div>
    
  )
}

export default App

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'

function App() {
  
  return ( 
    <div className='w-full h-screen flex flex-col'>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home.jsx" element={<Home />} />
        </Routes>
      </Router>
    </div>
    
  )
}

export default App

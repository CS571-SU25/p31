import { useState } from 'react'
import { HashRouter, Route, Routes, Link } from "react-router";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/champions">Champions</Link>
          </li>
          <li>
            <Link to="/createbuilds">Create Builds</Link>
          </li>
          <li>
            <Link to="/guides">Guides</Link>
          </li>
        
        </ul>
      </nav>
      <Routes> 
        <Route path ="/home" element={<Home />} />
        <Route path ="/profile" element={<Profile />} />
        <Route path ="/champions" element={<Champions />} />
        <Route path ="/createbuilds" element={<CreateBuilds />} />
        <Route path ="/guides" element={<Guides />} />
      </Routes>
    </HashRouter>
  )
}

export default App

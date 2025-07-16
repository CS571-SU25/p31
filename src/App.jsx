import { useState } from 'react'
import { HashRouter, Route, Routes, Link } from "react-router";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <Routes> 
        <Route path ="/home" element={<BadgerLayout />}>
          <Route path ="/profile" element={<Profile />} />
          <Route path ="/champions" element={<Champions />} />
          <Route path ="/createbuilds" element={<CreateBuilds />} />
          <Route path ="/guides" element={<Guides />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App

import { useState } from 'react'
import { HashRouter, Route, Routes } from "react-router";

import StatcheckLayout from './StatcheckLayout';
import Champions from './pages/Champions';
import CreateBuild from './pages/CreateBuild';
import Guides from './pages/Guides';
import Home from './pages/Home';
import Profile from './pages/Profile';



function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <Routes> 
        <Route path ="/" element={<StatcheckLayout />}>
          <Route index element={<Home></Home>}></Route>
          <Route path ="/profile" element={<Profile />} />
          <Route path ="/champions" element={<Champions />} />
          <Route path ="/createbuild" element={<CreateBuild />} />
          <Route path ="/guides" element={<Guides />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App

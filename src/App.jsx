import { useState } from 'react'
import { HashRouter, Route, Routes } from "react-router";

import StatcheckLayout from './StatcheckLayout';
import Champions from './pages/Champions';
import CreateGuide from './pages/CreateGuide';
import Guides from './pages/Guides';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ChampionGuide from './pages/ChampionGuide'



function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  
  return (
    <HashRouter>
      <Routes> 
        <Route path="/" element={<StatcheckLayout loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/champions" element={<Champions />} />
          <Route path="/createguide" element={<CreateGuide />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/:id" element={<ChampionGuide/ >} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App

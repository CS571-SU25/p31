import { useState, useEffect } from 'react'
import { HashRouter, Route, Routes } from "react-router";

import StatcheckLayout from './StatcheckLayout';
import Champions from './pages/Champions';
import CreateGuide from './pages/CreateGuide';
import Guides from './pages/Guides';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ChampionGuide from './pages/ChampionGuide'



function App() {

  sessionStorage.setItem("user_list", JSON.stringify([{user: "admin", password: "password"}, {user: "nathAn", password:"kroshik"}]));

  useEffect(() => {
    sessionStorage.setItem("logged_in_user", JSON.stringify(null));
  }, []);
  useEffect(() => {
    const existingGuides = sessionStorage.getItem("created_guides"); 
      if (!existingGuides) {
        sessionStorage.setItem("created_guides", JSON.stringify([]));
      }
  }, [])

  return (
    <HashRouter>
      <Routes> 
        <Route path="/" element={<StatcheckLayout />}>
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

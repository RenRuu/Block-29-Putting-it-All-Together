import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerForm";


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllPlayers />} />
          <Route path='/SinglePlayerId/:id' element={<SinglePlayer />} />
          <Route path="/NewPlayerForm" element={<NewPlayerForm  />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}


// Importing

import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css'
import AllCards from './components/AllCards';
import CardInfos from './components/CardInfos';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';

function App() {

  // Fetching Api
  const [cards, setCards] = useState([])


  const [darkMode, setDarkMode] = useState(false)



  function gettingData() {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then((data) => {
        setCards(data)

      })
  }


  useEffect(() => {



    gettingData()

  }, [])

  
  console.log(cards)


  return (
    <div className={darkMode ? "dark-mode-bg" : "light-mode-bg"}>

      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>

      <Routes>
        <Route path='/' element={<AllCards darkMode={darkMode} cards={cards} setCards={setCards} gettingData={gettingData}/>} />
        <Route path='/:id' element={<CardInfos darkMode={darkMode} cards={cards}/>} />
      </Routes>

    </div>
  );
}

export default App;

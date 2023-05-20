import './App.css';
import React, { useEffect, useState } from 'react';
import Locker from './Locker';
import Logo from './Logo';
import BoxText from './BoxText';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InsideLocker from './InsideLocker';

function App() {
  const [cosmetics, setCosmetics] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://fortnite-api.com/v2/cosmetics/br');
      const data = await response.json();
      const result = data.data
      setCosmetics(result);
    } 
    fetchData();

  }, []);
console.log(cosmetics)
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <div className="App">
            <Logo />
            <BoxText />
            <Locker />
          </div>
        } />
        <Route path="/insidelocker/outfit" element={<InsideLocker setCosmetics={setCosmetics} cosmetics={cosmetics}  filter="outfit" />}  />
        <Route path="/insidelocker/backbling" element={<InsideLocker setCosmetics={setCosmetics} cosmetics={cosmetics} filter="backpack" />}  />
        <Route path="/insidelocker/pickaxe" element={<InsideLocker setCosmetics={setCosmetics} cosmetics={cosmetics}  filter="pickaxe" />}  />
        <Route path="/insidelocker/glider" element={<InsideLocker  setCosmetics={setCosmetics} cosmetics={cosmetics}  filter="glider" />}  />
      </Routes>
    </BrowserRouter>
  );
}


export default App;

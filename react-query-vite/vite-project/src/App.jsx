import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PokemonList from './components/PokemonList'
import { Route, Routes } from 'react-router-dom'
import People from './components/People'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/peoplelist' exact element={<People />} />
        <Route path='/filmslist' exact element={<PokemonList />} />
      </Routes>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import { Store } from './pages/Store'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {
  return (
    <ShoppingCartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        {/* <Navbar />
        <Main />
        <Footer /> */}
      </Routes>
    </ShoppingCartProvider>
  )
}

export default App

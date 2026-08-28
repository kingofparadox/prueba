import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Index from'./pages/Index'
function App() {

  const navigate = useNavigate()
  return (
    <>
  
    <Routes>
        <Route index element ={<Index />}/>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </>
  )
}

export default App

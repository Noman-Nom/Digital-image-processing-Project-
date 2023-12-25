import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Histogram from './Components/Histogram/Histogram'
import './App.css'
import Home from './Pages/Home/Home'
import ImageNegativePage from './Pages/ImageNegativePage/ImageNegativePage'

const App = () => {
  return (
  
    <>
  
    <BrowserRouter>
    <Routes>
      
      <Route  path='/' element={<Home/>} />
      <Route  path='/histogram' element={<Histogram/>} />
      <Route  path='/negetive' element={<ImageNegativePage/>} />

    

    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
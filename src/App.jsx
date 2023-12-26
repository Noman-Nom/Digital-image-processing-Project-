import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Histogram from './Components/Histogram/Histogram'
import './App.css'
import Home from './Pages/Home/Home'
import ImageNegativePage from './Pages/ImageNegativePage/ImageNegativePage'
import PowerLawTransformationPage from './Pages/PowerLawTransformationPage/PowerLawTransformationPage'
import ThresholdPage from './Pages/ThresholdPage/ThresholdPage'
import GscaleNegativePage from './Pages/GscaleNegativePage/GscaleNegativePage'
import ThresholdAlgPage from './Pages/ThresholdAlgPage/ThresholdAlgPage'
import ColorToGrayPage from './Pages/ColorToGrayPage/ColorToGrayPage'

const App = () => {
  return (
  
    <>
  
    <BrowserRouter>
    <Routes>
      
      <Route  path='/' element={<Home/>} />
      <Route  path='/histogram' element={<Histogram/>} />
      <Route  path='/negetive' element={<ImageNegativePage/>} />
      <Route  path='/powerlaw' element={<PowerLawTransformationPage/>} />
      <Route  path='/threshold' element={<ThresholdPage/>} />
      <Route  path='/gscalenegative' element={<GscaleNegativePage/>} />
      <Route  path='/thresholdAlg' element={<ThresholdAlgPage/>} />
      <Route  path='/colortogray' element={<ColorToGrayPage/>} />

    

    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
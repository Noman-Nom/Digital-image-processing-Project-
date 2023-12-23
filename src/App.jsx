import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Histogram from './Components/Histogram/Histogram'

const App = () => {
  return (
  
    <>
  
    <BrowserRouter>
    <Routes>
      
      <Route  path='/histogram' element={<Histogram/>} />

    

    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Histogram from './Components/Histogram/Histogram'

const App = () => {
  return (
  
    <>
    <div>App</div>
    <BrowserRouter>
    <Routes>
      
      <Route  path='/histogram' element={<Histogram/>} />

    

    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
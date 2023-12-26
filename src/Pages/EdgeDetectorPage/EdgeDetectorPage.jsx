import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import EdgeDetector from '../../Components/EdgeDetector/EdgeDetector'
import './EdgeDetectorPage.scss'

const EdgeDetectorPage = () => {
  return (
    <div className='Single'>
    <Sidebar />
    <div className="singleContainer">
      <Navbar />
      <EdgeDetector />
    </div>
  </div>
  )
}

export default EdgeDetectorPage
import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import ThresholdAlg from '../../Components/ThresholdAlg/ThresholdAlg'
import './ThresholdAlgPage.scss'

const ThresholdAlgPage = () => {
    return (
        <div className='Single'>
        <Sidebar/>
        <div className="singleContainer">
          <Navbar/>
       <ThresholdAlg/>
       
          
      
      </div>
      </div>
      )
}

export default ThresholdAlgPage
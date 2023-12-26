import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import Threshold from '../../Components/Threshold/Threshold'
import './ThresholdPage.scss'

const ThresholdPage = () => {
    return (
        <div className='Single'>
        <Sidebar/>
        <div className="singleContainer">
          <Navbar/>
       <Threshold/>
       
          
      
      </div>
      </div>
      )
}

export default ThresholdPage
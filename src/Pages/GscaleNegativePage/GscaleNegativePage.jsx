import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import GscaleNegative from '../../Components/GscaleNegative/GscaleNegative'
import './GscaleNegativePage.scss'

const GscaleNegativePage = () => {
    return (
        <div className='Single'>
        <Sidebar/>
        <div className="singleContainer">
          <Navbar/>
       <GscaleNegative/>
       
          
      
      </div>
      </div>
      )
}

export default GscaleNegativePage
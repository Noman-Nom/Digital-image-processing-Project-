import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import './ColorToGrayPage.scss'
import ColorToGray from '../../Components/ColorToGray/ColorToGray'

const ColorToGrayPage = () => {
    return (
        <div className='Single'>
        <Sidebar/>
        <div className="singleContainer">
          <Navbar/>
       <ColorToGray/>
       
          
      
      </div>
      </div>
      )
}

export default ColorToGrayPage
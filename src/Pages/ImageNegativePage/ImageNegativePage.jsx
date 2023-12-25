import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import './ImageNegativePage.scss'
import ImageNegativeAlgorithm from '../../Components/imageNegative/ImageNegative'

const ImageNegativePage = () => {
  return (
    <div className='Single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
     <ImageNegativeAlgorithm/>
     
        
    
    </div>
    </div>
  )
}

export default ImageNegativePage
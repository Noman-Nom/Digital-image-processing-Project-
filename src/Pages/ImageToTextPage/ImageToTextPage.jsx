import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import ImageToText from '../../Components/ImageToText/ImageToText'
import './ImageToTextPage.scss'

const ImageToTextPage = () => {
  return (
    <div className='Single'>
    <Sidebar/>
    <div className="singleContainer">
      <Navbar/>
   <ImageToText/>
  </div>
  </div>
  )
}

export default ImageToTextPage
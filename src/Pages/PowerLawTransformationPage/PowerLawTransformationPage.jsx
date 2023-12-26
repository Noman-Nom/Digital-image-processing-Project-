import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import './PowerLawTransformationPage.scss'
import PowerLawTransformation from '../../Components/PowerLawTransformation/PowerLawTransformation'

const PowerLawTransformationPage = () => {
  return (
    <div className='Single'>
    <Sidebar/>
    <div className="singleContainer">
      <Navbar/>
   <PowerLawTransformation/>
   
      
  
  </div>
  </div>
  )
}

export default PowerLawTransformationPage
import React from 'react'
import './Home.scss'



import HowToRegIcon from '@mui/icons-material/HowToReg';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
     

        <div className="charts">
          
        </div>
        <div className="listContainer">
          <div className="listTitle">
            <HowToRegIcon className='icon' />
           <h3>Lorem, ipsum dolor sit amet consectetur adipisicing.</h3>
          </div>
 
        </div>
      </div>
    </div>
  )
}

export default Home
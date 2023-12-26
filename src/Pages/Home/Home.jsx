import React from 'react'
import './Home.scss'



import HowToRegIcon from '@mui/icons-material/HowToReg';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Team from '../../Components/Team/Team';

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />

            <Team/>

       
      </div>
    </div>
  )
}

export default Home
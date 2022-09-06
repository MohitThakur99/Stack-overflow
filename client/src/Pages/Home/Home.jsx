import React from 'react'

import "../../App.css"

import HomeMainbar from '../../components/HomeMainBar/HomeMainbar';
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import RightSideBar from "../../components/RightSideBar/RightSideBar";

const Home = () => {
  return (
    <div className='home-container-1'>
      <LeftSideBar />
      <div className='home-container-2'>
        <HomeMainbar />
        <RightSideBar />
      </div>
    </div>
  )
}

export default Home;
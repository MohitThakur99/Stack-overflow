import React from 'react'

import "../../App.css"

import HomeMainBar from "../../components/HomeMainBar/HomeMainbar";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import RightSideBar from "../../components/RightSideBar/RightSideBar";

const Questions = () => {
  return (
    <div className='home-container-1'>
      <LeftSideBar />
      <div className='home-container-2'>
        <HomeMainBar />
        <RightSideBar />
      </div>
    </div>
  )
}

export default Questions
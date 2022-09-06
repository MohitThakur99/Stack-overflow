import React from 'react'

import "../../App.css"

import LocationComponent from '../../components/LocationComponent/LocationComponent';
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import RightSideBar from "../../components/RightSideBar/RightSideBar";

const Location = () => {
  return (
    <div className='home-container-1'>
      <LeftSideBar />
      <div className='home-container-2'>
        <LocationComponent />
        <RightSideBar />
      </div>
    </div>
  )
}

export default Location;
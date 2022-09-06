import React, { useState, useEffect } from 'react'
import "./LocationComponent.css"

const LocationComponent = () => {

    const [locationData, setLocationData] = useState("");

    const getCurrentLocation = (position) => {
        console.log('position', position);
        const data = {
            lat: position.coords.latitude,
            long: position.coords.longitude
        };
        setLocationData(data);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(getCurrentLocation);
    }, []);

    console.log(locationData);

  return (
    <div className='main-component'>
        <h1>Your Location</h1>
        <h4>Latitude: {locationData.lat}</h4>
        <h4>longitude: {locationData.long}</h4>
    </div>
  )
}

export default LocationComponent
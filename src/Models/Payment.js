import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Payment = ({visible, onClose, amount}) => {

    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [areaName, setAreaName] = useState('');
    const [error, setError] = useState(null);
    const [loader ,setLoader] = useState(false)
    const [locationLoader, setLocationLoader] = useState(false)

    useEffect(() => {
      // When the modal is opened, prevent scrolling in the background
      if(visible){
      document.body.style.overflow = 'hidden';
      }
      // When the modal is closed, allow scrolling in the background
      return () => { 
        document.body.style.overflow = 'visible';
      };
    }, [visible]);
  
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
            setError(null);
  
            try {
              // Nominatim API request for reverse geocoding
              setLocationLoader(true)
              const response = await axios.get(
                `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
              );
              const address = response.data.display_name;
              setAreaName(address || 'Area name not found');
              setLocationLoader(false)
            } catch (err) {
              setError('Failed to fetch area name');
              setLocationLoader(false)
            }
          },
          (err) => {
            setError(err.message);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
      }
    };

    if(!visible) return null

  return (
    <div className='w-screen h-screen flex justify-center items-center fixed backdrop-blur bg-[#0000003b]'>
        <div className='w-[40%] h-[88%] rounded-md bg-white drop-shadow-2xl shadow-black flex justify-evenly items-center flex-col mt-14'>
            <div className='w-[90%] h-[8%] flex justify-between items-center'>
                <p className='m-0 text-2xl'>Payment method</p>
                <p className='m-0 text-2xl font-semibold text-[#000] hover:text-[#313131] transition ease-in-out delay-50 cursor-pointer' onClick={()=>onClose()}>X</p>
            </div>
            <div className='w-[90%] h-[35%] border-2 border-[#0960d0] rounded-2xl flex justify-evenly items-center flex-col gap-3 relative'>
                <h3 className='absolute -top-5 left-[5%] bg-white px-1 text-2xl text-[#0960d0] font-thin'>Card info</h3>
            <div className='w-[95%] h-12 mt-4 relative'>
            <input
      id="owner"
      name="owner"
      type="text"
      class="w-[100%] h-10 border-2 border-[#aaaaaa] rounded-md p-2 focus:border-2 focus:border-[#0960d0] transition-colors focus:outline-none peer bg-inherit"
    />
    <label
      for="owner"
      class="text-xl absolute left-2 top-1 cursor-text peer-focus:text-lg peer-focus:-top-7 transition-all ">Owner name</label>
      </div>
      <div className='w-[95%] h-12 relative'>
            <input
      id="card_number"
      name="card_number"
      type="text"
      class="w-[100%] h-10 border-2 border-[#aaaaaa] rounded-md p-2 focus:border-2 focus:border-[#0960d0] transition-colors focus:outline-none peer bg-inherit"
    />
    <label
      for="card_number"
      class="text-xl absolute left-2 top-1 cursor-text peer-focus:text-lg peer-focus:-top-7 transition-all ">Card number</label>
      </div>
      <div className='w-[95%] h-12 flex justify-between items-center'>
      <div className='w-[48%] h-12 relative'>
            <input
      id="expiry_date"
      name="expiry_date"
      type="text"
      class="w-[100%] h-10 border-2 border-[#aaaaaa] rounded-md p-2 focus:border-2 focus:border-[#0960d0] transition-colors focus:outline-none peer bg-inherit"
    />
    <label
      for="expiry_date"
      class="text-xl absolute left-2 top-1 cursor-text peer-focus:text-lg peer-focus:-top-7 transition-all ">Expiry Date</label>
      </div>
      <div className='w-[48%] h-12 relative'>
            <input
      id="cvv"
      name="cvv"
      type="text"
      class="w-[100%] h-10 border-2 border-[#aaaaaa] rounded-md p-2 focus:border-2 focus:border-[#0960d0] transition-colors focus:outline-none peer bg-inherit"
    />
    <label
      for="cvv"
      class="text-xl absolute left-2 top-1 cursor-text peer-focus:text-lg peer-focus:-top-7 transition-all ">CVV</label>
      </div>
      </div>
            </div>
      <div className='w-[90%] h-[30%] flex justify-between items-center flex-col border-b border-[#0960d0]'>
        <div className='w-[90%] h-[70%] border-b border-[#0960d0]'>
            <p className='m-0 w-[100%] h-[30%] text-xl flex justify-between items-center'>Price: <span className='font-semibold'>{amount}</span></p>
            <p className='m-0 w-[100%] h-[30%] text-xl flex justify-between items-center'>Tax: <span className='font-semibold'>{amount}</span></p>
            <p className='m-0 w-[100%] h-[30%] text-xl flex justify-between items-center'>Delivery: <span className='font-semibold'>{amount}</span></p>
        </div>
        <p className='m-0 w-[90%] h-[30%] text-xl font-semibold flex justify-between items-center'>Total Price: <span className='font-bold'>{amount}</span></p>

      </div>
      <div className='w-[90%] h-[10%] flex justify-evenly items-center '>
      <div className='w-[70%] h-12 relative mt-4'>
            <input
      id="location"
      name="location"
      type="text"
      value={areaName}
      class="w-[100%] h-10 border-2 border-[#aaaaaa] rounded-md p-2 outline-none transition-colors"
      disabled
    />
    <label
      for="location"
      class="absolute left-2 -top-6 cursor-text text-lg transition-all ">Your Location</label>
      </div>
      <button
        onClick={getLocation}
        className="w-[20%] h-10 rounded-md text-white bg-[#0960d0] hover:bg-[#0960d0d6] transition ease-in-out delay-50 mt-3"
      >
        {locationLoader ? (
                <div class="w-full gap-x-2 flex justify-center items-center">
                  <div class="w-3 bg-[#dbd5e9] animate-pulse h-3 rounded-full"></div>
                  <div class="w-3 animate-pulse h-3 bg-[#dbd5e9] rounded-full"></div>
                  <div class="w-3 h-3 animate-pulse bg-[#dbd5e9] rounded-full"></div>
                </div>
              ) : (
                "Get location"
              )}
      </button>
      {/* <button
        onClick={getLocation}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Get Location
      </button>
      {location.latitude && location.longitude ? (
        <div className="mt-4">
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <p>Area Name: {areaName}</p>
        </div>
      ) : error ? (
        <p className="text-red-500 mt-4">{error}</p>
      ) : (
        <p className="mt-4">Click the button to get your location.</p>
      )} */}
      </div>
            <div className='w-[90%] h-[12%] flex justify-center items-center'>
            <button className='w-[100%] h-12 rounded-lg text-white bg-[#0960d0] hover:bg-[#0960d0d6] transition ease-in-out delay-50'>
            {loader ? (
                <div class="w-full gap-x-2 flex justify-center items-center">
                  <div class="w-3 bg-[#dbd5e9] animate-pulse h-3 rounded-full"></div>
                  <div class="w-3 animate-pulse h-3 bg-[#dbd5e9] rounded-full"></div>
                  <div class="w-3 h-3 animate-pulse bg-[#dbd5e9] rounded-full"></div>
                </div>
              ) : (
                "Confirm Payment"
              )}
            </button>
            </div>
        </div>
    </div>
  )
}

export default Payment
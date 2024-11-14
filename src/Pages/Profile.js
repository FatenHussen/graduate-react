import React, { useState } from 'react'
// import { BsPersonCircle } from "react-icons/bs";
import NavBar from '../Components/NavBar'
import man from '../Assets/man.png'
import woman from '../Assets/woman.png'
import img from '../Assets/Doctors.jpg'
import Card from '../Components/Card'



const Profile = () => {
    const gender = 'male'
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Travel Organizer', price: 30.0, quantity: 1, image: img },
        { id: 2, name: 'Travel Organizer', price: 30.0, quantity: 1, image: img },
        { id: 3, name: 'Travel Organizer', price: 30.0, quantity: 1, image: img },
        { id: 4, name: 'Comfort Pillow', price: 25.0, quantity: 1, image: img },
        { id: 5, name: 'Comfort Pillow', price: 25.0, quantity: 1, image: img },
    
      ]);

  return (
    <div className='w-full min-h-screen h-fit bg-white flex items-center flex-col gap-3'>
      <div className='w-[100%] h-14 relative'>
        <NavBar/>
      </div>
      <div className='w-[98%] min-h-[89vh] h-fit flex justify-between items-start'>
        <div className='w-[25%] h-[70vh] bg-[#d6e7fe] rounded-md drop-shadow-xl text-black shadow-[#aaaaaa]'>
            <div className='w-[100%] h-[30%] flex justify-evenly items-center flex-col  border-b-2 border-[#0960d0]'>
                <img src={gender ? man : woman} className='h-[50%]'/>
                <h2 className=''>Person Name</h2>
            </div>
            <div className='w-[100%] h-[70%] flex justify-evenly items-center flex-col'>
            <div className='w-[70%] h-12 relative mt-4'>
            <input
      id="email"
      name="email"
      type="text"
      class="w-[100%] h-10 border-2 border-[#0960d0] bg-transparent rounded-md p-2 outline-none transition-colors"
      disabled
    />
    <label
      for="email"
      class="absolute left-2 -top-6 cursor-text text-lg transition-all ">E-mail</label>
      </div>
      <div className='w-[70%] h-12 relative mt-4'>
            <input
      id="phone"
      name="phone"
      type="text"
      class="w-[100%] h-10 border-2 border-[#0960d0] bg-transparent rounded-md p-2 outline-none transition-colors"
      disabled
    />
    <label
      for="phone"
      class="absolute left-2 -top-6 cursor-text text-lg transition-all ">Phone number</label>
      </div>
      <div className='w-[70%] h-12 relative mt-4'>
            <input
      id="birthDate"
      name="birthDate"
      type="text"
      class="w-[100%] h-10 border-2 border-[#0960d0] bg-transparent rounded-md p-2 outline-none transition-colors"
      disabled
    />
    <label
      for="birthDate"
      class="absolute left-2 -top-6 cursor-text text-lg transition-all ">Birth Date</label>
      </div>
      <div className='w-[70%] h-12 relative mt-4'>
            <input
      id="gender"
      name="gender"
      type="text"
      class="w-[100%] h-10 border-2 border-[#0960d0] bg-transparent rounded-md p-2 outline-none transition-colors"
      disabled
    />
    <label
      for="gender"
      class="absolute left-2 -top-6 cursor-text text-lg transition-all ">Gender</label>
      </div>
            </div>
        </div>
        <div className='w-0.5 h-[60vh] mt-10 rounded-full bg-[#0960d0]'></div>
            <div className='w-[70%] h-[20px] '>
                <div className='w-[100%] h-fit flex justify-evenly items-center flex-col gap-4'>
                    <h2 className='w-[100%] pb-2 border-b border-[#0960d0] text-[#0B74FA] text-3xl'>Latest Orders</h2>
                    <div className="w-[100%] h-fit flex justify-evenly items-center flex-col gap-3">
        {cartItems.map((item) => (
          <>
          <div key={item.id} className="w-[100%] flex justify-evenly items-center bg-[#F7F7F7] rounded-md py-4">
              <h2 className="text-lg font-medium">{item.name}</h2>
            <p className="m-0 w-24 text-center">2024-10-10</p>
            <div className="w-24 text-center">${(item.price * item.quantity).toFixed(2)}</div>
          </div>
      <div className='w-[80%] h-0.5 rounded-full bg-[#add0fd]'></div>
</>
        ))}
      </div>
      <div className='w-[100%] h-fit flex justify-evenly items-center flex-col mb-3'>
      <h2 className='w-[100%] pb-2 border-b border-[#0960d0] text-[#0B74FA] text-3xl'>Favorites</h2>
      <div className='w-[100%] min-h-[82.3vh] h-fit grid grid-cols-3 gap-5 items-center place-items-center'>
        {cartItems.map((item, index) => (
          <Card/>
        ))}
        </div>
      </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Profile
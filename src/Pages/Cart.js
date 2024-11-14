
import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import Payment from '../Models/Payment';
import img from '../Assets/Doctors.jpg'

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Travel Organizer', price: 30.0, quantity: 1, image: img },
    { id: 2, name: 'Travel Organizer', price: 30.0, quantity: 1, image: img },
    { id: 3, name: 'Travel Organizer', price: 30.0, quantity: 1, image: img },
    { id: 4, name: 'Comfort Pillow', price: 25.0, quantity: 1, image: img },
    { id: 5, name: 'Comfort Pillow', price: 25.0, quantity: 1, image: img },

  ]);
  const [openModel ,setOpenModel] = useState(false)

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className='w-full min-h-screen h-fit bg-white flex items-center flex-col gap-3'>
      <div className='w-[100%] h-16 relative'>
        <NavBar />
      </div>
    <div className="w-[90%] mb-20">
      <h1 className="font-normal text-center mb-6">Your Shopping Cart</h1>
      <div className='w-[100%] h-12 flex justify-evenly items-center'>
        <h3 className='w-[45%] text-xl'>Product</h3>
        <h3 className='w-24 text-xl'>Price</h3>
        <h3 className='text-xl'>Quanity</h3>
        <h3 className='w-24 text-xl'>Product</h3>
        
      </div>
      <div className='w-[100%] h-0.5 rounded-full bg-[#074da6] mb-2'></div>

      <div className="w-[100%] h-fit flex justify-evenly items-center flex-col gap-3">
        {cartItems.map((item) => (
          <>
          <div key={item.id} className="w-[100%] flex justify-evenly items-center bg-[#F7F7F7] rounded-md py-4">
            <img src={item.image} alt={item.name} className=" w-44 h-20 rounded-lg  object-cover" />
            <div className="w-[25%] flex justify-center items-start flex-col">
              <h2 className="text-lg font-medium">{item.name}</h2>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-[#EA4335] hover:text-[#ea4435b0] text-sm"
              >
                Remove
              </button>
            </div>
            <div className="w-24 text-center">${item.price.toFixed(2)}</div>
            <div className="flex items-center border rounded">
              <button
                onClick={() => handleQuantityChange(item.id, -1)}
                className="px-2 py-1 text-gray-600 hover:bg-gray-200"
              >
                -
              </button>
              <input
                type="text"
                value={item.quantity}
                readOnly
                className="w-8 text-center border-none"
              />
              <button
                onClick={() => handleQuantityChange(item.id, 1)}
                className="px-2 py-1 text-gray-600 hover:bg-gray-200"
              >
                +
              </button>
            </div>
            <div className="w-24 text-center">${(item.price * item.quantity).toFixed(2)}</div>
          </div>
      <div className='w-[80%] h-0.5 rounded-full bg-[#add0fd]'></div>
</>
        ))}
      </div>
    </div>
    <div className='fixed bottom-0 w-[100%] h-16 bg-[#add0fd] text-black flex justify-evenly items-center gap-[50%]'>
      <button className='w-64 h-12 rounded-xl text-white bg-[#0960d0] hover:bg-[#0960d0d6] transition ease-in-out delay-50' onClick={()=>setOpenModel(true)}>Payment</button>
    <div className="text-right">
        <h2 className="text-xl font-semibold">Total: ${calculateTotal()}</h2>
      </div>
    </div>
    <Payment visible={openModel} onClose={()=>setOpenModel(false)} amount={calculateTotal()}/>
    </div>
  );
};

export default Cart;

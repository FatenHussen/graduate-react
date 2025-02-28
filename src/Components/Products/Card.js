import React from 'react'
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";


const Card = ({ product, setDelet, setModalMode, setSelectedProduct, imageUrl }) => {
  const fullStars = Math.floor(product.rate || 0);
  const halfStar = (product.rate || 0) % 1 >= 0.5;

  return ( 
<div
  class="card shadow-[0px_4px_16px_px_#367E08] h-[400px] w-[280px] lg:w-[90%] group gap-[0.5em] rounded-[1.5em] relative flex justify-end flex-col p-[1.5em] z-[1] overflow-hidden mb-5"
>
  <div class="absolute top-0 left-0 h-full w-full bg-[#bad2df]">
    <img src={imageUrl}/>
  </div>

  <div
    class="container text-black z-[2] relative font-nunito flex flex-col gap-[0.5em]"
  >
    <div class="h-fit w-full">
      <h1
        class="card_heading text-3xl font-semibold"
      >
        {product.name}
      </h1>
      <p
        class="text-lg font-thin"
      >
     {product.catagory}
      </p>
    </div>

    <div class="flex justify-between lg:items-center items-start flex-col lg:flex-row h-fit w-full">
    <div className="flex justify-start items-center">
                <p className='m-0 font-thin text-lg'>{product.rate}<span className='font-normal mr-3'>/5</span></p>
      {[...Array(fullStars)].map((_, index) => (
        <BsStarFill key={index} className="text-yellow-500" size={20} />
      ))}
      {halfStar && <BsStarHalf className="text-yellow-500" size={20}/>}
      {/* {[...Array(emptyStars)].map((_, index) => (
        <BsStar key={index + fullStars + (halfStar ? 1 : 0)} className="text-gray-300" size={20}/>
      ))} */}
    </div>
      <p>{product.price}$</p>
    </div>

    <div class="flex justify-center items-center h-fit w-fit gap-2">
      <div
        class="border-2 border-[#222222] rounded-[0.5em] text-black font-nunito text-[1em] font-normal px-1 py-[0.05em] hover:bg-[#222222] hover:text-white duration-300 cursor-pointer"
      >
        <p>Drama</p>
      </div>
      <div
        class="border-2 border-[#222222] rounded-[0.5em] text-black font-nunito text-[1em] font-normal px-1 py-[0.05em] hover:bg-[#222222] hover:text-white duration-300 cursor-pointer"
      >
        <p>Action</p>
      </div>
      <div
        class="border-2 border-[#222222] rounded-[0.5em] text-black font-nunito text-[1em] font-normal px-1 py-[0.05em] hover:bg-[#222222] hover:text-white duration-300 cursor-pointer"
      >
        <p>Balls</p>
      </div>
    </div>
  </div>
  <div className='w-[280px] lg:w-[100%] h-0 group-hover:h-[100%] bg-gradient-to-t from-transparent to-[#bad2df] absolute left-0 bottom-0 duration-500 '></div>
  <div className="font-nunito flex justify-evenly items-center flex-col text-black font-light relative w-[100%] h-[0%] group-hover:h-[50%] leading-[1.2em] duration-500 overflow-hidden">
        <button 
          className='bg-[#0693be] text-lg text-white h-[20%] w-[90%] rounded-xl'
          onClick={() => {
            setSelectedProduct(product);
            setModalMode('view');
          }}
        >
          View
        </button>
        <button 
          className='bg-[#0693be] text-lg text-white h-[20%] w-[90%] rounded-xl'
          onClick={() => {
            setSelectedProduct(product);
            setModalMode('edit');
          }}
        >
          Edit
        </button>
        <button 
          className='bg-[#0693be] text-lg text-white h-[20%] w-[90%] rounded-xl'
          onClick={() => {
            setSelectedProduct(product);
            setDelet(true);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Card
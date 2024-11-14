import React from 'react'
import { BsCart3, BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import img from '../Assets/front-view-plastic-bottles-hair-dye.jpg'
import { Link } from 'react-router-dom';

const Card = ({rate = 0, id, name, company, price}) => {
  const fullStars = Math.floor(rate);
  const halfStar = rate % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  console.log(fullStars, halfStar, emptyStars)

  console.log(id)

  return (
<div className='w-72 h-96 bg-white border-4 rounded flex justify-center items-center flex-col text-black'>
    <div className='w-[100%] h-[35%]  bg-cover bg-center rounded-b mb-[2%]' style={{ backgroundImage: `url(${img})` }}></div>
    <div className='w-[100%] h-[12%] flex justify-evenly items-center'>
      {/* <h2 className='py-0.5 px-3 rounded-3xl border-2 text-base font-normal'>Catagory</h2> */}
      <h2 className='py-0.5 px-3 rounded-3xl border-2 text-base font-normal'>{company}</h2>
    </div>
    <h1 className='w-[80%] h-[15%] text-2xl font-bold'>{name}</h1>
    <p className='w-[80%] h-[10%] text-lg m-0 flex justify-start items-center gap-3'>{price}$ <span className='py-0.5 px-2 font-normal rounded-md bg-[#074da6] text-white text-xs'>Save 10%</span></p>
    <div className="w-[80%] h-[10%] flex justify-start items-center">
      {[...Array(fullStars)].map((_, index) => (
        <BsStarFill key={index} className="text-yellow-500" size={17} />
      ))}
      {halfStar && <BsStarHalf className="text-yellow-500" size={17}/>}
      {[...Array(emptyStars)].map((_, index) => (
        <BsStar key={index + fullStars + (halfStar ? 1 : 0)} className="text-gray-300" size={17}/>
      ))}
    </div>
    <div className='w-[100%] h-[16%] flex justify-evenly items-center'>
      <Link to={`/product/:${id}`} className='w-[70%] h-10 flex justify-center items-center no-underline bg-[#0B74FA] hover:bg-[#0b73fad6] transition ease-in-out delay-50 text-white rounded-xl'>Details</Link>
      <button className='w-[20%] h-10 bg-[#0B74FA] hover:bg-[#0b73fad6] transition ease-in-out delay-50 text-white rounded-xl flex justify-center items-center'
          data-tooltip-id="cart"
          data-tooltip-content="Add to cart"
          data-tooltip-place="top" >
            <BsCart3 size={19}/>
      </button>
    </div>
    <Tooltip id="cart" 
    style={{ backgroundColor: "#0B74FA", color: "#ffffff", borderRadius: '10px' }} opacity={1}/>
</div>
  )
}
 
export default Card
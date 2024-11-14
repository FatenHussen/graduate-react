import React from 'react'
import { BsStarFill, BsStarHalf, BsStar  } from "react-icons/bs";


const Comment = () => {
    const rate = 3.5
  const fullStars = Math.floor(rate);
  const halfStar = rate % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    /* From Uiverse.io by Ykingdev */ 
<div
  class="flex flex-col gap-2 max-w-xl w-full bg-[#F7F7F7] p-3 rounded-md mt-5 drop-shadow-lg"
>
  <div class="flex flex-row justify-between w-full">
    <div class="flex flex-row justify-between w-full">
      <div
        class="text-xl"
      >
        User Name
      </div>
      <div
        class="text-[#7f7f7f]"
      >2024-12-12</div>
    </div>
  </div>
  <div class="flex flex-row justify-between w-full">
    <div className="flex justify-start items-center">
                <p className='m-0 font-thin'>{rate}<span className='font-normal mr-3'>/5</span></p>
      {[...Array(fullStars)].map((_, index) => (
        <BsStarFill key={index} className="text-yellow-500" size={16} />
      ))}
      {halfStar && <BsStarHalf className="text-yellow-500" size={16}/>}
      {[...Array(emptyStars)].map((_, index) => (
        <BsStar key={index + fullStars + (halfStar ? 1 : 0)} className="text-gray-300" size={16}/>
      ))}
    </div>
  </div>

  <div
    class="w-full min-h-20 h-fit"
  >
    The product is decent but not as described. The color was different from what I saw online.
    The product is decent but not as described. The color was different from what I saw online.
    The product is decent but not as described. The color was different from what I saw online.
  </div>
</div>

  )
}

export default Comment
// TODO 
//1- Adding Navigating

import React from 'react'
// import img from '../Assets/Doctors.jpg'


const CardCatagoryleft = ({name,img,describe}) => {
  return (
    <div
  class="group flex flex-col justify-start items-start gap-2 w-[750px] h-64 duration-500 relative rounded-lg p-4 bg-[#0B74FA] "
  dir='rtl'
>
<div
    class="absolute blur duration-500 group-hover:blur-none w-56 h-56 rounded-full group-hover:-translate-x-10 group-hover:translate-y-2 bg-[#5ca2fb] top-4 z-0"
  ></div>
  <div
    class="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-[#85b9fc] left-56 top-0 z-0"
  ></div>
  <div
    class="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-[#338bfa] rounded-full group-hover:translate-x-12 left-72 bottom-3 z-0"
  ></div>
  <div
    class="absolute duration-700 group-hover:-translate-x-4 top-[10%] z-50 -left-44 w-1/2 h-4/5 rounded-lg bg-cover bg-center"
    style={{ boxShadow: '5px 0px 25px 0px #85b9fc', backgroundImage: `url(${img})` }}
  ></div>

  <div class="z-50">
    <h2 class="text-2xl font-bold mb-2 text-white">{name}</h2>
    <p class="w-[500px] h-24  text-gray-200 line-clamp-3">
      {describe}
    </p>
  </div>
  <button
    class="w-32 h-10 z-50 hover:bg-[#d6e7fe] bg-[#fff] text-[#0B74FA] font-semibold transition ease-in-out delay-50 rounded"
  >
    Explore
  </button>
</div>

  )
}

export default CardCatagoryleft
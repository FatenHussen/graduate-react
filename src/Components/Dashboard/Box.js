import React from 'react'

const Box = ({header, value, icon, color}) => {
  return (
    <div className='w-[100%] h-40 bg-[#cddce3] rounded-xl shadow-md shadow-[#8e8e8e] flex justify-center items-center'>
        <div className='w-[90%] h-[85%] flex justify-evenly items-start flex-col'>
            <h2 className='text-lg sm:text-2xl flex justify-center items-center gap-1'><span className='p-2 rounded-md text-white' style={{backgroundColor: color}}>{icon}</span>{header}:</h2>
            <p className='text-2xl font-semibold'>{value}<span className='font-thin text-lg'>{header == 'Number of products' ? ' Product' : header == 'Products sold today' ? ' Product' : header == 'Today revenue' ? '$' :''}</span></p>
        </div>
    </div>
  )
}

export default Box
import React, { useEffect } from 'react'

const Delete = ({onClose, visible, onConfirm}) => {
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

    if(!visible) return null;
  return (
    <div className='w-[100%] h-[100%] fixed  inset-0 bg-black bg-opacity-30 backdrop-blur-sm  flex justify-center items-center z-50'>
        <div className='w-[35%] h-[25%] bg-white rounded-2xl p-5 flex justify-evenly items-center flex-col'>
            <h2 className='text-2xl'>Are you sure to delete?</h2>
            <div className='w-[90%] h-[40%] flex justify-between items-center'>
                <button className='w-[40%] h-[75%] text-xl text-[#0694be] hover:text-[#0693be83] border-2 border-[#0694be] hover:border-[#0693be83] transition ease-in-out delay-75 rounded-xl' onClick={()=>onClose()}>Cancel</button>
                <button className='w-[40%] h-[75%] rounded-xl text-white text-xl bg-[#0694be]  hover:bg-[#0693be83] transition ease-in-out delay-75' onClick={()=>onConfirm()}>Delete</button>
            </div> 
        </div>
    </div>
  )
}

export default Delete
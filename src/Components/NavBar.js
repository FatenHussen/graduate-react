//TODO 
//1- Fixing Hover
//2- search Functionality
//3- Add Cart Button
//4- Notifications
  
import React from "react";
import { Link } from "react-router-dom";
import { BsSearch, BsPersonFill, BsArrowBarLeft } from "react-icons/bs";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const NavBar = () => {
  const token = true;

  return (
    <div className="w-full h-16 bg-[#0B74FA] text-white flex justify-evenly items-center absolute z-50">
      <h1 className="text-4xl font-thin">Elegance Hub</h1>
      <div className="w-[35%] h-16 flex justify-center items-center relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-[100%] h-10 p-2 rounded-lg"
        />
        <Link
          to="/search"
          className="cursor-pointer w-14 h-10 rounded-lg text-lg bg-[#F7B217] text-white hover:bg-[#f7b417bd] transition ease-in-out delay-50 flex justify-center items-center absolute right-0"
        >
          <BsSearch />
        </Link>
      </div>
      <div className="w-[30%] h-10  flex justify-center items-center gap-4">
        {token ? (
          <>
          <Link
            to="/profile"
            className="w-[50%] h-[100%] rounded-xl bg-[#ffffff7d] hover:bg-[#ffffff99] text-white transition ease-in-out delay-50 px-2.5 flex justify-between items-center no-underline"
          >
            <BsPersonFill size={24} />
            <p className="mt-3">Abdallah Zaghloul</p>
          </Link>
          <Link
          data-tooltip-id="logout"
          data-tooltip-content="Logout"
          data-tooltip-place="bottom" 
           to='/login'
           className='cursor-pointer no-underline w-10 h-10  rounded-full flex justify-center items-center bg-[#ffffff7d] hover:bg-[#ffffff99] text-white transition ease-in-out delay-50'>
          <BsArrowBarLeft size={23}/>
           </Link>
          </>
        ) : (
          <>
            <button className="w-[30%] h-[100%] border border-white hover:bg-[#ffffff52] transition ease-in-out delay-50 rounded-xl">
              Login
            </button>
            <button className="w-[30%] h-[100%] text-[#0B74FA] hover:bg-[#ffffff4e] transition ease-in-out delay-50 bg-white rounded-xl">
              Signup
            </button>
          </>
        )}
      </div>
      <Tooltip id="logout" 
    style={{ backgroundColor: "#338bfa", color: "#ffffff", borderRadius: '8px' }} opacity={1}/>
    </div>
  );
};

export default NavBar;

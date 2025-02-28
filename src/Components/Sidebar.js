import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillGrid1X2Fill , BsCart4 , BsTagFill, BsList, BsArrowBarRight, BsBoxSeamFill } from "react-icons/bs";

const SideBar = ({ page }) => {
  let nav = useNavigate();


  const [isOpen, setIsopen] = useState(false);
  let button = page ? page : 'dashboard'
  const [burger,setBurger] = useState(false)
  const navItems = [
    {link: 'Dashboard', path: "/dashboard" , icon:<BsFillGrid1X2Fill  size={23}/>},
    {link: 'Products', path: '/products', icon:<BsTagFill     size={23}/>},
    {link: 'Orders' , path: "/orders" , icon:<BsCart4   size={23}/>},
  {link: 'Inventory' ,path: "/inventory" , icon:<BsBoxSeamFill   size={25}/>},
    
  ]

  console.log('button',button)

  return (
    <>
    <div
      className={`h-screen shadow-lg shadow-slate-700 pt-10 hidden z-50 md:flex justify-center items-center bg-white fixed top-0 right-0 ${
        isOpen ? "w-52" : "w-16"
      } `}
      onMouseEnter={() => setIsopen(true)}
      onMouseLeave={() => setIsopen(false)}
    >
      <div className="h-[100%] w-[100%]">
        <div className="h-[20%] w-[100%]">
          <h2
            className={`text-center text-xl text-[#0693be] block ${
              isOpen ? "block" : "hidden"
            }`}
          >
             Logo
          </h2>
        </div>
        <div className="w-[100%] h-[60%]">
          <div className="flex flex-col justify-center items-center gap-3">
            {navItems.map(({ link, id, path, icon }) => (
              <Link
              to={path}
                key={id}
                id={path}
                className={`h-12 flex justify-end flex-row-reverse items-center  w-[95%] cursor-pointer rounded-xl ${
                  page == path || button == path 
                    ? `bg-[#0693be] text-white ${isOpen ? "" : "bg-[#0693be]"}`
                    : `hover:bg-[#bad2df] transition ease-in-out delay-50 text-[#0693be] ${
                        isOpen ? "border-2 border-[#0693be]" : ""
                      }`
                }`}
                // onClick={() => {
                //   setButton(path);
                // }}
              >
                <h2
                  className={`${
                    isOpen ? "block" : "hidden"
                  } text-right text-sm`}
                >
                  {link}
                </h2>
                <h2 className={`${isOpen ? "px-1 " : 'pl-[19px]'}`}>{icon}</h2>
              </Link>
            ))}
          </div>
        </div>
        <div className="h-[20%] flex justify-center items-center gap-[5%] flex-col">
        {/* <select className='bg-transparent text-[#3bb1dc] border-2 border-[#3bb1dc] rounded-lg w-[95%] h-[40%] outline-none' value={lng} onChange={(e)=>{changeLanguage(e.target.value)}} disabled={!isOpen}>
            <option value='en' className={`text-[#3bb1dc] bg-white`}>{isOpen ? 'English' : "EN"}</option>
            <option value='ar' className='text-[#3bb1dc] bg-white'>{isOpen ? 'العربية' : "ع"}</option>
          </select> */}
          <button
            className={`w-[95%] h-[40%] rounded-xl flex justify-end flex-row-reverse items-center bg-gradient-to-b from-[#E45E47] to-[#EB996E] bg-black`}
            onClick={() => {
              nav("/");
            }}
          >
            {isOpen ? (
              <p className="text-white text-center w-[70%]">logout</p>
            ) : (
              ""
            )}
            <BsArrowBarRight
              size={25}
              color="white"
              className={`${isOpen ?  'ml-4' : 'ml-4'}`}
            />
          </button>
        </div>
      </div>
    </div>



    {/*
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    !!!!!!!!!!!    SMALL SCREENS    !!!!!!!!!
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    */}

{burger ? <div
      className={`h-screen w-52 shadow-lg shadow-slate-700 pt-10 z-20 md:hidden justify-center items-center bg-white fixed right-0 ${
       burger ? "flex" : 'hidden'
      } `}
    >
      <div className="h-[100%] w-[100%]">
        <div className="w-[100%] flex justify-end">
      <p className="text-xl text-[#44AEC3]  cursor-pointer mr-7 -mt-5" onClick={()=>setBurger(false)}>X</p>
      </div>
        <div className="h-[20%] w-[100%]">
          <h2
            className={`text-center text-xl text-[#44AEC3] block ${
              burger ? "block" : "hidden"
            }`}
          >
            اسم العيادة + اللوغو{" "}
          </h2>
        </div>
        <div className="w-[100%] h-[60%]">
          <div className="flex flex-col justify-center items-center gap-3">
            {navItems.map(({ link, id, path, icon }) => (
              <Link
              to={path}
                key={id}
                id={path}
                className={`h-12 flex justify-end flex-row-reverse items-center  w-[95%] cursor-pointer rounded-xl ${
                  button == path
                    ? `bg-[#44AEC3] text-white ${isOpen ? "" : "bg-[#44AEC3]"}`
                    : `hover:bg-cyan-100 text-[#44AEC3] ${
                        burger ? "border-2 border-[#44AEC3]" : ""
                      }`
                }`}
                // onClick={() => {
                //   setBurger(false)
                // }}
              >
                <h2
                  className={`${
                    burger ? "block" : "hidden"
                  } text-right text-sm`}
                >
                 {link}
                </h2>
                <h2 className={`${burger ? "px-1 " : "pr-[19px]"}`}>{icon}</h2>
              </Link>
            ))}
          </div>
        </div>
        <div className="h-[20%] flex justify-center items-center gap-[5%] flex-col">
        {/* <select className='bg-transparent text-[#3bb1dc] border-2 border-[#3bb1dc] rounded-lg w-[95%] h-[40%] outline-none' value={lng} onChange={(e)=>{changeLanguage(e.target.value)}}>
            <option value='en' className={`text-[#3bb1dc] bg-white`}>{isOpen ? 'English' : "EN"}</option>
            <option value='ar' className='text-[#3bb1dc] bg-white'>{isOpen ? 'العربية' : "ع"}</option>
          </select> */}
          <button
            className={`w-[95%] h-[40%] rounded-xl flex flex-row-reverse items-center bg-gradient-to-b from-[#E45E47] to-[#EB996E] bg-black`}
            onClick={() => {
              nav("/");
            }}
          >
            {burger ? (
              <p className="text-white text-center w-[70%]">logout</p>
            ) : (
              ""
            )}
            <BsArrowBarRight
              size={25}
              color="white"
              className={`${isOpen ?  'ml-4' : "ml-4"}`}
            />
          </button>
        </div>
      </div>
    </div> : <div className="w-full md:hidden shadow-lg shadow-slate-700 z-20 h-16 bg-white flex justify-between items-center px-5">
      <p className="w-[50%] sm:text-xl text-sm text-[#44AEC3]"> Logo</p>
      <div className="w-[50%] flex justify-end ">
      <BsList
              size={25}
              color="#44AEC3"
              onClick={()=>setBurger(true)}
            />
      </div>
      </div>}
    </>
  );
};

export default SideBar;

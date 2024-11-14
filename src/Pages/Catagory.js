//TODO
//1- json 

import React, { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';
import CardCatagory from '../Components/CardCatagory';
import CardCatagoryLeft from '../Components/CardCatagoryRight';
import Background from '../Components/Background'; // Import the Background component

import logo from '../Assets/finalLogo2.png';
import img from '../Assets/still-life-care-products.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import NavBar3 from '../Components/NavBar3';

const Catagory = () => {
  const navigate = useNavigate()
  const data = [
    {
      img: img,
      name: "First Slide Label",
      paragraph: "Some representative placeholder content for the first slide.",
    },
    {
      img: logo,
      name: "Second Slide Label",
      paragraph: "Some representative placeholder content for the second slide.",
    },
    {
      img: img,
      name: "Third Slide Label",
      paragraph: "Some representative placeholder content for the third slide.",
    },
  ];
  const [catagory, setCatagory] = useState('')

  const CatagoriesURLAPI=`http://127.0.0.1:8000/api/admin/categories`
  async function catagories(){
    console.log('ssss')
       try{
        const response = await axios.get(CatagoriesURLAPI, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*"
          }
        });
        console.log('pp',response.data.data)
        setCatagory(response.data.data)

      }catch(err){
          console.log(err)
      }
  }

  useEffect(() => {
    catagories()
  }, []);

  return (
    <div className="relative w-full min-h-screen h-fit">
      <Background /> {/* Add the Background component */}
      <div className="absolute inset-0 backdrop-blur-md z-5"></div>
      <div className="relative z-10 w-full min-h-screen h-fit bg-transparent flex items-center flex-col">
        <div className="w-[100%] h-32 relative">
          <NavBar />
        </div>
        <div className="w-[95%] min-h-[83%] h-fit flex justify-evenly items-center flex-col gap-3 mb-5">
          {catagory.length ? catagory.map((item, index) => (
            <div key={index} className={`w-[100%] flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center`}>
              {index % 2 === 0 ? (
                <CardCatagory img={item.images} name={item.name} describe={item.description} />
              ) : (
                <CardCatagoryLeft img={item.images} name={item.name} describe={item.description} />
              )}
            </div>
          )) : ''}
        </div>
      </div>
    </div>
  );
};

export default Catagory;

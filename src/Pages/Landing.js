import React from 'react';

import NavBar from '../Components/NavBar';

import { CCarousel, CCarouselItem, CImage,CCarouselCaption } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

import logo from '../Assets/finalLogo2.png';
import img from '../Assets/still-life-care-products.jpg'

const Landing = () => {
  const data = [
    {
      img: img,
      name: "First Slide Label",
      paragraph: "Some representative placeholder content for the first slide."
    },
    {
      img: logo,
      name: "Second Slide Label",
      paragraph: "Some representative placeholder content for the second slide."
    },
    {
      img: img,
      name: "Third Slide Label",
      paragraph: "Some representative placeholder content for the third slide."
    }
  ]
  
  return (
    <div className="relative w-screen h-screen">
    <NavBar />
    <CCarousel controls indicators dark>
      {data.map((slide, index) => (
        <CCarouselItem key={index}>
          <CImage className="d-block w-100 max-h-screen" src={slide.img} alt={`slide ${index + 1}`} />
          <CCarouselCaption className="d-none d-md-block absolute top-[40%] text-4xl">
            <p className=''>{slide.name}</p>
            <p>{slide.paragraph}</p>
            <a href='/catagory' className='px-28 py-3 bg-[#0B74FA] no-underline text-white text-base rounded-lg'>Explore</a>
          </CCarouselCaption>
        </CCarouselItem>
      ))}
    </CCarousel>
  </div>
  )
}

export default Landing
import React from 'react';

import NavBar from '../Components/NavBar';

import { CCarousel, CCarouselItem, CImage,CCarouselCaption } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

import img from '../Assets/modern-beauty-products-different-recipients-assortment.jpg'
import img1 from '../Assets/beautiful-young-woman-applying-body-lotion-after-shower.jpg'
import img2 from '../Assets/freepik-export-20241114190825Vzdb.jpeg'



const Landing = () => {
  const data = [
    {
        img: img,
        name: "Radiant Glow",
        paragraph: "Discover our new skincare range for a flawless, healthy glow."
    },
    {
        img: img1,
        name: "Revitalizing Care",
        paragraph: "Nourish your skin with our revitalizing beauty treatments."
    },
    {
        img: img2,
        name: "Natural Wellness",
        paragraph: "Experience the perfect blend of nature and science for optimal health."
    }
];

  
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
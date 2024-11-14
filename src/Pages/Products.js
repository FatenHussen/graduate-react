//TODO
//2- Navigate to specific product (DONE)

import React from 'react'
import Card from '../Components/Card'
import NavBar from '../Components/NavBar'

const Products = () => {
  const products = [
    {
        "id": 1,
        "name": "Hydrating Face Cream",
        "company": "GlowCare",
        "price": 24.99,
        "rate": 4.5
    },
    {
        "id": 2,
        "name": "Natural Lip Balm",
        "company": "EcoBeauty",
        "price": 5.99,
        "rate": 4.2
    },
    {
        "id": 3,
        "name": "Revitalizing Shampoo",
        "company": "PureLocks",
        "price": 14.49,
        "rate": 4.7
    },
    {
        "id": 4,
        "name": "Herbal Body Lotion",
        "company": "Nature's Touch",
        "price": 12.99,
        "rate": 4.4
    },
    {
        "id": 5,
        "name": "Anti-Aging Serum",
        "company": "YouthGuard",
        "price": 29.99,
        "rate": 4.8
    },
    {
        "id": 6,
        "name": "Hydrating Face Cream",
        "company": "GlowCare",
        "price": 24.99,
        "rate": 4.5
    },
    {
        "id": 7,
        "name": "Natural Lip Balm",
        "company": "EcoBeauty",
        "price": 5.99,
        "rate": 4.2
    },
    {
        "id": 8,
        "name": "Revitalizing Shampoo",
        "company": "PureLocks",
        "price": 14.49,
        "rate": 4.7
    },
    {
        "id": 9,
        "name": "Herbal Body Lotion",
        "company": "Nature's Touch",
        "price": 12.99,
        "rate": 4.4
    },
    {
        "id": 10,
        "name": "Anti-Aging Serum",
        "company": "YouthGuard",
        "price": 29.99,
        "rate": 4.8
    },
    {
        "id": 11,
        "name": "Hydrating Face Cream",
        "company": "GlowCare",
        "price": 24.99,
        "rate": 4.5
    },
    {
        "id": 12,
        "name": "Natural Lip Balm",
        "company": "EcoBeauty",
        "price": 5.99,
        "rate": 4.2
    },
    {
        "id": 13,
        "name": "Revitalizing Shampoo",
        "company": "PureLocks",
        "price": 14.49,
        "rate": 4.7
    },
    {
        "id": 14,
        "name": "Herbal Body Lotion",
        "company": "Nature's Touch",
        "price": 12.99,
        "rate": 4.4
    },
    {
        "id": 15,
        "name": "Anti-Aging Serum",
        "company": "YouthGuard",
        "price": 29.99,
        "rate": 4.8
    }    
];

  
  return (
    <div className=' w-full min-h-screen h-fit bg-white flex items-center flex-col'>
        <div className='w-[100%] h-32 relative'>
        <NavBar/>
        </div>
        <div className='w-[100%] min-h-[82.3vh] h-fit grid grid-cols-4 gap-5 items-center place-items-center'>
        {products.map((item, index) => (
          <Card id={item.id} name={item.name} price={item.price} company={item.company} rate={item.rate} />
        ))}
        </div>
    </div> 
  )
}

export default Products
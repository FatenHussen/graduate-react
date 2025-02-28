import React, { useState } from 'react'
import SideBar from '../Components/Sidebar'
import { BsBoxSeam , BsCartCheck, BsCurrencyDollar  } from "react-icons/bs"
import Box from '../Components/Dashboard/Box'
import RevenueChart from '../Components/Dashboard/RevenueChart';
import TopCatagory from '../Components/Dashboard/TopCatagory';
import TopProducts from '../Components/Dashboard/TopProducts';

const Dashboard = () => {

    const data = {
        "daily": {
          "january": [220, 450, 300, 600, 800, 400, 550, 0, 0, 220, 380, 420, 600, 720, 680, 550, 480, 620, 710, 800, 850, 920, 780, 650, 580, 620, 700, 750, 820, 880, 910],
          "february": [180, 420, 350, 580, 750, 380, 520, 220, 300, 450, 600, 680, 720, 650, 580, 620, 700, 750, 820, 880, 910, 850, 780, 720, 680, 620, 580, 520],
          "march": [240, 480, 320, 620, 820, 420, 570, 250, 320, 480, 650, 720, 780, 850, 920, 880, 820, 750, 680, 620, 580, 650, 720, 780, 850, 920, 980, 1050, 1120, 1180, 1250],
          "april": [260, 500, 350, 650, 850, 450, 600, 280, 350, 500, 680, 750, 820, 880, 950, 920, 880, 820, 780, 720, 680, 750, 820, 880, 950, 1020, 1080, 1150, 1220, 1280],
          "may": [280, 520, 380, 680, 880, 480, 630, 300, 380, 550, 720, 780, 850, 920, 980, 950, 920, 880, 820, 780, 720, 780, 850, 920, 980, 1050, 1120, 1180, 1250, 1320, 1380],
          "june": [300, 550, 400, 700, 900, 500, 650, 320, 400, 600, 750, 820, 880, 950, 1020, 980, 950, 920, 880, 820, 780, 820, 880, 950, 1020, 1080, 1150, 1220, 1280, 1350],
          "july": [320, 580, 420, 720, 920, 520, 680, 350, 420, 650, 780, 850, 920, 980, 1050, 1020, 980, 950, 920, 880, 820, 880, 920, 980, 1050, 1120, 1180, 1250, 1320, 1380, 1450],
          "august": [340, 600, 450, 750, 950, 550, 700, 380, 450, 680, 820, 880, 950, 1020, 1080, 1050, 1020, 980, 950, 920, 880, 920, 980, 1050, 1120, 1180, 1250, 1320, 1380, 1450, 1520],
          "september": [360, 620, 480, 780, 980, 580, 720, 400, 480, 700, 850, 920, 980, 1050, 1120, 1080, 1050, 1020, 980, 950, 920, 950, 1020, 1080, 1150, 1220, 1280, 1350, 1420, 1480],
          "october": [380, 650, 500, 800, 1000, 600, 750, 420, 500, 720, 880, 950, 1020, 1080, 1150, 1120, 1080, 1050, 1020, 980, 950, 980, 1050, 1120, 1180, 1250, 1320, 1380, 1450, 1520, 1580],
          "november": [400, 680, 520, 820, 1020, 620, 780, 450, 520, 750, 900, 980, 1050, 1120, 1180, 1150, 1120, 1080, 1050, 1020, 980, 1020, 1080, 1150, 1220, 1280, 1350, 1420, 1480, 1550],
          "december": [420, 700, 550, 850, 1050, 650, 800, 480, 550, 780, 920, 1000, 1080, 1150, 1220, 1180, 1150, 1120, 1080, 1050, 1020, 1050, 1120, 1180, 1250, 1320, 1380, 1450, 1520, 1580, 1650]
        },
        "weekly": {
          "january": [1500, 3200, 2800, 4100],
          "february": [1800, 3500, 3000, 4400],
          "march": [2200, 4200, 3800, 5200],
          "april": [2500, 4500, 4000, 5500],
          "may": [2800, 5000, 4500, 6000],
          "june": [3200, 5500, 5000, 6500],
          "july": [3500, 6000, 5500, 7000],
          "august": [3800, 6500, 6000, 7500],
          "september": [4200, 7000, 6500, 8000],
          "october": [4500, 7500, 7000, 8500],
          "november": [4800, 8000, 7500, 9000],
          "december": [5200, 8500, 8000, 9500]
        },
        "monthly": {
          "january": 22000,
          "february": 25000,
          "march": 32000,
          "april": 38000,
          "may": 45000,
          "june": 52000,
          "july": 60000,
          "august": 68000,
          "september": 75000,
          "october": 82000,
          "november": 90000,
          "december": 105000
        }
      };

    const pieData = {
        "categories": [
          { "name": "Antibiotics", "value": 35, "color": "#3b82f6" },
          { "name": "Pain Relievers", "value": 25, "color": "#10b981" },
          { "name": "Diabetic Care", "value": 15, "color": "#f59e0b" },
          { "name": "Surgical Supplies", "value": 12, "color": "#ef4444" },
          { "name": "PPE", "value": 8, "color": "#8b5cf6" },
          { "name": "Maternity Care", "value": 5, "color": "#ec4899" }
        ]
      }

      const productsData = {
        "products": [
          {
            "id": 1,
            "name": "Paracetamol 500mg",
            "category": "Pain Relievers",
            "monthlySales": 2540,
            "stock": 85,
            "isBestseller": true,
            "trend": "up"
          },
          {
            "id": 2,
            "name": "Metformin 850mg",
            "category": "Diabetic Care",
            "monthlySales": 1980,
            "stock": 42,
            "isBestseller": false,
            "trend": "up"
          },
          {
            "id": 3,
            "name": "Amoxicillin 500mg",
            "category": "Antibiotics",
            "monthlySales": 1675,
            "stock": 28,
            "isBestseller": true,
            "trend": "down"
          },
          {
            "id": 4,
            "name": "Vitamin C 1000mg",
            "category": "Supplements",
            "monthlySales": 1420,
            "stock": 91,
            "isBestseller": false,
            "trend": "up"
          },
          {
            "id": 5,
            "name": "N95 Mask",
            "category": "PPE",
            "monthlySales": 3250,
            "stock": 15,
            "isBestseller": true,
            "trend": "up"
          }
        ]
      }

      

  return (
    <div className='w-full h-fit flex justify-between items-center flex-col'>
        <SideBar/>
            <div className='w-[95%] pb-1 border-b-2 border-[#0693be] text-[#0693be] mb-5'>
                <h1 className='w-[90%] text-2xl sm:text-4xl font-semibold'>Dashboard</h1>
                <h2 className='w-[90%] text-base sm:text-xl font-thin'>Welcome to Elegance Hub</h2>
            </div>
            <div className='w-full h-fit md:flex justify-evenly items-center'>
        <div className='w-[100%] md:w-[68%] h-fit flex justify-center items-center flex-col gap-7'>
            <div className='w-[95%] h-fit flex justify-between items-center flex-col md:flex-row gap-3 md:gap-0'>
                <Box header={'Number of products'} value={3000} icon={<BsBoxSeam/>} color={'#3b82f6'}/>
                <Box header={'Products sold today'} value={300} icon={<BsCartCheck/>} color={'#22c55e'}/>
                <Box header={'Today revenue'} value={1500} icon={<BsCurrencyDollar/>} color={'#a855f7'}/>
            </div>
            <div className="w-[95%] h-fit hidden sm:block">
                <RevenueChart data={data}/>
            </div>
        </div>
        <div className='w-[95%] md:w-[27%] h-fit mx-auto md:ml-0 md:mr-[5%] my-5 md:my-0'>
            <TopCatagory data={pieData}/>
            <TopProducts data={productsData}/>

        </div>
        </div>
   </div>
  )
}

export default Dashboard
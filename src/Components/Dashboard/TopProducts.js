import React from 'react'
import { 
    BsCapsule, 
    BsArrowUp, 
    BsArrowDown, 
    BsStarFill, 
    BsCapsulePill, 
    BsMask 
  } from "react-icons/bs";

const TopProducts = ({data}) => {
    const getCategoryIcon = (category) => {
        switch(category) {
          case 'Pain Relievers': 
            return <BsCapsulePill className="text-red-500 text-lg" />;
          case 'Diabetic Care': 
            return <BsCapsule className="text-blue-500 text-lg" />;
          case 'Antibiotics': 
            return <BsCapsule className="text-purple-500 text-lg" />;
          case 'PPE': 
            return <BsMask className="text-green-500 text-lg" />;
          default: 
            return <BsCapsule className="text-gray-500 text-lg" />;
        }
      };
  return (
    <div className="p-3 bg-[#cddce3] rounded-xl shadow-md shadow-[#8e8e8e]">
      <h3 className="text-lg font-semibold mb-2 text-gray-700">Top Selling Products</h3>
      <div className="space-y-2 h-[300px] overflow-y-scroll scrollbar-thin scrollbar-track-[#e2eaed] scrollbar-thumb-[#0693be]">
        {data.products.map((product) => (
          <div 
            key={product.id}
            className="p-2 border rounded-lg hover:bg-[#e2eaed] transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                {getCategoryIcon(product.category)}
                <div>
                  <h4 className="font-medium text-gray-900">{product.name}</h4>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
                {product.isBestseller && (
                  <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full flex items-center gap-1">
                    <BsStarFill className="text-yellow-500" /> Bestseller
                  </span>
                )}
              </div>
              <span className={`flex items-center gap-1 ${product.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {product.trend === 'up' ? <BsArrowUp /> : <BsArrowDown />}
                ${product.monthlySales.toLocaleString()}
              </span>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Stock</span>
              <div className="w-1/2 flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${product.stock > 50 ? 'bg-green-500' : product.stock > 20 ? 'bg-yellow-500' : 'bg-red-500'}`}
                    style={{ width: `${product.stock}%` }}
                  />
                </div>
                <span className="text-gray-600">{product.stock}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopProducts
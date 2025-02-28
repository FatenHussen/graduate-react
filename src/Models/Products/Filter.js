import React from 'react'
import { BsX } from 'react-icons/bs';

const Filter = ({ 
    isOpen, 
    onClose, 
    priceRange, 
    setPriceRange,
    selectedRating,
    setSelectedRating,
    categories,
    selectedCategories,
    setSelectedCategories ,
    visible
  }) => {
  if(!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 relative">
        <button 
    
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <BsX size={24} />
        </button>
        
        <h2 className="text-2xl font-bold mb-4 text-[#0693be]">Filters</h2>
        
        {/* Price Range Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Price Range</label>
          <div className="flex items-center gap-2">
            <span>${priceRange[0]}</span>
            <input
              type="range"
              min="0"
              max="100"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([e.target.value, priceRange[1]])}
              className="w-full"
            />
            <span>${priceRange[1]}</span>
          </div>

        </div>
        

        {/* Rating Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Minimum Rating</label>
          <div className="flex gap-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <button
                key={rating}
                onClick={() => setSelectedRating(rating === selectedRating ? 0 : rating)}
                className={`px-3 py-1 rounded-full ${
                  selectedRating >= rating 
                    ? 'bg-[#0693be] text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {rating}+
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Categories</label>
          <select
            multiple
            value={selectedCategories}
            onChange={(e) => setSelectedCategories([...e.target.selectedOptions].map(o => o.value))}
            className="w-full border rounded p-2 h-32"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <button
          onClick={()=>onClose()}
          className="w-full bg-[#0693be] text-white py-2 rounded hover:bg-[#0693be90]"
        >
          Apply Filters
        </button>
      </div>
    </div>
  )
}

export default Filter
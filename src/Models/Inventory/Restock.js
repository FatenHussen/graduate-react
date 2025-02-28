import React, { useEffect, useState } from 'react';
import { BsX } from 'react-icons/bs';

const Restock = ({ product, onClose, visible }) => {
    const [formData, setFormData] = useState({
        quantity: '',
        supplier: '',
        deliveryDate: ''
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('done')
        // onSubmit({
        //   ...formData,
        //   productId: product.productId,
        //   productName: product.productName
        // });
      };

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
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md animate-fade-in">
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-xl font-bold text-gray-800">Restock Order</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <BsX className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product
            </label>
            <p className="text-gray-900 font-medium">{product.productName}</p>
            <p className="text-sm text-gray-500 mt-1">
              Current Stock: {product.currentStock}/{product.minStock}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity Needed
            </label>
            <input
              type="number"
              name="quantity"
              min="1"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter quantity"
              value={formData.quantity}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Supplier
            </label>
            <select
        name="supplier"
        required
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={formData.supplier}
        onChange={handleInputChange}
      >
        <option value="">Choose a supplier</option>
        {/* Add optional chaining */}
        {product?.suppliers?.map((supplier) => (
          <option key={supplier} value={supplier}>
            {supplier}
          </option>
        ))}
      </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Delivery Date
            </label>
            <input
              type="date"
              name="deliveryDate"
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.deliveryDate}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors border"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-[#0693be] text-white hover:bg-[#0693be90] rounded-lg transition-colors"
            >
              Confirm Order
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Restock
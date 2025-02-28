import React, { useState } from 'react'
import { BsExclamationTriangle, BsBoxSeam, BsArrowRight } from 'react-icons/bs';
import Restock from '../../Models/Inventory/Restock';


const RestockComponent = ({data}) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

      const getPriorityStyle = (priority) => {
        const styles = {
          high: 'bg-[#e2eaed] border-red-300',
          medium: 'bg-[#e2eaed] border-orange-300',
          low: 'bg-[#e2eaed] border-yellow-300'
        };
        return styles[priority] || styles.low;
      };

  return (
  <div className="bg-[#cddce3] rounded-xl shadow-lg p-6 mb-8 border-l-4 border-[#0693be]">
      <div className="flex items-center mb-6 gap-3">
      <BsExclamationTriangle size={28} color='#0693be' />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Restock Alerts</h2>
          <p className="text-sm text-gray-500 mt-1">
            {data.restockAlerts.length} items requiring immediate attention
          </p>
        </div>
      </div>

      <div className="h-80 grid grid-cols-1 lg:grid-cols-2 grid-flow-row auto-rows-min gap-4 overflow-y-scroll pb-4 scrollbar-thin scrollbar-thumb-[#0693be] scrollbar-track-[#e2eaed]">
        {data.restockAlerts.map((product) => (
          <div
            key={product.productId}
            onClick={() => {
              setSelectedProduct(product);
              setShowModal(true);
            }}
            className={`${getPriorityStyle(product.priority)} p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md min-w-[200px]`}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.productName}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Last ordered: {product.lastOrderDate}
                </p>
              </div>
              <BsArrowRight className="text-gray-400 mt-1 shrink-0" />
            </div>

            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-700">
                Stock Level
              </span>
              <span className={`px-2 py-1 rounded-full text-sm ${
                product.currentStock < product.minStock 
                  ? 'bg-red-100 text-red-800'
                  : 'bg-green-100 text-green-800'
              }`}>
                {product.currentStock}/{product.minStock}
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  product.priority === 'high' ? 'bg-red-500' : 'bg-orange-400'
                }`}
                style={{
                  width: `${Math.min(
                    (product.currentStock / product.minStock) * 100,
                    100
                  )}%`
                }}
              />
            </div>
          </div>
        ))}
      </div>

      { selectedProduct && (
        <Restock
          visible={showModal}
          product={selectedProduct}
          onClose={() => setShowModal(false)}
          // onSubmit={handleRestockSubmit}
        />
      )}
    </div>
  )
}

export default RestockComponent
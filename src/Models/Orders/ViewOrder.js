import React, { useEffect } from 'react'
import { BsX, BsClockHistory, BsXCircle, BsCheckCircle } from 'react-icons/bs';

const ViewOrder = ({ order, onClose, visible }) => {
    const getStatusIcon = () => {
        switch(order.status) {
          case 'delivered':
            return <BsCheckCircle className="text-green-500 mr-2" />;
          case 'canceled':
            return <BsXCircle className="text-red-500 mr-2" />;
          default:
            return <BsClockHistory className="text-yellow-500 mr-2" />;
        }
      };

      const formatDate = (dateString) => {
        const options = { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        };
        return new Date(dateString).toLocaleDateString(undefined, options);
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl shadow-lg w-full  max-w-2xl">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-semibold flex items-center">
              {getStatusIcon()}
              Order #{order.id}
            </h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <BsX size={30} />
            </button>
          </div>
  
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Customer Information</h3>
                <dl className="space-y-2">
                  <div>
                    <dt className="text-sm text-gray-500">Name</dt>
                    <dd className="font-medium">{order.customer.name}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Email</dt>
                    <dd className="font-medium">{order.customer.email}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Phone</dt>
                    <dd className="font-medium">{order.customer.phone}</dd>
                  </div>
                </dl>
              </div>
  
              <div>
                <h3 className="text-lg font-medium mb-4">Order Summary</h3>
                <dl className="space-y-2">
                  <div>
                    <dt className="text-sm text-gray-500">Order Date</dt>
                    <dd className="font-medium">{formatDate(order.orderDate)}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Status</dt>
                    <dd className="font-medium capitalize">{order.status}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Payment Method</dt>
                    <dd className="font-medium">{order.paymentMethod}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Total Amount</dt>
                    <dd className="font-medium">${order.total.toFixed(2)}</dd>
                  </div>
                </dl>
              </div>
            </div>
  
            <div>
              <h3 className="text-lg font-medium mb-4">Order Items</h3>
              <div className="space-y-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.sku}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${item.price.toFixed(2)} × {item.quantity}</p>
                      <p className="text-sm text-gray-500">
                        Total: ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            <div>
              <h3 className="text-lg font-medium mb-4">Shipping Details</h3>
              <p className="bg-gray-50 p-4 rounded-lg">
                {order.shippingAddress}
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ViewOrder 
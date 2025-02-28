// TransactionHistory.jsx
import React, { useState } from 'react';
import { BsBoxArrowInDown, BsCartCheck, BsChevronDown } from 'react-icons/bs';

const TransactionHistory = ({ data }) => {
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const getStatusStyle = (status) => {
    switch(status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'canceled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-[#cddce3] shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <BsBoxArrowInDown color='#0693be' size={24} />
        Recent Transactions
      </h2>

      <div className="h-[600px] space-y-2 overflow-y-scroll pb-4 scrollbar-thin scrollbar-thumb-[#0693be] scrollbar-track-[#e2eaed]">
        {data.sort((a, b) => new Date(b.date) - new Date(a.date)).map((tx) => (
          <div 
            key={tx.id}
            className="border border-white rounded-lg overflow-hidden transition-all"
          >
            <div 
              className={`p-4 cursor-pointer hover:bg-gray-50 flex items-center justify-between ${
                selectedTransaction === tx.id ? 'bg-gray-50' : ''
              }`}
              onClick={() => setSelectedTransaction(
                selectedTransaction === tx.id ? null : tx.id
              )}
            >
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${
                  tx.type === 'purchase' ? 'bg-blue-100' : 'bg-green-100'
                }`}>
                  {tx.type === 'purchase' ? (
                    <BsCartCheck className="text-blue-500 text-xl" />
                  ) : (
                    <BsBoxArrowInDown className="text-green-500 text-xl" />
                  )}
                </div>

                <div>
                  <h3 className="font-medium">{tx.product}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(tx.date).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className={`px-2 py-1 rounded-full text-sm ${getStatusStyle(tx.status)}`}>
                  {tx.status}
                </span>
                <BsChevronDown className={`transform transition-transform ${
                  selectedTransaction === tx.id ? 'rotate-180' : ''
                }`} />
              </div>
            </div>

            {selectedTransaction === tx.id && (
              <div className="p-4 border-t bg-gray-50">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Transaction ID</p>
                    <p className="font-medium">{tx.id}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Quantity</p>
                    <p className="font-medium">{tx.quantity} units</p>
                  </div>
                  <div>
                    <p className="text-gray-500">
                      {tx.type === 'purchase' ? 'Supplier' : 'Recipient'}
                    </p>
                    <p className="font-medium">{tx.supplier}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">
                      {tx.type === 'purchase' ? 'Total Cost' : 'Estimated Delivery'}
                    </p>
                    <p className="font-medium">
                      {tx.type === 'purchase' 
                        ? `$${(tx.quantity * tx.pricePerUnit).toFixed(2)}`
                        : new Date(tx.expectedDelivery).toLocaleDateString()
                      }
                    </p>
                  </div>
                </div>

                {tx.type === 'purchase' && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">Price per Unit</p>
                    <p className="font-medium">${tx.pricePerUnit.toFixed(2)}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
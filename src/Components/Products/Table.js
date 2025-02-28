import React from 'react'

const Table = ({ products, setModalMode, setDelet, setSelectedProduct }) => {
  return (
    <table class="w-[100%] bg-[#bad2df] bg-opacity-75 rounded-t-3xl">
    <tr >
      <td class=" p-5 font-bold w-[25%] text-center border-b border-[#0693be]">Name</td>
      <td class=" font-bold w-[10%] text-center border-b border-[#0693be]">Price</td>
      <td class=" font-bold w-[25%] text-center border-b border-[#0693be]">Catagory</td>
      <td class=" font-bold w-[40%] text-center border-b border-[#0693be]">Action</td>
    </tr>
    {products.map((product) => (
        <tr key={product.id} className='hover:bg-[#0693be90]'>
          <td className="text-center py-4">{product.name}</td>
          <td className="text-center">${product.price.toFixed(2)}</td>
          <td className="text-center">{product.category}</td>
          <td className="text-center">
            <div className='flex justify-evenly items-center'>
              <button 
                className='bg-[#0693be] text-white py-2 px-4 rounded-full'
                onClick={() => {
                  setSelectedProduct(product);
                  setModalMode('view');
                }}
              >
                View
              </button>
              <button 
                className='bg-[#0693be] text-white py-2 px-4 rounded-full'
                onClick={() => {
                  setSelectedProduct(product);
                  setModalMode('edit');
                }}
              >
                Edit
              </button>
              <button 
                className='bg-[#0693be] text-white py-2 px-4 rounded-full'
                onClick={() => {
                  setSelectedProduct(product);
                  setDelet(true);
                }}
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      ))}
  </table>
  )
}

export default Table
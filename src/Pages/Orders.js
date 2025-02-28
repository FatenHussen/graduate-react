import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import SideBar from '../Components/Sidebar'
import ViewOrder from '../Models/Orders/ViewOrder';

const Orders = () => {
    const [view, setView] = useState(false)
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [employees, setEmployees] = useState({
  "orders": [
    {
      "id": "ORD-20231115-001",
      "customer": {
        "name": "John Smith",
        "email": "john@example.com",
        "phone": "+1 555-0102"
      },
      "orderDate": "2023-11-15T09:30:00",
      "status": "delivered",
      "items": [
        {
          "productId": "PHAR-045",
          "name": "Ibuprofen 200mg",
          "quantity": 5,
          "price": 8.99,
          "sku": "IBU-200-100"
        },
        {
          "productId": "SAFE-012",
          "name": "Medical Gloves",
          "quantity": 2,
          "price": 14.50,
          "sku": "GLOVES-L-50"
        }
      ],
      "total": 52.95,
      "paymentMethod": "Credit Card",
      "shippingAddress": "123 Main St, Healthcare City, HC 12345"
    },
    {
      "id": "ORD-20231114-002",
      "customer": {
        "name": "MediCare Clinic",
        "email": "pharmacy@medicare.com",
        "phone": "+1 555-6789"
      },
      "orderDate": "2023-11-14T14:45:00",
      "status": "processing",
      "items": [
        {
          "productId": "EQUIP-789",
          "name": "Digital Thermometer",
          "quantity": 10,
          "price": 24.99,
          "sku": "THERMO-DG-01"
        }
      ],
      "total": 249.90,
      "paymentMethod": "Bank Transfer",
      "shippingAddress": "456 Clinic Rd, Medical Park, MP 67890"
    },
    {
      "id": "ORD-20231115-003",
      "customer": {
        "name": "John Smith",
        "email": "john@example.com",
        "phone": "+1 555-0102"
      },
      "orderDate": "2023-11-15T09:30:00",
      "status": "delivered",
      "items": [
        {
          "productId": "PHAR-045",
          "name": "Ibuprofen 200mg",
          "quantity": 5,
          "price": 8.99,
          "sku": "IBU-200-100"
        },
        {
          "productId": "SAFE-012",
          "name": "Medical Gloves",
          "quantity": 2,
          "price": 14.50,
          "sku": "GLOVES-L-50"
        }
      ],
      "total": 52.95,
      "paymentMethod": "Credit Card",
      "shippingAddress": "123 Main St, Healthcare City, HC 12345"
    },
    {
      "id": "ORD-20231114-004",
      "customer": {
        "name": "MediCare Clinic",
        "email": "pharmacy@medicare.com",
        "phone": "+1 555-6789"
      },
      "orderDate": "2023-11-14T14:45:00",
      "status": "canceled",
      "items": [
        {
          "productId": "EQUIP-789",
          "name": "Digital Thermometer",
          "quantity": 10,
          "price": 24.99,
          "sku": "THERMO-DG-01"
        }
      ],
      "total": 249.90,
      "paymentMethod": "Bank Transfer",
      "shippingAddress": "456 Clinic Rd, Medical Park, MP 67890"
    },
    {
      "id": "ORD-20231115-005",
      "customer": {
        "name": "John Smith",
        "email": "john@example.com",
        "phone": "+1 555-0102"
      },
      "orderDate": "2023-11-15T09:30:00",
      "status": "delivered",
      "items": [
        {
          "productId": "PHAR-045",
          "name": "Ibuprofen 200mg",
          "quantity": 5,
          "price": 8.99,
          "sku": "IBU-200-100"
        },
        {
          "productId": "SAFE-012",
          "name": "Medical Gloves",
          "quantity": 2,
          "price": 14.50,
          "sku": "GLOVES-L-50"
        }
      ],
      "total": 52.95,
      "paymentMethod": "Credit Card",
      "shippingAddress": "123 Main St, Healthcare City, HC 12345"
    },
    {
      "id": "ORD-20231114-006",
      "customer": {
        "name": "MediCare Clinic",
        "email": "pharmacy@medicare.com",
        "phone": "+1 555-6789"
      },
      "orderDate": "2023-11-14T14:45:00",
      "status": "processing",
      "items": [
        {
          "productId": "EQUIP-789",
          "name": "Digital Thermometer",
          "quantity": 10,
          "price": 24.99,
          "sku": "THERMO-DG-01"
        }
      ],
      "total": 249.90,
      "paymentMethod": "Bank Transfer",
      "shippingAddress": "456 Clinic Rd, Medical Park, MP 67890"
    },
    {
      "id": "ORD-20231115-007",
      "customer": {
        "name": "John Smith",
        "email": "john@example.com",
        "phone": "+1 555-0102"
      },
      "orderDate": "2023-11-15T09:30:00",
      "status": "delivered",
      "items": [
        {
          "productId": "PHAR-045",
          "name": "Ibuprofen 200mg",
          "quantity": 5,
          "price": 8.99,
          "sku": "IBU-200-100"
        },
        {
          "productId": "SAFE-012",
          "name": "Medical Gloves",
          "quantity": 2,
          "price": 14.50,
          "sku": "GLOVES-L-50"
        }
      ],
      "total": 52.95,
      "paymentMethod": "Credit Card",
      "shippingAddress": "123 Main St, Healthcare City, HC 12345"
    },
    {
      "id": "ORD-20231114-008",
      "customer": {
        "name": "MediCare Clinic",
        "email": "pharmacy@medicare.com",
        "phone": "+1 555-6789"
      },
      "orderDate": "2023-11-14T14:45:00",
      "status": "canceled",
      "items": [
        {
          "productId": "EQUIP-789",
          "name": "Digital Thermometer",
          "quantity": 10,
          "price": 24.99,
          "sku": "THERMO-DG-01"
        }
      ],
      "total": 249.90,
      "paymentMethod": "Bank Transfer",
      "shippingAddress": "456 Clinic Rd, Medical Park, MP 67890"
    },
    {
      "id": "ORD-20231115-009",
      "customer": {
        "name": "John Smith",
        "email": "john@example.com",
        "phone": "+1 555-0102"
      },
      "orderDate": "2023-11-15T09:30:00",
      "status": "delivered",
      "items": [
        {
          "productId": "PHAR-045",
          "name": "Ibuprofen 200mg",
          "quantity": 5,
          "price": 8.99,
          "sku": "IBU-200-100"
        },
        {
          "productId": "SAFE-012",
          "name": "Medical Gloves",
          "quantity": 2,
          "price": 14.50,
          "sku": "GLOVES-L-50"
        }
      ],
      "total": 52.95,
      "paymentMethod": "Credit Card",
      "shippingAddress": "123 Main St, Healthcare City, HC 12345"
    },
    {
      "id": "ORD-20231114-010",
      "customer": {
        "name": "MediCare Clinic",
        "email": "pharmacy@medicare.com",
        "phone": "+1 555-6789"
      },
      "orderDate": "2023-11-14T14:45:00",
      "status": "processing",
      "items": [
        {
          "productId": "EQUIP-789",
          "name": "Digital Thermometer",
          "quantity": 10,
          "price": 24.99,
          "sku": "THERMO-DG-01"
        }
      ],
      "total": 249.90,
      "paymentMethod": "Bank Transfer",
      "shippingAddress": "456 Clinic Rd, Medical Park, MP 67890"
    },
    {
      "id": "ORD-20231115-011",
      "customer": {
        "name": "John Smith",
        "email": "john@example.com",
        "phone": "+1 555-0102"
      },
      "orderDate": "2023-11-15T09:30:00",
      "status": "delivered",
      "items": [
        {
          "productId": "PHAR-045",
          "name": "Ibuprofen 200mg",
          "quantity": 5,
          "price": 8.99,
          "sku": "IBU-200-100"
        },
        {
          "productId": "SAFE-012",
          "name": "Medical Gloves",
          "quantity": 2,
          "price": 14.50,
          "sku": "GLOVES-L-50"
        }
      ],
      "total": 52.95,
      "paymentMethod": "Credit Card",
      "shippingAddress": "123 Main St, Healthcare City, HC 12345"
    },
    {
      "id": "ORD-20231114-012",
      "customer": {
        "name": "MediCare Clinic",
        "email": "pharmacy@medicare.com",
        "phone": "+1 555-6789"
      },
      "orderDate": "2023-11-14T14:45:00",
      "status": "canceled",
      "items": [
        {
          "productId": "EQUIP-789",
          "name": "Digital Thermometer",
          "quantity": 10,
          "price": 24.99,
          "sku": "THERMO-DG-01"
        }
      ],
      "total": 249.90,
      "paymentMethod": "Bank Transfer",
      "shippingAddress": "456 Clinic Rd, Medical Park, MP 67890"
    },
    // Add 4 more orders following the same structure
  ]
}
      );

      console.log(selectedOrder)
  return (
    <div className='w-full h-fit flex justify-between items-center flex-col md:flex-row'>
        <SideBar/>
        <div className='w-[95%] min-h-screen h-fit flex justify-evenly items-center flex-col my-5 md:my-0'>
            <h1 className='w-[90%] pb-2 border-b-2 border-[#0693be] text-[#0693be] text-4xl font-semibold'>Orders</h1>
            <div className='w-[90%] h-20 flex justify-between items-center'>
                <div className='w-[100%] md:w-[50%] lg:w-[30%] h-14 flex md:justify-evenly md:items-center items-start'>
                                    <input type='text' placeholder='Search...' className='w-[50%] md:w-72 h-12 outline-none px-2 rounded-xl border-2 border-[#0693be]'/>
                                      <button className='w-12 h-12  bg-[#0693be] hover:bg-[#0693be90] transition ease-in-out delay-50 text-white rounded-full flex justify-center items-center'>
                                          <BsSearch size={20}/>
                                      </button>
                                  </div>
                {/* <button className='w-52 h-12 bg-[#0693be] hover:bg-[#0693be90] transition ease-in-out delay-50 text-white text-lg rounded-xl'>Add Prescription</button> */}
            </div>
            <div className='w-[90%] min-h-[500px] h-fit mb-3'>
            <table class="w-[100%] bg-[#bad2df] bg-opacity-75 rounded-t-3xl">
  <tr >
    <td class=" p-5 font-bold w-[25%] text-center border-b border-[#0693be]">ID</td>
    <td class=" font-bold w-[25%] text-center border-b border-[#0693be]">Date</td>
    <td class=" font-bold w-[25%] text-center border-b border-[#0693be]">Price</td>
    <td class=" font-bold w-[25%] text-center border-b border-[#0693be]">Status</td>
    {/* <td class=" font-bold md:w-[20%] w-[25%] text-center border-b border-[#0693be] hidden md:block">Action</td> */}
  </tr>
  {employees.orders.sort((a, b) => b.id - a.id).map((employee) => (
  <tr key={employee.id}  className='hover:bg-[#0693be90] cursor-pointer' onClick={()=>{setView(true); setSelectedOrder(employee)}}>
    <td class="text-center py-4">{employee.id}</td>
    <td class="text-center">{employee.orderDate}</td>
    <td class="text-center">{employee.total}</td>
    <td class={`text-center ${employee.status === 'delivered' ? 'text-green-500' : employee.status === 'processing' ? 'text-orange-500' : employee.status === 'canceled' ? 'text-red-500' : '' } font-semibold`}>{employee.status}</td>
    {/* <td class="text-center">
        <div className='flex justify-evenly items-center'>
        <button className='bg-[#0693be] text-white py-2 px-10 rounded-2xl hidden md:block' onClick={()=>setView(true)}>View</button>
        </div>
    </td> */}
  </tr>
      ))}
</table>
            </div>
        </div>
        <ViewOrder onClose={()=> {setView(false); setSelectedOrder(null)}} visible={view} order={selectedOrder}/>
    </div>
  )
}

export default Orders
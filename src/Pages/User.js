import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import SideBar from '../Components/Sidebar'
import AddUser from '../Models/AddUser';
import Delete from '../Models/Delete';

const User = () => {
  const [showModel, setShowModel] = useState(false)
  const [showModel1, setShowModel1] = useState(false)
  const [showModel2, setShowModel2] = useState(false)
  const [delet, setDelet] = useState(false)
  const [employees, setEmployees] = useState([
        {
          "name": "Alice Johnson",
          "identifier": "E1001",
          "role": "Software Engineer"
        },
        {
          "name": "Bob Smith",
          "identifier": "E1002",
          "role": "Project Manager"
        },
        {
          "name": "Catherine Lee",
          "identifier": "E1003",
          "role": "HR Specialist"
        },
        {
          "name": "David Brown",
          "identifier": "E1004",
          "role": "Quality Assurance Engineer"
        },
        {
          "name": "Ella Williams",
          "identifier": "E1005",
          "role": "UX Designer"
        },
        {
          "name": "Frank Thompson",
          "identifier": "E1006",
          "role": "Backend Developer"
        },
        {
          "name": "Grace Taylor",
          "identifier": "E1007",
          "role": "Marketing Specialist"
        },
        {
          "name": "Henry Wilson",
          "identifier": "E1008",
          "role": "DevOps Engineer"
        },
        {
          "name": "Isabella Martin",
          "identifier": "E1009",
          "role": "Data Scientist"
        },
        {
          "name": "Jack White",
          "identifier": "E1010",
          "role": "Business Analyst"
        }
      ]
      );
  return (
    <div className='w-full h-fit flex justify-between items-center'>
        <SideBar/>
        <div className='w-[95%] min-h-screen h-fit flex justify-evenly items-center flex-col'>
            <h1 className='w-[90%] pb-2 border-b-2 border-[#0693be] text-[#0693be] text-4xl font-semibold'>Users</h1>
            <div className='w-[90%] h-20 flex justify-between items-center'>
                <div className='w-[30%] h-14 flex justify-evenly items-center'>
                  <input type='text' placeholder='Search...' className='w-72 h-12 outline-none px-2 rounded-xl border-2 border-[#0693be]'/>
                    <button className='w-12 h-12  bg-[#0693be] hover:bg-[#0693be90] transition ease-in-out delay-50 text-white rounded-full flex justify-center items-center'>
                        <BsSearch size={20}/>
                    </button>
                </div>
                <button className='w-52 h-12 bg-[#0693be] hover:bg-[#0693be90] transition ease-in-out delay-50 text-white text-lg rounded-xl' onClick={() => setShowModel(true)}>Add user</button>
            </div>
            <div className='w-[90%] min-h-[500px] h-fit mb-3'>
            <table class="lg:w-[100%] w-screen bg-[#bad2df] bg-opacity-75 rounded-t-3xl">
  <tr >
    <td class=" p-5 font-bold w-[25%] text-center border-b border-[#0693be]">Name</td>
    <td class=" font-bold w-[10%] text-center border-b border-[#0693be]">Identifer</td>
    <td class=" font-bold w-[25%] text-center border-b border-[#0693be]">Role</td>
    <td class=" font-bold w-[40%] text-center border-b border-[#0693be]">Action</td>
  </tr>
  {employees.sort((a, b) => b.id - a.id).map((employee) => (
  <tr key={employee.id}  className='hover:bg-[#0693be90]'>
    <td class="text-center py-4">{employee.name}</td>
    <td class="text-center">{employee.identifier}</td>
    <td class="text-center">{employee.role}</td>
    <td class="text-center">
        <div className='flex justify-evenly items-center'>
        <button className='bg-[#0693be] text-white   py-2 px-4 rounded-full' onClick={()=>setShowModel1(true)}>View</button>
        <button className='bg-[#0693be] text-white   py-2 px-4 rounded-full' onClick={()=>setShowModel2(true)}>Edit</button>
        <button className='bg-[#0693be] text-white   py-2 px-4 rounded-full' onClick={()=>setDelet(true)}>Delete</button>
        </div>
    </td>
  </tr>
      ))}
</table>
            </div>
        </div>
        <AddUser onClose={()=>{setShowModel(false)}} visible={showModel} view={0} name={'Add User'}/>
        <AddUser onClose={()=>{setShowModel1(false)}} visible={showModel1} view={1}name={'View User'} />
        <AddUser onClose={()=>{setShowModel2(false)}} visible={showModel2} view={2} name={'Edit User'} />
        <Delete onClose={()=>{setDelet(false)}} visible={delet}/>
    </div>
  )
}

export default User
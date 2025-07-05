import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';
import addUserValidate from '../../validate/addUserValidation';

 const AddUser = () => {

  const navigate = useNavigate()
  const [error,setError] = useState(" ")
  const [addAlert,setAddAlert] = useState("hidden")
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    ph_no: '',
    role: ''
  });


  const handleSubmit = async () => {

      try 
      {
        const result = addUserValidate(userData.name,userData.email,userData.ph_no,userData.role)
        if(result)
        {
          setError(result)
        }
       else
        {
          setError(result)
          const response = await axios.post(`${import.meta.env.VITE_BackEnd_Origin}/api/user/add-user`,userData);
          if (response) {
            setAddAlert("block")
            setTimeout(()=>{
              navigate("/user/dashboard/all-users")
            },1500)
          }
        }
      }
         catch (error) {
          console.error("Error while adding users:", error);
        }
      
  };

  return (
    <div className="">
      <div className="w-full max-w-2xl bg-gray-100 rounded-[20px] shadow-lg p-10 mx-auto mt-10 border border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Add New User</h2>

          
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              value={userData.name}
              onChange={(x) => {setUserData({ ...userData, name: x.target.value })}}
              className="w-full bg-gray-200 px-4 py-2.5 mb-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              placeholder="john@example.com"
              value={userData.email}
              onChange={(x) => {setUserData({ ...userData, email: x.target.value })}}
              className="w-full bg-gray-200 px-4 mb-2 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <PhoneInput
              country={'us'}
              value={userData.phno}
              onChange={(value) => {setUserData({ ...userData, ph_no: value })}}
              containerClass="w-full"
              inputClass="!w-full !pl-14 !pr-4 !h-[42px] !rounded-md !border !border-gray-300 !text-black !bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 "
              buttonClass="!bg-gray-100 !border !border-gray-300 !rounded-l-md"
              dropdownClass="text-black"
            />
          </div>

         
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 mt-2">Role</label>
            <select
              value={userData.role}
              onChange={(x) => {setUserData({ ...userData, role: x.target.value })}}
              className="w-full bg-gray-200 px-4 mb-4  py-2.5 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
              <option value="Front End">Front End</option>
              <option value="Back End">Back End</option>
              <option value="Back End">Testing</option>
            </select>
          </div>

          {(error)?<p className=" text-center text-[red] mb-3">{error}</p> :<p className=" text-center text-[lime] mb-3">User Added Successfull </p>}


          <button
            type="submit"
            className="w-full py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all"
            onClick={handleSubmit}
          >
            Add User
          </button>

       <div
        role="alert"
        className={`flex alert alert-info text-[black] w-[300px] fixed bottom-0 right-0 me-5 mb-5 ${addAlert}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <span>Successfully user Added</span>
    </div>
      </div>
    </div>
  );
}

export default AddUser;

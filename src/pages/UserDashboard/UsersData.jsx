import React, { useEffect, useState } from 'react';
import axios from 'axios';
  import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  BriefcaseIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';

const UsersData = () => {
  const [users, setUsers] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BackEnd_Origin}/api/user/all-users`);

      if (response) {
        const usersData = response.data?.data || [];
        const sortedUsers = usersData.sort((a, b) => {
          return a.name.localeCompare(b.name)
        });
        setUsers(sortedUsers);
        setCheckedItems(Array(sortedUsers.length).fill(false)); 
      }
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    const selected = users.filter((_, idx) => checkedItems[idx]);
    setSelectedUsers(selected);
  }, [checkedItems, users]);

  const allChecked = users.length > 0 && checkedItems.every(Boolean);

  const toggleAll = () => {
    const newState = Array(users.length).fill(!allChecked);
    setCheckedItems(newState);
  };

  const toggleOne = (index) => {
    const updated = [...checkedItems];
    updated[index] = !updated[index];
    setCheckedItems(updated);
  };

  const handleSendMessages = () => {
    console.log("Selected users for messaging:", selectedUsers);
  };

  return (
    <div className="p-6  min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <UserIcon className="w-6 h-6 text-blue-600" />
          Users
        </h1>
        <button
          className="bg-lime-600 hover:bg-lime-700 text-white font-medium py-2 px-4 rounded transition duration-200"
          onClick={handleSendMessages}
        >
          Send Messages
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full bg-white border border-gray-200 text-sm">
          <thead className="bg-blue-100 text-blue-700">
            <tr>
              <th className="p-4 text-left">
                <input
                  type="checkbox"
                  className="hidden peer"
                  checked={allChecked}
                  onChange={toggleAll}
                  id="check-all"
                />
                <label
                  htmlFor="check-all"
                  className="w-5 h-5 inline-flex items-center justify-center bg-gray-100 border border-blue-400 rounded peer-checked:bg-lime-500 peer-checked:text-white cursor-pointer"
                >
                  {allChecked && <CheckIcon className="w-4 h-4" />}
                </label>
              </th>
              <th className="p-4 text-left">
                <div className="flex items-center gap-1">
                  <UserIcon className="w-4 h-4" />
                  Name
                </div>
              </th>
              <th className="p-4 text-left">
                <div className="flex items-center gap-1">
                  <EnvelopeIcon className="w-4 h-4" />
                  Email
                </div>
              </th>
              <th className="p-4 text-left">
                <div className="flex items-center gap-1">
                  <PhoneIcon className="w-4 h-4" />
                  Mobile Number
                </div>
              </th>
              <th className="p-4 text-left">
                <div className="flex items-center gap-1">
                  <BriefcaseIcon className="w-4 h-4" />
                  Role
                </div>
              </th>
            </tr>
          </thead>

          <tbody className="text-gray-700 divide-y divide-gray-300">
            {
            users.map((user, index) => (
              <tr
                key={index}
                className="hover:bg-gray-200 transition duration-150"
              >
                <td className="p-4">
                  <input
                    type="checkbox"
                    className="hidden peer"
                    id={`check-${index}`}
                    checked={checkedItems[index] || false}
                    onChange={() => toggleOne(index)}
                  />
                  <label
                    htmlFor={`check-${index}`}
                    className="w-5 h-5 inline-flex items-center justify-center bg-gray-100 border border-blue-400 rounded peer-checked:bg-lime-500 peer-checked:text-white cursor-pointer"
                  >
                    {checkedItems[index] && <CheckIcon className="w-4 h-4" />}
                  </label>
                </td>
                <td className="p-4 font-medium">{user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.ph_no}</td>
                <td className="p-4">{user.role}</td>
              </tr>
            ))
            }
          </tbody>
          <tfoot className="bg-blue-100 text-blue-700">
            <tr>
              <th className="p-4"></th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Mobile Number</th>
              <th className="p-4 text-left">Role</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>

  );
};

export default UsersData;

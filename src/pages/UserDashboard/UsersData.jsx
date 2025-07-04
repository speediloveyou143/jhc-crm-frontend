import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-[20px] font-bold m-5">Users</h1>
        <button className="btn m-5 text-[lime]" onClick={handleSendMessages}>
          Send Messages
        </button>
      </div>

      <div className="carousel carousel-vertical h-[625px] w-full overflow-x-auto">
        <table className="table w-full bg-[#E5E7EB]">
          <thead className="text-[blue]">
            <tr>
              <th>
                <input
                  type="checkbox"
                  className="checkbox text-[lime] border-[blue]"
                  checked={allChecked}
                  onChange={toggleAll}
                />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {
            users.map((user, index) => (
              <tr key={index}>
                <th>
                  <input
                    type="checkbox"
                    className="checkbox text-[lime] border-[blue]"
                    checked={checkedItems[index] || false}
                    onChange={() => toggleOne(index)}
                  />
                </th>
                <td className="font-bold">{user.name}</td>
                <td>{user.email}</td>
                <td>{user.ph_no}</td>
                <td>{user.role}</td>
              </tr>
            ))
            }
          </tbody>
          <tfoot className="text-[blue]">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Role</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default UsersData;

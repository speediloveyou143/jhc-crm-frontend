import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function UserDashBoard() {
  const selectedUsers = useSelector((state) => state.user.selectedUsers);

  const routes = [
    { path: "/user/dashboard/all-users", name: "Users" },
    { path: "/user/dashboard/users-group", name: "Users Group" },
    { path: "/user/dashboard/user-profile", name: "My Profile" },
  ];

  const handleSendMessages = () => {
    console.log("Selected users for messaging:", selectedUsers);
  };

  return (
    <div className="flex bg-[white]">
      <div className="w-[20%] bg-[#E9F6E6] h-[100vh]">
        <Link to="/">
          <button className="btn bg-gray-200 text-[black] text-[15px] m-5">back</button>
        </Link>
        {routes.map((route, index) => (
          <Link key={index} to={route.path}>
            <button className="btn w-full btn-info border-none p-5 my-2">{route.name}</button>
          </Link>
        ))}
      </div>

      <div className="w-[80%] bg-[#D1D3D7] h-[100vh]">
        <div className="flex justify-between items-center">
          <h1 className="text-[20px] font-bold m-5">Users</h1>
          <button className="btn m-5 text-[lime]" onClick={handleSendMessages}>
            Send Messages
          </button>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default UserDashBoard;

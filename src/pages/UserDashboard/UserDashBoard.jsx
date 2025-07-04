import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {HomeIcon,UsersIcon,Cog6ToothIcon,ChartBarIcon,ArrowLeftIcon,UserCircleIcon,UserPlusIcon,UserGroupIcon} from '@heroicons/react/20/solid';

function UserDashBoard() {
  const routes = [
    { path: "/user/dashboard/all-users", name: "Users" },
    { path: "/user/dashboard/users-group", name: "Users Group" },
    { path: "/user/dashboard/user-profile", name: "My Profile" },
    { path: "/user/dashboard/add-user", name: "Add New User" }
  ]

  const iconMap = {
    Users: <UsersIcon className="w-5 h-5 inline-block mr-2" />,
    "Users Group": <UserGroupIcon className="w-5 h-5 inline-block mr-2" />,
    "My Profile": <UserCircleIcon className="w-5 h-5 inline-block mr-2" />,
    "Add New User": <UserPlusIcon className="w-5 h-5 inline-block mr-2" />
  }

  return (
    <div className="flex bg-[white]">
      <div className="w-[20%] bg-[#E9F6E6] h-[100vh]">
        <Link to="/">
          <button className="btn bg-gray-200 text-[black] text-[15px] m-5">
            <ArrowLeftIcon className="w-5 h-5 inline-block mr-2" />
            back
          </button>
        </Link>

        {routes.map((route, index) => (
          <Link key={index} to={route.path}>
            <button className="btn w-full btn-info border-none p-5 my-2">
              {iconMap[route.name] || null}
              {route.name}
            </button>
          </Link>
        ))}
      </div>

      <div className="w-[80%] bg-[#D1D3D7] h-[100vh]">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default UserDashBoard;

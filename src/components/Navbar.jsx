import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Navbar() {

  const routes = [
    { 
      path: "/choose-us",
      name: "Why CRM"
    },
    { 
      path: "/solutions", 
      name: "Solutions" 
    },
    { 
      path: "/resources", 
      name: "Resources" 
    },
    { 
      path: "/pricing", 
      name: "Pricing" 
    },
    { 
      path: "/customers", 
      name: "Customers" 
    },
  ];

  return (
    <div className="navbar bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white  flex justify-between items-center bg-gray-900 fixed z-40 px-[10%] w-[100%]">
      
      {/* Left - Logo & Brand */}
      <div className="flex items-center gap-2">
      <Link to='/'><img
          src="https://media.licdn.com/dms/image/v2/D560BAQFyCEYUK5-xLw/company-logo_200_200/company-logo_200_200/0/1683076761008/javahomecloud_logo?e=2147483647&v=beta&t=QygXOJwKdyK8XBo7crcFQTe4yHqY_5M4Cm2EC-kn6Gg"
          alt="logo"
          className="w-8 h-8 rounded-md"
        /></Link>
        <span className="text-lg font-semibold">CRM</span>
      </div>

      {/* Center - Navigation Links */}
      <div className="hidden lg:flex ">
        <ul className="flex space-x-10 font-medium text-white">
          {routes.map((route, index) => (
            <li key={index}>
              <Link to={route.path} className="hover:underline hover:text-lime-300 ">{route.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right - Buttons */}
      <div className="flex items-center gap-3">
        <Link to='/signin' className="px-5 py-2 rounded-full bg-[#2f3a44] hover:bg-[#3b4c5a] transition duration-200">
          Sign In
        </Link>
        <Link to='/signup' className="px-6 py-2 rounded-full bg-lime-400 text-black font-semibold hover:bg-lime-500 transition duration-200">
          Open Account
        </Link>
      </div>

    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

function Signin() {
  const [active, setActive] = useState("email");
  const navigate = useNavigate();
  const location = useLocation();

  // Sync active button state with current route
  useEffect(() => {
    if (location.pathname === "/signin") setActive("email");
    else if (location.pathname === "/signin/number") setActive("number");
    else setActive(""); // fallback
  }, [location.pathname]);

  const handleClick = (type) => {
    setActive(type);
    if (type === "email") navigate("/signin");
    else if (type === "number") navigate("/signin/number");
    else if (type === "google") alert("Google login not implemented");
  };

  const buttonClass = (type) =>
    `btn mr-[10px] px-4 py-2 rounded-lg font-medium ${
      active === type
        ? "bg-blue-600 text-white"
        : "bg-white text-blue-600 border border-blue-600"
    }`;

  return (
    <div className="bg-[#ED5AFD] h-[600px] rounded-[10px] m-[50px] p-[50px] flex items-center justify-center">
      
        <div className="bg-[white] rounded-[20px] flex h-full overflow-hidden">
          {/* Left Section */}
          <div className="w-1/2 h-full px-8 py-10 flex flex-col justify-center">
            <h1 className="text-[36px] font-bold text-[#592DBB] mb-6">
              Project CRM Account
            </h1>

            <div className="mb-6">
              <button
                onClick={() => handleClick("email")}
                className={buttonClass("email")}
              >
                Login With Email
              </button>
              <button
                onClick={() => handleClick("google")}
                className={buttonClass("google")}
              >
                Login With Google
              </button>
              <button
                onClick={() => handleClick("number")}
                className={buttonClass("number")}
              >
                Login With Number
              </button>
            </div>

            <div>
              <Outlet />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-1/2 h-full">
            <img
              className="w-full h-full object-cover rounded-r-[20px]"
              src="https://images.pexels.com/photos/7709146/pexels-photo-7709146.jpeg"
              alt="Login Visual"
            />
          </div>
        </div>
      
    </div>
  );
}

export default Signin;

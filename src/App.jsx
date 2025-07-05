import { Routes, Route, BrowserRouter } from "react-router-dom";


import AppLayout from "./layouts/AppLayout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Pricing from "./pages/pricingpage/Pricing";

import UserDashBoard from "./pages/UserDashboard/UserDashBoard";
import UsersData from "./pages/UserDashboard/UsersData";
import UsersGroup from "./pages/UserDashboard/UsersGroup";
import UserProfile from "./pages/UserDashboard/UserProfile";
import AddUser from "./pages/UserDashboard/AddUser";
import WhyChooseUs from "./pages/WhyCrm";

export default function App() {
  return (
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<AppLayout />}>
                  <Route path="signin" element={<Signin />} />
                  <Route path="signup" element={<Signup />} />
                  <Route path="pricing" element={< Pricing/>} >
                  <Route path="/choose-us" element={<WhyChooseUs/>}/>
                  <Route path="/user/dashboard" element={<UserDashBoard />}>
          
                    <Route path="/user/dashboard/all-users" element={<UsersData />} />
                    <Route path="/user/dashboard/users-group" element={<UsersGroup />} />
                    <Route path="/user/dashboard/user-profile" element={<UserProfile />} />
                    <Route path="/user/dashboard/add-user" element={<AddUser />} />
                 </Route>
          
                </Route>
              </Routes>
          </BrowserRouter>
  );
}

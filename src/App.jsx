
import { Routes, Route, BrowserRouter } from "react-router-dom";


import AppLayout from "./layouts/AppLayout";
import Signin from "./pages/Signin";
import SigninWithEmail from './pages/SigninWithEmail'
import SigninWithNumber from './pages/SigninWithNumber'
import ContactUs from './pages/ContactUs'
import Signup from "./pages/Signup";
import Terms from './pages/Terms'
import OtpValidation from './pages/OtpValidation'
import Pricing from "./pages/pricingpage/Pricing";

import UserDashBoard from "./pages/UserDashboard/UserDashBoard";
import UsersData from "./pages/UserDashboard/UsersData";
import UsersGroup from "./pages/UserDashboard/UsersGroup";
import UserProfile from "./pages/UserDashboard/UserProfile";
import AddUser from "./pages/UserDashboard/AddUser";




function App() {
  return (

          <BrowserRouter>
              <Routes>
                <Route path="/" element={<AppLayout />}>
                  <Route path='/contact' element={<ContactUs/>}/>
                   <Route path='/privacy-policy' element={<Terms/>}/>
                  <Route path='/signin' element={<Signin/>}>
                        <Route path='/signin' element={<SigninWithEmail/>}></Route>
                        <Route path='/signin/number' element={<SigninWithNumber/>}></Route>
                      <Route path='/signin/validate' element={<OtpValidation/>}></Route>
                  </Route>
                  <Route path="signup" element={<Signup />} />
                  <Route path="pricing" element={< Pricing/>} >
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

export default App
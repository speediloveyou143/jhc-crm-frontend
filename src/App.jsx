import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import AppLayout from "./layouts/AppLayout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import UserDashBoard from "./components/userDashboard/UserDashBoard";
import UsersData from "./components/userDashboard/UsersData";
import UsersGroup from "./components/UserDashboard/UsersGroup";
import UserProfile from "./components/UserDashboard/UserProfile";

export default function App() {
  return (
    <Provider store={store}>
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<AppLayout />}>
                  <Route path="signin" element={<Signin />} />
                  <Route path="signup" element={<Signup />} />

                <Route path="/user/dashboard" element={<UserDashBoard />}>
          
                  <Route path="/user/dashboard/all-users" element={<UsersData />} />
                  <Route path="/user/dashboard/users-group" element={<UsersGroup />} />
                  <Route path="/user/dashboard/user-profile" element={<UserProfile />} />
                </Route>
          
                </Route>
              </Routes>
          </BrowserRouter>

    </Provider>

  );
}

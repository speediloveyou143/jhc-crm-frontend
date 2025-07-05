import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import WhyCrm from "./pages/WhyCrm";
import Solutions from "./pages/Solutions";
import Resources from "./pages/Resources";
import Pricing from "./pages/Pricing";
import Customers from "./pages/Customers";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import LandingPages from "./pages/landingPages";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<LandingPages />} />
          <Route path="choose-us" element={<WhyCrm />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="resources" element={<Resources />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="customers" element={<Customers />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="contact-us" element={<ContactUs/>} />
          
        </Route>
      </Routes>
    </Router>
  );
}

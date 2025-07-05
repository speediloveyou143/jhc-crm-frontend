import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import WhyChooseUs from "./pages/WhyCrm";
import Pricing from "./pages/pricing";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/choose-us" element={<WhyChooseUs/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

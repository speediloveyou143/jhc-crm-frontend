import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="p-4 flex-1 mt-15">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

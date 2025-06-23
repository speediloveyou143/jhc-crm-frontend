import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <div className="text-xl font-semibold">JHC CRM</div>
      <div className="space-x-4">
        <Link to="/signup" className="hover:underline">Signup</Link>
        <Link to="/signin" className="hover:underline">Signin</Link>
      </div>
    </nav>
  );
}

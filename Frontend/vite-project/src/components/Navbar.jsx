import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <h1 className="text-xl font-bold">Flight Ticket Booking</h1>
      <div>
        <Link to="/login" className="px-4 py-2 bg-white text-blue-600 rounded-md mx-2">Login</Link>
        <Link to="/register" className="px-4 py-2 bg-white text-blue-600 rounded-md mx-2">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;

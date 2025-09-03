import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="w-full flex justify-between items-center px-8 py-4 bg-white shadow">
    <div className="font-bold text-xl">Camcon</div>
    <div className="space-x-4">
      <Link to="/login" className="btn">Login</Link>
      <Link to="/signup" className="btn">Signup</Link>
    </div>
  </nav>
);

export default Navbar;

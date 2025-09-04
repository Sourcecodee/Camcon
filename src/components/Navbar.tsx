import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, Briefcase, User as UserIcon } from 'lucide-react';

const Navbar = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-white">
      <Link to="/" className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center">
          <span className="text-white font-bold text-lg">C</span>
        </div>
        <span className="font-bold text-2xl text-gray-900">Camcon</span>
      </Link>
      
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <Link 
              to="/dashboard" 
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              <UserIcon className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link 
              to="/opportunities" 
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              <Briefcase className="w-5 h-5" />
              <span>Opportunities</span>
            </Link>
            <Link 
              to="/profile" 
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Profile
            </Link>
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </button>
          </>
        ) : (
          <>
            <Link 
              to="/login" 
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Sign In
            </Link>
            <Link 
              to="/signup" 
              className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              Get Started
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside className="w-64 h-full bg-white shadow flex flex-col p-4 space-y-4">
    <Link to="/profile" className="sidebar-link">Profile</Link>
    <Link to="/opportunities" className="sidebar-link">Opportunities</Link>
    <Link to="/dashboard" className="sidebar-link">Applications</Link>
  </aside>
);

export default Sidebar;

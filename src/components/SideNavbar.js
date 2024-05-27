import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { openInNewTab } from './utils'; // Import the helper function

const SideNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
        <span className="text-lg font-semibold tracking-widest">Dashboard</span>
      </div>
      <nav className="flex-grow px-4 mt-5">
        <Link to="home" className="block px-4 py-2 mt-2 text-sm font-semibold bg-gray-700 rounded-lg">
          Home
        </Link>
        <Link to="profile" className="block px-4 py-2 mt-2 text-sm font-semibold bg-gray-700 rounded-lg">
          Profile
        </Link>
        <button
          onClick={() => openInNewTab('/pr/contact-details')}
          className="block w-full text-left px-4 py-2 mt-2 text-sm font-semibold bg-gray-700 rounded-lg"
        >
          New Dashboard
        </button>
        <button
          onClick={handleLogout}
          className="block w-full text-left px-4 py-2 mt-2 text-sm font-semibold bg-gray-700 rounded-lg focus:outline-none"
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default SideNavbar;


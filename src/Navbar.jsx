import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-black text-white">
      {/* Logo */}
      <div className="text-3xl font-bold text-yellow-400">
        <Link to="/">My Portfolio<span className="text-yellow-400"></span></Link>
      </div>

      {/* Menu Links */}
      <ul className="flex items-center gap-8">
        <li className="text-yellow-400 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer hover:text-yellow-400">
          <Link to="/about">About</Link>
        </li>
        
      </ul>

      {/* Contact Button */}
      <Link to="/contact">
        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-400">
          <span>💬</span> Contact me
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;

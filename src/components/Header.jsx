import React from 'react';
import {Link} from 'react-router-dom'
import Hamburger from './Hamburger';

const Header = () => {
  return (
    <header className="text-[#FFE1A8] shadow-xl py-4 p-2">
      <nav className="container mx-auto flex justify-between">
        <div className="text-lg  font-bold">Iks</div>
      
        <Hamburger/>
        <div>
          <ul className="hidden sm:flex space-x-6">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

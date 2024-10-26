import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src="ExamHPTUlogo.gif" alt="Logo" className="h-10" />
        </div>
        <div className="block lg:hidden">
          <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <ul className={`lg:flex space-x-6 text-black ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <li><a href="/" className="hover:text-blue-500">Home</a></li>
          <li><a href="rank" className="hover:text-blue-500">Rank</a></li>
          <li><a href="/result" className="hover:text-blue-500">Result</a></li>
          <li><a href="/pyq" className="hover:text-blue-500">PYQ</a></li>
          <li><a href="/joinourteam" className="hover:text-blue-500">Join our team</a></li>
          <li><a href="/contactus" className="hover:text-blue-500">Contact us</a></li>
        </ul>
      </div>
      <ul className={`lg:hidden flex-col space-y-4 mt-4 text-black ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        
      </ul>
    </nav>
  );
};

export default NavBar;

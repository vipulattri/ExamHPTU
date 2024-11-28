import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleScroll = () => {
    if (window.scrollY > 50 && !searchQuery) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery) {
      setIsScrolled(false);
    }
  }, [searchQuery]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full p-4 shadow-md z-50 transition-all duration-300 ${
          searchQuery || isScrolled ? 'bg-white/70 backdrop-blur-md' : 'bg-white'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <img src="https://i.ibb.co/rdF2BBr/logo.jpg" alt="" className="h-5 w-15 lg:h-15" />
          </div>
          <div className="block lg:hidden">
            <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
          </div>
          <ul className={`hidden lg:flex space-x-6 text-black`}>
            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/rank" className="hover:text-blue-500">Rank</Link></li>
            <li><Link to="/result" className="hover:text-blue-500">Result</Link></li>
            <li><Link to="/pyq" className="hover:text-blue-500">PYQ</Link></li>
            <li><Link to="/joinourteam" className="hover:text-blue-500">Join our team</Link></li>
            <li><Link to="/contactus" className="hover:text-blue-500">Contact us</Link></li>
          </ul>
        </div>

        <ul className={`lg:hidden flex-col space-y-4 mt-4 text-black ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
  <li><Link to="/" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-blue-200">Home</Link></li>
  <li><Link to="/rank" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-blue-200">Rank</Link></li>
  <li><Link to="/result" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-blue-200">Result</Link></li>
  <li><Link to="/pyq" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-blue-200">PYQ</Link></li>
  <li><Link to="/joinourteam" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-blue-200">Join our team</Link></li>
  <li><Link to="/contactus" onClick={closeMobileMenu} className="block px-4 py-2 hover:bg-blue-200">Contact us</Link></li>
</ul>
      </nav>

 

      {/* Ensure the main content is padded down to avoid being overlapped by the fixed navbar */}
      <main className="mt-20">
        {/* Your main page content goes here */}
        {/* Implement filtering logic based on searchQuery here */}
      </main>
    </>
  );
};

export default NavBar;

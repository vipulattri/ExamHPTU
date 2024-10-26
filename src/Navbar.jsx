import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full p-4 shadow-md z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/70 backdrop-blur-md' : 'bg-white'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div>
            {/* Adjusted logo size for mobile view */}
            <img src="src/Exam-HPTU-unscreen.gif" alt="Logo" className="h-20 w-20 lg:h-15" />
          </div>
          <div className="block lg:hidden">
            {/* Mobile menu toggle button */}
            <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
          </div>
          <ul className={`hidden lg:flex space-x-6 text-black`}>
            <li><a href="/" className="hover:text-blue-500">Home</a></li>
            <li><a href="/rank" className="hover:text-blue-500">Rank</a></li>
            <li><a href="/result" className="hover:text-blue-500">Result</a></li>
            <li><a href="/pyq" className="hover:text-blue-500">PYQ</a></li>
            <li><a href="/joinourteam" className="hover:text-blue-500">Join our team</a></li>
            <li><a href="/contactus" className="hover:text-blue-500">Contact us</a></li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <ul className={`lg:hidden flex-col space-y-4 mt-4 text-black ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <li><a href="/" className="block px-4 py-2 hover:bg-blue-200">Home</a></li>
          <li><a href="/rank" className="block px-4 py-2 hover:bg-blue-200">Rank</a></li>
          <li><a href="/result" className="block px-4 py-2 hover:bg-blue-200">Result</a></li>
          <li><a href="/pyq" className="block px-4 py-2 hover:bg-blue-200">PYQ</a></li>
          <li><a href="/joinourteam" className="block px-4 py-2 hover:bg-blue-200">Join our team</a></li>
          <li><a href="/contactus" className="block px-4 py-2 hover:bg-blue-200">Contact us</a></li>
        </ul>
      </nav>

      {/* Ensure the main content is padded down to avoid being overlapped by the fixed navbar */}
      <main className="mt-20">
        {/* Your main page content goes here */}
      </main>
    </>
  );
};

export default NavBar;

import React from 'react';
import './Footer.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        <div>
          <h3 className="font-bold mb-4">QUESTION PAPERS</h3>
          <ul>
            <li><a className="text-gray-400 hover:text-white" href="/pyq">Latest Papers</a></li>
            <li><a className="text-gray-400 hover:text-white" href="/pyq">Previous Year Papers</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">RESULTS</h3>
          <ul>
            <li><a className="text-gray-400 hover:text-white" href="/result">Check Results</a></li>
            <li><a className="text-gray-400 hover:text-white" href="/result">Result Analysis</a></li>
            <li><a className="text-gray-400 hover:text-white" href="/result">Previous Results</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">CONTACT US</h3>
          <ul>
            <li><a className="text-gray-400 hover:text-white" href="/contactus">User Support</a></li>
            <li><a className="text-gray-400 hover:text-white" href="/contactus">Feedback</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">JOIN OUR TEAM</h3>
          <ul>
            <li><a className="text-gray-400 hover:text-white" href="/joinourteam">Volunteer</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center mt-8 px-6">
        <div className="text-gray-400 text-center">
          © 2024 Exam HPTU. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a className="text-gray-400 hover:text-white" href="#"><i className="fab fa-facebook-f"></i></a>
          <a className="text-gray-400 hover:text-white" href="#"><i className="fab fa-twitter"></i></a>
          <a className="text-gray-400 hover:text-white" href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
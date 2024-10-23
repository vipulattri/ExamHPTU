import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchStudentData from './SearchStudentData';
import Footer from './Footer';
import './App.css'; // Ensure you import the CSS file
import Navbar from './Navbar';
import Home from './Home';
import Contactus from './Contactus'
import Rank from './Rank';
import PYQ from './PYQ';
import Joinourteam from './Joinourteam';
import Result from './Result'; // Import the Result component

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/rank' element={<Rank />} />
            <Route path='/result' element={<SearchStudentData />} />
            <Route path='/result/:rollNo' element={<Result />} />
            <Route path='/pyq' element={<PYQ />} />
            <Route path='/joinourteam' element={<Joinourteam />} />
            <Route path='/contactus' element={<Contactus />} />
          </Routes>
        </div>
        <Footer />
        
        {isVisible && (
          <div className="fixed bottom-4 right-4 cursor-pointer" onClick={scrollToTop}>
            <i className="fas fa-arrow-up text-red-500 text-3xl"></i>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
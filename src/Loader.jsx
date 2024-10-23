import React from 'react';
import './Loader.css';

const Loader = ({ fullPage }) => {
  return (
    <div className={`loader ${fullPage ? 'full-page-loader' : ''}`}>
      Loading
    </div>
  );
};

export default Loader;
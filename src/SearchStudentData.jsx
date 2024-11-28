import React from 'react';
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const SearchStudentData = () => {
  return (
    <div className="bg-white flex items-center justify-center h-screen">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <div className="text-left">
          <h1 className="text-6xl font-bold text-blue-900">Oops!</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mt-2">Under construction</h2>
          <p className="text-gray-600 mt-4">
          This Page is Under Development
          We will Notify you When Complete
          </p>
          
        </div>
        <div className="ml-10">
          <img 
            alt="Illustration of a construction site with workers and a crane lifting a warning sign" 
            height="300" 
            src="https://storage.googleapis.com/a1aa/image/uyfXRTKtJHXaK6w9eiThWOPePI5PIoM9tTNCmf39whgGvJiOB.jpg" 
            width="500" 
          />
        </div>
      </div>
    </div>
  );
};

export default SearchStudentData;

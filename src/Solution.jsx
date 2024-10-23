import React from 'react';
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNetworkWired, faUsers, faVrCardboard } from '@fortawesome/free-solid-svg-icons';
import './Solution.css'; // Ensure your CSS file is correctly imported
import { useNavigate } from 'react-router-dom'; 

const Solution = () => {
  const navigate = useNavigate(); 
  const handleCheckNowClick = () => {
    navigate('/result'); // Redirect to /results
  
  };
  const rank = () =>{
    navigate('/rank')
  };
  const access = () =>{
    navigate('/pyq')
  };
  return (
    <div className="bg-white p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="flip-card relative w-full h-80">
          <div className="flip-card-inner relative w-full h-full">
            {/* Front Side */}
            <div className="flip-card-front bg-white border p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <div className="bg-blue-200 p-4 rounded-full mb-4">
                <FontAwesomeIcon icon={faNetworkWired} className="text-blue-500 text-2xl" />
              </div>
              <h2 className="text-center text-xl font-bold mb-2"></h2>
              <p className="text-center">Check your Result of All Sem in Himachal Pradesh Technical University</p>
            </div>
            {/* Back Side */}
            <div className="flip-card-back bg-white border p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <h2 className="text-center text-xl font-bold mb-2"></h2>
              <p className="text-center"></p>
              <button onClick={handleCheckNowClick} className="bg-yellow-500 text-black px-4 py-2 rounded mt-4">Check now</button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flip-card relative w-full h-80">
          <div className="flip-card-inner relative w-full h-full">
            {/* Front Side */}
            <div className="flip-card-front bg-white border p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <div className="bg-pink-200 p-4 rounded-full mb-4">
                <FontAwesomeIcon icon={faUsers} className="text-pink-500 text-2xl" />
              </div>
              <h2 className="text-center text-xl font-bold mb-2"></h2>
              <p className="text-center">Check your All Himachal Rank in Himachal Pradesh Technical University</p>
            </div>
            {/* Back Side */}
            <div className="flip-card-back bg-white border p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <h2 className="text-center text-xl font-bold mb-2"></h2>
              <p className="text-center"></p>
              <button onClick={rank} className="bg-yellow-500 text-black px-4 py-2 rounded mt-4">Check now</button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flip-card relative w-full h-80">
          <div className="flip-card-inner relative w-full h-full">
            {/* Front Side */}
            <div className="flip-card-front bg-white border p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <div className="bg-red-200 p-4 rounded-full mb-4">
                <FontAwesomeIcon icon={faVrCardboard} className="text-red-500 text-2xl" />
              </div>
              <h2 className="text-center text-xl font-bold mb-2"></h2>
              <p className="text-center">Access previous year's question papers</p>
            </div>
            {/* Back Side */}
            <div className="flip-card-back bg-white border p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <h2 className="text-center text-xl font-bold mb-2"></h2>
              <p className="text-center"></p>
              <button onClick={access} className="bg-yellow-500 text-black px-4 py-2 rounded mt-4">Access now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
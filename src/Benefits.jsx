import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
import { useNavigate } from 'react-router-dom';

const Benefits = () => {
  const navigate = useNavigate(); // Move useNavigate outside of useEffect

  // Define CheckRank function
  const CheckRank = () => {
    navigate('/rank'); // Use the navigate function to go to '/rank'
  };
  const CheckResult = () => {
    navigate('/result')
  }
  const checkPYQ = () => {
    navigate('/pyq')
  }

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animations for the benefit items
    const benefitItems = document.querySelectorAll(".benefit-item");
    benefitItems.forEach(item => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 80%", // Trigger when the top of the item is 80% from the top of the viewport
          toggleActions: "play none none reverse", // Play animation when entering the viewport, reverse when leaving
        },
        duration: 1,
        opacity: 0,
        y: 50,
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all ScrollTriggers on component unmount
    };
  }, []);

  return (
    <div className="bg-white">
      <div className="container mx-auto py-12">
        <h2 className="text-center text-3xl font-bold text-black mb-8">
          <span className="text-black">Benefits</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="benefit-item text-center">
            <div className="bg-gray-100 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-4">
              <img
                alt="Icon representing semester results"
                className="w-full h-full rounded-full"
                src="https://i.pinimg.com/736x/5a/ab/f8/5aabf84d67477f77d3bb8f0fe4cfcd17.jpg"
              />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">
              Access all your semester results in one place
            </h3>
            <button onClick={CheckResult} className='bg-blue-500 rounded-full pl-4 pr-4 py-2 text-white hover:bg-blue-600 transition duration-200'>Check Now</button>

          </div>
          <div className="benefit-item text-center">
            <div className="bg-gray-100 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-4">
              <img
                alt="Icon representing rank checking"
                className="w-full h-full rounded-full"
                src="https://images.squarespace-cdn.com/content/v1/5fc463b9df132613bbd422a5/1607559213633-RU0GHLJ43QYEE3VKV5K6/Graduations+Now+Blog+Different+Types+of+High+School+Graduation+Hats.jpg?format=1500w"
              />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">
              Check your rank across all of Himachal Pradesh
            </h3>
            <button onClick={CheckRank} className='bg-blue-500 my-1 rounded-full pl-4 pr-4 py-2 text-white hover:bg-blue-600 transition duration-200'>
              Check Now
            </button>
          </div>
          <div className="benefit-item text-center">
            <div className="bg-gray-100 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-4">
              <img
                alt="Icon representing previous year's questions"
                className="w-full h-full rounded-full"
                src="https://images.shiksha.com/mediadata/images/articles/1608125651phpB8j4et.jpeg"
              />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">
              Access previous year's questions
            </h3>
            <button onClick={checkPYQ} className='bg-blue-500 rounded-full pl-4 pr-4 py-2 text-white hover:bg-blue-600 my-7 transition duration-200'>Access PYQ</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

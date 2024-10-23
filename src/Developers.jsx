import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'tailwindcss/tailwind.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 

gsap.registerPlugin(ScrollTrigger);

const Developers = () => {
  useEffect(() => {
    // GSAP animations
    gsap.from("h1", {
      scrollTrigger: {
        trigger: "h1",
        start: "top 80%",
        end: "top 30%",
        scrub: true
      },
      y: 50,
      opacity: 0,
      duration: 1
    });

    gsap.from("h2", {
      scrollTrigger: {
        trigger: "h2",
        start: "top 80%",
        end: "top 30%",
        scrub: true
      },
      y: 50,
      opacity: 0,
      duration: 1
    });

    gsap.from(".text-center", {
      scrollTrigger: {
        trigger: ".text-center",
        start: "top 80%",
        end: "top 30%",
        scrub: true
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3
    });
  }, []);

  return (
    <div className="bg-white">
      <div className="text-center py-10">
        <h2 className="text-red-500 text-sm font-semibold">OUR EXPERTS</h2>
        <h1 className="text-3xl font-bold text-gray-800 mt-2">Website Developers</h1>
      </div>
      <div className="flex justify-center space-x-6">
        <div className="text-center">
          <img
            alt=""
            className="w-24 h-24 rounded-full mx-auto"
            height="100"
            src="https://vidyahptu.xperiment.cloud/assets/img/jaswalaryan.jpg"
            width="100"
          />
          <h3 className="text-lg font-semibold mt-4">Aryan Jaswal</h3>
          <p className="text-gray-500"></p>
        </div>
        <div className="text-center">
          <img
            alt=""
            className="w-24 h-24 rounded-full mx-auto"
            height="100"
            src="data:image/jpeg;base64,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"
            width="100"
          />
          <h3 className="text-lg font-semibold mt-4">Vipul Attri</h3>
          <p className="text-gray-500"></p>
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        
      </div>
    </div>
  );
};

export default Developers;
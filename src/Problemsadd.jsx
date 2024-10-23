import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Problemsadd.css'; 

const ProblemsAdd = () => {
  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animations for the cards
    const cards = document.querySelectorAll(".problem-card");
    cards.forEach(card => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%", // Trigger when the top of the card is 80% from the top of the viewport
          toggleActions: "play none none reverse", // Play animation when entering the viewport, reverse when leaving
        },
        duration: 1,
        opacity: 0,
        y: 50,
      });
    });

    // Image click animations
    document.querySelectorAll('.image-container img').forEach(img => {
      img.addEventListener('click', () => {
        gsap.to(img, { scale: 1.2, duration: 0.3, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.5)' });
        setTimeout(() => {
          gsap.to(img, { scale: 1, duration: 0.3, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' });
        }, 500);
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all ScrollTriggers on component unmount
    };
  }, []);

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-8">
        <h2 className="text-orange-500 text-lg font-semibold">OUR WORK</h2>
        <h1 className="text-4xl font-bold">Problems Addressed</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="problem-card bg-gradient-to-b from-blue-500 to-blue-700 p-6 rounded-lg shadow-lg text-center text-white">
          <div className="image-container">
            <img alt="Illustration of a centralized location" className="mx-auto mb-4 hover:scale-110 transition-transform duration-300" height="100" src="https://storage.googleapis.com/a1aa/image/6GC8j4RdrnL9A5hAuwgwu1UD0MUtQJAT48Xed9wofIcfqGSnA.jpg" width="100" />
          </div>
          <h3 className="text-xl font-bold mb-2">Students currently cannot access all their semester results in one centralized location</h3>
          <p>We aim to provide a centralized platform where students can access all their semester results in one place, making it easier for them to track their academic progress.</p>
        </div>
        <div className="problem-card bg-green-500 p-6 rounded-lg shadow-lg text-center text-white">
          <div className="image-container">
            <img alt="Illustration of performance visibility" className="mx-auto mb-4 hover:scale-110 transition-transform duration-300" height="100" src="https://storage.googleapis.com/a1aa/image/LxHmCn4R9EJyNN9gn8u7CjrUT0TcZZdjauxIpXfhB8Evqh0JA.jpg" width="100" />
          </div>
          <h3 className="text-xl font-bold mb-2">Students lack visibility into their overall performance compared to peers across Himachal Pradesh (HPT U)</h3>
          <p>Our platform will provide students with insights into their performance compared to their peers, helping them understand where they stand and how they can improve.</p>
        </div>
        <div className="problem-card bg-blue-500 p-6 rounded-lg shadow-lg text-center text-white">
          <div className="image-container">
            <img alt="Illustration of accessing previous year's question papers" className="mx-auto mb-4 hover:scale-110 transition-transform duration-300" height="100" src="https://storage.googleapis.com/a1aa/image/eHLGmd6bwb3AdC3Rm4SBAdUYuY9yGnzPHHYFABZ7zznuqh0JA.jpg" width="100" />
          </div>
          <h3 className="text-xl font-bold mb-2">Students face difficulties in accessing previous year's question papers</h3>
          <p>We will provide easy access to previous year's question papers, enabling students to prepare better for their exams by practicing with past papers.</p>
        </div>
        {/* New Problem Card */}
        <div className="problem-card bg-purple-500 p-6 rounded-lg shadow-lg text-center text-white">
          <div className="image-container">
            <img alt="Illustration of time management and study planning" className="mx-auto mb-4 hover:scale-110 transition-transform duration-300" height="100" src="https://logowik.com/content/uploads/images/student5651.jpg" width="100" />
          </div>
          <h3 className="text-xl font-bold mb-2">Difficulty in Time Management and Study Planning</h3>
          <p>Many students face challenges in managing their time effectively, leading to stress and poor academic performance. We introduce a  tool that helps student in the final exam</p>
        </div>
      </div>
    </div>
  );
};

export default ProblemsAdd;
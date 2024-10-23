import React, { useEffect } from 'react';
import gsap from 'gsap';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is installed in your project

const WelcomeComponent = ({ studentName }) => {
    useEffect(() => {
        // GSAP animations
        gsap.from(".welcome-title", { duration: 1, opacity: 0, y: -50, ease: "bounce" });
        gsap.from(".welcome-subtitle", { duration: 1, opacity: 0, y: 50, ease: "bounce", delay: 0.5 });
    }, []);

    // Utility function to format the student name
    const formatStudentName = (name) => {
        return name
            .split(' ') // Split the name into words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter and lowercase the rest
            .join(' '); // Join the words back into a single string
    };

    return (
        <div className="bg-white flex items-start justify-start" style={{ height: '30vh', width: '100%' }}>
            <div className="text-left ml-0">
                <h1 className="welcome-title text-black text-6xl md:text-7xl font-black leading-none" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    WELCOME<br />
                </h1>
                <h2 className="welcome-subtitle text-pink-500 text-4xl md:text-5xl font-black leading-none" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    {formatStudentName(studentName)} 👋
                </h2>
            </div>
        </div>
    );
};

export default WelcomeComponent;
import React, { useEffect, useState } from 'react';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Array of slides with unique titles, descriptions, and buttons
    const slides = [
        {
            imgSrc: "https://images.bhaskarassets.com/webp/thumb/512x0/web2images/521/2022/09/18/4d7e732c-f479-4e5a-89f7-6db0e7e08f10_1663498640139.jpg",
            title: "Welcome to Exam HPTU",
            description: "This is an open-source project developed by the students of Himachal Pradesh Technical University (HPTU).",
            buttonText: "Learn More",
            buttonLink: "#"
        },
        {
            imgSrc: "https://media.licdn.com/dms/image/v2/D5622AQG9Ze898O5Obg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1704519232897?e=2147483647&v=beta&t=hLKko9qc_weHEaC_dotv--yavhZwqbtUqubmo-fc5FQ",
            title: "HPTU Event Highlights",
            description: "Stay updated with the latest happenings at HPTU through this slideshow showcasing various events.",
            buttonText: "View Events",
            buttonLink: "#"
        },
        {
            imgSrc: "https://akm-img-a-in.tosshub.com/sites/resources/campus/prod/img/campusview/2023/8/3cb9f1a378ceb992892415546.jpg",
            title: "Campus Life at HPTU",
            description: "Experience the vibrant campus life and facilities provided by HPTU, fostering innovation and creativity.",
            buttonText: "Explore Campus",
            buttonLink: "#"
        }
    ];

    // Automatically change the slide every 3 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [slides.length]);

    return (
        <div className="relative slider bg-gray-100 max-w-full overflow-hidden">
            {/* Slide Container */}
            <div className="slides flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div className="slide min-w-full box-border relative" key={index}>
                        {/* Image */}
                        <img alt={slide.title} className="w-full h-96 object-cover" src={slide.imgSrc} />
                        {/* Content for each slide */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-500 flex items-center justify-center">
                            <div className="text-center">
                                <h1 className="text-white text-4xl font-bold">{slide.title}</h1>
                                <p className="text-white mt-4">{slide.description}</p>
                                <a href={slide.buttonLink}>
                                    <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
                                        {slide.buttonText}
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <div key={index} className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}></div>
                ))}
            </div>
        </div>
    );
};

export default Slider;

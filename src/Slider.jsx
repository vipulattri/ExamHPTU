import React, { useEffect, useState } from 'react';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        {
            imgSrc: "https://images.bhaskarassets.com/webp/thumb/512x0/web2images/521/2022/09/18/4d7e732c-f479-4e5a-89f7-6db0e7e08f10_1663498640139.jpg",
            title: "Welcome in Exam HPTU",
            description: "This is an open-source project developed by the students of Himachal Pradesh Technical University (HPTU)."
        },
        {
            imgSrc: "https://media.licdn.com/dms/image/v2/D5622AQG9Ze898O5Obg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1704519232897?e=2147483647&v=beta&t=hLKko9qc_weHEaC_dotv--yavhZwqbtUqubmo-fc5FQ",
            title2: "",
            description: ""
        },
        {
            imgSrc: "https://akm-img-a-in.tosshub.com/sites/resources/campus/prod/img/campusview/2023/8/3cb9f1a378ceb992892415546.jpg",
            title3: "sdfsda",
            description: ""
        }
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [slides.length]);

    return (
        <div className="relative slider bg-gray-100 opacity-1 max-w-full overflow-x-hidden">
            <div className="slides flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div className="slide min-w-full box-border" key={index}>
                        <img alt={slide.title} className="w-full h-96 object-cover" src={slide.imgSrc} />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-0 flex items-center">
                            <div className="ml-16">
                                <h1 className="text-white text-4xl font-bold">{slide.title}</h1>
                                <p className="text-white mt-4">{slide.description}</p>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <div key={index} className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}></div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
"use client";

import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { sliderContent } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { WrapperContainer } from '../components';


const Services = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);


    const handleNext = () => {
        if (currentSlide < sliderContent.length - 1) {
            setCurrentSlide(currentSlide + 1);
            sliderRef.current.slickNext(); // Slide to the next slide
        } else {
            setCurrentSlide(0); // Reset the counter to 0
            sliderRef.current.slickGoTo(0); // Go back to the first slide
        }
    };

    const handlePrevious = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
            sliderRef.current.slickPrev(); // Slide to the previous slide
        } else {
            setCurrentSlide(sliderContent.length - 1); // Set the counter to the last slide index
            sliderRef.current.slickGoTo(sliderContent.length - 1); // Go to the last slide
        }
    };


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="pt-10 pb-20 bg-white">
            <WrapperContainer>
                <div className="pb-5">
                    <div className="text-sm uppercase">What We Do</div>
                    <h2 className="text-5xl md:text-6xl pt-3 font-light">Our Services</h2>
                </div>

                <div className="flex justify-end pr-5 slider-con pb-5">
                <div className="ml-2 flex mr-5"><span className="text-4xl font-bold">{(currentSlide + 1).toString().padStart(2, '0')}</span> <span className="font-bold text-xl">/</span> <span className="font-bold text-xl">{sliderContent.length.toString().padStart(2, '0')}</span></div>
                    <div className="slider_nav">
                        <div className="mr-2" onClick={handlePrevious}>
                            <button className="nav_prev">Previous</button>
                        </div>
                        <div onClick={handleNext}>
                            <button className="nav_next">Next</button>
                        </div>
                    </div>
                </div>


                <Slider ref={sliderRef} {...settings}>
                    {sliderContent.map((slide, index) => (
                        <div key={index} className="px-1">
                            <div className="slider px-8 py-10">
                                <h2 className="pb-3 text-lg font-semibold">{slide.title}</h2>
                                <p>{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>

            </WrapperContainer>
        </section>
    )
}

export default Services
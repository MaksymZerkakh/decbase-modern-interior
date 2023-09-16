"use client";

import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { sliderContent } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight, fas } from '@fortawesome/free-solid-svg-icons';
import { WrapperContainer } from '../components';


const Services = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        if (currentSlide < sliderContent.length - 1) {
            sliderRef.current.slickNext(); // Slide to the next slide
        } else {
            sliderRef.current.slickGoTo(0); // Go back to the first slide
        }
    };

    const handlePrevious = () => {
        if (currentSlide > 0) {
            sliderRef.current.slickPrev(); // Slide to the previous slide
        } else {
            sliderRef.current.slickGoTo(sliderContent.length - 1); // Go to the last slide
        }
    };


    const settings = {
        dots: false,
        infinite: false,
        arrows: false,
        speed: 500,
        centerMode: true,
        variableWidth: true,
        //slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                },
            },
        ],
    };

    return (
        <section className="pt-10 pb-20 bg-white services_section">
            <WrapperContainer>
                <div className="pb-5">
                    <div className="text-sm uppercase">What We Do</div>
                    <h2 className="text-5xl md:text-6xl pt-3 font-light">Our Services</h2>
                </div>

                <div className="flex justify-end">
                    <div className="slider_line">
                        <span style={{ left: `${currentSlide * (100 / sliderContent.length)}%` }}></span>
                    </div>

                    <div className="flex justify-end pr-5 slider-con pb-5">
                        <div className="ml-2 flex mr-5"><span className="text-4xl font-extralight">{(currentSlide + 1).toString().padStart(2, '0')}</span> <span className="text-xl font-extralight">/</span> <span className="text-xl font-extralight">{sliderContent.length.toString().padStart(2, '0')}</span></div>
                        <div className="slider_nav">
                            <div className="mr-2" onClick={handlePrevious}>
                                <button className="nav_prev">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="16.465" viewBox="0 0 41 16.465">
                                    <g id="Group_58" data-name="Group 58" transform="translate(-145 422.733) rotate(180)">
                                        <line id="Line_1" data-name="Line 1" x2="40.5" transform="translate(-186 414.5)" fill="none" stroke="#a7a7a7" strokeWidth="1"/>
                                        <g id="slider_arrow" transform="translate(-217.5 396.267)">
                                        <g id="Group_59" data-name="Group 59" transform="translate(63.5 10)">
                                            <path id="Path_2" data-name="Path 2" d="M72.5,18.233,64.5,10l-1,1.033,7,7.2-7,7.2,1,1.033Z" transform="translate(-63.5 -10)" fill="#a7a7a7"/>
                                        </g>
                                        </g>
                                    </g>
                                    </svg>
                                    Previous
                                </button>
                            </div>
                            <div onClick={handleNext}>
                                <button className="nav_next">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="16.465" viewBox="0 0 41 16.465">
                                    <g id="Group_58" data-name="Group 58" transform="translate(186 -406.267)">
                                    <line id="Line_1" data-name="Line 1" x2="40.5" transform="translate(-186 414.5)" fill="none" stroke="#a7a7a7" strokeWidth="1"/>
                                    <g id="slider_arrow" transform="translate(-217.5 396.267)">
                                        <g id="Group_59" data-name="Group 59" transform="translate(63.5 10)">
                                        <path id="Path_2" data-name="Path 2" d="M72.5,18.233,64.5,10l-1,1.033,7,7.2-7,7.2,1,1.033Z" transform="translate(-63.5 -10)" fill="#a7a7a7"/>
                                        </g>
                                    </g>
                                    </g>
                                    </svg>
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </WrapperContainer>
                
                <Slider 
                ref={sliderRef} 
                {...settings} 
                className="featured_services"
                beforeChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)}
                >
                    {sliderContent.map((slide, index) => (
                        <div key={index} className="px-1">
                            <div className="slider px-8 py-10">
                                <h2 className="pb-3 text-lg font-semibold">{slide.title}</h2>
                                <p>{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>

        </section>
    )
}

export default Services
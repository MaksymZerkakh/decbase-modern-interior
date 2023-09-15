"use client";

import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimonalSlieder } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight, faQuoteRightAlt } from '@fortawesome/free-solid-svg-icons';
import { WrapperContainer } from '../components';
import Image from 'next/image';


const Testimonials = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);


    const handleNext = () => {
        if (currentSlide < testimonalSlieder.length - 1) {
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
            setCurrentSlide(testimonalSlieder.length - 1); // Set the counter to the last slide index
            sliderRef.current.slickGoTo(testimonalSlieder.length - 1); // Go to the last slide
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
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
        <section className="py-20 bg-white testimonials_section">
            <WrapperContainer>
                <div className="pb-5">
                    <div className="text-sm uppercase text-center pb-3">Testimonials</div>
                    <h2 className="text-center text-5xl lg:text-6xl font-light mb-8 z-10 relative">See Whay Our Clients Say About Us</h2>
                </div>

                <div className="flex justify-end pr-5 slider-con pb-5">
                    <div className="ml-2 flex mr-5"><span className="text-4xl font-extralight">{(currentSlide + 1).toString().padStart(2, '0')}</span> <span className="font-extralight text-xl">/</span> <span className="font-extralight text-xl">{testimonalSlieder.length.toString().padStart(2, '0')}</span></div>
                    <div className="slider_nav">
                        <div className="mr-2" onClick={handlePrevious}>
                            <button className="nav_prev">
                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="16.465" viewBox="0 0 41 16.465">
                                    <g id="Group_58" data-name="Group 58" transform="translate(-145 422.733) rotate(180)">
                                        <line id="Line_1" data-name="Line 1" x2="40.5" transform="translate(-186 414.5)" fill="none" stroke="#a7a7a7" strokeWidth="1" />
                                        <g id="slider_arrow" transform="translate(-217.5 396.267)">
                                            <g id="Group_59" data-name="Group 59" transform="translate(63.5 10)">
                                                <path id="Path_2" data-name="Path 2" d="M72.5,18.233,64.5,10l-1,1.033,7,7.2-7,7.2,1,1.033Z" transform="translate(-63.5 -10)" fill="#a7a7a7" />
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
                                        <line id="Line_1" data-name="Line 1" x2="40.5" transform="translate(-186 414.5)" fill="none" stroke="#a7a7a7" strokeWidth="1" />
                                        <g id="slider_arrow" transform="translate(-217.5 396.267)">
                                            <g id="Group_59" data-name="Group 59" transform="translate(63.5 10)">
                                                <path id="Path_2" data-name="Path 2" d="M72.5,18.233,64.5,10l-1,1.033,7,7.2-7,7.2,1,1.033Z" transform="translate(-63.5 -10)" fill="#a7a7a7" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                Next
                            </button>
                        </div>
                    </div>
                </div>


                <Slider ref={sliderRef} {...settings}>
                    {testimonalSlieder.map((slide, index) => (
                        <div key={index} className="px-1">
                            <div className="slider px-8 py-10">
                                <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-4xl absolute right-0 quote" fill="#CAA892" width="24" height="24" viewBox="0 0 24 24"><path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/></svg>
                                </div>
                                <h2 className="pb-3 text-lg font-semibold">{slide.name} <span className="text-sm font-light">/ {slide.position}</span></h2>
                                <p>{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </WrapperContainer>
        </section>
    )
}

export default Testimonials
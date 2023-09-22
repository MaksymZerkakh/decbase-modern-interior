"use client";

import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { sliderContent } from '../../constants';
import { WrapperContainer, SliderLeftButton, SliderRightButton } from '..';


const Services = () => {
    const sliderData = sliderContent;

    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        if (currentSlide < sliderData.length - 1) {
            sliderRef.current.slickNext(); // Slide to the next slide
        } else {
            sliderRef.current.slickGoTo(0); // Go back to the first slide
        }
    };

    const handlePrevious = () => {
        if (currentSlide > 0) {
            sliderRef.current.slickPrev(); // Slide to the previous slide
        } else {
            sliderRef.current.slickGoTo(sliderData.length - 1); // Go to the last slide
        }
    };


    const settings = {
        dots: false,
        infinite: false,
        arrows: false,
        speed: 500,
        centerMode: true,
        variableWidth: true,
        slidesToScroll: 1,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToScroll: 1,
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

                <div className="flex justify-end p-5">
                    <div className="slider_line">
                        <span style={{ left: `${currentSlide * (100 / sliderData.length)}%` }}></span>
                    </div>

                    <div className="flex justify-end slider-con">
                        <div className="ml-2 flex mr-5"><span className="text-4xl font-extralight">{(currentSlide + 1).toString().padStart(2, '0')}</span> <span className="text-xl font-extralight">/</span> <span className="text-xl font-extralight">{sliderData.length.toString().padStart(2, '0')}</span></div>
                        <div className="slider_nav">
                            <div className="mr-2" onClick={handlePrevious}>
                                <SliderLeftButton/>
                            </div>
                            <div onClick={handleNext}>
                                <SliderRightButton/>
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
                    {sliderData.map((slide, index) => (
                        <div key={index} className="px-1">
                            <div className="slider px-8 py-10">
                                <h2 className="pb-3 font-light text-2xl">{slide.title}</h2>
                                <p>{slide.description}</p>
                            </div>
                        </div>
                    ))}
            </Slider>
            

        </section>
    )
}

export default Services
"use client";

import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { partnersSlider } from '../../constants';
import { WrapperContainer, SliderLeftButton, SliderRightButton } from '..';


const Partners = () => {
    const sliderData = partnersSlider;

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
        infinite: true,
        arrows: false,
        speed: 500,
        centerMode: false,
        variableWidth: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1248,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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
        <section id="services" className=" bg-white partners_section">
            <div className="section_wrapper">
                <div className="pb-5 text-center mb-14">
                        <div className="text-sm uppercase">Our Relationships</div>
                        <h2 className="text-5xl md:text-6xl pt-3 font-light">Meet Our Partners</h2>
                    </div>

                    <div className="py-10 nav_con">
                        <div className="flex justify-end slider-con">
                            <Slider 
                                ref={sliderRef} 
                                {...settings} 
                                className="featured_services"
                                beforeChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)}
                                >
                                    {sliderData.map((slide, index) => (
                                        <div key={index} className="px-1">
                                            <div>
                                                <div className="relationships-items">
                                                    <img src={slide.image} alt="Image" /></div>
                                                </div>
                                        </div>
                                    ))}
                            </Slider>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Partners
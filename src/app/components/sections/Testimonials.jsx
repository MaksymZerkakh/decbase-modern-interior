"use client";

import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimonialSlider } from '../../constants';
import { WrapperContainer, SliderLeftButton, SliderRightButton } from '..';


const Testimonials = () => {
    const sliderData = testimonialSlider;

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
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
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

                <Slider 
                ref={sliderRef} 
                {...settings}
                beforeChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)}
                >
                    {sliderData.map((slide, index) => (
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

                <div className="flex justify-center m-auto mt-10">
                    <div className="slider_line">
                        <span style={{ left: `${currentSlide * (100 / sliderData.length)}%` }}></span>
                    </div>
                </div>
                

                <div className="flex justify-end pr-5 slider-con pb-5 mt-10">
                    <div className="slider_nav w-full justify-between">
                        <div className="mr-2" onClick={handlePrevious}>
                            <SliderLeftButton/>
                        </div>
                        <div className="mx-2 flex"><span className="text-4xl font-extralight">{(currentSlide + 1).toString().padStart(2, '0')}</span> <span className="font-extralight text-xl">/</span> <span className="font-extralight text-xl">{sliderData.length.toString().padStart(2, '0')}</span></div>
                        <div onClick={handleNext}>
                            <SliderRightButton/>
                        </div>
                    </div>
                </div>

            </WrapperContainer>
        </section>
    )
}

export default Testimonials
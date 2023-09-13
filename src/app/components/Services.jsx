"use client";

import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { sliderContent } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { WrapperContainer } from '../components';


const Services = () => {
    const sliderRef = useRef(null);

    const handleNext = () => {
      sliderRef.current.slickNext();
    };
  
    const handlePrevious = () => {
      sliderRef.current.slickPrev();
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
        <section className="pt-10 pb-20">
            <WrapperContainer>
            <div className="pb-5">
                <div className="text-sm uppercase">What We Do</div>
                <h2 className="text-5xl md:text-6xl pt-3 font-light">Our Services</h2>
            </div>

            <div className="flex justify-end pr-5 slider-con pb-5">
                <div className="mr-2" onClick={handlePrevious}>
                <FontAwesomeIcon icon={ faChevronCircleLeft } />
                </div>
                <div onClick={handleNext}><FontAwesomeIcon icon={ faChevronCircleRight } /></div>
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
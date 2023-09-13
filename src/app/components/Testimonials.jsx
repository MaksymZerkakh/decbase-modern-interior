"use client";

import React, { useRef } from 'react';
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
    <section className="py-20">
      <WrapperContainer>
        <div className="text-sm uppercase text-center pb-3">Testimonials</div>
        <h2 className="text-center text-4xl font-light">See Whay Our Cliebt Say About Us</h2>

        <div className="flex justify-end pr-5 slider-con pb-5">
                <div className="mr-2" onClick={handlePrevious}>
                <FontAwesomeIcon icon={ faChevronCircleLeft } />
                </div>
                <div onClick={handleNext}><FontAwesomeIcon icon={ faChevronCircleRight } /></div>
            </div>

                
            <Slider ref={sliderRef} {...settings}>
                {testimonalSlieder.map((slide, index) => (
                    <div key={index} className="px-1">
                        <div className="slider px-8 py-10">
                          <div className="relative">
                            <FontAwesomeIcon icon={ faQuoteRightAlt } className="text-4xl absolute right-0 quote"/>
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
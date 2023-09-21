"use client";

import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { projects } from '../../constants';
import { WrapperContainer, SliderLeftButton, SliderRightButton, CustomButton } from '..';


const Projects = () => {
    const sliderData = projects;

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
        <section className="pt-10 pb-20 bg-white projects_section">
          <div className="relative overflow-hidden">
          <WrapperContainer>
              <div className="pb-5">
                  <div className="text-sm uppercase">Featured Work</div>
                  <h2 className="text-5xl md:text-6xl font-light pb-3">Our Projects</h2>
              </div>

              <div className="flex justify-end slider_line_con">
                  <div className="slider_line">
                      <span style={{ left: `${currentSlide * (100 / sliderData.length)}%` }}></span>
                  </div>

                  <div className="flex justify-end slider-con">
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
                        <div className="slider lg:flex">
                       
                          <div className="lg:w-2/4 slider_img" style={{ backgroundImage: `url(${slide.image})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'  }}/>
                     
                          <div className="lg:w-2/4 px-8 py-10">
                            <h2 className="pb-3 font-light text-2xl">{slide.title}</h2>
                            <p>{slide.description}</p>
                            <div className="pt-5"><CustomButton><a href="/">Learn More</a></CustomButton></div>
                          </div>
                      </div>
                    </div>
                ))}
            </Slider>

          </div>
        </section>
    )
}

export default Projects
"use client";

import { CustomButton, RowContainer, WrapperContainer } from ".."
import LazyLoad from 'react-lazy-load';
import Image from 'next/image'

const Experience = () => {
  return (
    <section id="experience" className="pt-10 pb-20 bg-white experience_section">
        <WrapperContainer>
            <RowContainer>
            <div className="lg:w-2/4 order-2 lg:order-1 md:pr-10 lg:py-20">
                <LazyLoad offset={300}>
                    <Image
                        src="/20year.webp"
                        alt="Hero Image"
                        className="responsive"
                        width={250}
                        height={300}
                        priority
                    />
                </LazyLoad>
                <h2 className="text-5xl md:text-6xl pt-3 pb-10 font-light">Years Of Successfuly Working The Market</h2>
                <div className="pt-5"><CustomButton aria-label="Contact">Contact Us</CustomButton></div>
            </div>

            <div className="lg:w-2/4 order-1 lg:order-2 pb-10 lg:pb-0 mx-auto">
                <div className="">
                    <LazyLoad offset={300}>
                        <Image
                            src="/20year_2.webp"
                            alt="Hero Image"
                            className="responsive"
                            width={751}
                            height={659}
                            priority
                        />
                    </LazyLoad>
                </div>
            </div>
            </RowContainer>
        </WrapperContainer>
    </section>
  )
}

export default Experience
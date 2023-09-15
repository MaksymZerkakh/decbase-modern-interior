import React from 'react'
import { WrapperContainer, RowContainer, CustomButton } from '../components';
import Image from 'next/image'

const Blog = () => {
  return (
    <section className="py-20 background-color blog_section">
        <WrapperContainer>
            <div className="pb-5">
                <div className="text-sm uppercase text-center pb-3">Latest News</div>
                <h2 className="text-center text-5xl lg:text-6xl font-light">From Our Blog</h2>
            </div>
            <RowContainer className="pt-10">
                <div className="pb-10 lg:pt-0 lg:pr-10">
                    <Image
                        src="/post-one.png"
                        alt="Hero Image"
                        className="mx-auto"
                        width={553}
                        height={386}
                        priority
                    />
                    <h3 className="text-3xl pt-10">2020 Interior Design Trends</h3>
                    <p className="pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.</p>
                    <CustomButton className="mt-5" style={{backgroundColor: '#37806B'}} aria-label="Continue Reading">Continue Reading</CustomButton>
                </div>

                <div>
                    <Image
                        src="/post-one.png"
                        alt="Hero Image"
                        className="mx-auto"
                        width={553}
                        height={386}
                        priority
                    />
                    <h3 className="text-3xl pt-10">28 Notable Product at ARC Interior Design</h3>
                    <p className="pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.</p>
                    <CustomButton className="mt-5" style={{backgroundColor: '#37806B'}} aria-label="Continue Reading">Continue Reading</CustomButton>
                </div>
            </RowContainer>
        </WrapperContainer>
    </section>
  )
}

export default Blog
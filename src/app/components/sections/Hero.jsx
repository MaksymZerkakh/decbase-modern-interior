import { CustomButton, WrapperContainer, RowContainer } from ".."
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home" className="py-10 bg-white">
        <WrapperContainer>
            <RowContainer>
                <div className="lg:w-2/4 order-2 lg:order-1 lg:pr-10 lg:pt-10">
                    <div className="text-sm uppercase">Modern Interior</div>
                    <h1 className="text-5xl md:text-8xl pt-3 pb-10 font-light">Create Your Interior Design</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    <div className="pt-10"><CustomButton style={{backgroundColor: '#37806B'}} aria-label="Contact Us"> <a href="/">Contact Us</a> </CustomButton></div>
                </div>

                <div className="lg:w-2/4 order-1 lg:order-2 pb-10 lg:pb-0 mx-auto">
                    <div>
                        <Image
                            src="/hero.webp"
                            alt="Hero Image"
                            width={751}
                            height={659}
                            priority
                        />
                    </div>
                </div> 

                <div className="hero_social">
                    <span aria-hidden="true">Follow +</span>
                    <ul className="flex justify-between w-full max-w-xs pt-5 social">
                        <li><a icon-content="fb" className="" href="/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a icon-content="li" className="" href="/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a icon-content="tw" className="" href="/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    </ul>
                </div> 
            </RowContainer>
        </WrapperContainer>
    </section>
  )
}

export default Hero
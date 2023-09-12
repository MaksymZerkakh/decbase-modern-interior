import { CustomButton, WrapperContainer, RowContainer } from "../components"
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="py-20">
        <WrapperContainer>
            <RowContainer>
                <div className="lg:w-2/4 order-2 lg:order-1 md:pr-10">
                    <div className="text-sm uppercase">Modern Interior</div>
                    <h1 className="text-5xl md:text-8xl pt-3 pb-10 font-normal">Create Your Interior Design</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. </p>
                    <div className="pt-10"><CustomButton>Contact Us</CustomButton></div>
                </div>

                <div className="lg:w-2/4 order-1 lg:order-2 pb-10 lg:pb-0 mx-auto">
                    <div className="">
                        <Image
                            src="/hero.png"
                            alt="Hero Image"
                            className="responsive"
                            width={751}
                            height={659}
                            priority
                        />
                    </div>
                </div> 
            </RowContainer>
        </WrapperContainer> 
    </section>
  )
}

export default Hero
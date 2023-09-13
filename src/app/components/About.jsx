import { CustomButton, WrapperContainer, RowContainer } from "../components"
import Image from 'next/image'

const About = () => {
  return (
    <section className="py-10">
        <WrapperContainer>
            <RowContainer>
            <div className="lg:w-2/4 md:pr-10 mx-auto pb-10 lg:pb-0">
                <div className="">
                    <Image
                        src="/about.png"
                        alt="Hero Image"
                        className="responsive"
                        width={751}
                        height={659}
                        priority
                    />
                </div>
            </div>

            <div className="lg:w-2/4 lg:pr-10 lg:pt-10">
                <div className="text-sm uppercase">About Us</div>
                <h2 className="text-5xl md:text-6xl pt-3 pb-10 font-light">Transforming Spaces: Unleashing the Art of Interior Design</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. </p>
                <div className="pt-10"><CustomButton style={{backgroundColor: '#37806B'}}>Learn More</CustomButton></div>
            </div>
            </RowContainer>
        </WrapperContainer>
    </section>
  )
}

export default About
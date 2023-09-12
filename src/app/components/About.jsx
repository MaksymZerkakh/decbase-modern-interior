import { CustomButton } from "../components"
import Image from 'next/image'

const About = () => {
  return (
    <section className="flex flex-col lg:flex-row py-20">
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

        <div className="lg:w-2/4 md:pr-10">
            <div className="text-sm uppercase">About Us</div>
            <h1 className="text-5xl md:text-8xl pt-3 pb-10 font-normal">Interioris The Will of An Epoch Mextreo</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. </p>
            <div className="pt-10"><CustomButton>Learn More</CustomButton></div>
        </div>
    </section>
  )
}

export default About
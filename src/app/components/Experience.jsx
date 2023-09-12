import { CustomButton, RowContainer, WrapperContainer } from "../components"
import Image from 'next/image'

const Experience = () => {
  return (
    <section className="py-20">
        <WrapperContainer>
            <RowContainer>
            <div className="lg:w-2/4 order-2 lg:order-1 md:pr-10 lg:py-20">
                <Image
                    src="/20year.png"
                    alt="Hero Image"
                    className="responsive"
                    width={250}
                    height={300}
                    priority
                />
                <h2 className="text-5xl md:text-8xl pt-3 pb-10 font-normal">Create Your Interior Design</h2>
                <div className="pt-5"><CustomButton>Contact Us</CustomButton></div>
            </div>

            <div className="lg:w-2/4 order-1 lg:order-2 pb-10 lg:pb-0 mx-auto">
                <div className="">
                    <Image
                        src="/20year_2.png"
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

export default Experience
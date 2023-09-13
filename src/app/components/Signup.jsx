import React from 'react';
import { WrapperContainer, RowContainer, CustomButton } from '../components';

const Signup = () => {
  return (
    <section className="py-20">
      <WrapperContainer>
        <h2 className="uppercase text-center text-5xl">Don&apos;t Forget To Sign Up</h2>
        <p className="text-center pt-10">Find out early about all upcoming promotions and new product releases with our newsletter.</p>
        <RowContainer>
          <div className="mx-auto pt-5">
            <input type="email" placeholder="Enter your email" className="p-2 border border-gray-400 rounded-l" />
            <CustomButton className="rounded-r">Subscribe</CustomButton>
          </div>
        </RowContainer>
      </WrapperContainer>
    </section>
  );
};

export default Signup;
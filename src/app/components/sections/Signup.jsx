import React from 'react';
import { WrapperContainer, RowContainer, Form } from '..';

const Signup = () => {
  return (
    <section className="py-20 bg-white">
      <WrapperContainer>
        <h2 className="text-center  text-5xl lg:text-6xl font-light">Don&apos;t Forget to Sign Up</h2>
        <p className="text-center pt-10">Find out early about all upcoming promotions and new product releases with our newsletter.</p>
        <RowContainer>
          <Form />
        </RowContainer>
      </WrapperContainer>
    </section>
  );
};

export default Signup;
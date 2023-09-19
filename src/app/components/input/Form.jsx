import React from 'react';
import CustomButton from '../ui/CustomButton';

const Form = () => (
    <form className="mx-auto pt-5 lg:flex static">
        <input type="email" placeholder="Enter your email" className="p-0 px-2 rounded-tl-2xl rounded-br-2xl lg:rounded-br-none w-full mb-5 lg:mb-0 lg:w-96" />
        <CustomButton
            type=""
            isFormButton={true}
            className="rounded-tl-2xl lg:rounded-tl-none rounded-br-2xl w-full lg:w-auto"
            aria-label="Subscribe"
        >
            Subscribe
        </CustomButton>
    </form>

);

export default Form;

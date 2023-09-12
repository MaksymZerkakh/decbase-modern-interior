import React from 'react';

const WrapperContainer = ({ children }) => {
  return (
    <div className="mx-auto max-w-screen-xl px-10">
      {children}
    </div>
  );
};

export default WrapperContainer;

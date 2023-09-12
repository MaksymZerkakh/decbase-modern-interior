import React from 'react';

const RowContainer = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      {children}
    </div>
  );
};

export default RowContainer;

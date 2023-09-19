import React from 'react';

const RowContainer = ({ children, className, style }) => {
  return (
    <div className={`flex flex-col lg:flex-row ${className}`} style={style}>
      {children}
    </div>
  );
};

export default RowContainer;


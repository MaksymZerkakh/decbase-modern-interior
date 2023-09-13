import React from 'react';

const CustomButton = ({ onClick, children, className, color, radius, type, style }) => {
  const buttonColor = color || '#CAA892'; // Default color
  const buttonRadius = radius || '15px 0 15px 0'; // Default radius

  return (
    <button
      type={type}
      className={`custom-button ${className}`}
      style={{ backgroundColor: buttonColor, borderRadius: buttonRadius, ...style }}
    >
      {children}
    </button>
  );
};

export default CustomButton;
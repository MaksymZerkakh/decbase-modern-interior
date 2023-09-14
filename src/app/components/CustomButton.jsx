import React from 'react';

const CustomButton = ({ onClick, children, className, color, radius, type, style, isFormButton }) => {
  const buttonColor = color || '#CAA892'; 
  const secondaryBtnColor = '#37806B';
  const buttonRadius = radius || '15px 0 15px 0';

  const buttonStyle = isFormButton ? { backgroundColor: secondaryBtnColor } : { backgroundColor: buttonColor, borderRadius: buttonRadius };

  return (
    <button
      type={type}
      className={`custom-button ${className}`}
      style={{ ...buttonStyle, ...style }}
    >
      {children}
    </button>
  );
};

export default CustomButton;
const CustomButton = ({ onClick, children, className }) => {
    return (
      <button className={`custom-button ${className}`}>
        {children}
      </button>
    );
  };
  
  export default CustomButton;
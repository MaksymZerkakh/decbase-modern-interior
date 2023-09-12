const CustomButton = ({ onClick, children }) => {
    return (
      <button className="custom-button">
        {children}
      </button>
    );
  };
  
  export default CustomButton;
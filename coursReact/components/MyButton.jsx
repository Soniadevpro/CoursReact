import { useState } from "react";
const HoverButton = () => {
    const [isHovered, setIsHovered] = useState(false);
  
    const styles = {
      backgroundColor: isHovered ? "blue" : "gray", 
      color: "white",
      padding: "20px 40px",
      border: "none",
      cursor: "pointer",
      borderRadius: "40px"
    };
  
    return (
      <button
        style={styles}
        onClick={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        CLiCK
      </button>
    );
  };
  
  export default HoverButton;

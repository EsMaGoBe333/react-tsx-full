import React from "react";

type BotonProps = {
  children: React.ReactNode;
  handleClick: () => void;
};

const styles: React.CSSProperties = {
  padding: "8px 12px",
  border: "1px solid black",
  borderRadius: "5px",
  backgroundColor: "white",
};

const Boton: React.FC<BotonProps> = ({ children, handleClick }) => {
  return (
    <button type="button" onClick={handleClick} style={styles}>
      {children}
    </button>
  );
};

export default Boton;
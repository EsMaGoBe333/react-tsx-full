import { useState, useEffect } from "react";
import "./Acordeon.css";

const Acordeon = ({ children, titulo, cerrado = true }) => {
  const [estaCerrado, setEstaCerrado] = useState(null);

  useEffect(() => {
    setEstaCerrado(cerrado);
  }, [cerrado]);

  return (
    <div className="acordeon">
      <div
        className="acordeon-heading"
        onClick={() => setEstaCerrado(!estaCerrado)}
      >
        <h3>{titulo}</h3>
      </div>
      <div
        className={"acordeon-content " + (estaCerrado ? "cerrado" : "abierto")}
      >
        {children}
      </div>
    </div>
  );
};

export default Acordeon;

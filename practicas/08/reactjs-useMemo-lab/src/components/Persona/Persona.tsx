import React, { useState, useMemo } from "react";

const Persona = () => {
  const [nombre, setNombre] = useState("Charly");
  const [apellido, setApellido] = useState("Falco");
  const [email, setEmail] = useState("cfalco@gmail.com");

  const nombreCompleto = useMemo(() => {
    console.log("nombreCompleto");
    return (
      <span>
        {nombre} {apellido}
      </span>
    );
  }, [nombre, apellido]);

  return (
    <div>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <hr />
      <p>{nombreCompleto}</p>
      <p>{email}</p>
    </div>
  );
};

export default Persona;

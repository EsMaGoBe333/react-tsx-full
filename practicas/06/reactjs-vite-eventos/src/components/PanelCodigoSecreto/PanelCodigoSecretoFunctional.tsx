import React, { useState } from "react";

const PanelCodigoSecreto = () => {

  //const [state, setState] = useState<state>({
   // codigoSecreto: "3038",
   // CodigoActual: ''
  //})
  const [codigoActual, setCodigoActual] = useState("");
  const codigoSecreto = "3038";

  const handleClick = (event: React.MouseEvent<HTMLDivElement> ) => {
    const teclaPulsada = (event.target as HTMLElement).textContent;
    //const { codigoActual, codigoSecreto } = state;

    let nuevoCodigoActual = codigoActual;
    if (teclaPulsada === "CLD") {
      nuevoCodigoActual = "";
    } else if (teclaPulsada === "DEL") {
      nuevoCodigoActual = codigoActual.slice(0, codigoActual.length - 1);
    } else {
      if (codigoActual.length < 4) {
        nuevoCodigoActual = codigoActual + teclaPulsada;
        if (nuevoCodigoActual === codigoSecreto) {
          nuevoCodigoActual = "CODE OK";
        }
      }
    }

    //setState({...state,codigoActual: nuevoCodigoActual})

    ///setCodigoActual(nuevoCodigoActual);
  };

  return (
    <div className="panel-codigo-secreto">
      <div className="display">{state.codigoActual}</div>
      <div className="teclas" onClick={handleClick}>
        <div className="fila-teclas">
          <button type="button" className="tecla">
            1
          </button>
          <button type="button" className="tecla">
            2
          </button>
          <button type="button" className="tecla">
            3
          </button>
        </div>
        <div className="fila-teclas">
          <button type="button" className="tecla">
            4
          </button>
          <button type="button" className="tecla">
            5
          </button>
          <button type="button" className="tecla">
            6
          </button>
        </div>
        <div className="fila-teclas">
          <button type="button" className="tecla">
            7
          </button>
          <button type="button" className="tecla">
            8
          </button>
          <button type="button" className="tecla">
            9
          </button>
        </div>
        <div className="fila-teclas">
          <button type="button" className="tecla">
            CLD
          </button>
          <button type="button" className="tecla">
            0
          </button>
          <button type="button" className="tecla">
            DEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default PanelCodigoSecreto;

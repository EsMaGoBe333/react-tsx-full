import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MiComponente from "./MiComponente";
import HolaMundo from "./HolaMundo";
import Sugus from "./componentes/Sugus";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Sugus sabor="limón" color="#FDE23A" />
        <Sugus sabor="naranja" color="#F28E40" />
        <Sugus sabor="piña" color="#227BBE" />
        <Sugus sabor="cereza" color="#AD3B52" />
        <Sugus sabor="fresa" color="#EA464C" />
      </div>
      <HolaMundo nombre="Pepe" edad={12} />
      <MiComponente />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

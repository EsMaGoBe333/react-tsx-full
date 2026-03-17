import React, { useState } from "react";
import CmpConsumidor from "./componentes/CmpConsumidor/CmpConsumidor";
import Boton from "./componentes/Boton/Boton";
import withHover from "./hoc/withHover/withHover";

export const ThemeContext = React.createContext<React.CSSProperties>({
  backgroundColor: "white",
  color: "black",
});

const BotonWithHover = withHover(Boton);

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const stylesThemeMode: React.CSSProperties = darkMode
    ? {
        backgroundColor: "black",
        color: "white",
      }
    : {
        backgroundColor: "white",
        color: "black",
      };

  return (
    <div>
      <div>
        <Boton handleClick={() => alert("Hola mundo!!!")}>
          Saludar al mundo
        </Boton>

        <BotonWithHover handleClick={() => alert("Bienvenid@s...")}>
          Dar bienvenida
        </BotonWithHover>
      </div>

      <button type="button" onClick={() => setDarkMode(!darkMode)}>
        Activado {darkMode ? "dark mode" : "light mode"}
      </button>

      <ThemeContext.Provider value={stylesThemeMode}>
        <CmpConsumidor />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
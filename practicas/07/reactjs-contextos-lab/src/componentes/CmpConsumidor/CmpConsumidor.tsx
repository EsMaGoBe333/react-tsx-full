import { ThemeContext } from "../../App";

const CmpConsumidor = () => {
  return (
    <ThemeContext.Consumer>
      {(styles) => (
        <div style={styles}>
          <p>Este componente consumirá el valor del context</p>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default CmpConsumidor;

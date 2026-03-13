const estilos: any = {
  backgroundColor: "#242424",
  width: "100%",
  height: "50px",
};

const HolaMundo = (props: HolaMundoProps) => (
  <div style={estilos}>
    <h1>
      Hola {props.nombre} mundo! Edad: {props.edad}
    </h1>
  </div>
);

export default HolaMundo;

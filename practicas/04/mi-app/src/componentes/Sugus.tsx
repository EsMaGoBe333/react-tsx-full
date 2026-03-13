const styles = {
  envoltorio: {
    border: "1px solid black",
    width: "100px",
    height: "100px",
    borderRadius: "5px",
    color: "white",
    position: "relative",
    margin: "10px",
    overflow: "hidden",
  },
  letras: {
    textAlign: "center",
    transformOrigin: "center center",
    transform: "rotate(-45deg)",
    position: "absolute",
    top: "25px",
    left: "30px",
    textShadow: `
      60px 0px 0px,
      -60px 0px 0px,
      -25px 30px 0px,
      25px -30px 0px,
      30px 30px 0px,
      -30px -30px 0px,
      0px 60px 0px,
      0px -60px 0px
    `,
  },
};

interface SugusProps {
  sabor: string;
  color: string;
}

const Sugus = ({ sabor, color }: SugusProps) => {
  return (
    <div style={{ ...styles.envoltorio, backgroundColor: color }}>
      <p style={styles.letras}>{sabor}</p>
    </div>
  );
};

export default Sugus;

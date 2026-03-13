import { Component } from "react";

class MiComponente extends Component {
  constructor(props) {
    super(props);
    console.log("construyendo mi componente");
  }

  render() {
    return <h1>Hola mundo</h1>;
  }
}

export default MiComponente;

import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetallesCarro from "./DetallesCarro";

const styles = {
  carro: {
    backgroundColor: "#359a2c",
    color: "#fff",
    border: "none",
    padding: "15px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  bubble: {
    position: "relative",
    left: 12,
    top: 20,
  },
};

class Carro extends Component {
  render() {
    const { carro, mostrarCarro, esCarroVisible } = this.props;

    let sumaTotal = 0;
    {
      for (const x of carro) {
        sumaTotal += x.cantidad;
      }
    }

    const cantidad = carro.cantidad;
    return (
      <div>
        <span style={styles.bubble}>
          {sumaTotal !== 0 ? <BubbleAlert value={sumaTotal} /> : null}
        </span>
        <button onClick={mostrarCarro} style={styles.carro}>
          Carro
        </button>
        {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
      </div>
    );
  }
}

export default Carro;

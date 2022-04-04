import { Component } from "react";

class Producto extends Component {
  render() {
    const { producto } = this.props;
    return (
      <div>
        <img alt={producto.name} src={producto.img}></img>
        <h3>{producto.nombre}</h3>
        <p>{producto.price}</p>
      </div>
    );
  }
}

export default Producto;

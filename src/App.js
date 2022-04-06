import { Component } from "react";
import Productos from "./components/Productos";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    productos: [
      { nombre: "Tomate", price: 20, img: "/productos/tomate.jpg" },
      { nombre: "Lechuga", price: 30, img: "/productos/lechuga.jpg" },
      { nombre: "Arbejas", price: 25, img: "/productos/arbejas.jpg" },
    ],
    carro: [],
  };

  agregarAlCarro = (producto) => {
    const { carro } = this.state;
    if (carro.find((x) => x.nombre === producto.nombre)) {
      const newCarro = carro.map((x) =>
        x.nombre === producto.nombre ? { ...x, cantidad: x.cantidad + 1 } : x
      );
      return this.setState({ carro: newCarro });
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      }),
    });
  };

  render() {
    return (
      <div>
        <Navbar carro={this.state.carro} />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;

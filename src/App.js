import { Component } from "react";
import Productos from "./components/Productos";
import Layout from "./components/Layout";

class App extends Component {
  state = {
    productos: [
      { nombre: "Tomate", price: 20, img: "/productos/tomate.jpg" },
      { nombre: "Lechuga", price: 30, img: "/productos/lechuga.jpg" },
      { nombre: "Arbejas", price: 25, img: "/productos/arbejas.jpg" },
    ],
  };

  render() {
    return (
      <div>
        <Layout>
          <Productos
            agregarAlCarro={() => {}}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;

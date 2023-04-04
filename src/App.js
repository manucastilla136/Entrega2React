import "./App.css";
import { Body } from "./components/Body/Body";
import { NavBar } from "./components/NavBar/NavBar/NavBar";
import { Tienda } from "./components/Tienda/Tienda";
import Titulo from "./components/Titulo/Titulo";
function App() {
  let saludo =
    "CompuMundoHyperMegaRed Homero Simpson vicepresidente Jr. para servirle, ¿en qué podemos servirle?";
  return (
    <div className="App">
      <NavBar />
      <Titulo saludo={saludo} />
      <Body />
      <Tienda />
    </div>
  );
}

export default App;

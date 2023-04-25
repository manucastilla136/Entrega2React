import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar/NavBar";
import TiendaContainer from "./components/Tienda/TiendaContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<TiendaContainer />} />
          <Route path="/category/:name" element={<TiendaContainer />} />
          <Route path="/ItemDetail/:id" element={<ItemDetail />} />
          <Route path="*" element={<h2>La pagina no existe</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

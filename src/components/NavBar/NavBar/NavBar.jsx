import CartWidget from "../../CartWidget/CartWidget";
import "./NavBar.css";

import React from "react";

export const NavBar = () => {
  return (
    <div className="Navbar">
      <h3>CompuMundoHyperMegaRed</h3>
      <ul
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <li>Inicio</li>
        <li>Productos</li>
        <li>Nosotros</li>
      </ul>
      <h2>
        <CartWidget />
      </h2>
    </div>
  );
};

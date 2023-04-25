import CartWidget from "../../CartWidget/CartWidget";
import "./NavBar.css";
import { Outlet, Link } from "react-router-dom";
import React from "react";

export const NavBar = ({ children }) => {
  return (
    <div>
      <div className="Navbar">
        <link to="/">
          <h3>SpaceGuitars Logo</h3>
        </link>
        <ul
          style={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <link to="/">Inicio</link>
          <link to="/category/Gibson">Gibson</link>
          <link to="/category/Fender">Fender</link>
        </ul>
        <h2>
          <CartWidget />
        </h2>
      </div>
      <Outlet />
    </div>
  );
};

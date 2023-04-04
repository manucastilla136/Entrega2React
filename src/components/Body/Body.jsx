import "./Body.css";
import { useState } from "react";
import React from "react";

export const Body = () => {
  const [internet, setInternet] = useState("");
  const dinero = () => {
    setInternet("¿Puede darme dinero? :(");
    /*cuando intento poner la imagen de homero se rompe la pagina*/
  };
  return (
    <div>
      <button onClick={dinero}>
        Quisiera actualizar mi conexión a la red de 28.8 kilobaudios a una línea
        T1 de fibra óptica. ¿Tiene usted un servidor con ruteador compatible con
        mi configuración LAN Ethernet Token Ring?
      </button>
      <h2>{internet}</h2>
    </div>
  );
};

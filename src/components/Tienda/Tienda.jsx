import { useState } from "react";
import imgTomaco from "../../assets/images/Tomaco.jpg";
import React from "react";

export const Tienda = () => {
  const [counter, setCounter] = useState(0);

  const sumar = () => {
    setCounter(counter + 1);
  };
  const restar = () => {
    setCounter(counter - 1);
  };
  const sumar10 = () => {
    setCounter(counter + 10);
  };
  const restar10 = () => {
    setCounter(counter - 10);
  };
  return (
    <div>
      <h1>Tambien vendemos Tomaco</h1>
      <img src={imgTomaco} alt="" />
      <h2>¿Cuantos tomacos quiere?</h2>
      <h3>{counter}</h3>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={sumar10}>Sumar 10</button>
      <button onClick={restar10}>Restar 10</button>
    </div>
  );
};

import React from "react";

export const ItemDetails = ({ productos }) => {
  return (
    <div>
      <img src={productos.image} alt="Guitarra" />
      <h2>{productos.title}</h2>
      <h3>{productos.description}</h3>
    </div>
  );
};

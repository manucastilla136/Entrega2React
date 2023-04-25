import React, { useEffect, useState } from "react";
import { ItemDetails } from "./ItemDetails";
import { productos } from "../../productsMock";
import { useParams } from "react-router-dom";
export const ItemDetailsContainer = () => {
  const [productos, setProductos] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let encontrado = productos.find((prod) => prod.id === +id);
    setProductos(encontrado);
  }, [id]);
  return (
    <div>
      <ItemDetails productos={productos} />
    </div>
  );
};

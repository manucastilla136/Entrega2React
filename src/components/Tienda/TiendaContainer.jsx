import { useState, useEffect } from "react";
import Tienda from "./Tienda";
import productos from "../../productsMock";
import { useParams } from "react-router-dom";
const TiendaContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  useEffect(() => {
    const productsfiltered = productos.filter(
      (prod) => prod.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? productsfiltered : productos);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);

  return (
    <div>
      <Tienda items={items} />
    </div>
  );
};

export default TiendaContainer;

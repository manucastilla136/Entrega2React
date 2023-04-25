import { ItemCard } from "./ItemCard";

const Tienda = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return <ItemCard item={item} key={item.id} />;
      })}
    </div>
  );
};
export default Tienda;

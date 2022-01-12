import { memo } from "react";
import Item from "../Item/Item";

const ItemList = memo(({ products }) => {
  return (
    <>
      {products.map((product) => (
        <Item product={product} />
      ))}
    </>
  );
});

export default ItemList;

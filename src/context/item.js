import ItemContext from "./item_context";
import { useState } from "react";
const ItemState = (props) => {
  const [itemCount, setItemCount] = useState(1);
  const updateItemCount = (i) => {
    setItemCount(i);
  };
  return (
    <ItemContext.Provider value={{ itemCount, updateItemCount }}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemState;

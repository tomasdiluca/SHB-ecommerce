import { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  function addToCart(item) {
    const index = cartList.findIndex((i) => i.id === item.id);

    if (index > -1) {
      const oldQuantity = cartList[index].quantity;

      cartList.splice(index, 1);
      setCartList([
        ...cartList,
        {
          ...item,
          quantity: item.quantity + oldQuantity,
        },
      ]);
    } else {
      setCartList([...cartList, item]);
    }
  }

  let totalCart = 0;
  let totalQuantity = 0;

  cartList.forEach(function (item) {
    totalCart += item.quantity * item.price;
    totalQuantity += item.quantity;
  });

  const removeItem = (item) => {
    const index = cartList.findIndex((i) => i.id === item);

    cartList.splice(index, 1);
    setCartList([...cartList]);
  };

  function emptyCart() {
    setCartList([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        totalCart,
        totalQuantity,
        addToCart,
        emptyCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

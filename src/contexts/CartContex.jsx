import {createContext} from "react";
import {useCart} from "../hooks/useCart";

export const cartContext = createContext();

export const CartContext = ({ children }) => {
  const {cartProducts, loading, cartId} = useCart(2);

  return (
    <cartContext.Provider value={{ cartProducts, loading, cartId }}>
      {children}
    </cartContext.Provider>
  );
};

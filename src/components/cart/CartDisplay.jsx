import {cartContext} from "@/src/contexts/CartContex";
import {useContext} from "react";
import {Loader} from "../common/Loader";
import {CartLineItem} from "./CartLineItem";

export const CartDisplay = () => {
  const { cartProducts, loading } = useContext(cartContext);

  if (loading === true) {
    return (
      <div className="container mx-auto px-4">
        <Loader size="50"></Loader>
      </div>
    );
  }

  return (
    <table>
      <thead>
        <tr className="border-b-2 border-zinc-200">
          <th></th>
          <th></th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        {cartProducts.map((cartProduct) => {
          return (
            <CartLineItem
              cartProduct={cartProduct}
              key={cartProduct.productId}
            ></CartLineItem>
          );
        })}
      </tbody>
    </table>
  );
};

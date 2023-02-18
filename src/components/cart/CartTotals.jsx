import {cartContext} from "@/src/contexts/CartContex";
import {useProducts} from "@/src/hooks";
import {useContext} from "react";
import {Price} from "../common/Price";
import {Loader} from "../common/Loader";

export const CartTotals = () => {
  // alias destructure:
  const { cartProducts } = useContext(cartContext);

  const { products, loading } = useProducts();

  if (loading) {
    return (
      <div className="container mx-auto px-4">
        <Loader size="50"></Loader>
      </div>
    );
  }

  const total = cartProducts.reduce((total, { quantity, productId }) => {
    const product = products.find((product) => {
      return product.id === productId;
    });
    const { price } = product;

    total += quantity * price;

    return total;
  }, 0);

  return (
    <>
      <div className="bg-zinc-100 px-5 py-2">
        <h1 className="text-black font-bold uppercase">Cart Totals</h1>
      </div>

      <div className="py-4">
        <span className="font-bold text-black mr-2 ">Total:</span>
        <Price product={{ price: total }} className="text-black font-bold"></Price>
      </div>
    </>
  );
};

import {cartContext} from "@/src/contexts/CartContex";
import {useProducts} from "@/src/hooks";
import {useContext} from "react";
import {ProductPrice} from "../catalog/ProductPrice";
import {Loader} from "../common/Loader";

export const CartTotals = () => {
  // alias destructure:
  const { cartProducts } = useContext(cartContext);

  const { products, loading } = useProducts();

  if (loading) {
    <div className="container mx-auto px-4">
      <Loader></Loader>
    </div>
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
      <div>Total:
        <ProductPrice product={{ price: total}}></ProductPrice>
      </div>
    </>
  );
};

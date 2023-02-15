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
    return (
      <div className="container mx-auto px-4">
        <Loader></Loader>
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
      <h1>Cart Totals</h1>

      <div>
        Total:
        <ProductPrice product={{ price: total }}></ProductPrice>
      </div>
    </>
  );
};

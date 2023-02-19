import {cartContext} from "@/src/contexts/CartContex";
import {useAddToCart} from "@/src/hooks";
import {useContext} from "react";
import {Loader} from "../common/Loader";

export const AddToCart = ({ product }) => {
  const { title, id } = product;
  const { addToCart, loading } = useAddToCart();
  const {cartProducts} = useContext(cartContext);

  const cartProduct = cartProducts.find(({ productId }) => {
    return productId === id;
  });

  if (cartProduct) {
    return <></>
  }

  const onClick = () => {
    addToCart(product);
  };

  return (
    <button
      className="bg-black text-white uppercase font-medium text-sm py-3 px-6 hover:bg-amber-900 transition-colors"
      type="button"
      onClick={onClick}
      title={`Add ${title} to cart`}
      disabled={loading}
    >
      <span className="block w-36">
        {loading ?
          <Loader size="20"></Loader>
        : 'Add to cart'}
      </span>
    </button>
  );
};

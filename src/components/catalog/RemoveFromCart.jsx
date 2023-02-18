import {useRemoveFromCart} from "@/src/hooks";
import {Loader} from "../common/Loader";

export const RemoveFromCart = ({ product }) => {
  const { title } = product;
  const { removeFromCart, loading } = useRemoveFromCart();

  const removeProductFromCart = () => {
    removeFromCart(product);
  };

  return (
    <button
      className="bg-black text-white uppercase font-medium text-sm py-3 px-6 hover:bg-amber-900 transition-colors"
      type="button"
      onClick={removeProductFromCart}
      title={`Remove ${title} from cart`}
      disabled={loading}
    >
      <span className="block w-36">
        {loading ?
          <Loader size="20"></Loader>
        : 'Remove from cart'}
      </span>
    </button>
  );
};

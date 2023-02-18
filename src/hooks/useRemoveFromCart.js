import { useContext, useState } from 'react';
import { baseUrl } from '..';
import { cartContext } from '../contexts/CartContex';

export const useRemoveFromCart = () => {
  const { cartProducts, cartId, userId, setCartProducts } =
    useContext(cartContext);

  const [loading, setLoading] = useState(false);

  const removeFromCart = (product, quantity = 1) => {
    const newProducts = [...cartProducts];

    const cartProduct = newProducts.find(({ productId }) => {
      return productId === product.id;
    });

    if (cartProduct.quantity > 1) {
      cartProduct.quantity -= quantity;
    } else {
      const index = newProducts.indexOf(cartProduct);
      newProducts.splice(index, 1);
    }

    const payload = {
      cartId,
      userId,
      date: new Date().toLocaleDateString().replaceAll('/', '-'),
      products: newProducts,
    };

    setLoading(true);

    fetch(`${baseUrl}/carts/${cartId}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    })
      .then((response) => {
        return response.json();
      })
      .then((cart) => {
        console.log(cart);
        setCartProducts(newProducts);
      })
      .finally(() => {
        setLoading(false);
      });

    return {
      productId: product.id,
      quantity,
    };
  };

  return { loading, removeFromCart };
};

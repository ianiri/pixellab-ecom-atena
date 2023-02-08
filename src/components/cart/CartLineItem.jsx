import {useProduct} from '@/src/hooks';
import {ProductPrice} from '../catalog/ProductPrice';

export const CartLineItem = ({ cartProduct }) => {
  const { productId, quantity } = cartProduct;

  const { product, loading } = useProduct(productId);

  if (loading) {
    return (
      <tr>
        <td colSpan="6">...loading</td>
      </tr>
    );
  }

  const { title, image, price } = product;

  return (
    <tr>
      <td>{/* add a remove all button */}</td>

      <td>{/* insert image */}</td>

      <td>
        <h1>{title}</h1>
        {/* insert ratings */}
      </td>

      <td>{price}</td>

      <td>{quantity}</td>

      <td>
        <ProductPrice product={{ price: quantity * price }}></ProductPrice>
      </td>
    </tr>
  );
};

import {useProduct} from '@/src/hooks';
import Image from 'next/image';
import Link from 'next/link';
import {ProductPrice} from '../catalog/ProductPrice';
import {ProductRatings} from '../catalog/ProductRatings';

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

  const { title, image, price, rating } = product;
  const { rate, count } = rating;

  return (
    <tr className="border-b-2 border-zinc-200">
      <td>{/* add a remove all button */}</td>

      <td className="p-4">
        <Link href={`/products/${productId}`} title={title}>
          <Image
            alt={`Image for product ${title}`}
            src={image}
            width="80"
            height="80"
            objectFit="contain"
            className="inline"
          ></Image>
        </Link>
      </td>

      <td>
          <Link href={`/products/${productId}`} title={title}>
            <h1 className="text-black font-bold">{title}</h1>
          </Link>
        <div>
          <ProductRatings rate={rate} count={count}></ProductRatings>
        </div>
      </td>

      <td className="p-5">
        <ProductPrice product={{ price }} className="text-black font-bold"></ProductPrice>
      </td>

      <td>{quantity}</td>

      <td className="p-5">
        <ProductPrice product={{ price: quantity * price }} className="text-black font-bold"></ProductPrice>
      </td>
    </tr>
  );
};

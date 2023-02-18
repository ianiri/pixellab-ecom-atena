import Image from 'next/legacy/image';
import Link from 'next/link';
import {AddToCart} from './AddToCart';
import {Price} from '../common/Price';
import {RemoveFromCart} from './RemoveFromCart';
import {useContext} from 'react';
import {cartContext} from '@/src/contexts/CartContex';

export const ProductTile = ({ product, path }) => {
  const { title, image, id } = product;
  const {cartProducts} = useContext(cartContext);

  const cartProduct = cartProducts.find(({ productId }) => {
    return productId === id;
  });

  console.log(cartProduct, 'cartProduct TILE')

  return (
    <article className="h-full flex flex-col justify-between items-center text-center">
      <header>
        <div>
          <Link href={path} title={title}>
            <Image
              alt={`Image for product ${title}`}
              src={image}
              width="200"
              height="200"
              objectFit="contain"
              className="inline"
            ></Image>
          </Link>
        </div>

        <h1>
          <Link href={path} title={title}>
            {title}
          </Link>
        </h1>
      </header>

      <section>
        <Price product={product}></Price>
      </section>

      <footer className="mt-2">
      {cartProduct ?
          <RemoveFromCart product={product}></RemoveFromCart>
        : <AddToCart product={product}></AddToCart>}
      </footer>
    </article>
  );
};


import {useProduct} from '@/src/hooks';
import { Separator } from '../ui';
import Image from 'next/legacy/image';
import {Price} from '../common/Price';
import {AddToCart} from './AddToCart';
import {Error404} from '../ui/Error404';
import {Loader} from '../common/Loader';
import {ProductRatings} from './ProductRatings';
import {RelatedProducts} from './RelatedProducts';
import {useContext} from 'react';
import {cartContext} from '@/src/contexts/CartContex';
import {RemoveFromCart} from './RemoveFromCart';

export const ProductDisplay = ({ productId }) => {
  const { product, httpStatus, loading } = useProduct(productId);
  const {cartProducts} = useContext(cartContext);

  const cartProduct = cartProducts.find(({ productId }) => {
    return productId === productId;
  });


  if (loading) {
    return (
      <div className="container mx-auto px-4">
        <Loader size="50"></Loader>
      </div>
    );
  }

  if (httpStatus === 404) {
    return (
      <>
        <Error404></Error404>
        <div className="container text-center text-black font-bold px-4 mx-auto">Either we broke something or the product you are searching for is not available.</div>
      </>
    );
  }

  const { title, image, description, rating, category, id } = product;
  const { rate, count } = rating;

  return (
    <article>
      <section className="grid lg:grid-cols-2 gap-6 container mx-auto px-4">
        <picture className="text-center">
          <Image
            width="500"
            height="500"
            alt={`Image of ${title}`}
            className=""
            src={image}
            objectFit="contain"
          ></Image>
        </picture>

        <div>
          <h1 className="text-center text-2xl text-black font-medium uppercase">{title}</h1>
          <div className="flex justify-center">
            <ProductRatings rate={rate} count={count}></ProductRatings>
          </div>

          <div>
            <p className="my-8">{description}</p>

            <Price product={product} className="text-2xl text-black font-bold"></Price>
          </div>

          <div className="my-8">
          {cartProduct.quantity > 1 ?
              <RemoveFromCart product={product}></RemoveFromCart>
            : <AddToCart product={product}></AddToCart>}
          </div>
        </div>
      </section>

      <div className="my-10">
        <Separator></Separator>
      </div>
      <section className="container mx-auto px-4">
        <RelatedProducts productCategory={category} productId={id}></RelatedProducts>
      </section>
    </article>
  );
};

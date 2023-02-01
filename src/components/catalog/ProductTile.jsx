import Image from 'next/legacy/image';
import Link from 'next/link';
import {ProductPrice} from './ProductPrice';

export const ProductTile = ({ product }) => {
  const { title, image, price, id } = product;

  return (
    <article className="text-center">
      <header>
        <div>
          <Link href={`products/${id}`} title={title}>
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
          <Link href={`products/${id}`} title={title}>
            {title}
          </Link>
        </h1>
      </header>

      <section>
        <ProductPrice product={product}></ProductPrice>
      </section>

      <footer>{/* add to cart */}</footer>
    </article>
  );
};

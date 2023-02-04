import Image from 'next/legacy/image';
import Link from 'next/link';
import {AddToCart} from './AddToCart';
import {ProductPrice} from './ProductPrice';

export const ProductTile = ({ product, path }) => {
  const { title, image, id } = product;

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
        <ProductPrice product={product}></ProductPrice>
      </section>

      <footer className="mt-2">
        <AddToCart product={product}></AddToCart>
      </footer>
    </article>
  );
};

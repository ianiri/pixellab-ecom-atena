import {useProducts} from '@/src/hooks';
import {UiContext} from '@/src/pages/_app';
import {css} from '@emotion/css';
import { useContext, useEffect, useState } from 'react';
import { ProductTile } from '.';
import {Loader} from '../common/Loader';

export const ProductGrid = () => {
  const {products, loading, error} = useProducts();
  const {itemsPerRow: perRow, pagination} = useContext(UiContext);
  const [paginatedProducts, setPaginationProducts] = useState([]);
  const {perPage, page} = pagination;

  // useMemo
  const itemsPerRow = parseInt(perRow);

  useEffect(() => {
    setPaginationProducts(products.slice().splice(perPage * (page - 1), perPage));
  }, [products, setPaginationProducts, perPage, page]);

  if (loading === true) {
    return (
      <div className="container mx-auto px-4">
        <Loader size="50"></Loader>
      </div>
    );
  }

  if (error.length > 0) {
    return <>error</>;
  }

  if (products.length < 1) {
    return <>There are no products</>;
  }

  const gridCss = css`
    display: grid;
    row-gap: 32px;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(${itemsPerRow}, 1fr);
      column-gap: 32px;
    }
  `;

  return (
    <ul className={gridCss}>
      {paginatedProducts.map((product) => {
        const { id } = product;

        return (
          <li key={id}>
            <ProductTile product={product} path={`products/${id}`}></ProductTile>
          </li>
        );
      })}
    </ul>
  );
};

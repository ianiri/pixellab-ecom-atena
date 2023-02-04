import {baseUrl} from "@/src";
import {useProduct} from "@/src/hooks";
import {useEffect, useState} from "react";
import {Loader} from "../common/Loader";
import {ProductTile} from "./ProductTile";

export const RelatedProducts = ({productCategory, productId}) => {
  const [products, setProducts] = useState(null);
  const {loading} = useProduct(productId);

  useEffect(() => {
    fetch(`${baseUrl}/products/category/${productCategory}?limit=4`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setProducts(result);
      });
  });

  if (products === null) {
    return (
      <div className="container text-center text-black font-bold px-4 pt-6">
        There are no related products.
      </div>
    );
  }

  return (
    <>
      <div className="text-center text-lg text-black font-bold uppercase my-6">related products</div>
      <ul className="mt-6 grid lg:grid-cols-4 gap-8">
        {products.map((product) => {
          const { id } = product;

          if (id === productId) {
            return;
          }

          return (
            <li key={id}>
              <ProductTile product={product} path={`${id}`}></ProductTile>
            </li>
          );
        })}
      </ul>
    </>
  );
}

// raspunde la URL-uri de tipul /products/1  /products/2

import {baseUrl} from "@/src";
import {CartControls} from "@/src/components/cart/CartControls";
import {Layout} from "@/src/layouts/Layout";
import Head from "next/head";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const router = useRouter();
  const { pid } = router.query;

  useEffect(() => {
    fetch(`${baseUrl}/products/${pid}`)
      .then((response) => {
        // .json returns promise
        return response.json();
      })
      .then((product) => {
        setProduct(product);
      });
  }, [setProduct, pid]);

  return (
    <>
      <Head>
        <title>Product - Pixellab Ecom App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className="container px-4 mx-auto">
          <header className="flex justify-end">
            <CartControls></CartControls>
          </header>

          <section className="mt-16">
            Product Page for {pid}
            <div>{JSON.stringify(product)}</div>
          </section>
        </main>
      </Layout>

    </>
  )
};

export default ProductPage;

// import {css} from '@emotion/css';
// import { FaApple } from 'react-icons/fa';

import Head from 'next/head';
import {GridControls, ProductGrid} from '../components/catalog';
import {Layout} from '../layouts/Layout';
import {CartControls} from '../components/cart/CartControls';
import {Pagination} from '../components/catalog/Pagination';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Pixellab Ecom App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className="container px-4 mx-auto">
          <header className="flex justify-end">
            <GridControls></GridControls>
            <CartControls></CartControls>
          </header>

          <section className="mt-16">
            <ProductGrid></ProductGrid>
          </section>
          <section>
            <Pagination></Pagination>
          </section>
        </main>
      </Layout>
    </>
  );
}

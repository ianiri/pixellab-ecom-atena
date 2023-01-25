import Head from 'next/head';
import {Layout} from '../layouts/Layout';

const CartPage = () => {
  return (
    <>
      <Head>
        <title>Cart - Pixellab Ecom App</title>
      </Head>

      <Layout>
        <main className="container px-4 mx-auto">
          <h1>Welcome to the cart page</h1>
        </main>
      </Layout>
    </>
  );
};

export default CartPage;

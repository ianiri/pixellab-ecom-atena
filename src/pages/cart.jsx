import Head from 'next/head';
import {CartControls} from '../components/cart/CartControls';
import {Layout} from '../layouts/Layout';

const CartPage = () => {
  return (
    <>
      <Head>
        <title>Cart - Pixellab Ecom App</title>
      </Head>

      <Layout>
        <main className="container px-4 mx-auto">
        <header className="flex justify-between">
            <div>{/* de adaugat Continue shopping styled + func*/}</div>
            <CartControls></CartControls>
          </header>
        </main>
      </Layout>
    </>
  );
};

export default CartPage;

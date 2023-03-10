import Head from 'next/head';
import {useContext} from 'react';
import {CartControls} from '../components/cart/CartControls';
import {CartDisplay} from '../components/cart/CartDisplay';
import {CartTotals} from '../components/cart/CartTotals';
import {ContinueShopping} from '../components/ui/ContinueShopping';
import {cartContext} from '../contexts/CartContex';
import {Layout} from '../layouts/Layout';

const CartPage = () => {
  const { cartProducts, loading } = useContext(cartContext);

  return (
    <>
      <Head>
        <title>Cart - Pixellab Ecom App</title>
      </Head>

      <Layout>
        <main className="container px-4 mx-auto">
          <header className="flex justify-between">
            <ContinueShopping></ContinueShopping>
            <CartControls></CartControls>
          </header>

          <section className="mt-16 grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <CartDisplay></CartDisplay>

              {/* coupon form */}
              {/* ignore Update Cart button */}
            </div>

            <aside className="col-span-4">
              <CartTotals></CartTotals>

              <div>
                {!loading ? (
                  <button
                    type="button"
                    className="w-full bg-black py-5 uppercase hover:text-white hover:font-bold transition-colors"
                    title="Proceed to checkout"
                    onClick={() => {
                      console.log(cartProducts);
                    }}
                  >
                    Proceed to checkout
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </aside>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default CartPage;

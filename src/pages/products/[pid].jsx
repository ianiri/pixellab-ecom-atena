// raspunde la URL-uri de tipul /products/1  /products/2
import {CartControls} from "@/src/components/cart/CartControls";
import {ProductDisplay} from "@/src/components/catalog/ProductDisplay";
import {ContinueShopping} from "@/src/components/ui/ContinueShopping";
import {Layout} from "@/src/layouts/Layout";
import Head from "next/head";
import {useRouter} from "next/router";

const ProductPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <>
      <Head>
        <title>Product - Pixellab Ecom App</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <Layout>
        <main>
          <header className="flex justify-between container mx-auto px-4">
            <ContinueShopping></ContinueShopping>
            <CartControls></CartControls>
          </header>

          <section className="mt-16">
            <ProductDisplay productId={pid}></ProductDisplay>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default ProductPage;

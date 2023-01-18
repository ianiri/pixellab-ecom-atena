// import {css} from '@emotion/css';
// import { FaApple } from 'react-icons/fa';

import Head from 'next/head';
import {Layout} from '../layouts/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pixellab Ecom App - Homepage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main>
          <h1>Heading</h1>
          <p>project content paraghraph</p>
        </main>
      </Layout>
    </>
  );
}

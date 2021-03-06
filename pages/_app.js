import Head from 'next/head';
import 'antd/dist/antd.css';
// overriding common Ant styles with the Bootstrap ones
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function App({ Component, pageProps }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Head>
        <title>Next.js SSG vs SSR Demo</title>
      </Head>

      <Navbar />

      <main className="container flex-grow-1 my-5">
        <Component {...pageProps} />
      </main>

      <Footer />
    </div>
  );
}

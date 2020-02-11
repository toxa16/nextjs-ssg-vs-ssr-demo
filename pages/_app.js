import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function App({ Component, pageProps }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <main className="container flex-grow-1 my-5">
        <Component {...pageProps} />
      </main>

      <Footer />
    </div>
  );
}

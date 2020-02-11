import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../components/navbar';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <main className="container my-5">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

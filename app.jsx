import '../styles/globals.css';
import Navbar from '@/components/Navbar';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

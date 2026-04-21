import Header from '@/components/Header';
import Preamble from '@/components/Preamble';
import Collection from '@/components/Collection';
import Impressions from '@/components/Impressions';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Preamble />
      <Collection />
      <Impressions />
      <Footer />
    </>
  );
}

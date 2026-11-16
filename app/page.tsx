import Header from '@/components/Header';
import Preamble from '@/components/Preamble';
import Collection from '@/components/Collection';
import Process from '@/components/Process';
import Further from '@/components/Further';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header hero />
      <Preamble />
      <Collection />
      <Process />
      <Further />
      <Footer />
    </>
  );
}

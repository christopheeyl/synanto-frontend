import Head from 'next/head';
import type { NextPage } from 'next';
import Blog from '../components/home/Blog';
import Cost from '../components/home/Cost';
import Hero from '../components/home/Hero';
import Motivation from '../components/home/Motivation';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Synanto</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Navbar isLoggedin={false} />
      <div className="relative overflow-hidden">
        <div className="hidden lg:block w-full h-full absolute">
          <div className="bg-image-mockups absolute z-20 w-full h-full bg-no-repeat bg-auto bg-right-top -right-72 xl:-right-28"></div>
        </div>
        <Hero />
        <Motivation />
        <Cost />
        <Blog />
      </div>
      <Footer />
    </>
  );
};

export default Home;

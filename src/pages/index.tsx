import type { NextPage } from 'next';
import Blog from '../common/components/containers/Blog';
import Cost from '../common/components/containers/Cost';
import Hero from '../common/components/containers/Hero';
import Motivation from '../common/components/containers/Motivation';
import Navbar from '../common/components/layouts/Navbar';
import Footer from '../common/components/layouts/Footer';
import { useUser } from '@auth0/nextjs-auth0';
import Router from 'next/router';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const { user } = useUser();

  useEffect(() => {
    redirect();
    console.log('first')
  }, [user]);

  function redirect() {
    if (user) {
      Router.replace('/dashboard')
    }
  };

  function logIn(): void {
    Router.replace('/api/auth/login')
  };

  return (
    <>
      <Navbar isLoggedin={false} logIn={logIn} />
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

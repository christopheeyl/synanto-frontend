import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

interface Props {
  children: JSX.Element;
  isLoggedin: boolean;
}

export default function MainLayout({ children, isLoggedin }: Props) {
  return (
    <>
      <Head>
        <title>Synanto</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Navbar isLoggedin={isLoggedin} />
      <div>
        <div>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}

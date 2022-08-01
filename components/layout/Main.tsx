import Footer from './Footer';
import Navbar from './Navbar';

interface Props {
  children: JSX.Element;
  isLoggedin: boolean;
}

export default function Main({ children, isLoggedin }: Props) {
  return (
    <>
      <Navbar isLoggedin={isLoggedin} />
      <div className="relative overflow-hidden">
        <div className="container h-screen relative z-20">{children}</div>
      </div>
      <Footer />
    </>
  );
}

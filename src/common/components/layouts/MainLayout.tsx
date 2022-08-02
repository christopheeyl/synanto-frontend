import Router from 'next/router';
import { FunctionComponent, ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

interface IProps {
  children: ReactNode;
  isLoggedin: boolean;
  logOut?: () => void;
}

const MainLayout: FunctionComponent<IProps> = ({ children, isLoggedin, logOut }) => {

  function logIn(): void {
    Router.replace('/api/auth/login')
  };

  return (
    <>
      <Navbar isLoggedin={isLoggedin} logOut={logOut} />
      <div>
        <div>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
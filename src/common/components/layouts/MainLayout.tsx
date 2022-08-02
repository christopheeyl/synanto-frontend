import { FunctionComponent, ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

interface IProps {
  children: ReactNode;
  isLoggedin: boolean;
}

const MainLayout: FunctionComponent<IProps> = ({ children, isLoggedin }) => {
  return (
    <>
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

export default MainLayout;
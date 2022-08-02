import { useUser } from "@auth0/nextjs-auth0";
import Router from "next/router";
import { FunctionComponent, ReactNode, useEffect } from "react";
import log from "../../../utils/log";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface IProps {
  children: ReactNode;
}

const MainLayout: FunctionComponent<IProps> = ({ children }) => {
  const { user } = useUser();
  const { isUserLogedIn, route } = log(true);

  useEffect(() => {
    redirect();
    console.log("first");
  }, [user]);

  function redirect() {
    Router.replace(route);
  }

  return (
    <>
      <Navbar isLoggedin={isUserLogedIn} logUser={() => redirect} />
      <div>
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;

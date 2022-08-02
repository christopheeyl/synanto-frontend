import type { NextPage } from "next";
import Blog from "../src/components/containers/Blog";
import Cost from "../src/components/containers/Cost";
import Hero from "../src/components/containers/Hero";
import Motivation from "../src/components/containers/Motivation";
import Navbar from "../src/components/layouts/Navbar";
import Footer from "../src/components/layouts/Footer";
import { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import log from "../utils/log";
import Router from "next/router";

const Home: NextPage = () => {
  const { isUserLogedIn, route } = log(false);
  const { user } = useUser();

  useEffect(() => {
    Router.replace("/dashboard");
  },[user])

  function redirect() {
    Router.replace(route);
  }

  return (
    <>
      <Navbar isLoggedin={isUserLogedIn} logUser={redirect} />
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

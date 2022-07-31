import { useSession } from "next-auth/react";
import Router from "next/router";
import { Fragment } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
    children: JSX.Element;
}

function Layout({ children }: LayoutProps) {
    const { status } = useSession();

    if (status === 'authenticated') {
        Router.replace("/");
    }

    if (status === 'unauthenticated') {
        Router.replace("/auth/signin");
    }

    return (
        <Fragment>
            <Navbar />
            <main>{children}</main>
        </Fragment>
    )
};

export default Layout;
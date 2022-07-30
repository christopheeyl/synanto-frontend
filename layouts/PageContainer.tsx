import { Fragment } from "react";
import Navbar from "./Navbar";

interface PageContainerProps {
    children: JSX.Element;
}

function PageContainer({ children }: PageContainerProps) {
    return (
        <Fragment>
            <Navbar />
            <main>{children}</main>
        </Fragment>
    )
}

export default PageContainer;
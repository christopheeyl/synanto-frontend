import { Fragment } from "react"
import Navbar from "./Navbar"

interface LayoutProps {
    children: JSX.Element
}

function Layout({ children }: LayoutProps) {
    return (
        <Fragment>
            <Navbar />
            <main>{children}</main>
        </Fragment>
    )
}

export default Layout
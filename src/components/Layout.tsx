import { ReactNode } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>{children}</main>
            <footer>
                <p>&copy; {new Date().getFullYear()} My Website</p>
            </footer>
        </>
    );
};

export default Layout;

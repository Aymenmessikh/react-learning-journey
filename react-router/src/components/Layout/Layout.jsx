import Header from "./Header/Header.jsx";
import {Outlet} from "react-router";
import Footer from "./Footer/Footer.jsx";

function Layout() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="flex-grow-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
export default Layout;
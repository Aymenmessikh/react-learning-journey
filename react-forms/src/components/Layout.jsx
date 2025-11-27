import { Outlet, NavLink } from "react-router";
export default function Layout() {
    return (
        <div>
            <header>
                <nav>
                    <NavLink to="/formhtml">Form HTML</NavLink> |{" "}
                    <NavLink to="/FormReactState">Form React State</NavLink> |{" "}
                    <NavLink to="/FormWithFormik">Form With Formik</NavLink> |{" "}
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>© 2025 - Cours React</p>
            </footer>
        </div>
    );
}
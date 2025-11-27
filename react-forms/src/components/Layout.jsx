import { Outlet, NavLink } from "react-router";
export default function Layout() {
    return (
        <div>
            <header>
                <nav>
                    <NavLink to="/formhtml">Form HTML</NavLink> |{" "}
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
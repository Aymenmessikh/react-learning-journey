import {NavLink, Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <header>
                <nav>

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
import {NavLink, Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <header>
                <nav>
                    <NavLink to="/users/showusersexample">Show Users Example</NavLink> |
                    <NavLink to="/users/showusers">Show Users</NavLink> |
                    <NavLink to="/users/showuserbyidtest">Show User Id = 2</NavLink> |
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
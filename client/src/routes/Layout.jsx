import { Outlet, Link, useLocation } from "react-router-dom";
import Sidebar from "../components/sidebar";
import NavBar from "../components/NavBar";

export default function Layout() {
    const location = useLocation()
    // chexk location url is 'auth' and return react component
    if (location.pathname === '/auth/login') {
        return (
            <div className='' >
                <Outlet />
            </div>
        )
    }
    return (
        <>
            <div className="flex w-full bg-blue-50 min-h-screen h-full">
                <Sidebar>
                    <Outlet />
                </Sidebar>
            </div>
        </>
    );
}
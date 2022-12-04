import { Outlet, Link, useLocation } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Header from "../components/header";

export default function Layout() {
    const location = useLocation()
    // chexk location url is 'auth' and return react component
    if (location.pathname === '/auth/login') {
      return (
        <div className ='' >
          <Outlet />
        </div>
      )
    }    
    return (
      <>
       <div className="flex w-full overflow-x-hidden bg-gray-100 overflow-y-hidden min-h-screen h-full">
          <Sidebar />
        <div id="detail" className="w-full md:ml-64 h-full">
            <Outlet />
        </div>
       </div>
      </>
    );
  }
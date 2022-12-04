import { NavLink } from "react-router-dom";

const MenuItem = ({ to, children }) => {
    return (
        <NavLink to={to} className={({ isActive }) => `flex items-center px-3 py-2 text-gray-500 transition-colors duration-200 transform rounded-md hover:bg-gray-700 ${isActive ? 'bg-gray-800 text-white' : ''}`}>
            {children}
        </NavLink>
    );
}
export default MenuItem;